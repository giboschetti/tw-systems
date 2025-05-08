import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Icons
const MissionIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
);

const TrustIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
  </svg>
);

const ImprovementIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const RailwayIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
  </svg>
);

const TechnologyIcon = () => (
  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
  </svg>
);

// Testimonial data
const testimonials = [
  {
    name: "Thomas Müller",
    role: "Projektleiter, DB Netz AG",
    quote: "TrackWise Systems hat unsere Bauprozesse revolutioniert. Die Effizienzsteigerung ist bemerkenswert.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Laura Schmidt",
    role: "Head of Operations, SBB Infrastructure",
    quote: "Die Zusammenarbeit mit TW-Systems hat unsere Projektplanung auf ein neues Level gehoben.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Weber",
    role: "CEO, BauTech GmbH",
    quote: "Innovative Lösungen, die wirklich funktionieren. Ein verlässlicher Partner für die Digitalisierung im Bahnbau.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

export const AboutPage = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const { language } = useLanguage();
  const [parsedContent, setParsedContent] = useState<any>({
    intro: '',
    mission: '',
    values: []
  });

  useEffect(() => {
    // Fetch the markdown content
    fetch('/prompts/who_are_we.md')
      .then(response => response.text())
      .then(text => {
        setMarkdownContent(text);
      })
      .catch(error => {
        console.error('Error fetching markdown:', error);
      });
  }, []);

  // Function to extract content based on language
  const getLanguageContent = (content: string, lang: 'en' | 'de'): string => {
    if (!content) return '';
    
    // Split content by the language markers
    const englishMarker = 'ENGLISH';
    const deutschMarker = 'DEUTSCH';
    
    if (lang === 'en') {
      const englishStart = content.indexOf(englishMarker);
      const deutschStart = content.indexOf(deutschMarker);
      
      if (englishStart !== -1 && deutschStart !== -1) {
        return content.substring(englishStart + englishMarker.length, deutschStart).trim();
      }
    } else {
      const deutschStart = content.indexOf(deutschMarker);
      
      if (deutschStart !== -1) {
        return content.substring(deutschStart + deutschMarker.length).trim();
      }
    }
    
    return content;
  };

  // Parse the content when language or markdown content changes
  useEffect(() => {
    const content = getLanguageContent(markdownContent, language);
    
    if (content) {
      // Extract intro (first two paragraphs)
      const paragraphs = content.split('\n\n');
      const intro = paragraphs.slice(2, 4).join('\n\n');
      
      // Extract mission & vision
      const missionStart = language === 'en' 
        ? content.indexOf('Our Mission & Vision')
        : content.indexOf('Unsere Mission & Vision');
      const valuesStart = language === 'en'
        ? content.indexOf('Our Values')
        : content.indexOf('Unsere Werte');
      const mission = missionStart !== -1 && valuesStart !== -1 
        ? content.substring(missionStart, valuesStart).trim() 
        : '';
      
      // Extract values
      const values = valuesStart !== -1 
        ? content.substring(valuesStart).trim() 
        : '';
      
      // Parse values into array
      const valuesList = [];
      if (values) {
        const valuesLines = values.split('\n');
        let currentValue = { title: '', content: '' };
        
        for (let i = 1; i < valuesLines.length; i++) {
          const line = valuesLines[i].trim();
          if (line.match(/^\d+\./)) {
            if (currentValue.title) {
              valuesList.push(currentValue);
            }
            currentValue = { 
              title: line.replace(/^\d+\.\s+/, ''), 
              content: '' 
            };
          } else if (line && currentValue.title) {
            currentValue.content += line + ' ';
          }
        }
        
        if (currentValue.title) {
          valuesList.push(currentValue);
        }
      }
      
      setParsedContent({
        intro,
        mission,
        values: valuesList
      });
    }
  }, [markdownContent, language]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 font-montserrat">
              {language === 'en' ? 'Who We Are' : 'Wer wir sind'}
            </h1>
            <p className="text-xl mb-8 font-opensans">
              TrackWise Systems (TW-Systems)
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-light transition-colors font-montserrat"
              >
                {language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-light px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-white/10 transition-colors font-montserrat"
              >
                {language === 'en' ? 'Our Products' : 'Unsere Produkte'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section with Expertise Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Mission & Vision Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="flex items-center mb-6">
                <MissionIcon />
                <h2 className="text-3xl font-bold ml-4 text-darkBlue font-montserrat">
                  {language === 'en' ? 'Our Mission & Vision' : 'Unsere Mission & Vision'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 font-opensans">
                <ReactMarkdown>
                  {parsedContent.mission}
                </ReactMarkdown>
              </div>
            </motion.div>

            {/* Expertise Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-light"
                >
                  <RailwayIcon />
                  <h3 className="text-xl font-semibold mt-4 text-darkBlue font-montserrat">
                    {language === 'en' ? 'Railway Expertise' : 'Bahn-Expertise'}
                  </h3>
                  <p className="text-gray-600 mt-2 font-opensans">
                    {language === 'en' 
                      ? 'Deep understanding of railway construction challenges' 
                      : 'Tiefes Verständnis der Herausforderungen im Bahnbau'}
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-light"
                >
                  <TechnologyIcon />
                  <h3 className="text-xl font-semibold mt-4 text-darkBlue font-montserrat">
                    {language === 'en' ? 'Technology Focus' : 'Technologie-Fokus'}
                  </h3>
                  <p className="text-gray-600 mt-2 font-opensans">
                    {language === 'en' 
                      ? 'Cutting-edge solutions for complex problems' 
                      : 'Innovative Lösungen für komplexe Probleme'}
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md col-span-2 border border-light"
                >
                  <div className="flex items-center">
                    <svg className="w-12 h-12 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold text-darkBlue font-montserrat">
                        {language === 'en' ? 'Human-Centered Approach' : 'Menschenzentrierter Ansatz'}
                      </h3>
                      <p className="text-gray-600 mt-1 font-opensans">
                        {language === 'en' 
                          ? 'Solutions designed with users in mind' 
                          : 'Lösungen mit Fokus auf die Bedürfnisse der Anwender'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-darkBlue font-montserrat">
              {language === 'en' ? 'Our Values' : 'Unsere Werte'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-opensans">
              {language === 'en' 
                ? 'The principles that guide our work and relationships' 
                : 'Die Grundsätze, die unsere Arbeit und Beziehungen leiten'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {parsedContent.values.map((value: any, index: number) => {
              const icons = [<ProjectsIcon key="projects" />, <TrustIcon key="trust" />, <ImprovementIcon key="improvement" />];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary"
                >
                  <div className="mb-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-darkBlue font-montserrat">{value.title}</h3>
                  <p className="text-gray-600 font-opensans">{value.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light bg-opacity-30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-darkBlue font-montserrat">
              {language === 'en' ? 'What Our Clients Say' : 'Was unsere Kunden sagen'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-opensans">
              {language === 'en' 
                ? 'Hear from the professionals who trust our solutions' 
                : 'Erfahren Sie, was die Fachleute sagen, die unseren Lösungen vertrauen'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg relative border border-light"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="pt-10">
                  <p className="text-gray-600 italic mb-6 font-opensans">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-bold text-darkBlue font-montserrat">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm font-opensans">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;