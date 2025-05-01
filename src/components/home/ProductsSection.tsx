import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Raillog.app',
    description: 'Volle Kontrolle über die Bahnlogistik – einfache Planung & Koordination von Maschinen und Materialtransporten auf Ihrer Baustelle.',
    path: '/products/raillog',
    icon: '🟦',
  },
  {
    title: 'Conlab',
    description: 'Reibungslose Bauzeitenplanung für komplexe Bahnprojekte – Echtzeit-Übersicht & Zusammenarbeit für alle Beteiligten.',
    path: '/products/conlab',
    icon: '🟧',
  },
  {
    title: 'Extract',
    description: 'Schnelle Abrechnung dank KI – wir machen aus Skizzen und Notizen fertige Rechnungen und Kostenübersichten.',
    path: '/products/extract',
    icon: '🟨',
  },
  {
    title: 'Proj-Finder',
    description: 'Wir finden Ihre nächsten Kunden – intelligente Ausschreibungssuche für Lieferanten von Bahnprodukten & Dienstleistungen.',
    path: '/products/proj-finder',
    icon: '🟩',
  },
  {
    title: 'ConExpert',
    description: 'Die optimale Bauweise finden – unser KI-gestütztes Tool entwickelt das effizienteste Konzept für Ihr Bahnprojekt.',
    path: '/products/conexpert',
    icon: '🟥',
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
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
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