import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, Clock, HelpCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              SMART CAMPUS <span style={{ color: '#f59e0b' }}>LOST & FOUND</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              The official centralized recovery portal for students, faculty, and campus security.
              Helping reconnect lost belongings with their owners swiftly and securely.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#cbd5e1' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>Campus Security Verified & Encrypted</span>
            </div>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-link-title">Quick Access</h4>
            <Link to="/lost-items" className="footer-link">Browse Lost Items</Link>
            <Link to="/found-items" className="footer-link">Browse Found Items</Link>
            <Link to="/report-lost" className="footer-link">Report Lost Belonging</Link>
            <Link to="/report-found" className="footer-link">Turn In Found Item</Link>
            <Link to="/my-reports" className="footer-link">Check My Submissions</Link>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-link-title">Campus Hub</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <MapPin size={15} color="#94a3b8" />
              <span>Student Center Room 108</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Clock size={15} color="#94a3b8" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Phone size={15} color="#94a3b8" />
              <span>(555) 019-2834 (Security Desk)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Mail size={15} color="#94a3b8" />
              <span>lostandfound@campus.edu</span>
            </div>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-link-title">Demo Access</h4>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '0.5rem' }}>
              Admin Demo: <code>admin@campus.edu</code> (<code>admin123</code>)
            </p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '0.5rem' }}>
              Student Demo: <code>sarah.jenkins@campus.edu</code> (<code>student123</code>)
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <Link to="/login" className="btn btn-secondary btn-sm" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>
                Quick Login Portal
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Smart Campus Lost & Found System. All rights reserved. Secure collegiate property recovery platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
