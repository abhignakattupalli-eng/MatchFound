const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    reportId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    itemName: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Electronics',
        'Bags',
        'Books',
        'ID Cards',
        'Keys',
        'Clothing',
        'Accessories',
        'Other',
      ],
      default: 'Other',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    image: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
      enum: ['lost', 'found'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: [
        'Pending Verification',
        'Searching',
        'Found',
        'Claimed',
        'Returned',
        'Rejected',
      ],
      default: function () {
        return this.type === 'lost' ? 'Searching' : 'Pending Verification';
      },
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    additionalInfo: {
      type: String,
      default: '',
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    verificationNotes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Virtual for item claims if needed
itemSchema.virtual('claims', {
  ref: 'Claim',
  localField: '_id',
  foreignField: 'itemId',
});

module.exports = mongoose.model('Item', itemSchema);
