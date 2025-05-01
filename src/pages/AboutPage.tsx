import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export const AboutPage = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [language, setLanguage] = useState<'en' | 'de'>('en');

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

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8 flex justify-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                language === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage('de')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                language === 'de'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Deutsch
            </button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>
            {getLanguageContent(markdownContent, language)}
          </ReactMarkdown>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;