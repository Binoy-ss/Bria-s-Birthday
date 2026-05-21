import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = '918281294542', message = 'Hi! I want to know more about Breathough courses.' }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick} 
      className="whatsapp-btn"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="tooltip-text">Chat with us!</span>

      <style>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 62px;
          height: 62px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 18px 36px rgba(37, 211, 102, 0.22);
          transition: transform 0.25s ease, background-color 0.25s ease;
          animation: whatsapp-pulse 2.4s ease-in-out infinite;
        }

        .whatsapp-btn:hover {
          transform: scale(1.08);
          background-color: #20BA5A;
        }

        .tooltip-text {
          visibility: hidden;
          width: 110px;
          background-color: rgba(15, 23, 42, 0.95);
          color: white;
          text-align: center;
          border-radius: var(--radius-sm);
          padding: 6px 10px;
          position: absolute;
          z-index: 1000;
          right: 76px;
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.2s ease;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.16);
        }

        .whatsapp-btn:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
        }

        .whatsapp-btn:active {
          transform: scale(0.96);
        }

        @keyframes whatsapp-pulse {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.02);
          }
        }
      `}</style>
    </button>
  );
};

export default WhatsAppButton;
