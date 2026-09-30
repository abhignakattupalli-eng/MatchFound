const User = require('../models/User');
const Item = require('../models/Item');
const Claim = require('../models/Claim');
const Notification = require('../models/Notification');

// @desc    Get Admin Dashboard statistics and analytics
// @route   GET /api/admin/dashboard
// @access  Private (Admin)
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'student' });
    const totalLostReports = await Item.countDocuments({ type: 'lost' });
    const totalFoundReports = await Item.countDocuments({ type: 'found' });
    const pendingVerification = await Item.countDocuments({ status: 'Pending Verification' });
    const pendingClaims = await Claim.countDocuments({ status: 'Pending' });
    const resolvedCases = await Item.countDocuments({ status: { $in: ['Returned', 'Claimed'] } });

    // Category breakdown
    const categoryStats = await Item.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    // Status breakdown
    const statusStats = await Item.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    // Recent activities (recent reports and recent claims)
    const recentReports = await Item.find()
      .populate('reportedBy', 'name studentId department')
      .sort({ createdAt: -1 })
      .limit(5);

    const recentClaims = await Claim.find()
      .populate('itemId', 'itemName reportId')
      .populate('claimant', 'name studentId')
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalLostReports,
        totalFoundReports,
        pendingVerification,
        pendingClaims,
        resolvedCases,
      },
      categoryStats,
      statusStats,
      recentReports,
      recentClaims,
    });
  } catch (error) {
    console.error('Error fetching admin dashboard stats:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all registered users / students
// @route   GET /api/admin/users
// @access  Private (Admin)
const getUsers = async (req, res) => {
  try {
    const { search, role, status } = req.query;
    const query = {};

    if (role && role !== 'All') {
      query.role = role;
    } else {
      // By default show students or all users
      query.role = { $in: ['student', 'admin'] };
    }

    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'deactivated') {
      query.isActive = false;
    }

    if (search && search.trim() !== '') {
      const regex = { $regex: search.trim(), $options: 'i' };
      query.$or = [
        { name: regex },
        { email: regex },
        { studentId: regex },
        { department: regex },
      ];
    }

    const users = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Activate or deactivate student account
// @route   PUT /api/admin/users/:id/status
// @access  Private (Admin)
const toggleUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    // Protect against self-deactivation by admin
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'Admin cannot deactivate their own active account.',
      });
    }

    user.isActive = isActive !== undefined ? isActive : !user.isActive;
    await user.save();

    await Notification.create({
      userId: user._id,
      message: `Your campus account status has been updated to: ${user.isActive ? 'Active' : 'Deactivated'}.`,
      type: 'GENERAL',
    });

    return res.status(200).json({
      success: true,
      message: `User account successfully ${user.isActive ? 'activated' : 'deactivated'}.`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all reports with admin filters
// @route   GET /api/admin/reports
// @access  Private (Admin)
const getAllAdminReports = async (req, res) => {
  try {
    const { type, status, category, search } = req.query;
    const query = {};

    if (type && type !== 'All') {
      query.type = type;
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search && search.trim() !== '') {
      const regex = { $regex: search.trim(), $options: 'i' };
      query.$or = [{ itemName: regex }, { reportId: regex }, { location: regex }, { description: regex }];
    }

    const reports = await Item.find(query)
      .populate('reportedBy', 'name studentId email phone department year')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    console.error('Error fetching admin reports:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Verify a found item report
// @route   PUT /api/admin/reports/:id/verify
// @access  Private (Admin)
const verifyReport = async (req, res) => {
  try {
    const { notes } = req.body;
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Report not found.' });
    }

    item.status = 'Found';
    item.verifiedBy = req.user._id;
    if (notes) item.verificationNotes = notes;
    await item.save();

    // Create notification for reporter
    await Notification.create({
      userId: item.reportedBy,
      message: `Your found item report for "${item.itemName}" (${item.reportId}) has been verified by campus administration and is now visible to students!`,
      type: 'REPORT_VERIFIED',
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Report verified successfully and published to campus listings.',
      item,
    });
  } catch (error) {
    console.error('Error verifying report:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update report status or reject
// @route   PUT /api/admin/reports/:id/status
// @access  Private (Admin)
const updateReportStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Report not found.' });
    }

    const validStatuses = [
      'Pending Verification',
      'Searching',
      'Found',
      'Claimed',
      'Returned',
      'Rejected',
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Valid options are: ${validStatuses.join(', ')}`,
      });
    }

    item.status = status;
    if (notes) item.verificationNotes = notes;
    await item.save();

    // Notify student of status update
    let notifType = 'STATUS_CHANGE';
    let notifMsg = `The status of your report for "${item.itemName}" (${item.reportId}) has been changed to "${status}".`;

    if (status === 'Rejected') {
      notifType = 'REPORT_REJECTED';
      notifMsg = `Your report for "${item.itemName}" (${item.reportId}) was rejected by administration. ${notes ? 'Note: ' + notes : ''}`;
    } else if (status === 'Returned') {
      notifType = 'ITEM_RETURNED';
      notifMsg = `Your item "${item.itemName}" (${item.reportId}) has been marked as returned.`;
    }

    await Notification.create({
      userId: item.reportedBy,
      message: notifMsg,
      type: notifType,
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: `Report status updated to ${status}.`,
      item,
    });
  } catch (error) {
    console.error('Error updating report status:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete fake or inappropriate report
// @route   DELETE /api/admin/reports/:id
// @access  Private (Admin)
const deleteAdminReport = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Report not found.' });
    }

    // Notify user that report was removed by admin
    await Notification.create({
      userId: item.reportedBy,
      message: `Your report for "${item.itemName}" (${item.reportId}) was removed by campus administration as it violates policy or contains inappropriate content.`,
      type: 'REPORT_REJECTED',
    });

    await Item.findByIdAndDelete(req.params.id);
    await Claim.deleteMany({ itemId: item._id });

    return res.status(200).json({
      success: true,
      message: 'Report and associated claims have been permanently removed.',
    });
  } catch (error) {
    console.error('Error deleting report:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getDashboardStats,
  getUsers,
  toggleUserStatus,
  getAllAdminReports,
  verifyReport,
  updateReportStatus,
  deleteAdminReport,
};
