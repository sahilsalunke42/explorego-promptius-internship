import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import home from '../assets/heroBackground.jpg';
import AboutSection from './About';
import SearchBar from '../components/SearchBar';
import ExplorePage from './ExplorePage';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="relative bg-white">
            <motion.div
                className="hero-section h-[85vh] sm:h-[85vh] md:min-h-[90vh] max-h-screen bg-center flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-12 text-center shadow-lg"
                style={{
                    backgroundImage: `url(${home})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.75)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
                <motion.div
                    className="absolute top-0 left-0 w-full z-10"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <Navbar colorScheme="light" />
                </motion.div>

                <div className="absolute top-20 w-screen mx-auto px-4 mb-6 max-w-xl">
                    <SearchBar placeholder="Where to?" />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
                    className="mt-28 sm:mt-32 text-5xl font-extrabold leading-tight max-w-4xl mx-auto"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
                >
                    Welcome to ExploreGo
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
                    className="mt-5 text-xl max-w-2xl mx-auto leading-relaxed"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
                >
                    Discover the world with us and explore new horizons. <br className="hidden sm:inline" />
                    Let your journey begin!
                </motion.p>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.7 }}
                >
                    <a
                        href="#explore"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-60"
                    >
                        Explore Now
                    </a>
                </motion.div>
            </motion.div>

            <ExplorePage />
            <AboutSection />
            <Footer />
        </div>
    );
};

export default Home;
