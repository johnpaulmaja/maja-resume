// src/Resume.js
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Resume() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="mb-12"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="text-lg mb-4">
          Here you can download my detailed resume which includes information about my skills, experiences, and projects.
        </p>
        <a href="/path/to/resume.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105">
          Download Resume
        </a>
      </motion.section>
    </motion.div>
  );
}

export default Resume;
