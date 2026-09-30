import React, { useState } from 'react';
import { X, Flag, AlertCircle, CheckCircle2 } from 'lucide-react';
import { itemService } from '../services/api';

const ReportIssueModal = ({ item, onClose }) => {
  const [reason, setReason] = useState('Incorrect location');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!item) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError('');
      const res = await itemService.reportIssue(item._id, { reason, notes });
      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => onClose(), 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit report.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Flag size={20} color="var(--danger)" />
            <h3 className="modal-title">Report Incorrect Information</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} />
            <span>Campus security administration has been notified for review.</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">Nature of Discrepancy</label>
            <select
              className="form-select"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="Incorrect location">Incorrect location or building</option>
              <option value="Item already returned/found">Item already returned or resolved</option>
              <option value="Inaccurate item description">Inaccurate description or wrong photo</option>
              <option value="Spam / Duplicate listing">Duplicate or spam report</option>
              <option value="Other">Other policy violation</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Details / Observations</label>
            <textarea
              className="form-textarea"
              placeholder="Please provide specifics to help administration resolve this..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-danger" disabled={submitting || success}>
              {submitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueModal;
