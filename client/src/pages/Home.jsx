import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import home from '../assets/heroBackground.jpg';
import AboutSection from './About';
import SearchBar from '../components/SearchBar';
import ExplorePage from './ExplorePage';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <div className="relative">
            <motion.div
                className="hero-section h-[85vh] sm:h-[85vh] md:min-h-[90vh] max-h-screen bg-center flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-12 text-center"
                style={{
                    backgroundImage: `url(${home})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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
                    <Navbar />
                </motion.div>
                <div className="absolute top-19 w-screen mx-auto px-4 mb-4">
                    <SearchBar />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
                    className="mt-28 sm:mt-32 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                >
                    Welcome to ExploreGo
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
                    className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl"
                >
                    Discover the world with us and explore new horizons. <br className="hidden sm:inline" />
                    Let your journey begin!
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.7 }}
                >
                    <a
                        href="#explore"
                        className="bg-gradient-to-r from-green-500 to-green-300 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow border border-green-500 hover:text-lg transition-all duration-300 ease-in-out"
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
