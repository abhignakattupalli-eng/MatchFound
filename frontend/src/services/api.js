import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for consistent error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If unauthorized or token expired, remove token
    if (error.response && error.response.status === 401) {
      // Don't clear on login attempt failures
      if (!error.config.url.includes('/auth/login')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    return Promise.reject(error);
  }
);

// Auth Services
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  changePassword: (data) => api.put('/auth/change-password', data),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
};

// Item Services
export const itemService = {
  getItems: (params) => api.get('/items', { params }),
  getItemById: (id) => api.get(`/items/${id}`),
  reportLost: (data) => api.post('/items/lost', data),
  reportFound: (data) => api.post('/items/found', data),
  updateItem: (id, data) => api.put(`/items/${id}`, data),
  deleteItem: (id) => api.delete(`/items/${id}`),
  markAsReturned: (id) => api.put(`/items/${id}/return`),
  contactReporter: (id, data) => api.post(`/items/${id}/contact`, data),
  reportIssue: (id, data) => api.post(`/items/${id}/report-issue`, data),
};

// Claim Services
export const claimService = {
  submitClaim: (itemId, data) => api.post(`/items/${itemId}/claim`, data),
  getMyClaims: () => api.get('/claims/my'),
  getAllClaims: () => api.get('/claims'),
  updateClaimStatus: (id, data) => api.put(`/claims/${id}`, data),
};

// Notification Services
export const notificationService = {
  getNotifications: () => api.get('/notifications'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
  deleteNotification: (id) => api.delete(`/notifications/${id}`),
};

// Admin Services
export const adminService = {
  getDashboardStats: () => api.get('/admin/dashboard'),
  getUsers: (params) => api.get('/admin/users', { params }),
  toggleUserStatus: (id, isActive) => api.put(`/admin/users/${id}/status`, { isActive }),
  getAllReports: (params) => api.get('/admin/reports', { params }),
  verifyReport: (id, notes) => api.put(`/admin/reports/${id}/verify`, { notes }),
  updateReportStatus: (id, status, notes) => api.put(`/admin/reports/${id}/status`, { status, notes }),
  deleteReport: (id) => api.delete(`/admin/reports/${id}`),
};

export default api;
