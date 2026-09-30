import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  CheckCircle2,
  Clock,
  Award,
  RotateCcw,
  XCircle,
  MessageSquare,
  ShieldCheck,
  CheckCheck,
  Trash2,
  Info,
} from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import LoadingSpinner from '../components/LoadingSpinner';

const getNotificationIcon = (type) => {
  switch (type) {
    case 'REPORT_SUBMITTED':
      return <Clock size={18} color="#2563eb" />;
    case 'REPORT_VERIFIED':
      return <ShieldCheck size={18} color="#059669" />;
    case 'REPORT_REJECTED':
      return <XCircle size={18} color="#dc2626" />;
    case 'CLAIM_SUBMITTED':
      return <Award size={18} color="#d97706" />;
    case 'CLAIM_APPROVED':
      return <CheckCircle2 size={18} color="#059669" />;
    case 'CLAIM_REJECTED':
      return <XCircle size={18} color="#dc2626" />;
    case 'ITEM_RETURNED':
      return <RotateCcw size={18} color="#4f46e5" />;
    case 'MESSAGE':
      return <MessageSquare size={18} color="#0284c7" />;
    default:
      return <Info size={18} color="#64748b" />;
  }
};

const NotificationsPage = () => {
  const {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Activity Feed
            </span>
            <h1 className="section-title">Campus Notifications</h1>
            <p className="section-subtitle">
              Real-time updates regarding reports, verification, claims, and status changes
            </p>
          </div>
          {notifications.length > 0 && unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <CheckCheck size={16} /> Mark All as Read
            </button>
          )}
        </div>

        {loading ? (
          <LoadingSpinner message="Checking campus notification center..." />
        ) : notifications.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <Bell size={40} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No Notifications Yet
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '380px', margin: '0 auto 1.5rem' }}>
              When you submit reports or someone claims an item, status alerts will appear right here.
            </p>
            <Link to="/lost-items" className="btn btn-secondary btn-sm">
              Explore Campus Registry
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {notifications.map((notif) => {
              const dateStr = new Date(notif.createdAt).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={notif._id}
                  style={{
                    backgroundColor: notif.read ? '#ffffff' : '#f0f9ff',
                    border: `1px solid ${notif.read ? 'var(--border)' : '#bae6fd'}`,
                    borderLeft: `4px solid ${notif.read ? 'var(--border)' : 'var(--primary)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      background: notif.read ? '#f1f5f9' : '#e0f2fe',
                      padding: '8px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {getNotificationIcon(notif.type)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)' }}>
                        {dateStr}
                      </span>
                      {!notif.read && (
                        <span
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            background: '#0284c7',
                            color: '#ffffff',
                            padding: '2px 6px',
                            borderRadius: 'var(--radius-full)',
                            textTransform: 'uppercase',
                          }}
                        >
                          New
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.5', margin: '0.25rem 0' }}>
                      {notif.message}
                    </p>

                    {notif.relatedItemId && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <Link
                          to={`/items/${notif.relatedItemId._id || notif.relatedItemId}`}
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}
                        >
                          View Item Record
                        </Link>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif._id)}
                        className="btn btn-secondary btn-sm"
                        title="Mark as read"
                        style={{ padding: '0.3rem 0.5rem' }}
                      >
                        <CheckCheck size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif._id)}
                      className="btn btn-secondary btn-sm"
                      title="Delete notification"
                      style={{ padding: '0.3rem 0.5rem', color: 'var(--danger)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
