import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '520px' }}>
        <div style={{ display: 'inline-flex', padding: '16px', background: '#fee2e2', borderRadius: '50%', color: 'var(--danger)', marginBottom: '1.5rem' }}>
          <Compass size={48} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem' }}>
          404 - Page Not Found
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Looks like this campus trail has gone missing! The page you are attempting to reach does not exist or was moved.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Campus Home
          </Link>
          <Link to="/lost-items" className="btn btn-secondary">
            <Search size={16} /> Search Registry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
