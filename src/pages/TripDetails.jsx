import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchTripDetails } from '../hooks/fetchTripDetails';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            new Promise((resolve) => setTimeout(resolve, 1000)),
        ]).then(() => {
            if (isMounted) setLoading(false);
        });

        return () => {
            isMounted = false;
        };
    }, [tripId]);

    if (loading) return <Loader />;
    if (error || !trip) return <div className="text-center py-20 text-xl text-gray-500">404 Not Found</div>;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 flex justify-center items-start mt-12 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 mb-20">
                <motion.div
                    className="bg-white rounded-3xl shadow-xl overflow-hidden w-full flex flex-col md:flex-row md:space-x-12"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                >
                    <div className="md:w-1/2 flex-shrink-0 flex flex-col space-y-8 p-8 bg-gray-50">
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                            <img
                                src={trip.image}
                                alt={trip.destination}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {trip.images?.length > 0 && (
                            <div className="flex space-x-6">
                                {trip.images.slice(0, 3).map((img, idx) => (
                                    <div
                                        key={img}
                                        className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 cursor-pointer transition-transform active:scale-95 hover:scale-105"
                                        title={`${trip.destination} ${idx + 1}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${trip.destination} ${idx + 1}`}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className="flex-1 flex flex-col justify-between p-8 sm:p-10">
                        <div>
                            <h1 className="text-4xl font-semibold text-gray-900 mb-4">{trip.destination}</h1>
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="text-red-600 text-lg font-semibold">{trip.rating}★</span>
                                <span className="text-gray-500 text-sm">{trip.duration}</span>
                            </div>
                            <p className="text-gray-700 text-lg mb-8 whitespace-pre-line">{trip.description}</p>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Itinerary</h2>
                                <ul className="space-y-2 list-disc list-inside text-gray-600 text-base leading-relaxed">
                                    {trip.itinerary.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-200 pt-6">
                            <div>
                                <p className="text-4xl font-extrabold text-gray-900">${trip.price}</p>
                                <span className="text-gray-500 text-sm sm:text-base">per package</span>
                            </div>
                            <button
                                className="mt-6 sm:mt-0 px-12 py-3 bg-red-600 text-white text-lg rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                aria-label={`Book trip to ${trip.destination}`}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default TripDetails;
