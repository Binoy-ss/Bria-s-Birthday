import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUserCheck, FiTarget, FiSmartphone } from 'react-icons/fi';

const Features = () => {
  const benefits = [
    {
      icon: <FiBookOpen size={24} />,
      title: 'Practical Curriculum',
      description: 'Courses designed with real-world application in mind. Learn skills you can use immediately.',
      bg: 'var(--accent-teal-light)',
      color: 'var(--accent-teal)',
    },
    {
      icon: <FiUserCheck size={24} />,
      title: 'Expert Mentorship',
      description: 'Get guidance from leading industry specialists who walk beside you throughout your journey.',
      bg: 'var(--accent-purple-light)',
      color: 'var(--accent-purple)',
    },
    {
      icon: <FiTarget size={24} />,
      title: 'Flexible Schedules',
      description: 'Fit your learning around your career. Access lessons 24/7 on any desktop or mobile device.',
      bg: 'var(--accent-coral-light)',
      color: 'var(--accent-coral)',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <section id="features" className="features-section soft-sky-gradient">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Benefits</span>
          <h2 className="section-title">Designed for modern learners</h2>
          <p className="section-subtitle">
            We provide everything you need to successfully transition careers, secure promotions, or learn new technical fields.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              className="benefit-card glass-card"
              variants={cardVariants}
            >
              <div 
                className="icon-container" 
                style={{ backgroundColor: benefit.bg, color: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        .features-section {
          padding: 100px 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-badge {
          background-color: var(--secondary);
          color: var(--primary-dark);
          border: 1px solid var(--border-color);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
          box-shadow: var(--shadow-sm);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .benefit-card {
          padding: 40px 32px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .icon-container {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .benefit-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .benefit-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
