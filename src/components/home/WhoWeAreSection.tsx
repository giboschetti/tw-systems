import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const WhoWeAreSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' ? 'Who We Are' : 'Wer wir sind'}
            </h2>
            <p className="text-gray-600 mb-4">
              {language === 'en'
                ? 'TW-Systems is a leading provider of digital solutions for the construction industry. With over a decade of experience, we understand the unique challenges faced by construction professionals.'
                : 'TW-Systems ist ein führender Anbieter von digitalen Lösungen für die Baubranche. Mit über einem Jahrzehnt Erfahrung verstehen wir die besonderen Herausforderungen von Bauprofis.'}
            </p>
            <p className="text-gray-600 mb-6">
              {language === 'en'
                ? 'Our mission is to digitize and optimize construction processes to make them more efficient, transparent, and sustainable for all stakeholders.'
                : 'Unsere Mission ist die Digitalisierung und Optimierung von Bauprozessen, um sie effizienter, transparenter und nachhaltiger für alle Beteiligten zu gestalten.'}
            </p>
            <ul className="space-y-3">
              {(language === 'en' ? [
                '1️⃣ 🌍 Vision & Mission: We revolutionize railway construction – more efficient, stress-free, sustainable.',
                '2️⃣ 🔒 Trust & Security: Data security and transparency are our top priorities.',
                '3️⃣ ⚙️ Expertise & Progress: Railway construction expertise combined with innovative technology.',
              ] : [
                '1️⃣ 🌍 Vision & Mission: Wir revolutionieren den Bahnbau – effizienter, stressfreier, nachhaltiger.',
                '2️⃣ 🔒 Vertrauen & Sicherheit: Datensicherheit und Transparenz stehen bei uns an erster Stelle.',
                '3️⃣ ⚙️ Kompetenz & Fortschritt: Bahnbau-Expertise kombiniert mit innovativer Technologie.',
              ]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <span className="text-gray-400">
                  {language === 'en' ? 'Company Image' : 'Firmenbild'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};