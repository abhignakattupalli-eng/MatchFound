import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Search,
  PackageSearch,
  PlusCircle,
  FileText,
  Bell,
  User,
  Shield,
  LogOut,
  LogIn,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { unreadCount } = useNotifications();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <div className="navbar-brand-icon">
              <Compass size={22} color="#ffffff" />
            </div>
            <div>
              <span>SMART CAMPUS</span>
              <span style={{ color: '#f59e0b', marginLeft: '6px', fontWeight: 600, fontSize: '0.9em' }}>
                LOST & FOUND
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Navigation Links */}
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/lost-items" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Lost Items
            </NavLink>

            <NavLink to="/found-items" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Found Items
            </NavLink>

            <NavLink to="/report-lost" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              <PlusCircle size={15} /> Report Lost
            </NavLink>

            <NavLink to="/report-found" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              <Sparkles size={15} /> Report Found
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/my-reports" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  <FileText size={15} /> My Reports
                </NavLink>

                <NavLink to="/notifications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  <Bell size={15} />
                  <span>Notifications</span>
                  {unreadCount > 0 && <span className="nav-link-badge">{unreadCount}</span>}
                </NavLink>

                <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  <User size={15} /> Profile
                </NavLink>

                {isAdmin && (
                  <NavLink to="/admin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                    <Shield size={15} color="#10b981" /> Admin
                  </NavLink>
                )}

                <div className="nav-user-menu">
                  <div className="user-badge">
                    <span style={{ fontWeight: 600 }}>{user?.name?.split(' ')[0]}</span>
                    <span className={`user-role-tag ${isAdmin ? 'admin' : ''}`}>
                      {user?.role}
                    </span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                    title="Log Out"
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="nav-user-menu">
                <Link to="/login" className="btn btn-outline-white btn-sm" onClick={closeMenu}>
                  <LogIn size={14} /> Login
                </Link>
                <Link to="/register" className="btn btn-accent btn-sm" onClick={closeMenu}>
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
