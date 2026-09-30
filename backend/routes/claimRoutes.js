const express = require('express');
const router = express.Router();
const {
  getMyClaims,
  getAllClaims,
  updateClaimStatus,
} = require('../controllers/claimController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

router.get('/my', authenticateToken, getMyClaims);
router.get('/', authenticateToken, getAllClaims);
router.put('/:id', authenticateToken, requireAdmin, updateClaimStatus);

module.exports = router;
