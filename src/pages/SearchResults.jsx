// page when people search for places or click on a place in the carousel
import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { motion } from 'framer-motion';
import { mockTrips } from '../utils/trips';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const filteredTrips = mockTrips.filter((trip) =>
    trip.destination.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {filteredTrips.map((trip) => (
          <div key={trip.id} className="border rounded-lg overflow-hidden">
            <img src={trip.image} alt={trip.destination} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{trip.destination}</h3>
              <p className="text-gray-600">{trip.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SearchResults;
