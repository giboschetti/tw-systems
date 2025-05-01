import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

// Import product pages
import RailLogistics from './pages/products/rail-logistics-mit-raillog-app';
import StakeholderBauzeitenplanung from './pages/products/stakeholder-bauzeitenplanung-mit-conlab';
import SchnelleAbrechnung from './pages/products/schnelle-abrechnung-von-bauleistungen-mit-extract';
import GezielteKundenliste from './pages/products/gezielte-kundenliste-mit-proj-finder';
import ConExpert from './pages/products/conexpert';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/bauherr" element={<BauherrPage />} />
          <Route path="/products/bauunternehmen" element={<BauunternehmenPage />} />
          <Route path="/products/lieferanten" element={<LieferantenPage />} />
          
          {/* Product specific routes */}
          <Route path="/products/rail-logistics/raillog-app" element={<RailLogistics />} />
          <Route path="/products/stakeholder-planung/conlab" element={<StakeholderBauzeitenplanung />} />
          <Route path="/products/abrechnung/extract" element={<SchnelleAbrechnung />} />
          <Route path="/products/kundenliste/proj-finder" element={<GezielteKundenliste />} />
          <Route path="/products/bauberatung/conexpert" element={<ConExpert />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Placeholder components - we'll create these in separate files later
const ContactPage = () => <div className="container mx-auto px-4 py-8">Contact Page</div>;
const BauherrPage = () => <div className="container mx-auto px-4 py-8">Bauherr Page</div>;
const BauunternehmenPage = () => <div className="container mx-auto px-4 py-8">Bauunternehmen Page</div>;
const LieferantenPage = () => <div className="container mx-auto px-4 py-8">Lieferanten Page</div>;

export default App;
