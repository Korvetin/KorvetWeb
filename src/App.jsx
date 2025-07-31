// File: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/servicepages';
import OffersPage from './pages/OffersPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage'; 
import TeamPage from './pages/TeamPage';
import LaunchPage from './pages/LaunchPage';
import TechnicalInternship from './pages/TechnicalInternship';
import DesignLead from './pages/DesignLead';
import ResearchInternship from './pages/ResearchInternship';
import MarketingInternship from './pages/MarketingInternship';
import HackathonPartnership from './pages/HackathonPartnership';
import LoginPage from './pages/Login';
import PartnerNow from './pages/PartnerNow';

// Service Detail Pages
import WebDevService from './pages/WebDevService';
import AppDevService from './pages/AppDevService';
import UIDesignService from './pages/UIDesignService.jsx';
import AiMlService from './pages/AiMlService';
import CloudService from './pages/CloudService';
import ConsultingService from './pages/ConsultingService';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/team" element={<TeamPage />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/apply/technical-internship" element={<TechnicalInternship />} />
        <Route path="/apply/design-lead" element={<DesignLead />} />
        <Route path="/apply/research-internship" element={<ResearchInternship />} />
        <Route path="/apply/marketing-internship" element={<MarketingInternship />} />
        <Route path="/apply/hackathon-partnership" element={<HackathonPartnership />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apply/partner-now" element={<PartnerNow />} />

        {/* Service Detail Pages */}
        <Route path="/services/web-development" element={<WebDevService />} />
        <Route path="/services/app-development" element={<AppDevService />} />
        <Route path="/services/ui-ux-design" element={<UIDesignService />} />
        <Route path="/services/ai-ml" element={<AiMlService />} />
        <Route path="/services/cloud-devops" element={<CloudService />} />
        <Route path="/services/consulting" element={<ConsultingService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;