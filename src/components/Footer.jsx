import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a192f] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pritam Web Solutions
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering businesses with modern, fast and beautiful web solutions
            tailored to your brand.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-2 text-blue-300">
            Quick Links
          </h3>
          {["Home", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Media + Email */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Connect</h3>
          <div className="flex space-x-4 mb-3">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
          <a
            href="mailto:sahoopritam097@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition duration-300 underline"
          >
            sahoopritam097@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Pritam Web Solutions. All rights reserved.
      </div>

      {/* Scroll To Top Button (Bottom-Left) */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition duration-300"
          title="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;








  