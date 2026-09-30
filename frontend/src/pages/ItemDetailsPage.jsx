import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Clock,
  Tag,
  HandHeart,
  MessageSquare,
  Flag,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Trash2,
  Edit,
  RotateCcw,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { itemService } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import ClaimModal from '../components/ClaimModal';
import ContactModal from '../components/ContactModal';
import ReportIssueModal from '../components/ReportIssueModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

const ItemDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin } = useAuth();
  const { fetchNotifications } = useNotifications();

  const [item, setItem] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  // Modals
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const fetchItemDetails = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await itemService.getItemById(id);
      if (res.data.success) {
        setItem(res.data.item);
        setIsOwner(res.data.isOwner);
        setEditFormData({
          itemName: res.data.item.itemName,
          category: res.data.item.category,
          description: res.data.item.description,
          location: res.data.item.location,
          date: res.data.item.date,
          time: res.data.item.time,
          additionalInfo: res.data.item.additionalInfo || '',
        });
      }
    } catch (err) {
      console.error('Error fetching item:', err);
      setError('Item not found or unavailable.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemDetails();
  }, [id]);

  const handleMarkReturned = async () => {
    if (!window.confirm('Are you sure you want to mark this item as Returned?')) return;
    try {
      const res = await itemService.markAsReturned(item._id);
      if (res.data.success) {
        setActionSuccess('Item successfully marked as Returned!');
        fetchItemDetails();
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update status.');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this report? This action cannot be undone.')) return;
    try {
      const res = await itemService.deleteItem(item._id);
      if (res.data.success) {
        navigate('/my-reports');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete report.');
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await itemService.updateItem(item._id, editFormData);
      if (res.data.success) {
        setShowEditModal(false);
        setActionSuccess('Report updated successfully!');
        fetchItemDetails();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update report.');
    }
  };

  if (loading) {
    return <LoadingSpinner message="Fetching campus item details..." />;
  }

  if (error || !item) {
    return (
      <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '500px' }}>
          <AlertCircle size={40} color="var(--danger)" style={{ marginBottom: '1rem' }} />
          <h2>Item Not Found</h2>
          <p style={{ color: 'var(--text-muted)', margin: '0.75rem 0 1.5rem' }}>
            {error || 'This campus item report does not exist or has been removed.'}
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Campus Home
          </Link>
        </div>
      </div>
    );
  }

  const defaultPlaceholder =
    item.type === 'lost'
      ? 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1000&q=80'
      : 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80';

  const imageUrl = item.image && item.image.trim() !== '' ? item.image : defaultPlaceholder;

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <ArrowLeft size={14} /> Back
          </button>
        </div>

        {actionSuccess && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle size={18} />
            <span>{actionSuccess}</span>
          </div>
        )}

        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* Large Item Image (Section 8 requirement) */}
            <div style={{ position: 'relative', minHeight: '340px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={imageUrl}
                alt={item.itemName}
                style={{ width: '100%', height: '100%', maxHeight: '480px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultPlaceholder;
                }}
              />
              <span className={`item-card-type-tag ${item.type}`} style={{ top: '18px', left: '18px' }}>
                {item.type === 'lost' ? 'Lost Belonging' : 'Found Belonging'}
              </span>
            </div>

            {/* Item Details Information */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="item-category-pill" style={{ fontSize: '0.85rem', padding: '4px 10px' }}>
                  {item.category}
                </span>
                <StatusBadge status={item.status} />
              </div>

              <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: '1.25' }}>
                {item.itemName}
              </h1>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontFamily: 'monospace' }}>
                Report ID: <strong>#{item.reportId}</strong>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                  Description
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>

              {/* Meta Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} color="var(--primary)" /> Location
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {item.location}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} color="var(--primary)" /> Date
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {item.date}
                  </div>
                </div>

                {item.time && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <Clock size={14} color="var(--primary)" /> Time
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {item.time}
                    </div>
                  </div>
                )}
              </div>

              {/* Reporter Info (Privacy Compliant) */}
              <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem' }}>
                  <UserCheck size={16} /> Reported by: {item.reportedBy?.name || 'Campus Student'}
                </div>
                <div>
                  {item.reportedBy?.department} • {item.reportedBy?.year}
                </div>
                {/* Notice that sensitive personal phone and email are not exposed publicly */}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>
                  🔒 Student private email & phone are protected under campus privacy policy.
                </div>
              </div>

              {/* Actions Toolbar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                {/* Claim Item Button */}
                {item.status !== 'Returned' && item.status !== 'Claimed' && (
                  <button
                    type="button"
                    onClick={() => {
                      if (!isAuthenticated) {
                        navigate('/login', { state: { message: 'Please sign in to submit a claim.' } });
                      } else {
                        setShowClaimModal(true);
                      }
                    }}
                    className="btn btn-accent"
                    style={{ flex: 1, minWidth: '160px' }}
                  >
                    <HandHeart size={16} /> Claim This Item
                  </button>
                )}

                {/* Contact Reporter */}
                <button
                  type="button"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate('/login', { state: { message: 'Please sign in to contact the reporter.' } });
                    } else {
                      setShowContactModal(true);
                    }
                  }}
                  className="btn btn-secondary"
                >
                  <MessageSquare size={16} /> Contact Reporter
                </button>

                {/* Report Incorrect Info */}
                <button
                  type="button"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate('/login', { state: { message: 'Please sign in to report an issue.' } });
                    } else {
                      setShowReportModal(true);
                    }
                  }}
                  className="btn btn-secondary"
                  title="Report Incorrect Information"
                >
                  <Flag size={16} /> Report Issue
                </button>
              </div>

              {/* Owner / Admin Management Controls */}
              {(isOwner || isAdmin) && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Owner Options:
                  </span>
                  {item.status !== 'Returned' && (
                    <button
                      onClick={handleMarkReturned}
                      className="btn btn-success btn-sm"
                    >
                      <RotateCcw size={14} /> Mark as Returned
                    </button>
                  )}
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="btn btn-secondary btn-sm"
                  >
                    <Edit size={14} /> Edit Report
                  </button>
                  <button
                    onClick={handleDelete}
                    className="btn btn-danger btn-sm"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Claim Modal */}
      {showClaimModal && (
        <ClaimModal
          item={item}
          onClose={() => setShowClaimModal(false)}
          onSuccess={() => {
            fetchItemDetails();
            setActionSuccess('Claim submitted successfully!');
          }}
        />
      )}

      {/* Contact Reporter Modal */}
      {showContactModal && (
        <ContactModal
          item={item}
          onClose={() => setShowContactModal(false)}
        />
      )}

      {/* Report Incorrect Information Modal */}
      {showReportModal && (
        <ReportIssueModal
          item={item}
          onClose={() => setShowReportModal(false)}
        />
      )}

      {/* Edit Report Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Edit Campus Report</h3>
              <button className="modal-close-btn" onClick={() => setShowEditModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleEditSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Item Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={editFormData.itemName || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, itemName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-input"
                  value={editFormData.location || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  value={editFormData.description || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Additional Notes</label>
                <textarea
                  className="form-textarea"
                  value={editFormData.additionalInfo || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, additionalInfo: e.target.value })}
                  rows={2}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsPage;
