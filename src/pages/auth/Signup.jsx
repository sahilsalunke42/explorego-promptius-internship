import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.fullName.trim()) {
      toast.error('Full Name is required');
      return false;
    }
    if (!form.email.trim()) {
      toast.error('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error('Email is invalid');
      return false;
    }
    if (!form.password) {
      toast.error('Password is required');
      return false;
    }
    if (form.password.length < 6) {
      toast.error('Password should be at least 6 characters');
      return false;
    }
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    if (!form.phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) {
      toast.error('Phone number is invalid');
      return false;
    }
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validate()) return;

    toast.success('Signup successful! Redirecting...');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-center" autoClose={3000} />
      <motion.div
        className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">Create Account</h2>
        <form onSubmit={handleSignup} noValidate>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none text-base sm:text-lg placeholder-gray-400"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none text-base sm:text-lg placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none text-base sm:text-lg placeholder-gray-400"
                placeholder="At least 6 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none text-base sm:text-lg placeholder-gray-400"
                placeholder="Retype your password"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none text-base sm:text-lg placeholder-gray-400"
              placeholder="+1234567890"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-md transition duration-200 text-lg sm:text-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 text-base sm:text-lg">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline font-semibold">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
