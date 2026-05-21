import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiX, FiMail, FiLock, FiUser, FiAlertCircle } from 'react-icons/fi';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const { loginUser, registerUser } = useContext(AuthContext);
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Validation and API status
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sync mode with initialMode prop
  useEffect(() => {
    setMode(initialMode);
    clearForm();
  }, [initialMode, isOpen]);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrors({});
    setApiError('');
    setSuccess(false);
  };

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mode === 'register' && !name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      let result;
      if (mode === 'login') {
        result = await loginUser(email, password);
      } else {
        result = await registerUser(name, email, password);
      }

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          clearForm();
        }, 1500);
      } else {
        setApiError(result.message);
      }
    } catch (err) {
      setApiError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose} aria-label="Close modal">
          <FiX size={20} />
        </button>

        {/* Modal Tabs */}
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => { setMode('login'); setApiError(''); }}
          >
            Sign In
          </button>
          <button 
            className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => { setMode('register'); setApiError(''); }}
          >
            Sign Up
          </button>
        </div>

        {success ? (
          <div className="auth-success-state">
            <div className="success-checkmark">✓</div>
            <h3>{mode === 'login' ? 'Welcome Back!' : 'Welcome to Breathough!'}</h3>
            <p>{mode === 'login' ? 'Logging you in...' : 'Your account has been created.'}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>{mode === 'login' ? 'Welcome Back' : 'Create Your Account'}</h2>
            <p className="auth-subtext">
              {mode === 'login' ? 'Enter your details to access your courses.' : 'Join free today and start learning smarter.'}
            </p>

            {/* Error Message */}
            {apiError && (
              <div className="api-error-alert">
                <FiAlertCircle size={18} />
                <span>{apiError}</span>
              </div>
            )}

            {/* Form Fields */}
            {mode === 'register' && (
              <div className="form-group">
                <label htmlFor="auth-name">Full Name</label>
                <div className={`input-wrapper ${errors.name ? 'error' : ''}`}>
                  <FiUser className="input-icon" />
                  <input 
                    type="text" 
                    id="auth-name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="auth-email">Email Address</label>
              <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  id="auth-email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="auth-password">Password</label>
              <div className={`input-wrapper ${errors.password ? 'error' : ''}`}>
                <FiLock className="input-icon" />
                <input 
                  type="password" 
                  id="auth-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary auth-submit-btn">
              {loading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            <div className="auth-footer-toggle">
              {mode === 'login' ? (
                <span>New to Breathough? <button type="button" onClick={() => setMode('register')}>Create an account</button></span>
              ) : (
                <span>Already have an account? <button type="button" onClick={() => setMode('login')}>Sign in</button></span>
              )}
            </div>
          </form>
        )}
      </div>

      <style>{`
        .auth-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .auth-card {
          width: 100%;
          max-width: 460px;
          border-radius: var(--radius-lg);
          padding: 40px 32px;
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
        }

        .auth-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
        }

        .auth-close:hover {
          color: var(--dark);
          transform: rotate(90deg);
        }

        .auth-tabs {
          display: flex;
          gap: 16px;
          border-bottom: 2px solid var(--border-color);
          margin-bottom: 24px;
        }

        .auth-tab {
          background: none;
          border: none;
          padding: 8px 12px 12px 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
          transition: var(--transition);
        }

        .auth-tab:hover {
          color: var(--dark);
        }

        .auth-tab.active {
          color: var(--primary-dark);
        }

        .auth-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--primary-dark);
        }

        .auth-form h2 {
          font-size: 1.6rem;
          margin-bottom: 8px;
        }

        .auth-subtext {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .api-error-alert {
          background: #FFF5F5;
          border: 1px solid #FED7D7;
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          color: #E53E3E;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-light);
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 16px;
          background-color: var(--secondary-bg);
          transition: var(--transition);
        }

        .input-wrapper:focus-within {
          border-color: var(--primary-dark);
          background-color: white;
          box-shadow: 0 0 0 3px rgba(167, 216, 255, 0.3);
        }

        .input-wrapper.error {
          border-color: #FC8181;
          background-color: #FFF5F5;
        }

        .input-icon {
          color: var(--text-muted);
          margin-right: 12px;
          flex-shrink: 0;
        }

        .input-wrapper input {
          width: 100%;
          height: 48px;
          background: none;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: var(--dark);
        }

        .error-text {
          font-size: 0.8rem;
          color: #E53E3E;
          font-weight: 500;
        }

        .auth-submit-btn {
          width: 100%;
          height: 48px;
          font-size: 1rem;
          margin-top: 8px;
        }

        .auth-footer-toggle {
          text-align: center;
          margin-top: 20px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auth-footer-toggle button {
          background: none;
          border: none;
          color: var(--primary-dark);
          font-weight: 600;
          cursor: pointer;
          padding: 0 4px;
        }

        .auth-footer-toggle button:hover {
          text-decoration: underline;
        }

        .auth-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          text-align: center;
        }

        .success-checkmark {
          width: 72px;
          height: 72px;
          background-color: var(--accent-green-light);
          color: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 24px;
        }

        .auth-success-state h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .auth-success-state p {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
