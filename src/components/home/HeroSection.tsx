import { motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    // Ensure video plays automatically when loaded
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative text-white h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/logos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1
            className="text-5xl font-bold mb-6 text-white drop-shadow-lg font-montserrat"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.4)'
            }}
          >
            {language === 'en'
              ? 'Creating Better Railway Projects Together'
              : 'Gemeinsam bessere Bahnprojekte gestalten'}
          </h1>
          <p
            className="text-xl mb-8 text-gray-100 drop-shadow-md font-opensans"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.4)'
            }}
          >
            {language === 'en'
              ? 'We\'re passionate about bringing people and technology together to create railway projects that work better for everyone involved.'
              : 'Wir bringen Menschen und Technologie zusammen, um Bahnprojekte zu schaffen, die für alle Beteiligten besser funktionieren.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent transition-colors font-montserrat"
            >
              {language === 'en' ? 'Join Us' : 'Mitmachen'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-light px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white/10 transition-colors font-montserrat"
            >
              {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
            </motion.button>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};