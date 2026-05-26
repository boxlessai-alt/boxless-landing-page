import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerCarousel from './components/BannerCarousel';
import WhatYouGet from './components/WhatYouGet';
import Pricing from './components/Pricing';
import CaseStudies from './components/CaseStudies';
import HowItWorks from './components/HowItWorks';
import ApplicationForm from './components/ApplicationForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ThankYou from './pages/ThankYou';

function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <BannerCarousel />
      <WhatYouGet />
      <Pricing />
      <CaseStudies />
      <HowItWorks />
      <ApplicationForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
