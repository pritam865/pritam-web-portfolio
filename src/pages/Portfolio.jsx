import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'FoodieFinder',
    image: '/images/portfolioimage-1.png',
    techStack: 'React, Express, MongoDB',
    description: 'A restaurant discovery app with filters and reviews.',
    liveDemo: '#',
    github: '#',
    rating: 5
  },
  {
    title: 'E-ShopX',
    image: '/images/portfolioimage-2.png',
    techStack: 'React, Node.js, MongoDB',
    description: 'A modern ecommerce platform with user authentication and payments.',
    liveDemo: '#',
    github: '#',
    rating: 5
  },
  {
    title: 'EduDash',
    image: '/images/portfolioimage-3.png',
    techStack: 'React, Chart.js, Firebase',
    description: 'An education dashboard with analytics and real-time updates.',
    liveDemo: '#',
    github: '#',
    rating: 4
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-white text-center px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our <span className="text-blue-600">Work</span>
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        A showcase of carefully crafted projects that solve real-world problems using modern tech.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-contain p-4" />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-600 font-medium mb-2">Tech Stack: {project.techStack}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-center gap-4 text-sm text-blue-600 font-medium mb-2">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  GitHub <FaGithub size={14} />
                </a>
              </div>
              <div className="flex justify-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className={i < project.rating ? 'text-yellow-500' : 'text-gray-300'} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


 