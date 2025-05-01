import React from 'react';
import { motion } from 'framer-motion';

const SchnelleAbrechnung = () => {
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
              <rect x="5" y="5" width="30" height="30" rx="4" fill="#f59e0b" />
              <path d="M15 15h10M15 20h10M15 25h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <h1 className="text-3xl font-bold text-primary">Schnelle Abrechnung von Bauleistungen mit Extract</h1>
          </div>
          
          <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-lg"><span className="font-semibold">Status:</span> In Kürze verfügbar</p>
            <p className="text-lg"><span className="font-semibold">Für wen:</span> Bauunternehmen</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beschreibung</h2>
            <p className="text-lg mb-4 text-gray-700">
              Bauleistungen werden oft durch lange und komplexe Leistungspositionen in
              Verträgen beschrieben, was die Ermittlung von abrechenbaren Mengen erschwert.
              Das führt zu verspäteten und unvollständigen Abrechnungen – mit negativen
              Auswirkungen auf den Cashflow des Bauunternehmens und fehlender
              Kostentransparenz im Projekt.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Extract ist ein OCR- und KI-gestütztes Tool, das Skizzen, Notizen vom
              Polier sowie Bautagesberichte liest, diese mit den vertraglichen
              Leistungspositionen abgleicht und die Mengen für die Abrechnung generiert.
              Unsere Spezialisten prüfen die Ergebnisse sorgfältig und liefern Ihnen in
              Rekordzeit die fertige Abrechnung sowie einen Überblick über die aktuellen
              Projektkosten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Was wir benötigen (Input)</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Bautagesberichte</li>
                <li>Skizzen & Notizen vom Polier</li>
                <li>Vertragliche Leistungspositionen (ohne Preise)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Was wir liefern (Output)</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Tabelle mit den abzurechnenden Positionen & Mengen</li>
                <li>Bericht über den aktuellen Projektkostenstand</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:info@tw-systems.com?subject=Anfrage%20zu%20Extract"
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

export default SchnelleAbrechnung;