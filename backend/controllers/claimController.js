const Claim = require('../models/Claim');
const Item = require('../models/Item');
const Notification = require('../models/Notification');
const User = require('../models/User');

// @desc    Submit a claim for an item
// @route   POST /api/items/:id/claim
// @access  Private
const submitClaim = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason, identifyingDetails, proof } = req.body;

    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    // Do not allow reporting user to claim their own item
    if (item.reportedBy.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot claim an item that you reported yourself.',
      });
    }

    if (!reason || !identifyingDetails) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both the reason you believe this item is yours and identifying details.',
      });
    }

    // Check if user already submitted a pending claim for this item
    const existingClaim = await Claim.findOne({
      itemId: item._id,
      claimant: req.user._id,
      status: 'Pending',
    });
    if (existingClaim) {
      return res.status(400).json({
        success: false,
        message: 'You already have a pending claim submitted for this item.',
      });
    }

    const claim = await Claim.create({
      itemId: item._id,
      claimant: req.user._id,
      reason: reason.trim(),
      identifyingDetails: identifyingDetails.trim(),
      proof: proof || '',
      status: 'Pending',
    });

    // Notify the item reporter
    await Notification.create({
      userId: item.reportedBy,
      message: `Someone submitted a claim for your item "${item.itemName}" (${item.reportId}). Reviewing by campus admin is underway.`,
      type: 'CLAIM_SUBMITTED',
      relatedItemId: item._id,
    });

    // Notify the claimant
    await Notification.create({
      userId: req.user._id,
      message: `Your claim for "${item.itemName}" (${item.reportId}) was submitted successfully and is currently under review.`,
      type: 'CLAIM_SUBMITTED',
      relatedItemId: item._id,
    });

    // Notify campus admins
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        message: `New claim submitted by ${req.user.name} for item "${item.itemName}" (${item.reportId}).`,
        type: 'CLAIM_SUBMITTED',
        relatedItemId: item._id,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Your claim has been submitted successfully for verification.',
      claim,
    });
  } catch (error) {
    console.error('Error submitting claim:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get claims submitted by logged in user
// @route   GET /api/claims/my
// @access  Private
const getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ claimant: req.user._id })
      .populate('itemId')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: claims.length,
      claims,
    });
  } catch (error) {
    console.error('Error fetching student claims:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all claims (Admin or Reporter)
// @route   GET /api/claims
// @access  Private (Admin or item owners)
const getAllClaims = async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== 'admin') {
      // If student, only get claims for items they reported
      const myItems = await Item.find({ reportedBy: req.user._id }).select('_id');
      const itemIds = myItems.map((it) => it._id);
      query.itemId = { $in: itemIds };
    }

    const claims = await Claim.find(query)
      .populate('itemId')
      .populate('claimant', 'name studentId email phone department year')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: claims.length,
      claims,
    });
  } catch (error) {
    console.error('Error fetching claims:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update claim status (Approve or Reject)
// @route   PUT /api/claims/:id
// @access  Private (Admin)
const updateClaimStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;

    if (!['Approved', 'Rejected', 'Pending'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be Pending, Approved, or Rejected.',
      });
    }

    const claim = await Claim.findById(req.params.id)
      .populate('itemId')
      .populate('claimant', 'name email');

    if (!claim) {
      return res.status(404).json({ success: false, message: 'Claim not found.' });
    }

    claim.status = status;
    if (adminNotes !== undefined) claim.adminNotes = adminNotes;
    claim.reviewedBy = req.user._id;
    await claim.save();

    const item = await Item.findById(claim.itemId._id || claim.itemId);

    if (status === 'Approved') {
      // Update item status to 'Claimed'
      if (item) {
        item.status = 'Claimed';
        await item.save();

        // Notify reporter
        await Notification.create({
          userId: item.reportedBy,
          message: `The claim on your item "${item.itemName}" (${item.reportId}) was verified and approved by administration. Status updated to Claimed.`,
          type: 'CLAIM_APPROVED',
          relatedItemId: item._id,
        });
      }

      // Notify claimant
      await Notification.create({
        userId: claim.claimant._id || claim.claimant,
        message: `Your claim for item "${item ? item.itemName : 'Campus Item'}" was approved! Please visit the campus Lost & Found desk to collect your item.`,
        type: 'CLAIM_APPROVED',
        relatedItemId: item ? item._id : null,
      });
    } else if (status === 'Rejected') {
      // Notify claimant
      await Notification.create({
        userId: claim.claimant._id || claim.claimant,
        message: `Your claim for item "${item ? item.itemName : 'Campus Item'}" was rejected. ${adminNotes ? 'Reason: ' + adminNotes : 'Identifying details did not match.'}`,
        type: 'CLAIM_REJECTED',
        relatedItemId: item ? item._id : null,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Claim status successfully updated to ${status}.`,
      claim,
    });
  } catch (error) {
    console.error('Error updating claim status:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  submitClaim,
  getMyClaims,
  getAllClaims,
  updateClaimStatus,
};
