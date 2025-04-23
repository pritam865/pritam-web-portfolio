import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaRegEdit, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-16 px-4 sm:px-10 md:px-20 lg:px-32 min-h-screen z-10 relative"
      id="contact"
    >
      <div className="max-w-4xl mx-auto shadow-xl p-10 rounded-3xl bg-white bg-opacity-90 relative">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">Let's Talk</h2>
        <p className="text-center mb-10 text-gray-600">
          Have a project in mind or just want to connect? Fill out the form and let’s build something great together!
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-600" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <FaRegEdit className="text-blue-600" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-3xl border border-gray-300 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <div className="flex flex-col sm:flex-row sm:col-span-2 gap-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-6 rounded-full hover:from-black hover:to-gray-900 transition shadow-md w-full"
            >
              Send Message
            </button>
            <a
              href="https://wa.me/918658422805"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-md w-full"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </motion.form>
        <ToastContainer />
      </div>

      {/* Floating Let's Talk WhatsApp Button */}
      <motion.a
  href="https://wa.me/918658422805"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg z-50 flex items-center gap-2 transition"
  animate={{
    y: [0, -10, 0], // Moves up by 10px then back to original
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
>
  <FaWhatsapp className="text-xl" />
  <span className="hidden sm:inline font-semibold">Let's Talk</span>
</motion.a>

    </section>
  );
};

export default Contact;







