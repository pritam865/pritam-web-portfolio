import React from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 mt-5 md:mt-15">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About <span className="text-blue-600">Me</span>
        </h2>

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a full-stack web developer specializing in building modern,
            scalable, and high-performance web applications using the MERN stack.
            I turn ideas into digital reality with elegant and efficient code.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500">
            <img
              src="/images/abouticon-1.png"
              alt="Frontend"
              className="mx-auto w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Frontend Expertise
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I craft intuitive UIs using React.js, Tailwind CSS, and Next.js with full responsiveness,
              engaging animations, and pixel-perfect design for all devices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500">
            <img
              src="/images/abouticon-2.png"
              alt="Backend"
              className="mx-auto w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Backend Development
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I design robust backends using Node.js, Express, and MongoDB. My APIs are optimized,
              secure, and built with a scalable architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500">
            <img
              src="/images/abouticon-3.png"
              alt="Deployment"
              className="mx-auto w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Deployment & SEO
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From live deployment with Docker and Vercel, to SEO-optimized page performance —
              I ensure your site loads fast and ranks well.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
  <a href="#portfolio" className="inline-block">
    <button className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:scale-105 transform transition duration-300 flex items-center gap-2">
      Explore My Portfolio
      <ArrowRight className="w-5 h-5" />
    </button>
  </a>
</div>

      </div>
    </section>
  );
};

export default About;








