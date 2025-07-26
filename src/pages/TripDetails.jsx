// TripDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchTripDetails } from '../hooks/fetchTripDetails';
import Loader from '../components/Loader';

const TripDetails = () => {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setTrip(null);
        setError(null);
        setLoading(true);

        Promise.all([
            fetchTripDetails(tripId)
                .then((data) => isMounted && setTrip(data))
                .catch((e) => isMounted && setError(e.message)),
            new Promise((resolve) => setTimeout(resolve, 1500))
        ]).then(() => {
            if (isMounted) setLoading(false);
        });

        return () => { isMounted = false; };
    }, [tripId]);

    if (loading) return <Loader />;
    if (error || !trip) return <div>404 Not Found</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>{trip.destination}</h1>
            <p>{trip.description}</p>
            <img src={trip.image} alt={trip.destination} className="w-full h-64 object-cover rounded-lg" />
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Itinerary</h2>
                <ul className="list-disc pl-5">
                    {trip.itinerary.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <p className="text-lg font-bold">Price: ${trip.price}</p>
                <p className="text-sm text-gray-600">Duration: {trip.duration}</p>
                <p className="text-sm text-yellow-500">Rating: {trip.rating} ★</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Book Now
            </button>
        </motion.div>
    );
};

export default TripDetails;
