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

function App() {
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

export default App;
