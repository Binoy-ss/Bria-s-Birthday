import React from 'react';
import { motion } from 'framer-motion';
import coverImg from '../assets/Images/cover.jpg';
import footerImg from '../assets/Images/footer.jpg';
import { FiCheckCircle, FiClock, FiStar, FiActivity } from 'react-icons/fi';

const ContentSplit = () => {
  return (
    <section className="content-split-section">
      <div className="container split-container">
        
        {/* Block 1: Left Text, Right Image */}
        <div className="split-row">
          <motion.div 
            className="split-text-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="split-badge">Interactive Learning</span>
            <h2 className="split-title">Structured modules that actually make sense</h2>
            <p className="split-desc">
              Ditch the boring lectures. Breathough breaks down complex fields into digestible coding, design, and analysis modules. Complete real projects and build practical skills.
            </p>
            
            <ul className="split-points">
              <li>
                <FiCheckCircle className="point-icon text-teal" />
                <span>Interactive, self-paced coding labs and workspaces.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon text-teal" />
                <span>Gamified quizzes and progress bars to stay engaged.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon text-teal" />
                <span>Comprehensive study resources and checklists.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="split-image-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="split-image-card glass-card">
              <img src={coverImg} alt="Interactive coding platform" className="split-img" />
              
              {/* Decorative Floating Overlay */}
              <div className="image-overlay-card bottom-left glass">
                <FiActivity className="overlay-icon text-teal" />
                <div>
                  <strong>Hands-on Labs</strong>
                  <span>100% Practical</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 2: Left Image, Right Text (Alternating) */}
        <div className="split-row reverse">
          <motion.div 
            className="split-image-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="split-image-card glass-card">
              <img src={footerImg} alt="Direct mentorship system" className="split-img" />
              
              {/* Decorative Floating Overlay */}
              <div className="image-overlay-card top-right glass">
                <FiStar className="overlay-icon text-amber" />
                <div>
                  <strong>5.0 Mentors</strong>
                  <span>Top Experts</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="split-text-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="split-badge bg-coral">Dedicated Mentors</span>
            <h2 className="split-title">Real human guidance when you are stuck</h2>
            <p className="split-desc">
              Every course includes unlimited access to expert mentors. Submit your projects, receive detailed feedback on your work, and clear roadblocks during live office hours.
            </p>
            
            <ul className="split-points">
              <li>
                <FiCheckCircle className="point-icon text-coral" />
                <span>Personalized code reviews and designs review.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon text-coral" />
                <span>Live Q&A support and weekly group discussions.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon text-coral" />
                <span>Career support and mock interview workshops.</span>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>

      <style>{`
        .content-split-section {
          padding: 100px 0;
          background-color: var(--secondary);
          overflow: hidden;
        }

        .split-container {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .split-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          gap: 80px;
        }

        .split-row.reverse {
          direction: ltr;
        }

        /* Swaps order for alternate rows */
        .split-row.reverse .split-text-column {
          order: 2;
        }
        
        .split-row.reverse .split-image-column {
          order: 1;
        }

        .split-text-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .split-badge {
          background-color: var(--accent-teal-light);
          color: #0F766E;
          border: 1px solid rgba(45, 212, 191, 0.2);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .split-badge.bg-coral {
          background-color: var(--accent-coral-light);
          color: #BE123C;
          border-color: rgba(251, 113, 133, 0.2);
        }

        .split-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          line-height: 1.25;
        }

        .split-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .split-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .split-points li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--dark-light);
          font-weight: 500;
        }

        .point-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .text-teal {
          color: var(--accent-teal);
        }

        .text-coral {
          color: var(--accent-coral);
        }

        /* Image Column */
        .split-image-column {
          position: relative;
        }

        .split-image-card {
          padding: 12px;
          border-radius: var(--radius-xl);
          position: relative;
        }

        .split-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: calc(var(--radius-xl) - 4px);
          object-fit: cover;
          box-shadow: var(--shadow-sm);
        }

        .image-overlay-card {
          position: absolute;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-md);
        }

        .bottom-left {
          bottom: 30px;
          left: -30px;
        }

        .top-right {
          top: 30px;
          right: -30px;
        }

        .overlay-icon {
          font-size: 1.6rem;
        }

        .text-amber {
          color: var(--accent-yellow);
        }

        .image-overlay-card strong {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark);
        }

        .image-overlay-card span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .split-row {
            grid-template-columns: 1fr !important;
            gap: 50px;
          }

          .split-row.reverse .split-text-column {
            order: 1 !important;
          }
          
          .split-row.reverse .split-image-column {
            order: 2 !important;
          }

          .bottom-left, .top-right {
            left: 20px;
            right: auto;
            bottom: 20px;
            top: auto;
          }
        }

        @media (max-width: 768px) {
          .split-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContentSplit;
