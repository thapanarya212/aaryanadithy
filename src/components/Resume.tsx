import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

const Resume = () => {
  const experiences = [
    // {
    //   title: 'Senior Software Engineer',
    //   company: 'Tech Solutions Inc.',
    //   period: '2020 - Present',
    //   description: 'Led development of enterprise applications using React and Node.js.',
    // },
    {
      title: 'Web Developer Intern',
      company: 'UpToSkills',
      period: 'Sept 2024 - Dec 2024',
      description: `Developed a dynamic dashboard to streamline team collaboration and enhance operational efficiency, 
                    strengthened front-end and back-end technical skills, collaborated with cross-functional teams 
                    to ensure seamless project delivery, and debugged and resolved critical issues to optimize 
                    web application performance.`,
    },
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-serif text-gray-900 dark:text-white">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-gold-600"
              >
                <div className="absolute -left-3 top-0">
                  <Briefcase className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-gold-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
