import React from 'react';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';

const ExplorePage = () => {
  return (
    <div
      id="explore"
      className="
        min-h-[60vh] 
        sm:min-h-[80vh] 
        md:min-h-[85vh] 
        lg:min-h-[80vh] 
        xl:min-h-[85vh] 
        flex items-center justify-center bg-gray-50
      "
    >
      <motion.div
        className="flex flex-col justify-center items-center w-full h-full px-4 max-w-6xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="flex items-center justify-center text-3xl font-semibold text-center mb-14 text-gray-900">
          Explore Amazing Places!
        </section>
        <Carousel />
      </motion.div>
    </div>
  );
};

export default ExplorePage;
