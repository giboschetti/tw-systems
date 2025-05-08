import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

// Value Card Icons
const VisionIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const TrustIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
  </svg>
);

const PeopleIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

export const WhoWeAreSection = () => {
  const { language } = useLanguage();
  
  // Value cards data
  const valueCards = language === 'en'
    ? [
        {
          icon: <VisionIcon />,
          title: "Vision & Mission",
          description: "Creating a future where railway projects bring joy, not stress."
        },
        {
          icon: <TrustIcon />,
          title: "Openness & Trust",
          description: "Building relationships based on transparency and mutual respect."
        },
        {
          icon: <PeopleIcon />,
          title: "People & Technology",
          description: "Putting humans at the center of technological innovation."
        }
      ]
    : [
        {
          icon: <VisionIcon />,
          title: "Vision & Mission",
          description: "Eine Zukunft schaffen, in der Bahnprojekte Freude machen, nicht Stress verursachen."
        },
        {
          icon: <TrustIcon />,
          title: "Vertrauen & Sicherheit",
          description: "Beziehungen aufbauen, die auf Transparenz und gegenseitigem Respekt basieren."
        },
        {
          icon: <PeopleIcon />,
          title: "Menschen & Technologie",
          description: "Menschen in den Mittelpunkt der technologischen Innovation stellen."
        }
      ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 font-montserrat">
            {language === 'en' ? 'Who We Are' : 'Wer wir sind'}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-4 font-opensans">
            {language === 'en'
              ? 'At TrackWise Systems, we\'re a passionate team bridging the railway industry with innovative technology. We deeply understand the challenges railway projects face every day because we\'ve been there ourselves.'
              : 'Bei TrackWise Systems sind wir ein leidenschaftliches Team, das die Bahnbranche mit innovativer Technologie verbindet. Wir verstehen die täglichen Herausforderungen von Bahnprojekten, weil wir sie selbst erlebt haben.'}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 font-opensans">
            {language === 'en'
              ? 'Our goal is simple yet meaningful: to create technology that makes railway construction smarter, more human-centered, and less stressful—because every successful project strengthens the communities it serves.'
              : 'Unser Ziel ist einfach und doch bedeutsam: Technologie zu entwickeln, die den Bahnbau intelligenter, menschenzentrierter und weniger stressig macht – denn jedes erfolgreiche Projekt stärkt die Gemeinschaften, denen es dient.'}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary text-center"
            >
              <div className="flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-darkBlue font-montserrat">{card.title}</h3>
              <p className="text-gray-600 font-opensans">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};