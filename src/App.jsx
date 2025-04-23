// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



function App() {

  return (
    <div className="flex flex-col min-h-screen scroll-smooth bg-white text-black dark:bg-background dark:text-white transition-colors duration-300">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;










