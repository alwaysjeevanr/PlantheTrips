import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import DestinationsSection from './components/DestinationsSection.jsx';
import AdvantagesSection from './components/AdvantagesSection.jsx';
import PackagesSection from './components/PackagesSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DestinationsSection />
      <AdvantagesSection />
      <PackagesSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;