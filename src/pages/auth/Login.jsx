import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
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
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    toast.success('Login successful! Redirecting...');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-center" autoClose={3000} />
      <motion.div
        className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">Log In</h2>

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-8">
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

          <div className="mb-10">
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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-md transition duration-200 text-lg sm:text-xl"
          >
            Log In
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 text-base sm:text-lg">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-red-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
