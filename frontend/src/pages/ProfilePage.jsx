import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  BookOpen,
  GraduationCap,
  Shield,
  Edit,
  Key,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Hash,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/api';

const DEPARTMENTS = [
  'Computer Science & Engineering',
  'Mechanical Engineering',
  'Electrical & Electronics Engineering',
  'Civil Engineering',
  'Business Administration (MBA / BBA)',
  'Biotechnology & Life Sciences',
  'Design & Architecture',
  'Arts & Humanities',
  'Physics & Mathematics',
  'Other Campus Department',
];

const YEARS = ['1st Year (Freshman)', '2nd Year (Sophomore)', '3rd Year (Junior)', '4th Year (Senior)', 'Postgraduate', 'Faculty / Staff'];

const ProfilePage = () => {
  const { user, updateUser, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Edit profile form state
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    department: user?.department || DEPARTMENTS[0],
    year: user?.year || YEARS[0],
  });

  // Change password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [statusMsg, setStatusMsg] = useState({ error: '', success: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setStatusMsg({ error: '', success: '' });
      const res = await authService.updateProfile(profileData);
      if (res.data.success) {
        updateUser({ ...user, ...res.data.user });
        setShowEditModal(false);
        setStatusMsg({ error: '', success: 'Profile successfully updated.' });
      }
    } catch (err) {
      setStatusMsg({
        error: err.response?.data?.message || 'Failed to update profile.',
        success: '',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setStatusMsg({ error: 'New password and confirmation do not match.', success: '' });
      return;
    }
    if (passwordData.newPassword.length < 6) {
      setStatusMsg({ error: 'Password must be at least 6 characters long.', success: '' });
      return;
    }

    try {
      setSubmitting(true);
      setStatusMsg({ error: '', success: '' });
      const res = await authService.changePassword(passwordData);
      if (res.data.success) {
        setShowPasswordModal(false);
        setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
        setStatusMsg({ error: '', success: 'Your password was changed successfully.' });
      }
    } catch (err) {
      setStatusMsg({
        error: err.response?.data?.message || 'Failed to change password.',
        success: '',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Campus Account
            </span>
            <h1 className="section-title">Student Profile</h1>
            <p className="section-subtitle">
              View and manage your registered university identification and contact preferences
            </p>
          </div>
        </div>

        {statusMsg.success && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{statusMsg.success}</span>
          </div>
        )}

        {statusMsg.error && (
          <div className="auth-alert auth-alert-error" style={{ marginBottom: '1.5rem' }}>
            <AlertCircle size={18} />
            <span>{statusMsg.error}</span>
          </div>
        )}

        {/* Profile Card */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.5rem', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0f2b48, #2563eb)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 800,
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {user?.name?.charAt(0) || 'U'}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {user?.name}
                </h2>
                <span className={`user-role-tag ${isAdmin ? 'admin' : ''}`}>
                  {user?.role}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                {user?.department} • {user?.year}
              </p>
            </div>
          </div>

          {/* Details Grid (Section 12 requirement) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.75rem', marginBottom: '2rem' }}>
            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Hash size={14} color="var(--primary)" /> Student ID
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                {user?.studentId}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Mail size={14} color="var(--primary)" /> College Email
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.email}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Phone size={14} color="var(--primary)" /> Phone Number
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.phone}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <BookOpen size={14} color="var(--primary)" /> Academic Department
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.department}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <GraduationCap size={14} color="var(--primary)" /> Academic Year
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.year}
              </div>
            </div>
          </div>

          {/* Action Buttons (Section 12 requirement: Edit Profile, Change Password, Logout) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            <button
              onClick={() => {
                setProfileData({
                  name: user?.name || '',
                  phone: user?.phone || '',
                  department: user?.department || DEPARTMENTS[0],
                  year: user?.year || YEARS[0],
                });
                setShowEditModal(true);
              }}
              className="btn btn-primary btn-sm"
            >
              <Edit size={15} /> Edit Profile
            </button>

            <button
              onClick={() => setShowPasswordModal(true)}
              className="btn btn-secondary btn-sm"
            >
              <Key size={15} /> Change Password
            </button>

            <button
              onClick={handleLogout}
              className="btn btn-danger btn-sm"
              style={{ marginLeft: 'auto' }}
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {showEditModal && (
          <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Edit Campus Profile</h3>
                <button className="modal-close-btn" onClick={() => setShowEditModal(false)}>✕</button>
              </div>

              <form onSubmit={handleProfileSubmit}>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Department</label>
                  <select
                    className="form-select"
                    value={profileData.department}
                    onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Academic Year</label>
                  <select
                    className="form-select"
                    value={profileData.year}
                    onChange={(e) => setProfileData({ ...profileData, year: e.target.value })}
                  >
                    {YEARS.map((yr) => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Saving...' : 'Save Profile'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Change Password Modal */}
        {showPasswordModal && (
          <div className="modal-overlay" onClick={() => setShowPasswordModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
              <div className="modal-header">
                <h3 className="modal-title">Change Password</h3>
                <button className="modal-close-btn" onClick={() => setShowPasswordModal(false)}>✕</button>
              </div>

              <form onSubmit={handlePasswordSubmit}>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter current password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">New Password (Min 6 chars)</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter new password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    required
                    minLength={6}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Confirm new password"
                    value={passwordData.confirmNewPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
                    required
                    minLength={6}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowPasswordModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Updating...' : 'Update Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
