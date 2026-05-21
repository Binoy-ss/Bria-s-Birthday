import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiBook, FiChevronRight } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const Categories = ({ onOpenAuth }) => {
  const { user } = useContext(AuthContext);

  const courses = [
    {
      id: 4,
      title: 'IELTS Success Blueprint',
      category: 'IELTS',
      duration: '8 Weeks',
      lessons: 28,
      price: '$299',
      rating: '4.8',
      badge: 'High Demand',
      badgeClass: 'badge-new',
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)',
    },
    {
      id: 5,
      title: 'Civil Services Preparation',
      category: 'Civil Services',
      duration: '14 Weeks',
      lessons: 52,
      price: '$699',
      rating: '4.7',
      badge: 'Premium',
      badgeClass: 'badge-premium',
      gradient: 'linear-gradient(135deg, #DBEAFE 0%, #3B82F6 100%)',
    },
    {
      id: 6,
      title: 'Competitive Exam Mastery',
      category: 'Other Competitive Exams',
      duration: '10 Weeks',
      lessons: 36,
      price: '$399',
      rating: '4.8',
      badge: 'Popular',
      badgeClass: 'badge-hot',
      gradient: 'linear-gradient(135deg, #FEE2E2 0%, #EF4444 100%)',
    },
  ];

  const handleEnroll = (courseTitle) => {
    if (!user) {
      onOpenAuth('login');
    } else {
      alert(`Success! You have enrolled in "${courseTitle}". Welcome aboard!`);
    }
  };

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="courses-header">
          <div className="header-left">
            <span className="section-badge">Featured Courses</span>
            <h2 className="section-title">Explore our popular courses</h2>
          </div>
          <div className="courses-note">Online and offline classes available</div>
          <p className="courses-subtitle">
            Acquire industry-standard skills with expert-led training programs curated specifically to guarantee your long-term success.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <motion.div 
              key={course.id} 
              className="course-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: course.id * 0.1 }}
            >
              {/* Course Image / Visual */}
              <div className="course-banner" style={{ background: course.gradient }}>
                <span className={`course-badge ${course.badgeClass}`}>{course.badge}</span>
                <div className="course-visual-content">
                  <h3>{course.category}</h3>
                </div>
              </div>

              {/* Course Details */}
              <div className="course-info">
                <span className="course-cat-tag">{course.category}</span>
                <h4 className="course-card-title">{course.title}</h4>
                
                <div className="course-stats-row">
                  <div className="course-stat">
                    <FiClock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-stat">
                    <FiBook size={16} />
                    <span>{course.lessons} Lessons</span>
                  </div>
                </div>

                <hr className="card-divider" />

                <div className="course-footer">
                  <div className="course-price-block">
                    <span className="price-label">Price</span>
                    <span className="price-value">{course.price}</span>
                  </div>
                  <button 
                    onClick={() => handleEnroll(course.title)} 
                    className="btn btn-primary btn-enroll"
                  >
                    <span>Enroll Now</span>
                    <FiChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .courses-section {
          padding: 100px 0;
          background-color: var(--secondary-bg);
        }

        .courses-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
          gap: 40px;
        }

        .header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .courses-note {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 12px;
        }

        .courses-subtitle {
          max-width: 500px;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* 3 -> 2 -> 1 Responsive Grid */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .course-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: white;
          display: flex;
          flex-direction: column;
        }

        .course-banner {
          height: 200px;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .course-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .badge-hot {
          background-color: #EF4444;
          color: white;
        }

        .badge-new {
          background-color: #10B981;
          color: white;
        }

        .badge-premium {
          background-color: #8B5CF6;
          color: white;
        }

        .course-visual-content h3 {
          font-size: 1.8rem;
          font-weight: 800;
          opacity: 0.85;
          letter-spacing: -0.5px;
          color: white;
        }

        .course-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .course-cat-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-dark);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .course-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 16px;
          color: var(--dark);
          min-height: 50px;
        }

        .course-stats-row {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .course-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .card-divider {
          border: 0;
          height: 1px;
          background-color: var(--border-color);
          margin-bottom: 20px;
        }

        .course-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .course-price-block {
          display: flex;
          flex-direction: column;
        }

        .price-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .price-value {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--dark);
        }

        .btn-enroll {
          padding: 10px 18px;
          font-size: 0.85rem;
          gap: 6px;
          border-radius: var(--radius-md);
        }

        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .courses-header {
            flex-direction: column;
            align-items: start;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;
