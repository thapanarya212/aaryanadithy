import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  // State to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    if (!name || !email || !message) {
      setStatus('Please fill in all the fields.');
      return;
    }

    // Construct the mailto link
    const mailtoLink = `mailto:thapanshakthi@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;

    // Open the default email client with prefilled details
    window.location.href = mailtoLink;

    // Reset form fields and set success status
    setName('');
    setEmail('');
    setMessage('');
    setStatus('Message sent! Please check your email client to send the message.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-serif text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <a
                  href="https://github.com/thapanarya212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gold-600"
                >
                  <Github className="w-6 h-6 text-gold-600" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.linkedin.com/in/aaryan-adithy-sri-shakhti-8570b9254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gold-600"
                >
                  <Linkedin className="w-6 h-6 text-gold-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
              {/* View Resume Link */}
              <div className="flex items-center">
                <a
                  href="https://drive.google.com/file/d/1b-j8btoY4aQueWCcx5pbF4l6D2LC2tZg/view?usp=drive_link" // Update this URL to the actual location of your resume
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gold-600"
                >
                  {/* <span className="material-icons-outlined text-gold-600">description</span> Optional Icon */}
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-600 focus:ring focus:ring-gold-600 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-600 focus:ring focus:ring-gold-600 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-600 focus:ring focus:ring-gold-600 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </motion.button>
          </motion.form>

          {/* Displaying the status message */}
          {status && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-center text-lg text-green-600 dark:text-green-400"
            >
              {status}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
