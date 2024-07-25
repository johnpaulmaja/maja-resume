// src/About.js
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

function About() {
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
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg">
          I'm a detail-oriented QA Analyst with hands-on experience in manual testing and a background in web development.
          My passion for technology drives me to constantly learn and adapt to new challenges.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <p className="text-lg">
          I have experience in both manual and automated testing, focusing on delivering high-quality software products.
          My internship exposed me to various aspects of software development and testing.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p className="text-lg">
          I graduated with honors and have a solid foundation in software engineering principles.
          My education has equipped me with the skills necessary to excel in the tech industry.
        </p>
      </motion.section>
    </motion.div>
  );
}

export default About;
