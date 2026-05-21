import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Full Stack Engineer',
      avatarText: 'SJ',
      avatarBg: 'var(--primary)',
      quote: 'Breathough completely changed the trajectory of my career. The practical projects helped me build a real portfolio that landed me my dream job.',
      stars: 5,
      yOffset: 0,
    },
    {
      id: 2,
      name: 'Daniel Chen',
      role: 'UX Designer',
      avatarText: 'DC',
      avatarBg: 'var(--accent-teal)',
      quote: 'The mentorship here is unmatched. Having direct code reviews and design feedback kept me motivated and accelerated my learning curves drastically.',
      stars: 5,
      yOffset: 25, // Offset for floating effect on desktop
    },
    {
      id: 3,
      name: 'Amara Okafor',
      role: 'Data Scientist',
      avatarText: 'AO',
      avatarBg: 'var(--accent-purple)',
      quote: 'The schedule flexibility was key for me. I completed the course while working full-time, and transitioning into our analytics department was seamless.',
      stars: 5,
      yOffset: 0,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section soft-sky-gradient">
      <div className="container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-badge font-bold">Reviews</span>
          <h2 className="section-title">What our students say</h2>
          <p className="section-subtitle">
            Thousands of graduates have transformed their professional futures using our platform.
          </p>
        </div>

        {/* Soft Floating Grid */}
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              className="testimonial-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: review.id * 0.15 }}
              style={{ '--desktop-offset': `${review.yOffset}px` }}
            >
              <div className="quote-mark">
                <FaQuoteLeft size={24} />
              </div>
              
              <p className="testimonial-text">"{review.quote}"</p>
              
              <div className="stars-row">
                {[...Array(review.stars)].map((_, i) => (
                  <FaStar key={i} className="star-icon" size={14} />
                ))}
              </div>

              <div className="student-profile">
                <div 
                  className="student-avatar" 
                  style={{ backgroundColor: review.avatarBg }}
                >
                  {review.avatarText}
                </div>
                <div className="student-meta">
                  <h4 className="student-name">{review.name}</h4>
                  <span className="student-role">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .testimonials-section {
          padding: 120px 0;
          overflow: hidden;
        }

        .testimonials-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 80px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Floating offset grid on desktops */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          padding-bottom: 30px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.7);
          padding: 40px 32px 32px 32px;
          border-radius: var(--radius-lg);
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(167, 216, 255, 0.2);
          box-shadow: var(--shadow-md);
          transform: translateY(var(--desktop-offset, 0));
        }

        .testimonial-card:hover {
          transform: translateY(calc(var(--desktop-offset, 0) - 8px));
        }

        .quote-mark {
          color: var(--primary);
          opacity: 0.5;
          margin-bottom: 20px;
        }

        .testimonial-text {
          font-size: 0.95rem;
          color: var(--dark-light);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
          color: var(--accent-yellow);
        }

        .student-profile {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .student-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          color: var(--dark);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          box-shadow: var(--shadow-sm);
        }

        .student-meta {
          display: flex;
          flex-direction: column;
        }

        .student-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--dark);
        }

        .student-role {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          
          .testimonial-card {
            transform: none !important; /* Remove float offset on tablets */
          }
          
          .testimonial-card:hover {
            transform: translateY(-6px) !important;
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .testimonials-section {
            padding: 80px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
