import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PlusCircle, Upload, AlertCircle, CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { itemService } from '../services/api';
import { useNotifications } from '../context/NotificationContext';

const CATEGORIES = [
  'Electronics',
  'Bags',
  'Books',
  'ID Cards',
  'Keys',
  'Clothing',
  'Accessories',
  'Other',
];

const ReportLostPage = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'Electronics',
    description: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    image: '',
    additionalInfo: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState(null);

  const navigate = useNavigate();
  const { fetchNotifications } = useNotifications();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image file must be under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setImagePreview(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { itemName, category, description, location, date } = formData;
    if (!itemName.trim() || !category || !description.trim() || !location.trim() || !date) {
      setError('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    try {
      setLoading(true);
      const res = await itemService.reportLost(formData);
      if (res.data.success) {
        setSuccessData({
          reportId: res.data.reportId,
          item: res.data.item,
          message: res.data.message,
        });
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit lost report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div style={{ padding: '3.5rem 1rem 5rem' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.5rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
              Lost Report Submitted!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Your report has been successfully recorded in the campus registry.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.75rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Unique Report ID:</span>
                <span style={{ fontWeight: 700, fontFamily: 'monospace', color: 'var(--primary)' }}>
                  #{successData.reportId}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Item Name:</span>
                <span style={{ fontWeight: 600 }}>{successData.item.itemName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Current Status:</span>
                <span style={{ fontWeight: 700, color: '#dc2626' }}>Searching</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <Link to="/my-reports" className="btn btn-primary">
                View in My Reports <ArrowRight size={16} />
              </Link>
              <Link to="/lost-items" className="btn btn-secondary">
                Return to Lost Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            New Missing Belonging Notice
          </span>
          <h1 className="section-title">Report a Lost Item</h1>
          <p className="section-subtitle">
            Provide detailed information to increase the chances of campus members or security finding your item.
          </p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.25rem', boxShadow: 'var(--shadow-md)' }}>
          {error && (
            <div className="auth-alert auth-alert-error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Item Name *</label>
                <input
                  type="text"
                  name="itemName"
                  className="form-input"
                  placeholder="e.g. 14-inch Silver MacBook Pro"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Detailed Description *</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Describe color, brand, model, case, stickers, marks, or unique characteristics..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Last Seen Location *</label>
                <input
                  type="text"
                  name="location"
                  className="form-input"
                  placeholder="e.g. Library 2nd floor, Cafeteria, Science Hall..."
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date Lost *</label>
                <input
                  type="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Time Lost</label>
                <input
                  type="time"
                  name="time"
                  className="form-input"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Image Upload / URL */}
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Upload Item Image (Photo or Reference)</label>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    id="lost-image-file"
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor="lost-image-file"
                    className="btn btn-secondary"
                    style={{ width: '100%', cursor: 'pointer', marginBottom: '0.5rem' }}
                  >
                    <Upload size={16} /> Choose Photo from Device
                  </label>
                  <input
                    type="url"
                    name="image"
                    className="form-input"
                    placeholder="Or enter image URL (https://...)"
                    value={formData.image.startsWith('data:') ? '' : formData.image}
                    onChange={handleImageUrlChange}
                  />
                </div>

                {imagePreview && (
                  <div style={{ width: '90px', height: '90px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 }}>
                    <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Additional Information (Confidential/Internal)</label>
              <textarea
                name="additionalInfo"
                className="form-textarea"
                placeholder="e.g. Serial numbers, private identifiers, or reward information..."
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={2}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              disabled={loading}
            >
              <PlusCircle size={18} /> {loading ? 'Submitting Report...' : 'Submit Lost Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportLostPage;
