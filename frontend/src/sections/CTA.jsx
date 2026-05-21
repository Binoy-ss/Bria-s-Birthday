import React from 'react';
import { motion } from 'framer-motion';

const CTA = ({ onOpenAuth }) => {
  return (
    <section className="cta-section">
      <div className="container">
        
        <motion.div 
          className="cta-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-bg-glow"></div>
          
          <div className="cta-content">
            <span className="cta-badge">Join Us Today</span>
            <h2 className="cta-title">More than just online courses.</h2>
            <p className="cta-desc">
              We provide a lifelong network, career resources, live interactive projects, and professional coaching that set you up for continuous long-term growth.
            </p>
            
            <button 
              onClick={() => onOpenAuth('register')} 
              className="btn btn-dark btn-cta"
            >
              Get Started for Free
            </button>
          </div>
        </motion.div>

      </div>

      <style>{`
        .cta-section {
          padding: 80px 0;
          position: relative;
          background-color: var(--secondary);
        }

        .cta-banner {
          position: relative;
          border-radius: var(--radius-xl);
          padding: 80px 40px;
          background: linear-gradient(135deg, #E0F2FE 0%, #F5F9FF 100%);
          border: 1px solid rgba(167, 216, 255, 0.4);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Ambient glow inside card */
        .cta-bg-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(167, 216, 255, 0.6);
          filter: blur(100px);
          border-radius: 50%;
          top: -100px;
          left: -100px;
          z-index: 1;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-badge {
          background-color: var(--secondary);
          color: var(--primary-dark);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .cta-title {
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -1px;
          color: var(--dark);
          line-height: 1.2;
        }

        .cta-desc {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .btn-cta {
          padding: 16px 36px;
          font-size: 1.05rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 60px 24px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-desc {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
