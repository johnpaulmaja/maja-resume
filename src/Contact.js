import React from 'react';

function Contact() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form action="mailto:your-email@example.com" method="post" enctype="text/plain" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name:</label>
          <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email:</label>
          <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message:</label>
          <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">Send</button>
      </form>
    </section>
  );
}

export default Contact;
