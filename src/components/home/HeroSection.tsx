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
            className="text-5xl font-bold mb-6 text-white drop-shadow-lg"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.4)'
            }}
          >
            {language === 'en'
              ? 'Digital Solutions for a Strong Railway Industry'
              : 'Digitale Lösungen für eine starke Bahnindustrie'}
          </h1>
          <p
            className="text-xl mb-8 text-gray-100 drop-shadow-md"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.4)'
            }}
          >
            {language === 'en'
              ? 'We combine railway expertise with cutting-edge technology to make railway projects more efficient, safer, and stress-free.'
              : 'Wir verbinden Bahn-Know-how mit modernster Technologie, um Bahnprojekte effizienter, sicherer und stressfreier zu machen.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-darkBlue px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
            >
              {language === 'en' ? 'Get Started' : 'Loslegen'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white/10 transition-colors"
            >
              {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
            </motion.button>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};