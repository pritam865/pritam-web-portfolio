import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white to-gray-100 py-24 md:py-32 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Build{" "}
            <TypeAnimation
              sequence={[
                "Stunning Websites",
                2000,
                "Fast Websites",
                2000,
                "Modern Websites",
                2000,
                "Responsive Websites",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-600"
            />{" "}
            <br />
            with <span className="text-black">Pritam Web Solutions</span>
          </motion.h1>

          <p className="text-base md:text-lg leading-relaxed max-w-xl text-gray-800 mt-4">
            We don’t just build websites —{" "}
            <br className="hidden md:block" />
            <span className="text-black font-semibold">
              we craft digital experiences
            </span>{" "}
            that connect, engage, and grow your brand.
          </p>

          <div className="pt-4">
            <a href="#contact" className="inline-block">
              <button className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:scale-105 transform transition duration-300">
                Get In Touch
              </button>
            </a>
          </div>
        </motion.div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <img
            src="/images/homeimage.png"
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

