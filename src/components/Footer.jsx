// Footer Component for ExploreGo
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-green-300 to-green-200 py-6 sm:min-h-[300px] md:min-h-[350px] border-t border-zinc-300 flex flex-col items-center justify-center text-slate-800">
      <div className="container mx-auto text-center mt-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </li>
        </ul>
        <p className="flex items-center justify-center py-6 text-sm mb-4">© 2023 ExploreGo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
