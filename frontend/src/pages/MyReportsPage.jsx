import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { itemService } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import { useNotifications } from '../context/NotificationContext';

const MyReportsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Editing state
  const [editingItem, setEditingItem] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const { fetchNotifications } = useNotifications();

  const fetchMyReports = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await itemService.getItems({ myReports: 'true' });
      if (res.data.success) {
        setItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching my reports:', err);
      setError('Unable to load your campus reports.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyReports();
  }, []);

  const handleMarkReturned = async (id, name) => {
    if (!window.confirm(`Mark "${name}" as Returned? This will confirm the item was successfully recovered.`)) return;
    try {
      const res = await itemService.markAsReturned(id);
      if (res.data.success) {
        setSuccessMsg(`"${name}" has been marked as returned!`);
        fetchMyReports();
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update status.');
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete report for "${name}"? This cannot be undone.`)) return;
    try {
      const res = await itemService.deleteItem(id);
      if (res.data.success) {
        setSuccessMsg(`Report for "${name}" deleted.`);
        fetchMyReports();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete report.');
    }
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setEditFormData({
      itemName: item.itemName,
      category: item.category,
      description: item.description,
      location: item.location,
      date: item.date,
      time: item.time,
      additionalInfo: item.additionalInfo || '',
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await itemService.updateItem(editingItem._id, editFormData);
      if (res.data.success) {
        setEditingItem(null);
        setSuccessMsg('Report updated successfully!');
        fetchMyReports();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update report.');
    }
  };

  const lostReports = items.filter((it) => it.type === 'lost');
  const foundReports = items.filter((it) => it.type === 'found');

  const renderReportTable = (reportList, typeLabel) => {
    if (reportList.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            You haven't filed any {typeLabel.toLowerCase()} reports yet.
          </p>
          <Link
            to={typeLabel === 'Lost' ? '/report-lost' : '/report-found'}
            className="btn btn-primary btn-sm"
          >
            <PlusCircle size={14} /> Report {typeLabel} Item
          </Link>
        </div>
      );
    }

    return (
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Item Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reportList.map((item) => (
              <tr key={item._id}>
                <td style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                  #{item.reportId}
                </td>
                <td>
                  <div style={{ fontWeight: 600 }}>{item.itemName}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{item.category}</div>
                </td>
                <td>
                  {item.date} {item.time ? `(${item.time})` : ''}
                </td>
                <td>{item.location}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                    <Link
                      to={`/items/${item._id}`}
                      className="btn btn-secondary btn-sm"
                      title="View Details"
                      style={{ padding: '0.35rem 0.6rem' }}
                    >
                      <Eye size={14} />
                    </Link>

                    <button
                      onClick={() => openEditModal(item)}
                      className="btn btn-secondary btn-sm"
                      title="Edit Report"
                      style={{ padding: '0.35rem 0.6rem' }}
                    >
                      <Edit size={14} />
                    </button>

                    {item.status !== 'Returned' && (
                      <button
                        onClick={() => handleMarkReturned(item._id, item.itemName)}
                        className="btn btn-success btn-sm"
                        title="Mark as Returned"
                        style={{ padding: '0.35rem 0.6rem' }}
                      >
                        <RotateCcw size={14} />
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(item._id, item.itemName)}
                      className="btn btn-danger btn-sm"
                      title="Delete Report"
                      style={{ padding: '0.35rem 0.6rem' }}
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
    );
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Student Management
            </span>
            <h1 className="section-title">My Reports</h1>
            <p className="section-subtitle">
              Manage all lost property listings and found item turn-ins you have submitted
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link to="/report-lost" className="btn btn-primary btn-sm">
              <PlusCircle size={14} /> New Lost Report
            </Link>
            <Link to="/report-found" className="btn btn-accent btn-sm">
              <Sparkles size={14} /> New Found Report
            </Link>
          </div>
        </div>

        {successMsg && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {error && (
          <div className="auth-alert auth-alert-error" style={{ marginBottom: '1.5rem' }}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <LoadingSpinner message="Loading your submitted reports..." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* MY LOST REPORTS (Section 10) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--danger)' }}>●</span> MY LOST REPORTS ({lostReports.length})
                </h2>
              </div>
              {renderReportTable(lostReports, 'Lost')}
            </div>

            {/* MY FOUND REPORTS (Section 10) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--success)' }}>●</span> MY FOUND REPORTS ({foundReports.length})
                </h2>
              </div>
              {renderReportTable(foundReports, 'Found')}
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="modal-overlay" onClick={() => setEditingItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Edit Report #{editingItem.reportId}</h3>
                <button className="modal-close-btn" onClick={() => setEditingItem(null)}>
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
                  <button type="button" className="btn btn-secondary" onClick={() => setEditingItem(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Updates
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

export default MyReportsPage;
