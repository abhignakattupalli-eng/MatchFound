import React, { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { itemService } from '../services/api';
import { useAuth } from '../context/AuthContext';

const ContactModal = ({ item, onClose }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [contactInfo, setContactInfo] = useState(user?.email || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!item) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please provide a message.');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      const res = await itemService.contactReporter(item._id, {
        message,
        contactInfo,
      });

      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to dispatch message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={22} color="var(--primary)" />
            <h3 className="modal-title">Secure Reporter Contact</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
          To safeguard student privacy, contact requests are relayed securely through internal campus notifications.
        </p>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} />
            <span>Message sent to the reporter via their campus dashboard notification center!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">Your Message to the Reporter *</label>
            <textarea
              className="form-textarea"
              placeholder="e.g. Hello, I believe this is my item or I have more information about where it was seen..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Your Preferred Callback Information</label>
            <input
              type="text"
              className="form-input"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Email or phone number"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting || success}>
              <Send size={15} /> {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
