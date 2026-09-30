import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    department: 'Computer Science & Engineering',
    year: '1st Year (Freshman)',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validations (Section 2)
    const { name, studentId, email, phone, department, year, password, confirmPassword } = formData;

    if (!name.trim() || !studentId.trim() || !email.trim() || !phone.trim() || !password || !confirmPassword) {
      setError('All fields are required. Please fill in all information.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Invalid email address format. Please enter a valid college email.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please ensure both passwords match.');
      return;
    }

    try {
      setLoading(true);
      await register({
        name: name.trim(),
        studentId: studentId.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        department,
        year,
        password,
        confirmPassword,
      });

      // Redirect to login page upon successful registration
      navigate('/login', {
        state: {
          message: 'Account registered successfully! You can now log in with your credentials.',
        },
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card register-card">
        <div className="auth-header">
          <div style={{ display: 'inline-flex', padding: '12px', background: '#eff6ff', borderRadius: '50%', marginBottom: '1rem', color: 'var(--primary)' }}>
            <UserPlus size={28} />
          </div>
          <h2 className="auth-title">Create Campus Account</h2>
          <p className="auth-subtitle">
            Join the Smart Campus Lost & Found community to report and claim belongings
          </p>
        </div>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="e.g. Alex Chen"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Student ID / Faculty ID *</label>
              <input
                type="text"
                name="studentId"
                className="form-input"
                placeholder="e.g. STU2048 or ADM002"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">College Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="e.g. alex.chen@campus.edu"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="e.g. +1 (555) 234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Department *</label>
              <select
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Academic Year *</label>
              <select
                name="year"
                className="form-select"
                value={formData.year}
                onChange={handleChange}
                required
              >
                {YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Password * (Min 6 characters)</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                placeholder="Re-type your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={16} color="var(--success)" />
            <span>Passwords are securely hashed using bcrypt prior to database storage.</span>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            disabled={loading}
            style={{ marginBottom: '1.5rem' }}
          >
            <UserPlus size={18} /> {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Already have an active campus account?{' '}
            <Link
              to="/login"
              style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
