// src/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Contact() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <motion.form
        className="bg-white p-8 rounded-lg shadow-lg"
        variants={formVariants}
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105">
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
