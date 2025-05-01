import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';

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
        </Routes>
      </Layout>
    </Router>
  );
}

// Placeholder components - we'll create these in separate files later
const AboutPage = () => <div className="container mx-auto px-4 py-8">About Page</div>;
const ContactPage = () => <div className="container mx-auto px-4 py-8">Contact Page</div>;
const BauherrPage = () => <div className="container mx-auto px-4 py-8">Bauherr Page</div>;
const BauunternehmenPage = () => <div className="container mx-auto px-4 py-8">Bauunternehmen Page</div>;
const LieferantenPage = () => <div className="container mx-auto px-4 py-8">Lieferanten Page</div>;

export default App;
