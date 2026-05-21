import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import logoImg from '../../../assets/Images/BREAKTHROUGH LOGO.png';

const Navbar = ({ onOpenAuth }) => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logoImg} className="logo-img" alt="Breathough Logo" />
        </a>

        {/* Desktop Menu Links */}
        <ul className="navbar-menu">
          <li><a href="#features" className="nav-link">Benefits</a></li>
          <li><a href="#courses" className="nav-link">Courses</a></li>
          <li><a href="#skills" className="nav-link">Categories</a></li>
          <li><a href="#testimonials" className="nav-link">Reviews</a></li>
        </ul>

        {/* User Info / Actions */}
        <div className="navbar-actions">
          {user ? (
            <div className="user-profile">
              <span className="user-welcome">Hi, <strong>{user.name}</strong></span>
              <button onClick={logout} className="btn-logout" title="Log Out">
                <FiLogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button onClick={() => onOpenAuth('login')} className="btn-login-text">
                Sign In
              </button>
              <button onClick={() => onOpenAuth('register')} className="btn btn-dark btn-navbar">
                Join Free
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer glass ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-menu">
          <li><a href="#features" onClick={handleLinkClick}>Benefits</a></li>
          <li><a href="#courses" onClick={handleLinkClick}>Courses</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Categories</a></li>
          <li><a href="#testimonials" onClick={handleLinkClick}>Reviews</a></li>
          
          <hr className="mobile-divider" />
          
          {user ? (
            <li className="mobile-profile-li">
              <div className="mobile-user-details">
                <FiUser size={20} />
                <span>{user.name}</span>
              </div>
              <button onClick={() => { logout(); handleLinkClick(); }} className="btn btn-primary w-full mt-4">
                Logout
              </button>
            </li>
          ) : (
            <li className="mobile-auth-li">
              <button onClick={() => { onOpenAuth('login'); handleLinkClick(); }} className="btn btn-secondary w-full mb-3">
                Sign In
              </button>
              <button onClick={() => { onOpenAuth('register'); handleLinkClick(); }} className="btn btn-dark w-full">
                Join Free
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar Custom Styles */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          transition: var(--transition);
          display: flex;
          align-items: center;
          padding: 0 24px;
        }

        .navbar.scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 10px 30px -10px rgba(167, 216, 255, 0.3);
          border-bottom: 1px solid rgba(167, 216, 255, 0.2);
        }

        .navbar-container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-img {
          height: 42px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          display: block;
          transition: var(--transition);
        }

        .logo-img:hover {
          transform: scale(1.03);
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background-color: var(--primary);
          color: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-weight: 800;
          box-shadow: 0 4px 8px rgba(167, 216, 255, 0.4);
        }

        .logo-text {
          letter-spacing: -0.5px;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--dark-light);
          position: relative;
          padding: 8px 0;
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--primary-dark);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-dark);
          transition: var(--transition);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-welcome {
          font-size: 0.95rem;
          color: var(--dark-light);
        }

        .btn-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.5);
          color: var(--text-muted);
          border-radius: var(--radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-logout:hover {
          background: #FFEBEB;
          color: #DC2626;
          border-color: #FECACA;
        }

        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-login-text {
          background: none;
          border: none;
          color: var(--dark-light);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
          padding: 8px 16px;
        }

        .btn-login-text:hover {
          color: var(--primary-dark);
        }

        .btn-navbar {
          padding: 10px 22px;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--dark);
          cursor: pointer;
        }

        .mobile-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 24px;
          opacity: 0;
          pointer-events: none;
        }

        .mobile-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-size: 1.1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }

        .mobile-menu li a {
          display: block;
          padding: 12px;
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }

        .mobile-menu li a:hover {
          background: var(--primary-light);
          color: var(--primary-dark);
        }

        .mobile-divider {
          border: 0;
          height: 1px;
          background: var(--border-color);
          margin: 10px 0;
        }

        .mobile-profile-li, .mobile-auth-li {
          padding: 12px;
        }

        .mobile-user-details {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--dark);
          font-weight: 600;
        }

        .w-full {
          width: 100%;
        }

        .mt-4 {
          margin-top: 16px;
        }

        .mb-3 {
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .navbar-menu, .navbar-actions {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
