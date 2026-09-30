import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Search,
  CheckCircle2,
  Clock,
  Award,
  RotateCcw,
  XCircle,
  AlertTriangle,
  Trash2,
  Check,
  Eye,
  BarChart3,
  Bell,
  RefreshCw,
  UserCheck,
  UserX,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { adminService, claimService } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

const AdminDashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Navigation tab state: 'dashboard' | 'users' | 'lost' | 'found' | 'claims' | 'notifications' | 'analytics'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Stats
  const [stats, setStats] = useState(null);
  const [categoryStats, setCategoryStats] = useState([]);
  const [statusStats, setStatusStats] = useState([]);
  const [recentReports, setRecentReports] = useState([]);
  const [recentClaims, setRecentClaims] = useState([]);

  // Data collections for other tabs
  const [usersList, setUsersList] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [reportsList, setReportsList] = useState([]);
  const [reportFilter, setReportFilter] = useState({ search: '', status: 'All', category: 'All' });
  const [claimsList, setClaimsList] = useState([]);

  // Modals & inspect states
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [adminNoteInput, setAdminNoteInput] = useState('');
  const [selectedReportDetails, setSelectedReportDetails] = useState(null);

  const [loading, setLoading] = useState(true);
  const [actionSuccess, setActionSuccess] = useState('');
  const [actionError, setActionError] = useState('');

  // Fetch dashboard summary stats
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await adminService.getDashboardStats();
      if (res.data.success) {
        setStats(res.data.stats);
        setCategoryStats(res.data.categoryStats || []);
        setStatusStats(res.data.statusStats || []);
        setRecentReports(res.data.recentReports || []);
        setRecentClaims(res.data.recentClaims || []);
      }
    } catch (err) {
      setActionError('Failed to load admin statistics.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await adminService.getUsers({ search: userSearch });
      if (res.data.success) {
        setUsersList(res.data.users || []);
      }
    } catch (err) {
      setActionError('Failed to fetch user list.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch reports (for lost / found management tabs)
  const fetchReports = async (type) => {
    try {
      setLoading(true);
      const params = {
        type: type || 'All',
        status: reportFilter.status,
        category: reportFilter.category,
        search: reportFilter.search,
      };
      const res = await adminService.getAllReports(params);
      if (res.data.success) {
        setReportsList(res.data.reports || []);
      }
    } catch (err) {
      setActionError('Failed to fetch reports.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch claims
  const fetchClaims = async () => {
    try {
      setLoading(true);
      const res = await claimService.getAllClaims();
      if (res.data.success) {
        setClaimsList(res.data.claims || []);
      }
    } catch (err) {
      setActionError('Failed to load claims.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'dashboard' || activeTab === 'analytics') {
      fetchDashboardData();
    } else if (activeTab === 'users') {
      fetchUsers();
    } else if (activeTab === 'lost') {
      fetchReports('lost');
    } else if (activeTab === 'found') {
      fetchReports('found');
    } else if (activeTab === 'claims') {
      fetchClaims();
    }
  }, [activeTab]);

  const handleVerifyReport = async (reportId) => {
    try {
      const res = await adminService.verifyReport(reportId, 'Verified by campus admin');
      if (res.data.success) {
        setActionSuccess('Report verified successfully and made public to students.');
        fetchReports('found');
        fetchDashboardData();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Verification failed.');
    }
  };

  const handleUpdateStatus = async (reportId, newStatus) => {
    try {
      const res = await adminService.updateReportStatus(reportId, newStatus);
      if (res.data.success) {
        setActionSuccess(`Status updated to ${newStatus}.`);
        fetchReports(activeTab === 'lost' ? 'lost' : 'found');
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Status update failed.');
    }
  };

  const handleDeleteReport = async (reportId) => {
    if (!window.confirm('Are you sure you want to permanently delete this report? This will also remove any claims on it.')) return;
    try {
      const res = await adminService.deleteReport(reportId);
      if (res.data.success) {
        setActionSuccess('Report removed by administrator.');
        fetchReports(activeTab === 'lost' ? 'lost' : 'found');
        fetchDashboardData();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to delete report.');
    }
  };

  const handleToggleUser = async (userId, currentStatus) => {
    try {
      const res = await adminService.toggleUserStatus(userId, !currentStatus);
      if (res.data.success) {
        setActionSuccess(`User account ${!currentStatus ? 'activated' : 'deactivated'}.`);
        fetchUsers();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to update user status.');
    }
  };

  const handleClaimDecision = async (claimId, status) => {
    try {
      const res = await claimService.updateClaimStatus(claimId, {
        status,
        adminNotes: adminNoteInput.trim(),
      });
      if (res.data.success) {
        setActionSuccess(`Claim marked as ${status}. Notifications dispatched.`);
        setSelectedClaim(null);
        setAdminNoteInput('');
        fetchClaims();
        fetchDashboardData();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Decision processing failed.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Admin Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#dcfce7', color: '#15803d', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Shield size={13} /> Campus Security Administration
            </div>
            <h1 className="section-title" style={{ marginTop: '0.25rem' }}>
              Admin Control Center
            </h1>
            <p className="section-subtitle">
              Verify submitted items, review student claims, manage user accounts, and inspect campus recovery analytics
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => {
                if (activeTab === 'dashboard' || activeTab === 'analytics') fetchDashboardData();
                else if (activeTab === 'users') fetchUsers();
                else if (activeTab === 'lost') fetchReports('lost');
                else if (activeTab === 'found') fetchReports('found');
                else if (activeTab === 'claims') fetchClaims();
              }}
              className="btn btn-secondary btn-sm"
              title="Refresh Current View"
            >
              <RefreshCw size={14} /> Refresh
            </button>
          </div>
        </div>

        {/* Global Notifications */}
        {actionSuccess && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{actionSuccess}</span>
            <button
              onClick={() => setActionSuccess('')}
              style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '0.9rem' }}
            >
              ✕
            </button>
          </div>
        )}

        {actionError && (
          <div className="auth-alert auth-alert-error" style={{ marginBottom: '1.5rem' }}>
            <AlertTriangle size={18} />
            <span>{actionError}</span>
            <button
              onClick={() => setActionError('')}
              style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '0.9rem' }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Dashboard Navigation Tabs (Section 13 requirement) */}
        <div className="admin-nav-tabs">
          <button
            className={`admin-nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart3 size={16} /> Dashboard
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={16} /> Users
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'lost' ? 'active' : ''}`}
            onClick={() => setActiveTab('lost')}
          >
            <Search size={16} /> Lost Reports
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'found' ? 'active' : ''}`}
            onClick={() => setActiveTab('found')}
          >
            <Sparkles size={16} /> Found Reports
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'claims' ? 'active' : ''}`}
            onClick={() => setActiveTab('claims')}
          >
            <Award size={16} /> Claims
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <FileText size={16} /> Reports/Analytics
          </button>
          <button
            className="admin-nav-tab"
            onClick={handleLogout}
            style={{ marginLeft: 'auto', color: 'var(--danger)' }}
          >
            <RotateCcw size={16} /> Logout
          </button>
        </div>

        {/* ================= TAB 1: OVERVIEW DASHBOARD ================= */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Statistics Cards (Section 13) */}
            <div className="admin-stats-grid">
              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#2563eb' }}>
                  <Users size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.totalUsers ?? '...'}</span>
                  <span className="stat-label">Total Users</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#ef4444' }}>
                  <Search size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.totalLostReports ?? '...'}</span>
                  <span className="stat-label">Total Lost Reports</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#10b981' }}>
                  <Sparkles size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.totalFoundReports ?? '...'}</span>
                  <span className="stat-label">Total Found Reports</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#f59e0b' }}>
                  <Clock size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.pendingVerification ?? '...'}</span>
                  <span className="stat-label">Pending Verification</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#8b5cf6' }}>
                  <Award size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.pendingClaims ?? '...'}</span>
                  <span className="stat-label">Pending Claims</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#059669' }}>
                  <RotateCcw size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.resolvedCases ?? '...'}</span>
                  <span className="stat-label">Resolved Cases</span>
                </div>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* Recent Reports Widget */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Recent Reports
                  </h3>
                  <button onClick={() => setActiveTab('found')} className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                    View All
                  </button>
                </div>

                {recentReports.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No recent reports filed.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {recentReports.map((item) => (
                      <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.itemName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            #{item.reportId} • By: {item.reportedBy?.name || 'Student'} ({item.location})
                          </div>
                        </div>
                        <StatusBadge status={item.status} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Claims Widget */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Recent Student Claims
                  </h3>
                  <button onClick={() => setActiveTab('claims')} className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                    Manage Claims
                  </button>
                </div>

                {recentClaims.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No pending claims.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {recentClaims.map((cl) => (
                      <div key={cl._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                            {cl.itemId?.itemName || 'Campus Item'}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            Claimant: {cl.claimant?.name || 'Student'}
                          </div>
                        </div>
                        <StatusBadge status={cl.status} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: USER MANAGEMENT ================= */}
        {activeTab === 'users' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Campus Registered Users</h2>
              <div style={{ display: 'flex', gap: '0.5rem', minWidth: '280px' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Search by name, student ID, department..."
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchUsers()}
                />
                <button onClick={fetchUsers} className="btn btn-primary btn-sm">
                  <Search size={15} />
                </button>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Loading user directory..." />
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Student / User</th>
                      <th>Student ID</th>
                      <th>College Email</th>
                      <th>Phone</th>
                      <th>Department & Year</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Account Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList.map((u) => (
                      <tr key={u._id}>
                        <td>
                          <div style={{ fontWeight: 700, color: 'var(--primary)' }}>{u.name}</div>
                        </td>
                        <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{u.studentId}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                        <td>
                          <div style={{ fontSize: '0.85rem' }}>{u.department}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{u.year}</div>
                        </td>
                        <td>
                          <span className={`user-role-tag ${u.role === 'admin' ? 'admin' : ''}`}>
                            {u.role}
                          </span>
                        </td>
                        <td>
                          {u.isActive ? (
                            <span style={{ color: 'var(--success)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <CheckCircle2 size={14} /> Active
                            </span>
                          ) : (
                            <span style={{ color: 'var(--danger)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <XCircle size={14} /> Deactivated
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          {u.role !== 'admin' && (
                            <button
                              onClick={() => handleToggleUser(u._id, u.isActive)}
                              className={`btn btn-sm ${u.isActive ? 'btn-secondary' : 'btn-success'}`}
                              style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                            >
                              {u.isActive ? (
                                <>
                                  <UserX size={13} /> Deactivate
                                </>
                              ) : (
                                <>
                                  <UserCheck size={13} /> Activate
                                </>
                              )}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: LOST REPORTS MANAGEMENT ================= */}
        {activeTab === 'lost' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Lost Reports Moderation</h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Filter by keyword or report ID..."
                  value={reportFilter.search}
                  onChange={(e) => setReportFilter({ ...reportFilter, search: e.target.value })}
                  style={{ width: '220px' }}
                />
                <select
                  className="form-select"
                  value={reportFilter.status}
                  onChange={(e) => {
                    setReportFilter({ ...reportFilter, status: e.target.value });
                    setTimeout(() => fetchReports('lost'), 50);
                  }}
                  style={{ width: '150px' }}
                >
                  <option value="All">All Statuses</option>
                  <option value="Searching">Searching</option>
                  <option value="Found">Found</option>
                  <option value="Claimed">Claimed</option>
                  <option value="Returned">Returned</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button onClick={() => fetchReports('lost')} className="btn btn-primary btn-sm">
                  <Search size={14} /> Filter
                </button>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Fetching lost reports..." />
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report ID</th>
                      <th>Item Name</th>
                      <th>Category</th>
                      <th>Reported By</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Moderation Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsList.map((item) => (
                      <tr key={item._id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                          #{item.reportId}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.itemName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.description?.slice(0, 45)}...
                          </div>
                        </td>
                        <td>{item.category}</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.reportedBy?.name || 'Student'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                            {item.reportedBy?.email}
                          </div>
                        </td>
                        <td>{item.location}</td>
                        <td>{item.date}</td>
                        <td>
                          <StatusBadge status={item.status} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                            <Link to={`/items/${item._id}`} className="btn btn-secondary btn-sm" title="View details" style={{ padding: '0.35rem 0.55rem' }}>
                              <Eye size={14} />
                            </Link>
                            <select
                              value={item.status}
                              onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                              className="form-select"
                              style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', width: '120px' }}
                            >
                              <option value="Searching">Searching</option>
                              <option value="Found">Found</option>
                              <option value="Claimed">Claimed</option>
                              <option value="Returned">Returned</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                            <button
                              onClick={() => handleDeleteReport(item._id)}
                              className="btn btn-danger btn-sm"
                              title="Delete inappropriate report"
                              style={{ padding: '0.35rem 0.55rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: FOUND REPORTS MANAGEMENT & VERIFICATION ================= */}
        {activeTab === 'found' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Found Reports Verification Queue</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Approve and publish items turned in by students to make them visible campus-wide
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select
                  className="form-select"
                  value={reportFilter.status}
                  onChange={(e) => {
                    setReportFilter({ ...reportFilter, status: e.target.value });
                    setTimeout(() => fetchReports('found'), 50);
                  }}
                  style={{ width: '180px' }}
                >
                  <option value="All">All Found Reports</option>
                  <option value="Pending Verification">Pending Verification Only</option>
                  <option value="Found">Verified Found</option>
                  <option value="Claimed">Claimed</option>
                  <option value="Returned">Returned</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Fetching found reports queue..." />
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report ID</th>
                      <th>Found Item</th>
                      <th>Category</th>
                      <th>Turned In By</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsList.map((item) => (
                      <tr key={item._id} style={{ backgroundColor: item.status === 'Pending Verification' ? '#fffbeb' : 'inherit' }}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                          #{item.reportId}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.itemName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.description?.slice(0, 45)}...
                          </div>
                        </td>
                        <td>{item.category}</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.reportedBy?.name || 'Student'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                            {item.reportedBy?.email}
                          </div>
                        </td>
                        <td>{item.location}</td>
                        <td>{item.date}</td>
                        <td>
                          <StatusBadge status={item.status} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                            {item.status === 'Pending Verification' && (
                              <button
                                onClick={() => handleVerifyReport(item._id)}
                                className="btn btn-success btn-sm"
                                title="Verify report and publish publicly"
                                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                              >
                                <Check size={14} /> Verify & Publish
                              </button>
                            )}

                            <Link to={`/items/${item._id}`} className="btn btn-secondary btn-sm" title="View details" style={{ padding: '0.35rem 0.55rem' }}>
                              <Eye size={14} />
                            </Link>

                            <select
                              value={item.status}
                              onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                              className="form-select"
                              style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', width: '135px' }}
                            >
                              <option value="Pending Verification">Pending Verification</option>
                              <option value="Found">Found (Verified)</option>
                              <option value="Claimed">Claimed</option>
                              <option value="Returned">Returned</option>
                              <option value="Rejected">Rejected</option>
                            </select>

                            <button
                              onClick={() => handleDeleteReport(item._id)}
                              className="btn btn-danger btn-sm"
                              title="Delete report"
                              style={{ padding: '0.35rem 0.55rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: ADMIN CLAIM MANAGEMENT ================= */}
        {activeTab === 'claims' && (
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Student Ownership Claims (Section 15)</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Inspect identifying details submitted by claimants. Approving a claim notifies the student and marks item as Claimed.
              </p>
            </div>

            {loading ? (
              <LoadingSpinner message="Loading claim requests..." />
            ) : claimsList.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <Award size={36} color="var(--text-light)" style={{ marginBottom: '0.75rem' }} />
                <h3>No Ownership Claims Submitted Yet</h3>
              </div>
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Claim ID</th>
                      <th>Item</th>
                      <th>Claimant</th>
                      <th>Reason / Ownership Proof</th>
                      <th>Date Submitted</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Review Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimsList.map((claim) => (
                      <tr key={claim._id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 700 }}>
                          #{claim._id.slice(-6).toUpperCase()}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>
                            {claim.itemId?.itemName || 'Campus Item'}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'monospace' }}>
                            Report: #{claim.itemId?.reportId}
                          </div>
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{claim.claimant?.name || 'Student'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {claim.claimant?.studentId} • {claim.claimant?.department}
                          </div>
                        </td>
                        <td style={{ maxWidth: '240px' }}>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {claim.reason}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '2px' }}>
                            {claim.identifyingDetails?.slice(0, 40)}...
                          </div>
                        </td>
                        <td>
                          {new Date(claim.createdAt).toLocaleDateString()}
                        </td>
                        <td>
                          <StatusBadge status={claim.status} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                            <button
                              onClick={() => {
                                setSelectedClaim(claim);
                                setAdminNoteInput(claim.adminNotes || '');
                              }}
                              className="btn btn-secondary btn-sm"
                              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                            >
                              <Eye size={13} /> View Details
                            </button>

                            {claim.status === 'Pending' && (
                              <>
                                <button
                                  onClick={() => handleClaimDecision(claim._id, 'Approved')}
                                  className="btn btn-success btn-sm"
                                  title="Approve Claim"
                                  style={{ padding: '0.35rem 0.6rem' }}
                                >
                                  <Check size={14} />
                                </button>
                                <button
                                  onClick={() => handleClaimDecision(claim._id, 'Rejected')}
                                  className="btn btn-danger btn-sm"
                                  title="Reject Claim"
                                  style={{ padding: '0.35rem 0.6rem' }}
                                >
                                  <XCircle size={14} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 6: ANALYTICS & BREAKDOWN ================= */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Campus Recovery Analytics</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                System overview across categories, resolution rates, and inventory status
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Category distribution */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary)' }}>
                  Breakdown by Category
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {categoryStats.map((cat) => (
                    <div key={cat._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{cat._id}</span>
                      <span style={{ fontWeight: 800, background: '#eff6ff', color: 'var(--primary)', padding: '2px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                        {cat.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status distribution */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary)' }}>
                  Breakdown by Status
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {statusStats.map((st) => (
                    <div key={st._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <StatusBadge status={st._id} />
                      <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{st.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Claim Full Detail & Decision Modal (Section 15) */}
        {selectedClaim && (
          <div className="modal-overlay" onClick={() => setSelectedClaim(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">Inspect Claim #{selectedClaim._id.slice(-6).toUpperCase()}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Item: {selectedClaim.itemId?.itemName} (#{selectedClaim.itemId?.reportId})
                  </div>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedClaim(null)}>✕</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Claimant Profile
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{selectedClaim.claimant?.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Student ID: {selectedClaim.claimant?.studentId} • {selectedClaim.claimant?.department} ({selectedClaim.claimant?.year})
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Email: {selectedClaim.claimant?.email} • Phone: {selectedClaim.claimant?.phone}
                  </div>
                </div>

                <div>
                  <label className="form-label" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                    Ownership Explanation:
                  </label>
                  <p style={{ background: '#ffffff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedClaim.reason}
                  </p>
                </div>

                <div>
                  <label className="form-label" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                    Identifying Details (Serial, stickers, private marks):
                  </label>
                  <p style={{ background: '#ffffff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedClaim.identifyingDetails}
                  </p>
                </div>

                {selectedClaim.proof && (
                  <div>
                    <label className="form-label" style={{ marginBottom: '0.25rem' }}>Submitted Proof Photo:</label>
                    <div style={{ width: '100%', maxHeight: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                      <img src={selectedClaim.proof} alt="Proof" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  </div>
                )}

                <div>
                  <label className="form-label">Administrative Notes / Message to Student</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Enter instructions or reason for acceptance/rejection (e.g., 'Please present student ID at desk Room 108')..."
                    value={adminNoteInput}
                    onChange={(e) => setAdminNoteInput(e.target.value)}
                    rows={2}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedClaim(null)}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClaimDecision(selectedClaim._id, 'Rejected')}
                  >
                    <XCircle size={15} /> Reject Claim
                  </button>

                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleClaimDecision(selectedClaim._id, 'Approved')}
                  >
                    <Check size={15} /> Approve Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
