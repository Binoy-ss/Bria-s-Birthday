import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const videos = useMemo(() => [
    {
      id: 1,
      title: 'Interactive Exam Strategies',
      subtitle: 'Short clips to sharpen your preparation.',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      poster: 'https://via.placeholder.com/640x512.png?text=Exam+Preview+1',
    },
    {
      id: 2,
      title: 'Live Classroom Highlights',
      subtitle: 'Experience our learning environment in motion.',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/stream.mp4',
      poster: 'https://via.placeholder.com/640x512.png?text=Video+Preview+2',
    },
    {
      id: 3,
      title: 'Success Stories',
      subtitle: 'Real-world outcomes from our students.',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://via.placeholder.com/640x512.png?text=Video+Preview+3',
    },
  ], []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = React.useRef(null);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    autoplayTimer.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 4200);

    return () => window.clearInterval(autoplayTimer.current);
  }, [isPaused, videos.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <span className="section-badge">Course Experience</span>
          <h2 className="section-title">Preview our learning videos</h2>
          <p className="section-subtitle">
            Watch short, auto-playing cards that highlight our learning style and curriculum pathways.
          </p>
        </div>

        <div
          className="video-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="carousel-nav carousel-nav-prev" onClick={handlePrev} aria-label="Previous video">
            ‹
          </button>

          <div className="video-track-wrapper">
            <div className="video-track">
              {videos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  className={`video-card ${activeIndex === idx ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="video-frame">
                    <video
                      src={video.src}
                      poster={video.poster}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="video-element"
                    />
                  </div>
                  <div className="video-meta">
                    <h3>{video.title}</h3>
                    <p>{video.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button className="carousel-nav carousel-nav-next" onClick={handleNext} aria-label="Next video">
            ›
          </button>
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 100px 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F9FF 100%);
        }

        .skills-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .video-carousel {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .video-track-wrapper {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          flex: 1;
        }

        .video-track {
          display: inline-flex;
          gap: 24px;
          padding-bottom: 8px;
        }

        .video-card {
          scroll-snap-align: center;
          min-width: 320px;
          max-width: 360px;
          width: 100%;
          aspect-ratio: 5 / 4;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .video-card.active {
          transform: translateY(-6px);
          box-shadow: 0 32px 68px rgba(15, 23, 42, 0.14);
        }

        .video-frame {
          position: relative;
          flex: 1 1 0;
          background: #000;
        }

        .video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-meta {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .video-meta h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--dark);
          line-height: 1.3;
        }

        .video-meta p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .carousel-nav {
          width: 46px;
          min-width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
          font-size: 1.8rem;
          color: var(--dark);
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .carousel-nav:hover {
          transform: scale(1.05);
          background: #f8fafc;
        }

        @media (max-width: 1100px) {
          .video-card {
            min-width: 300px;
            max-width: 340px;
          }
        }

        @media (max-width: 860px) {
          .video-carousel {
            gap: 12px;
          }

          .carousel-nav {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 80px 0;
          }

          .skills-header {
            max-width: 520px;
          }
        }

        @media (max-width: 576px) {
          .video-track {
            gap: 16px;
          }

          .video-card {
            min-width: 280px;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
