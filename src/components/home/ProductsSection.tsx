import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

// Logo components
const RaillogLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <img
      src="https://morojtanzdqtuwyxulsa.supabase.co/storage/v1/object/public/brand//Raillog_Nur_Zug.png"
      alt="Raillog.app Logo"
      className="h-10 w-10 mr-2"
    />
    <span className="ml-2 text-2xl font-bold text-slate-800 font-montserrat">Raillog.app</span>
  </div>
);



const ConlabLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#f97316" />
      <path d="M20 10v20M14 20h12M27 10v20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800 font-montserrat">Conlab</span>
  </div>
);

const ExtractLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#f59e0b" />
      <path d="M15 15h10M15 20h10M15 25h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800 font-montserrat">Extract</span>
  </div>
);

const ProjFinderLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#10b981" />
      <path d="M20 10v5M20 25v5M10 20h20M15 15l10 10M25 15l-10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800 font-montserrat">Proj-Finder</span>
  </div>
);

const ConExpertLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#ef4444" />
      <path d="M15 15l10 10M25 15l-10 10M13 20h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800 font-montserrat">ConExpert</span>
  </div>
);

const CustomSolutionLogo = () => (
  <div className="h-12 mb-4 flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#6366f1" />
      <path d="M15 15h10M15 20h5M20 20h5M15 25h10M20 12v16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="ml-2 text-2xl font-bold text-slate-800 font-montserrat">Customized Solution</span>
  </div>
);

const getProducts = (language: 'en' | 'de') => {
  const translations = {
    en: {
      raillog: {
        title: 'Raillog.app',
        description: 'Full control over railway logistics – easy planning & coordination of machines and material logistics on your construction site.',
        status: { text: "Available", color: "green" }
      },
      conlab: {
        title: 'Conlab',
        description: 'Smooth construction scheduling for complex railway projects – real-time overview & coordination for all stakeholders.',
        status: { text: "Coming soon", color: "orange" }
      },
      extract: {
        title: 'Extract',
        description: 'Fast invoicing thanks to AI – we turn sketches and notes into finished invoices and cost overviews.',
        status: { text: "Coming soon", color: "orange" }
      },
      projFinder: {
        title: 'Proj-Finder',
        description: 'We find your next customers – intelligent tender search for suppliers of railway products & services.',
        status: { text: "Coming soon", color: "orange" }
      },
      conExpert: {
        title: 'ConExpert',
        description: 'Find the optimal construction method – our AI-powered tool develops the most efficient concept for your railway project.',
        status: { text: "Coming soon", color: "orange" }
      },
      customized: {
        title: 'Customized Solution',
        description: 'Tailored solutions for your specific requirements – we develop individual concepts that perfectly fit your railway project.',
        status: { text: "Available", color: "green" }
      },
      learnMore: 'Learn more →'
    },
    de: {
      raillog: {
        title: 'Raillog.app',
        description: 'Volle Kontrolle über die Bahnlogistik – einfache Planung & Koordination von Maschinen und Materialtransporten auf Ihrer Baustelle.',
        status: { text: "Verfügbar", color: "green" }
      },
      conlab: {
        title: 'Conlab',
        description: 'Reibungslose Bauprogram.- und Fachdienstekoordination für komplexe Bahnprojekte – Echtzeit-Übersicht & Zusammenarbeit für alle Beteiligten.',
        status: { text: "In Kürze verfügbar", color: "orange" }
      },
      extract: {
        title: 'Extract',
        description: 'Schnelle Abrechnung dank KI – wir machen aus Skizzen und Notizen fertige Rechnungen und Kostenübersichten.',
        status: { text: "In Kürze verfügbar", color: "orange" }
      },
      projFinder: {
        title: 'Proj-Finder',
        description: 'Wir finden Ihre nächsten Kunden – intelligente Ausschreibungssuche für Lieferanten von Bahnprodukten & Dienstleistungen.',
        status: { text: "In Kürze verfügbar", color: "orange" }
      },
      conExpert: {
        title: 'ConExpert',
        description: 'Die optimale Bauweise finden – unser KI-gestütztes Tool entwickelt das effizienteste Konzept für Ihr Bahnprojekt.',
        status: { text: "In Kürze verfügbar", color: "orange" }
      },
      customized: {
        title: 'Customized Solution',
        description: 'Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen – wir entwickeln individuelle Konzepte, die perfekt zu Ihrem Bahnprojekt passen.',
        status: { text: "Verfügbar", color: "green" }
      },
      learnMore: 'Mehr erfahren →'
    }
  };

  const t = translations[language];

  return [
    {
      title: t.raillog.title,
      description: t.raillog.description,
      path: '/products/rail-logistics/raillog-app',
      logo: RaillogLogo,
      status: t.raillog.status
    },
    {
      title: t.conlab.title,
      description: t.conlab.description,
      path: '/products/stakeholder-planung/conlab',
      logo: ConlabLogo,
      status: t.conlab.status
    },
    {
      title: t.extract.title,
      description: t.extract.description,
      path: '/products/abrechnung/extract',
      logo: ExtractLogo,
      status: t.extract.status
    },
    {
      title: t.projFinder.title,
      description: t.projFinder.description,
      path: '/products/kundenliste/proj-finder',
      logo: ProjFinderLogo,
      status: t.projFinder.status
    },
    {
      title: t.conExpert.title,
      description: t.conExpert.description,
      path: '/products/bauberatung/conexpert',
      logo: ConExpertLogo,
      status: t.conExpert.status
    },
    {
      title: t.customized.title,
      description: t.customized.description,
      path: '/contact',
      logo: CustomSolutionLogo,
      status: t.customized.status
    },
  ];
};

export const ProductsSection = () => {
  const { language } = useLanguage();
  const products = getProducts(language);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">
            {language === 'en' ? 'Our Tools & Services' : 'Unsere Tools & Services'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg relative border border-light"
              >
                {product.status && (
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-semibold text-white font-montserrat ${
                      product.status.color === 'green' ? 'bg-secondary' : 'bg-accent'
                    }`}
                  >
                    {product.status.text}
                  </div>
                )}
                <product.logo />
                <p className="text-gray-600 mb-4 font-opensans">{product.description}</p>
                <Link
                  to={product.path}
                  className="text-primary font-semibold hover:text-secondary font-montserrat"
                >
                  {language === 'en' ? 'Learn more →' : 'Mehr erfahren →'}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};