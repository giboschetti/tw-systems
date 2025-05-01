import React from 'react';
import { motion } from 'framer-motion';

const GezielteKundenliste = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <svg width="48" height="48" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="mr-4">
              <rect x="5" y="5" width="30" height="30" rx="4" fill="#10b981" />
              <path d="M20 10v5M20 25v5M10 20h20M15 15l10 10M25 15l-10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <h1 className="text-3xl font-bold text-primary">Gezielte Kundenliste mit Proj-Finder</h1>
          </div>
          
          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-lg"><span className="font-semibold">Status:</span> In Kürze verfügbar</p>
            <p className="text-lg"><span className="font-semibold">Für wen:</span> Lieferanten (Personal, Materialien & Dienstleistungen für die Bahnindustrie)</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beschreibung</h2>
            <p className="text-lg mb-4 text-gray-700">
              Für Lieferanten ist es zeitaufwendig und mühsam, potenzielle Kunden und
              Projekte stets aktuell zu halten. Der Proj-Finder ist ein intelligenter
              Scraper, der öffentliche Plattformen nach Ausschreibungen durchsucht, bei
              denen Ihre Produkte oder Dienstleistungen gefragt sind.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Wir finden Bahnprojekte, die innerhalb des nächsten Jahres umgesetzt werden,
              analysieren Bauzeitpläne und Leistungsbeschreibungen, prüfen die Eignung
              für Ihr Produkt und liefern Ihnen den passenden Ansprechpartner für Ihre
              Akquise.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Vorteile</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Gezielte Akquise bei passenden Projekten</li>
              <li>Zeitersparnis bei der Marktrecherche</li>
              <li>Frühzeitige Identifikation von Geschäftsmöglichkeiten</li>
              <li>Direkter Zugang zu relevanten Ansprechpartnern</li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:info@tw-systems.com?subject=Anfrage%20zu%20Proj-Finder"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Kontaktieren Sie uns für mehr Informationen
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GezielteKundenliste;