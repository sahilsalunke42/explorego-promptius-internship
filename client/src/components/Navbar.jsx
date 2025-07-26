import React from "react";
import MobileMenu from "./MobileMenu.jsx";
import { Link } from "react-router-dom";


const Navbar = () => {

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", anchor: "#about" },
    { name: "Explore", anchor: "#explore" },
    { name: "Login/Signup", to: "/signup" },
  ];
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white">
        <div className="flex-1">
          <Link to="/" >
          <h1 className="text-2xl font-medium">
            Explore<span className="text-teal-500">Go</span>
          </h1>
          </Link>
        </div>

        <div className="flex-1">
        <ul className="hidden md:flex justify-center space-x-6 text-black text-md ">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.anchor ? (
                <a
                  href={link.anchor}
                  className="underline decoration-transparent hover:decoration-teal-500 hover:text-lg transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="underline decoration-transparent hover:decoration-teal-500 hover:text-lg transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
        <div className="flex-1"></div>
        <div className="md:hidden">
          <MobileMenu />
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
