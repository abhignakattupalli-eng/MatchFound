import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, AlertCircle, CheckCircle2, Shield, User, HelpCircle, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/api';

const LoginPage = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotStatus, setForgotStatus] = useState({ error: '', success: '', loading: false });

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Pick up message passed from registration or other redirects
  const successMessage = location.state?.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Field validations as requested in Section 1
    if (!identifier.trim() || !password) {
      setError('Empty fields: Please provide your Email / Student ID and Password.');
      return;
    }

    if (identifier.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier.trim())) {
        setError('Invalid email address format.');
        return;
      }
    }

    try {
      setLoading(true);
      const loggedUser = await login(identifier.trim(), password);

      // Section requirement: After login, redirect user according to their role
      if (loggedUser.role === 'admin') {
        navigate('/admin');
      } else {
        const destination = location.state?.from?.pathname || '/';
        navigate(destination);
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Login failed.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setForgotStatus({ error: 'Please enter your registered college email.', success: '', loading: false });
      return;
    }

    try {
      setForgotStatus({ error: '', success: '', loading: true });
      const res = await authService.forgotPassword(forgotEmail);
      setForgotStatus({ error: '', success: res.data.message, loading: false });
    } catch (err) {
      setForgotStatus({
        error: err.response?.data?.message || 'Password reset request failed.',
        success: '',
        loading: false,
      });
    }
  };

  const autofillDemo = (type) => {
    if (type === 'admin') {
      setIdentifier('admin@campus.edu');
      setPassword('admin123');
    } else {
      setIdentifier('sarah.jenkins@campus.edu');
      setPassword('student123');
    }
    setError('');
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-header">
          <div style={{ display: 'inline-flex', padding: '12px', background: '#eff6ff', borderRadius: '50%', marginBottom: '1rem', color: 'var(--primary)' }}>
            <Lock size={28} />
          </div>
          <h2 className="auth-title">Campus Portal Sign In</h2>
          <p className="auth-subtitle">
            Enter your college credentials to access Smart Campus Lost & Found
          </p>
        </div>

        {/* Demo Fast Login Helpers */}
        <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.85rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
            Quick Demo Autofill
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => autofillDemo('student')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem' }}
            >
              <User size={13} /> Student Demo
            </button>
            <button
              type="button"
              onClick={() => autofillDemo('admin')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem', color: 'var(--success)' }}
            >
              <Shield size={13} /> Admin Demo
            </button>
          </div>
        </div>

        {successMessage && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            <span>{successMessage}</span>
          </div>
        )}

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label">Email or Student ID *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. sarah.jenkins@campus.edu or STU1024"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label">Password *</label>
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                style={{ fontSize: '0.8rem', color: 'var(--info)', fontWeight: 600 }}
              >
                Forgot Password?
              </button>
            </div>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your account password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            disabled={loading}
            style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}
          >
            <LogIn size={18} /> {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            New student or faculty member?{' '}
            <Link
              to="/register"
              style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal-overlay" onClick={() => setShowForgotModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px' }}>
            <div className="modal-header">
              <h3 className="modal-title">Password Assistance</h3>
              <button className="modal-close-btn" onClick={() => setShowForgotModal(false)}>
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              Enter your registered college email to receive instant account recovery instructions.
            </p>

            {forgotStatus.error && (
              <div className="auth-alert auth-alert-error">
                <AlertCircle size={18} />
                <span>{forgotStatus.error}</span>
              </div>
            )}

            {forgotStatus.success && (
              <div className="auth-alert auth-alert-success">
                <CheckCircle2 size={18} />
                <span>{forgotStatus.success}</span>
              </div>
            )}

            <form onSubmit={handleForgotSubmit}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">College Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="e.g. sarah.jenkins@campus.edu"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForgotModal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={forgotStatus.loading}
                >
                  {forgotStatus.loading ? 'Sending...' : 'Request Reset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
