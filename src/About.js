import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src="https://media1.tenor.com/m/Q5falj4UuysAAAAC/sadhotgirl.gif"  // Replace with your actual image
            alt="John Paul Maja"
            className="w-56 h-56 rounded-full shadow-lg"  // Updated size
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">John Paul Maja</h2>
          <p className="text-lg text-gray-600 mb-4">
            Hi, I'm John Paul Maja, a passionate and detail-oriented software engineer with a background in quality assurance and development. I graduated cum laude and have a strong attention to detail, which has helped me excel in both manual testing and development tasks.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            My experience includes working on various projects that involve manual testing and development, where I have honed my skills in creating robust and efficient software solutions. I am always eager to learn and adapt to new technologies and methodologies to deliver high-quality results.
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, I enjoy exploring new technologies, playing video games, and keeping up with the latest trends in the tech industry. I am excited about the opportunities that lie ahead and look forward to making a positive impact through my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
