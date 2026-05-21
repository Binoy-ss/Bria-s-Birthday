import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import Trust from './sections/Trust';
import Features from './sections/Features';
import Categories from './sections/Categories';
import Skills from './sections/Skills';
import Testimonials from './sections/Testimonials';
import ContentSplit from './sections/ContentSplit';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

// Global App Content Component that consumes Context
const AppContent = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <>
      {/* Structural Glassmorphic Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Single Page Sections */}
      <Hero onOpenAuth={handleOpenAuth} />
      <Trust />
      <Features />
      <ContentSplit />
      <Categories onOpenAuth={handleOpenAuth} />
      <Skills />
      <Testimonials />
      <CTA onOpenAuth={handleOpenAuth} />

      {/* Minimal Footer */}
      <Footer />

      {/* Overlay Modals & Widgets */}
      <WhatsAppButton 
        phoneNumber="918281294542" 
        message="Hi! I am interested in learning more about Breathough courses." 
      />
      
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        initialMode={authMode} 
      />
    </>
  );
};

// Main Wrapped Application
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
