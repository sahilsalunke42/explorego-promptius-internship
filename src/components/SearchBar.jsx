// searchbar component for the ExploreGo application
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
        navigate(`/explore?query=${encodeURIComponent(searchTerm)}`);
        }
    };
    
    return (
        <motion.div
        className="flex items-center justify-center mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <form onSubmit={handleSearch} className="flex w-full gap-1">
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for destinations..."
            className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700"
            />
            <button
            type="submit"
            className=" bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition-colors duration-300 border border-white hover:text-lg "
            >
            Search
            </button>
        </form>
        </motion.div>
    );
};

export default SearchBar;
