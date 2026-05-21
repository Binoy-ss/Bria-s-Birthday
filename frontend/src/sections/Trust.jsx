import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../../assets/Images/BREAKTHROUGH LOGO.png';

const Trust = () => {
  const partners = [
    { name: 'Google', logo: 'Google' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'Meta', logo: 'Meta' },
    { name: 'Slack', logo: 'Slack' },
    { name: 'Zoom', logo: 'Zoom' },
    { name: 'Spotify', logo: 'Spotify' },
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-logo-block">
          <img src={logoImg} className="trust-logo" alt="Breathough Logo" />
        </div>
        <p className="trust-title">Trusted by learners at leading companies worldwide</p>
        
        {/* Scrolling Ticker */}
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {/* First Set */}
            {partners.map((partner, idx) => (
              <div key={`p1-${idx}`} className="partner-logo">
                <span className="logo-bullet">✦</span>
                <span className="logo-name">{partner.name}</span>
              </div>
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {partners.map((partner, idx) => (
              <div key={`p2-${idx}`} className="partner-logo">
                <span className="logo-bullet">✦</span>
                <span className="logo-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trust-section {
          padding: 40px 0;
          background-color: var(--secondary-bg);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
        }

        .trust-logo-block {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .trust-logo {
          max-width: 220px;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .trust-title {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .ticker-wrapper {
          width: 100%;
          display: flex;
          overflow: hidden;
          position: relative;
        }

        /* Subtle Fade Out Edges */
        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--secondary-bg) 0%, rgba(248, 250, 252, 0) 100%);
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--secondary-bg) 0%, rgba(248, 250, 252, 0) 100%);
        }

        .ticker-track {
          display: flex;
          gap: 60px;
          animation: scroll-ticker 30s linear infinite;
          width: max-content;
        }

        .partner-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0.45;
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--dark-light);
          user-select: none;
          transition: opacity 0.3s;
        }

        .partner-logo:hover {
          opacity: 0.85;
        }

        .logo-bullet {
          color: var(--primary-dark);
          font-size: 1rem;
        }

        @keyframes scroll-ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 30px));
          }
        }
      `}</style>
    </section>
  );
};

export default Trust;
