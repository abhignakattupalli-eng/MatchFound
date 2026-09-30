import React, { useState } from 'react';
import { X, HandHeart, AlertCircle, CheckCircle2, ShieldCheck, Upload } from 'lucide-react';
import { claimService } from '../services/api';
import { useNotifications } from '../context/NotificationContext';

const ClaimModal = ({ item, onClose, onSuccess }) => {
  const [reason, setReason] = useState('');
  const [identifyingDetails, setIdentifyingDetails] = useState('');
  const [proof, setProof] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { fetchNotifications } = useNotifications();

  if (!item) return null;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be smaller than 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProof(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!reason.trim() || !identifyingDetails.trim()) {
      setError('Please fill in both the ownership explanation and identifying details.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await claimService.submitClaim(item._id, {
        reason,
        identifyingDetails,
        proof,
      });

      if (res.data.success) {
        setSuccess(true);
        fetchNotifications();
        setTimeout(() => {
          if (onSuccess) onSuccess();
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to submit claim. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <HandHeart size={22} color="var(--accent)" />
            <h3 className="modal-title">Submit Item Ownership Claim</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>
            {item.itemName}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Report ID: <span style={{ fontFamily: 'monospace' }}>#{item.reportId}</span> • Found at: {item.location}
          </div>
        </div>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>Claim submitted successfully! Administration is reviewing your submission.</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">
              Why do you believe this item belongs to you? *
            </label>
            <textarea
              className="form-textarea"
              placeholder="e.g. I was studying at table 4 when I left this behind around 2:00 PM before class..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              rows={3}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">
              Identifying details (Serial number, marks, stickers, unique contents) *
            </label>
            <textarea
              className="form-textarea"
              placeholder="e.g. There is a sticker of Python on the top right, serial ending in 492, and small scratch on bottom corner..."
              value={identifyingDetails}
              onChange={(e) => setIdentifyingDetails(e.target.value)}
              required
              rows={3}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">
              Optional proof or reference image (Receipt, photo from camera roll)
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="claim-proof-input"
                style={{ display: 'none' }}
              />
              <label
                htmlFor="claim-proof-input"
                className="btn btn-secondary btn-sm"
                style={{ cursor: 'pointer' }}
              >
                <Upload size={14} /> Upload Proof Photo
              </label>
              {proof && (
                <span style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: 600 }}>
                  ✓ Image attached
                </span>
              )}
            </div>
            {proof && (
              <div style={{ marginTop: '0.5rem', width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img src={proof} alt="Proof preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-accent"
              disabled={submitting || success}
            >
              {submitting ? 'Submitting Claim...' : 'Submit Claim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimModal;
