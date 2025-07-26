import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-10">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 text-gray-600">
          <li>
            <Link
              to="/privacy"
              className="hover:underline hover:text-red-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="hover:underline hover:text-red-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:text-red-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <p className="text-sm text-gray-500 select-none">
          © 2023 ExploreGo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
