import React from 'react';
import { motion } from 'framer-motion';

const ConExpert = () => {
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
              <rect x="5" y="5" width="30" height="30" rx="4" fill="#ef4444" />
              <path d="M15 15l10 10M25 15l-10 10M13 20h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <h1 className="text-3xl font-bold text-primary">ConExpert</h1>
          </div>
          
          <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-lg"><span className="font-semibold">Status:</span> In Kürze verfügbar</p>
            <p className="text-lg"><span className="font-semibold">Für wen:</span> Bauherr, Bauunternehmen</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beschreibung</h2>
            <p className="text-lg mb-4 text-gray-700">
              Sie kennen das sicher: Eine komplexe Bausituation – aber welche Bauweise
              und Maschine ist die effizienteste und kostengünstigste Lösung? Genau hier
              setzt ConExpert an. Sie schildern uns Ihr Bauproblem, und unsere Künstliche
              Intelligenz, gestützt auf eine umfassende Lösungssammlung, liefert Ihnen in
              Rekordzeit das optimale Verfahren.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Dabei werden u.a. folgende Faktoren berücksichtigt:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Logistische Erreichbarkeit</li>
              <li>Verfügbare Bauzeit</li>
              <li>Maschinenleistung & Materialmenge</li>
              <li>Sperrpausen</li>
              <li>Sicherheitsanforderungen</li>
              <li>Platzverhältnisse auf den Gleisen & in der Montagefläche</li>
            </ul>
            
            <p className="text-lg mb-4 text-gray-700">
              Das Ergebnis: Ein detailliertes Konzept, wie das Bauobjekt am besten
              realisiert werden kann. Ideal für die frühen Projektphasen (z.B. bei der
              Bauablauf- & Kostenplanung) sowie für Bauunternehmen, die in der
              Kalkulationsphase oder während der Ausführung nach der besten Lösung
              suchen. Unser Fachteam prüft jede vorgeschlagene Lösung sorgfältig auf
              Praxistauglichkeit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Was wir benötigen (Input)</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Beschreibung & Skizzen des Bauvorhabens</li>
                <li>Zeitrahmen</li>
                <li>Logistische Einschränkungen</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Was wir liefern (Output)</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Dokumentiertes Konzept inkl. Maschinenwahl</li>
                <li>Skizze des Bauablaufs</li>
                <li>Berechnungen zur Produktionsleistung</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:info@tw-systems.com?subject=Anfrage%20zu%20ConExpert"
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

export default ConExpert;