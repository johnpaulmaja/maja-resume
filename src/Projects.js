// src/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const projects = [
  { title: "Project 1", description: "A brief description of project 1." },
  { title: "Project 2", description: "A brief description of project 2." },
  { title: "Project 3", description: "A brief description of project 3." }
];

function Projects() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={projectVariants}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
