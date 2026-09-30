const Item = require('../models/Item');
const Notification = require('../models/Notification');
const User = require('../models/User');

// Helper to generate unique human-readable report ID
const generateReportId = (type) => {
  const prefix = type === 'lost' ? 'LOST' : 'FND';
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomSuffix}`;
};

// @desc    Get all items with search, filter, and sorting
// @route   GET /api/items
// @access  Public (with optionalAuth)
const getItems = async (req, res) => {
  try {
    const {
      type,
      category,
      location,
      date,
      search,
      status,
      sort = 'newest',
      limit,
      myReports,
    } = req.query;

    const query = {};

    // Filter by type (lost / found)
    if (type) {
      query.type = type.toLowerCase();
    }

    // Filter by category
    if (category && category !== 'All') {
      query.category = category;
    }

    // Filter by location (case-insensitive substring)
    if (location && location.trim() !== '') {
      query.location = { $regex: location.trim(), $options: 'i' };
    }

    // Filter by date
    if (date) {
      query.date = date;
    }

    // Search query across itemName and description
    if (search && search.trim() !== '') {
      const searchRegex = { $regex: search.trim(), $options: 'i' };
      query.$or = [{ itemName: searchRegex }, { description: searchRegex }, { location: searchRegex }];
    }

    // If fetching my reports (logged-in user only)
    if (myReports === 'true') {
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Authentication required for My Reports.' });
      }
      query.reportedBy = req.user._id;
    } else {
      // Public view restrictions:
      // "Only verified found reports should be publicly displayed"
      const isAdmin = req.user && req.user.role === 'admin';
      if (!isAdmin) {
        if (query.type === 'found') {
          // Exclude 'Pending Verification' and 'Rejected' for public found items
          query.status = { $in: ['Found', 'Claimed', 'Returned'] };
        } else if (!query.type) {
          // If viewing combined feed, found items must not be Pending Verification or Rejected
          query.$or = [
            { type: 'lost' },
            { type: 'found', status: { $in: ['Found', 'Claimed', 'Returned'] } },
          ];
        }
      }
    }

    // Explicit status filter if requested and permitted
    if (status && status !== 'All') {
      query.status = status;
    }

    // Sort order
    let sortOption = { createdAt: -1 };
    if (sort === 'oldest') {
      sortOption = { createdAt: 1 };
    } else if (sort === 'date_desc') {
      sortOption = { date: -1 };
    } else if (sort === 'date_asc') {
      sortOption = { date: 1 };
    }

    let itemsQuery = Item.find(query)
      .populate('reportedBy', 'name studentId department year')
      .sort(sortOption);

    if (limit) {
      itemsQuery = itemsQuery.limit(parseInt(limit, 10));
    }

    const items = await itemsQuery.exec();

    return res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single item details
// @route   GET /api/items/:id
// @access  Public (optionalAuth)
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    let item;

    // Check if ID is MongoDB ObjectId or custom reportId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      item = await Item.findById(id).populate('reportedBy', 'name studentId department year email phone');
    } else {
      item = await Item.findOne({ reportId: id.toUpperCase() }).populate('reportedBy', 'name studentId department year email phone');
    }

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    // Security requirement: Do not expose sensitive personal info publicly
    const isOwner = req.user && req.user._id.toString() === item.reportedBy._id.toString();
    const isAdmin = req.user && req.user.role === 'admin';

    const itemObj = item.toObject();
    if (!isOwner && !isAdmin) {
      // Hide reporter direct phone & email to protect student privacy
      if (itemObj.reportedBy) {
        delete itemObj.reportedBy.phone;
        delete itemObj.reportedBy.email;
      }
    }

    return res.status(200).json({
      success: true,
      item: itemObj,
      isOwner,
      isAdmin,
    });
  } catch (error) {
    console.error('Error fetching item details:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Report a lost item
// @route   POST /api/items/lost
// @access  Private
const reportLostItem = async (req, res) => {
  try {
    const {
      itemName,
      category,
      description,
      location,
      date,
      time,
      image,
      additionalInfo,
    } = req.body;

    if (!itemName || !category || !description || !location || !date) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Item Name, Category, Description, Location, and Date).',
      });
    }

    const reportId = generateReportId('lost');

    const newItem = await Item.create({
      reportId,
      itemName: itemName.trim(),
      category,
      description: description.trim(),
      image: image || '',
      type: 'lost',
      location: location.trim(),
      date,
      time: time || '',
      status: 'Searching',
      reportedBy: req.user._id,
      additionalInfo: additionalInfo ? additionalInfo.trim() : '',
    });

    // Create confirmation notification for the student
    await Notification.create({
      userId: req.user._id,
      message: `Your lost item report for "${newItem.itemName}" (Report ID: ${reportId}) has been successfully submitted. Campus status: Searching.`,
      type: 'REPORT_SUBMITTED',
      relatedItemId: newItem._id,
    });

    return res.status(201).json({
      success: true,
      message: 'Lost item report submitted successfully!',
      reportId,
      item: newItem,
    });
  } catch (error) {
    console.error('Error reporting lost item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Report a found item
// @route   POST /api/items/found
// @access  Private
const reportFoundItem = async (req, res) => {
  try {
    const {
      itemName,
      category,
      description,
      location,
      date,
      time,
      image,
      additionalInfo,
    } = req.body;

    if (!itemName || !category || !description || !location || !date) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Item Name, Category, Description, Found Location, and Date).',
      });
    }

    const reportId = generateReportId('found');

    const newItem = await Item.create({
      reportId,
      itemName: itemName.trim(),
      category,
      description: description.trim(),
      image: image || '',
      type: 'found',
      location: location.trim(),
      date,
      time: time || '',
      status: 'Pending Verification',
      reportedBy: req.user._id,
      additionalInfo: additionalInfo ? additionalInfo.trim() : '',
    });

    // Create notification for the student
    await Notification.create({
      userId: req.user._id,
      message: `Your found item report for "${newItem.itemName}" (Report ID: ${reportId}) has been received and sent to Campus Admin for verification.`,
      type: 'REPORT_SUBMITTED',
      relatedItemId: newItem._id,
    });

    // Notify administrators of new pending item
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        message: `New found item submitted: "${newItem.itemName}" (${reportId}) requires verification.`,
        type: 'STATUS_CHANGE',
        relatedItemId: newItem._id,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Found item report submitted successfully! It is pending admin verification.',
      reportId,
      item: newItem,
    });
  } catch (error) {
    console.error('Error reporting found item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update report (owner or admin)
// @route   PUT /api/items/:id
// @access  Private
const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    const isOwner = item.reportedBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Unauthorized: You can only edit your own reports.' });
    }

    const {
      itemName,
      category,
      description,
      location,
      date,
      time,
      image,
      additionalInfo,
      status,
    } = req.body;

    if (itemName) item.itemName = itemName.trim();
    if (category) item.category = category;
    if (description) item.description = description.trim();
    if (location) item.location = location.trim();
    if (date) item.date = date;
    if (time !== undefined) item.time = time;
    if (image !== undefined) item.image = image;
    if (additionalInfo !== undefined) item.additionalInfo = additionalInfo;

    // Only admin or owner can change status
    if (status && (isAdmin || isOwner)) {
      item.status = status;
    }

    await item.save();

    return res.status(200).json({
      success: true,
      message: 'Item updated successfully.',
      item,
    });
  } catch (error) {
    console.error('Error updating item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete report (owner or admin)
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    const isOwner = item.reportedBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Unauthorized: You can only delete your own reports.' });
    }

    await Item.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: 'Report deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Mark item as returned
// @route   PUT /api/items/:id/return
// @access  Private
const markAsReturned = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    const isOwner = item.reportedBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Unauthorized to change this report status.' });
    }

    item.status = 'Returned';
    await item.save();

    // Create notification for owner
    await Notification.create({
      userId: item.reportedBy,
      message: `Your item "${item.itemName}" (${item.reportId}) has been successfully marked as Returned!`,
      type: 'ITEM_RETURNED',
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Item has been marked as returned.',
      item,
    });
  } catch (error) {
    console.error('Error marking item as returned:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Safe contact reporter without exposing direct phone/email
// @route   POST /api/items/:id/contact
// @access  Private
const contactReporter = async (req, res) => {
  try {
    const { message, contactInfo } = req.body;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, message: 'Please provide a message for the reporter.' });
    }

    // Send notification to the reporter
    await Notification.create({
      userId: item.reportedBy,
      message: `Campus member ${req.user.name} (${req.user.department}, ${req.user.year}) sent a message regarding "${item.itemName}" (${item.reportId}): "${message.trim()}". Preferred contact: ${contactInfo || req.user.email}`,
      type: 'MESSAGE',
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been securely sent to the reporter via campus notifications.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Report incorrect information on an item
// @route   POST /api/items/:id/report-issue
// @access  Private
const reportIncorrectInfo = async (req, res) => {
  try {
    const { reason, notes } = req.body;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    // Notify admins
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        message: `Issue reported on item "${item.itemName}" (${item.reportId}) by ${req.user.name}: [${reason}] ${notes || ''}`,
        type: 'GENERAL',
        relatedItemId: item._id,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you. Campus administration has been notified to review this listing.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getItems,
  getItemById,
  reportLostItem,
  reportFoundItem,
  updateItem,
  deleteItem,
  markAsReturned,
  contactReporter,
  reportIncorrectInfo,
};
