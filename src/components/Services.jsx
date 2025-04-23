import React from 'react';
import { Code, Server, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Frontend Development',
    description: 'Modern UI/UX using React, Tailwind CSS, and responsive design.',
  },
  {
    icon: <Server size={32} />,
    title: 'Backend Development',
    description: 'Node.js + Express backend with MongoDB and RESTful APIs.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Full-Stack Projects',
    description: 'Complete web applications built using the MERN stack.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
