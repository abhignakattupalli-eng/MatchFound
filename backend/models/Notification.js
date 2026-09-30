const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: [
        'REPORT_SUBMITTED',
        'REPORT_VERIFIED',
        'REPORT_REJECTED',
        'CLAIM_SUBMITTED',
        'CLAIM_APPROVED',
        'CLAIM_REJECTED',
        'ITEM_RETURNED',
        'MESSAGE',
        'STATUS_CHANGE',
        'GENERAL',
      ],
      default: 'GENERAL',
    },
    relatedItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      default: null,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Notification', notificationSchema);
