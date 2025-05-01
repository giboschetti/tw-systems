import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Digitale Lösungen für eine starke Bahnindustrie
          </h1>
          <p className="text-xl mb-8">
            Wir verbinden Bahn-Know-how mit modernster Technologie, um Bahnprojekte effizienter, sicherer und stressfreier zu machen.
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold"
            >
              Loslegen
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold"
            >
              Mehr erfahren
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};