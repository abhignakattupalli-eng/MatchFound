const express = require('express');
const router = express.Router();
const {
  getDashboardStats,
  getUsers,
  toggleUserStatus,
  getAllAdminReports,
  verifyReport,
  updateReportStatus,
  deleteAdminReport,
} = require('../controllers/adminController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// All admin routes require valid JWT and admin role
router.use(authenticateToken, requireAdmin);

router.get('/dashboard', getDashboardStats);
router.get('/users', getUsers);
router.put('/users/:id/status', toggleUserStatus);
router.get('/reports', getAllAdminReports);
router.put('/reports/:id/verify', verifyReport);
router.put('/reports/:id/status', updateReportStatus);
router.delete('/reports/:id', deleteAdminReport);

module.exports = router;
