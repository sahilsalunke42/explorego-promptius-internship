import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-20 sm:py-28 flex items-center justify-center"
    >

      <div className="absolute top-8 left-12 opacity-20 pointer-events-none">
        <img src="/adventure.svg" alt="adventure" className="h-28" />
      </div>
      <div className="absolute top-20 right-16 opacity-20 pointer-events-none">
        <img src="/exploring.svg" alt="exploring" className="h-28" />
      </div>
      <div className="absolute bottom-12 left-16 opacity-20 pointer-events-none">
        <img src="/travel-booking.svg" alt="travel-booking" className="h-28" />
      </div>
      <div className="absolute bottom-10 right-12 opacity-20 pointer-events-none">
        <img src="/world.svg" alt="world" className="h-28" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative p-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About ExploreGo
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          ExploreGo is your gateway to discovering unforgettable journeys across the globe.
          We bring together the best destinations, curated experiences, and simple booking to
          help you explore the world with confidence and ease.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
