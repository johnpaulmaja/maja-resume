import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h1>About Me</h1>
          <p>Welcome! I'm John Paul Maja, a cum laude dean's lister graduate with experience as a Quality Assurance Analyst/Tester and development experience during an internship.</p>
        </section>
        <section id="resume">
          <h1>Resume</h1>
          <h2>Education</h2>
          <p>[Details]</p>
          <h2>Experience</h2>
          <p>[Details]</p>
          <h2>Skills</h2>
          <p>[Details]</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <p>[Details about notable projects]</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 John Paul Maja</p>
      </footer>
    </div>
  );
}

export default App;
