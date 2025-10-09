import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="bg-brand-dark font-sans text-brand-light">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;