// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import HomePage from './HomePage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 min-h-screen flex flex-col bg-gray-100">
        <header className="bg-gray-900 text-white py-4 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl font-bold tracking-wide">
              <Link to="/" className="hover:text-gray-400 transition duration-200 ease-in-out">
                John Paul Maja
              </Link>
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="/about" className="hover:text-gray-400 transition duration-200 ease-in-out">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-gray-400 transition duration-200 ease-in-out">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-400 transition duration-200 ease-in-out">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 transition duration-200 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<HomePage />} /> {/* Default route */}
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="bg-gray-900 text-white py-4 text-center">
          <p>&copy; 2024 John Paul Maja. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
