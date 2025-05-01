import React from 'react';
import { motion } from 'framer-motion';

const RailLogistics = () => {
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
            <img
              src="https://morojtanzdqtuwyxulsa.supabase.co/storage/v1/object/public/brand//Raillog_Nur_Zug.png"
              alt="Raillog.app Logo"
              className="h-12 w-12 mr-4"
            />
            <h1 className="text-3xl font-bold text-primary">Rail Logistics mit Raillog.app</h1>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-lg"><span className="font-semibold">Website:</span> <a href="https://raillog.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">raillog.app</a></p>
            <p className="text-lg"><span className="font-semibold">Für wen:</span> Bauherr, Bauunternehmen</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beschreibung</h2>
            <p className="text-lg mb-4 text-gray-700">
              Bahnprojekte erfordern häufig die Verwaltung einer großen Anzahl von
              Materialwagen und Baumaschinen. In Kombination mit komplexen
              Sperrpausen, benachbarten Baustellen und begrenztem Gleisraum wird die
              Logistik schnell zur Herausforderung. Konflikte, Stress und Verzögerungen
              sind oft die Folge.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Raillog wurde entwickelt, um volle Kontrolle und Übersicht bei der
              Planung komplexer Baustellen zu gewährleisten. Dieses kollaborative
              Tool, kombiniert mit der Expertise unserer Spezialisten, liefert messbare
              Ergebnisse für Ihr Projekt. Unser Fachpersonal übernimmt die komplette
              Verantwortung: Sie sammeln die notwendigen Informationen, pflegen die
              Daten in die App ein und koordinieren die Abstimmung mit allen
              Beteiligten (Bauunternehmen, Gleisbesitzer, Lieferanten und
              Bauherren). Nach Freigabe durch alle Beteiligten wird die Planung
              umgesetzt. Das Tool ermöglicht allen Stakeholdern die Visualisierung des
              Plans per Mobile-App und Webbrowser.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Was wir benötigen (Input)</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Informationen zur Gleisverfügbarkeit</li>
                <li>Einschränkungen und Sperrpausen</li>
                <li>Bauprogramm</li>
                <li>Geplante An- und Abfahrten</li>
                <li>Sonstige Restriktionen</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Was wir liefern (Output)</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Koordination der Logistik mit allen relevanten Beteiligten</li>
                <li>Vollständiger Zugang zur Planung über die Raillog.app</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:info@tw-systems.com?subject=Anfrage%20zu%20Raillog.app"
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

export default RailLogistics;