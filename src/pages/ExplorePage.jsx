// Explore page containing a carousel of places
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';

const ExplorePage = () => {
    return (
        <div id='explore' className=" min-h-screen sm:h-[80vh] flex flex-col bg-gradient-to-r from-green-100 to-green-200 items-center justify-center">
      <div id='explore' className="min-h-screen sm:h-[80vh] flex flex-col bg-gradient-to-r from-green-100 to-green-200 items-center justify-center relative">
          <motion.div
              className="container mx-auto px-4 py-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
              <h1 className="py-8 text-3xl font-semibold text-center">Explore Amazing Places!</h1>
              <Carousel />
          </motion.div>
      </div>
    </div>
    );
}
export default ExplorePage;