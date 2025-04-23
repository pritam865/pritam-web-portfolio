/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  darkMode: 'class', // Enables class-based dark mode (e.g., <html class="dark">)

  theme: {
    extend: {
      colors: {
        background: "#0f172a", // dark slate background
        primary: "#38bdf8",    // cyan-400 for highlights
        accent: "#f472b6",     // pink-400 for accent elements
        header: "#1e293b",     // for nav/header background
        light: "#f1f5f9",      // light mode background (optional)
      },
    },
  },

  plugins: [],
};

  

  