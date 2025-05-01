import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Logo components
const RaillogLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <img
      src="https://morojtanzdqtuwyxulsa.supabase.co/storage/v1/object/public/brand//Raillog_Nur_Zug.png"
      alt="Raillog.app Logo"
      className="h-10 w-10 mr-2"
    />
    <span className="ml-2 text-2xl font-bold text-slate-800">Raillog.app</span>
  </div>
);



const ConlabLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#f97316" />
      <path d="M20 10v20M14 20h12M27 10v20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800">Conlab</span>
  </div>
);

const ExtractLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#f59e0b" />
      <path d="M15 15h10M15 20h10M15 25h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800">Extract</span>
  </div>
);

const ProjFinderLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#10b981" />
      <path d="M20 10v5M20 25v5M10 20h20M15 15l10 10M25 15l-10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800">Proj-Finder</span>
  </div>
);

const ConExpertLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#ef4444" />
      <path d="M15 15l10 10M25 15l-10 10M13 20h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800">ConExpert</span>
  </div>
);

const products = [
  {
    title: 'Raillog.app',
    description: 'Volle Kontrolle über die Bahnlogistik – einfache Planung & Koordination von Maschinen und Materialtransporten auf Ihrer Baustelle.',
    path: '/products/rail-logistics/raillog-app',
    logo: RaillogLogo,
    status: { text: "Verfügbar", color: "green" }
  },
  {
    title: 'Conlab',
    description: 'Reibungslose Bauzeitenplanung für komplexe Bahnprojekte – Echtzeit-Übersicht & Zusammenarbeit für alle Beteiligten.',
    path: '/products/stakeholder-planung/conlab',
    logo: ConlabLogo,
    status: { text: "In Kürze verfügbar", color: "orange" }
  },
  {
    title: 'Extract',
    description: 'Schnelle Abrechnung dank KI – wir machen aus Skizzen und Notizen fertige Rechnungen und Kostenübersichten.',
    path: '/products/abrechnung/extract',
    logo: ExtractLogo,
    status: { text: "In Kürze verfügbar", color: "orange" }
  },
  {
    title: 'Proj-Finder',
    description: 'Wir finden Ihre nächsten Kunden – intelligente Ausschreibungssuche für Lieferanten von Bahnprodukten & Dienstleistungen.',
    path: '/products/kundenliste/proj-finder',
    logo: ProjFinderLogo,
    status: { text: "In Kürze verfügbar", color: "orange" }
  },
  {
    title: 'ConExpert',
    description: 'Die optimale Bauweise finden – unser KI-gestütztes Tool entwickelt das effizienteste Konzept für Ihr Bahnprojekt.',
    path: '/products/bauberatung/conexpert',
    logo: ConExpertLogo,
    status: { text: "In Kürze verfügbar", color: "orange" }
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Unsere Tools & Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg relative"
              >
                {product.status && (
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-semibold text-white ${
                      product.status.color === 'green' ? 'bg-green-500' : 'bg-amber-400'
                    }`}
                  >
                    {product.status.text}
                  </div>
                )}
                <product.logo />
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to={product.path}
                  className="text-primary font-semibold hover:text-secondary"
                >
                  Mehr erfahren →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};