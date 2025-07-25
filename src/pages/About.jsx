import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id='about' className="relative bg-gradient-to-r from-green-200 to-green-100 py-12 sm:py-16 h-[650px] flex items-center justify-center">

      <div className="absolute top-10 left-20">
        <img src="/adventure.svg" alt="adventure" className="h-24" />
      </div>
      <div className="absolute top-20 right-18">
        <img src="/exploring.svg" alt="exploring" className="h-24" />
      </div>
      <div className="absolute bottom-15 left-15">
        <img src="/travel-booking.svg" alt="travel-booking" className="h-24" />
      </div>
      <div className="absolute bottom-25 right-10">
        <img src="/world.svg" alt="world" className="h-24" />
      </div>


      <div className="max-w-2xl mx-auto text-center relative z-10 p-8 ">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-green-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About ExploreGo
        </motion.h2>
        <motion.p
          className="text-slate-700 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          ExploreGo is your gateway to discovering unforgettable journeys across the globe. We bring together the best destinations, curated experiences, and simple booking to help you explore the world with confidence and ease.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
