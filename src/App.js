import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 min-h-screen flex flex-col">
        <header className="bg-gray-900 text-white py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">John Paul Maja</h1>
            <ul className="flex space-x-4">
              <li><Link to="/about" className="hover:underline">About Me</Link></li>
              <li><Link to="/resume" className="hover:underline">Resume</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<About />} /> {/* Default route */}
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-4 text-center">
          <p>&copy; 2024 John Paul Maja</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
