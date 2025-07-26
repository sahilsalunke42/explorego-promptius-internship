import React from 'react';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';

const ExplorePage = () => {
    return (
        <div
            id="explore"
            className="min-h-screen sm:h-[80vh] flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200"
        >
            <motion.div
                className="flex flex-col justify-center items-center w-full h-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <section className="flex items-center justify-center text-3xl font-semibold text-center mb-10 text-green-900">
                    Explore Amazing Places!
                </section>
                <Carousel />
            </motion.div>
        </div>
    );
};

export default ExplorePage;
