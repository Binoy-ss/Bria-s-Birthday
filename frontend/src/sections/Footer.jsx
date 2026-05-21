import React from 'react';
import { FiMail, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import logoImg from '../../../assets/Images/BREAKTHROUGH LOGO.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Logo / Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} className="logo-img" alt="Breathough Logo" />
            </div>
            <p className="brand-tagline">
              Empowering global learners to master future technology and advance their careers.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </div>

          {/* Quick Links Group 1 */}
          <div className="footer-links-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#features">Benefits</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#skills">Categories</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>

          {/* Quick Links Group 2 */}
          <div className="footer-links-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for weekly updates and exclusive course discounts.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
              <div className="newsletter-input-wrapper">
                <FiMail className="mail-icon" />
                <input type="email" placeholder="Your email address" required />
              </div>
              <button type="submit" className="btn btn-primary btn-subscribe">Sub</button>
            </form>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Breathough. All rights reserved.</p>
          <p className="footer-designed-by">Designed with ❤️ for modern developers</p>
        </div>

      </div>

      <style>{`
        .footer {
          background-color: #0F172A;
          color: #94A3B8;
          padding: 80px 0 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 0.6fr 0.6fr 1.6fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo {
          margin-bottom: 20px;
        }

        .logo-img {
          height: 40px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          display: block;
        }

        .brand-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: #94A3B8;
          transition: var(--transition);
        }

        .social-links a:hover {
          background-color: var(--primary);
          color: var(--dark);
          transform: translateY(-2px);
        }

        .footer-links-col h4,
        .footer-newsletter h4 {
          color: white;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-col ul a {
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .footer-links-col ul a:hover {
          color: white;
          padding-left: 4px;
        }

        .footer-newsletter p {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
        }

        .newsletter-input-wrapper {
          display: flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 0 14px;
          flex-grow: 1;
        }

        .mail-icon {
          color: #64748B;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .newsletter-input-wrapper input {
          background: none;
          border: none;
          outline: none;
          height: 44px;
          color: white;
          font-size: 0.85rem;
          width: 100%;
        }

        .btn-subscribe {
          padding: 0 16px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .footer-divider {
          border: 0;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.05);
          margin-bottom: 30px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
        }

        .footer-designed-by {
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
