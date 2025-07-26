import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import menuImage from "../assets/menuBar.jpg";

const MobileMenu = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", anchor: "#about" },
    { name: "Explore", anchor: "#explore" },
    { name: "Login/Signup", to: "/signup" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="z-50 relative text-teal-500">
      <Hamburger toggled={isOpen} toggle={toggleMenu} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-2xl z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl z-50 rounded-l-lg overflow-hidden flex flex-col">

          <div
            className="relative h-65 w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${menuImage})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl font-medium">Explore<span className="text-teal-500">Go</span></h2>
            </div>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <ul className="space-y-7 text-center text-zinc-800 ">
              {navLinks.map((link, index) => (
                <li key={link.to || link.anchor || index}>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="block text-md hover:text-lg transition-all duration-200 font-medium hover:text-teal-500"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.anchor}
                        className="block text-md hover:text-lg transition-all duration-200 font-medium hover:text-teal-500"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;