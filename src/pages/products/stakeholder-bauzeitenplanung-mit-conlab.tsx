import React from 'react';
import { motion } from 'framer-motion';

const StakeholderBauzeitenplanung = () => {
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
              <rect x="5" y="5" width="30" height="30" rx="4" fill="#f97316" />
              <path d="M20 10v20M14 20h12M27 10v20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <h1 className="text-3xl font-bold text-primary">Stakeholder- & Bauzeitenplanung mit Conlab</h1>
          </div>
          
          <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
            <p className="text-lg"><span className="font-semibold">Status:</span> In Kürze verfügbar</p>
            <p className="text-lg"><span className="font-semibold">Für wen:</span> Bauherr, Bauunternehmen</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beschreibung</h2>
            <p className="text-lg mb-4 text-gray-700">
              Komplexe Bahnprojekte vereinen zahlreiche Fachbereiche: Gleisbau, Tiefbau,
              Sicherungsanlagen, Kabeldienste u.v.m. Diese müssen häufig gleichzeitig
              unter engen Sperrpausen zusammenarbeiten – eine bekannte Konfliktquelle
              im Projektverlauf.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Conlab ist ein kollaboratives und speziell auf Bahnprojekte zugeschnittenes
              Planungstool. Es liefert in Echtzeit eine klare Übersicht über den
              Bauzeitenplan, Sperrpausen und Ressourceneinsatz (Maschinen, Personal,
              Sicherungskräfte, Logistikpersonal etc.). So stellen wir sicher, dass
              alle Projektbeteiligten stets Zugriff auf die aktuellsten Informationen
              haben – sowohl zur Gesamtplanung als auch zu wichtigen Meilensteinen und
              Ressourcen.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Unsere Spezialisten sind verantwortlich für das Einholen und Pflegen aller
              Informationen zu Sperrpausen, Bauzeitenplänen und Ressourceneinsatz, um
              die Daten kontinuierlich aktuell zu halten. Eine Mobile-App sorgt zudem
              für die einfache Übersicht auf der Baustelle.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:info@tw-systems.com?subject=Anfrage%20zu%20Conlab"
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

export default StakeholderBauzeitenplanung;