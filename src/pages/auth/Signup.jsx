// Login page for ExploreGo
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSignup = (e) => {
        e.preventDefault();
        // Here you would typically handle signup logic, e.g., API call
        console.log('Signing up with:', { email, password });
        navigate('/'); // Redirect to home after signup
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200">
        <motion.div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSignup}>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-200"
            >
                Sign Up
            </button>
            </form>
        </motion.div>
        </div>
    );
};

export default Signup;
// This code defines a Signup component for the ExploreGo application.