import React from 'react';
import { motion } from 'framer-motion';
import coverImg from '../assets/Images/cover.jpg';

const Hero = ({ onOpenAuth }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        
        {/* Left Column: Image */}
        <div className="hero-image-col">
          <img 
            src={coverImg} 
            alt="Students learning illustration" 
            className="hero-image"
            loading="eager"
          />
        </div>

        {/* Right Column: Text Content */}
        <motion.div 
          className="hero-content-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="badge">✨ Learn Smarter. Grow Faster.</div>
          <h1 className="hero-title">
            Learn Smarter.<br />
            Grow Faster.<br />
            <span className="text-primary-dark">Succeed Anywhere.</span>
          </h1>
          <p className="hero-subtext">
            Unlock your potential with our modern learning platform. Access world-class courses designed to accelerate your career and expand your future.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => onOpenAuth('register')} className="btn btn-primary btn-hero">
              Get Started Free
            </button>
            <a href="#courses" className="btn btn-secondary btn-hero">
              Explore Courses
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>15k+</strong>
              <span>Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>120+</strong>
              <span>Expert Tutors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>4.9 ★</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          padding-top: var(--header-height);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          height: auto;
          min-height: 100vh;
          align-items: center;
        }

        .hero-image-col {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #f0f4f8;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 80px;
          background: #ffffff;
          min-height: 100vh;
        }

        .badge {
          background-color: var(--primary-light);
          color: var(--primary-dark);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(167, 216, 255, 0.4);
          backdrop-filter: blur(4px);
          width: fit-content;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1.5px;
          color: var(--dark);
          max-width: 520px;
        }

        .text-primary-dark {
          color: #1E40AF;
          position: relative;
        }

        .hero-subtext {
          font-size: 1.15rem;
          color: var(--dark-light);
          margin-bottom: 36px;
          max-width: 540px;
          line-height: 1.7;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          width: 100%;
        }

        .btn-hero {
          padding: 14px 32px;
          font-size: 1rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-item strong {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--dark);
          font-family: 'Poppins', sans-serif;
        }

        .stat-item span {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background-color: var(--border-color);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .hero-image-col {
            height: 400px;
            order: 2;
          }

          .hero-content-col {
            padding: 60px 40px;
            min-height: auto;
            order: 1;
            justify-content: flex-start;
            padding-top: 40px;
          }

          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content-col {
            padding: 40px 24px;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-hero {
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .hero-subtext {
            font-size: 1rem;
          }

          .hero-image-col {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
