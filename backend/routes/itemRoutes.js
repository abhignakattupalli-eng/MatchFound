const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  reportLostItem,
  reportFoundItem,
  updateItem,
  deleteItem,
  markAsReturned,
  contactReporter,
  reportIncorrectInfo,
} = require('../controllers/itemController');
const { submitClaim } = require('../controllers/claimController');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

router.get('/', optionalAuth, getItems);
router.get('/:id', optionalAuth, getItemById);

router.post('/lost', authenticateToken, reportLostItem);
router.post('/found', authenticateToken, reportFoundItem);
router.put('/:id', authenticateToken, updateItem);
router.delete('/:id', authenticateToken, deleteItem);
router.put('/:id/return', authenticateToken, markAsReturned);

// Claim an item
router.post('/:id/claim', authenticateToken, submitClaim);

// Safe contact reporter
router.post('/:id/contact', authenticateToken, contactReporter);

// Report incorrect information
router.post('/:id/report-issue', authenticateToken, reportIncorrectInfo);

module.exports = router;
