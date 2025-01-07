import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book } from 'lucide-react';

const Education = () => {
  const education = [
    // {
    //   degree: 'Master of Computer Science',
    //   school: 'Tech University',
    //   year: '2018',
    //   description: 'Specialized in Artificial Intelligence and Machine Learning',
    // },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT',
      year: '2021-Present',
      description: 'Focus on Software Engineering and Computer Networking',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-serif text-gray-900 dark:text-white">Education</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-gold-600 mr-2" />
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white">{edu.degree}</h3>
                </div>
                <p className="text-gold-600 font-medium">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;