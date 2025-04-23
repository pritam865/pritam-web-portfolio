// src/components/Navbar.jsx

import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Pritam<span className="text-blue-600"> Web</span> Solutions
        </h1>

        {/* Navigation */}
        <nav className="space-x-8 hidden md:flex">
          {["home", "about", "portfolio", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-700 hover:text-black font-medium transition duration-300 hover:underline underline-offset-4"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden sm:inline-block bg-black text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
};

export default Navbar;


