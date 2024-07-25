// src/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm John Paul Maja</h2>
          <p className="text-lg mb-8">A passionate QA Analyst and Web Developer</p>
          <Link to="/resume" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105">
            View My Resume
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-8 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
              <i className="fas fa-code text-4xl mb-4 text-blue-500"></i>
              <h3 className="text-xl font-bold mb-2">Attention to detail</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="p-8 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
              <i className="fas fa-cogs text-4xl mb-4 text-blue-500"></i>
              <h3 className="text-xl font-bold mb-2">Manual Testing</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="p-8 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
              <i className="fas fa-database text-4xl mb-4 text-blue-500"></i>
              <h3 className="text-xl font-bold mb-2">Tech-savvy</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor 1</h3>
              <p className="mb-4">A brief description of the project. Highlight key features and technologies used.</p>
              <Link to="/projects" className="text-blue-500 hover:underline">Learn more</Link>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor 2</h3>
              <p className="mb-4">A brief description of the project. Highlight key features and technologies used.</p>
              <Link to="/projects" className="text-blue-500 hover:underline">Learn more</Link>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor 3</h3>
              <p className="mb-4">A brief description of the project. Highlight key features and technologies used.</p>
              <Link to="/projects" className="text-blue-500 hover:underline">Learn more</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <p className="italic mb-4">"John is a highly skilled developer with a keen eye for detail."</p>
          <p>- Jane Doe, Previous Employer</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-8">Feel free to reach out if you want to work together or have any questions.</p>
          <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105">
            Contact Me
          </Link>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/john-paul-maja" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-3xl hover:text-gray-400"></i>
            </a>
            <a href="https://github.com/john-paul-maja" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-3xl hover:text-gray-400"></i>
            </a>
            <a href="mailto:john.paul.maja@example.com">
              <i className="fas fa-envelope text-3xl hover:text-gray-400"></i>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
