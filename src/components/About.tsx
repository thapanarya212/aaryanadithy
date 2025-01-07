import React from 'react';
import { motion } from 'framer-motion';
// import { CodeBracketIcon, AcademicCapIcon, DevicePhoneMobileIcon, BriefcaseIcon, ServerIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon, AcademicCapIcon, DevicePhoneMobileIcon, BriefcaseIcon, ServerIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';


const About = () => {
  const skills = [
    { 
      name: 'Frontend Development',
      icon: CodeBracketIcon,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    { 
      name: 'Backend Development',
      icon: BriefcaseIcon,
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs']
    },
    // { 
    //   name: 'Android Development',
    //   icon: DevicePhoneMobileIcon,
    //   technologies: ['Java', 'Android Studio']
    // },
    { 
      name: 'Networking', // Added Networking
      icon: ServerIcon, // Server icon for Networking
      technologies: ['TCP/IP', 'DNS', 'Firewall Configurations', 'Wireshark']
    },
    { 
      name: 'Tools & Version Control',
      icon: BriefcaseIcon,
      technologies: ['Git', 'GitHub', 'VS Code', 'Postman','Cisco packet tracer']
    },
    { 
      name: 'Programming Languages', // Added Programming Languages
      icon: CubeTransparentIcon, // Icon for programming languages
      technologies: ['JavaScript', 'Python', 'Java', ]
    },
    { 
      name: 'Currently Learning',
      icon: AcademicCapIcon,
      technologies: ['Next.js', 'Docker', 'Android Studio']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Recent Computer Science graduate from Tech University with a passion for building 
              user-centric web applications. Through academic projects and internships, I've 
              developed a strong foundation in full-stack development and am eager to contribute 
              to innovative projects that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-gold-600 mr-3" />
                    <h3 className="text-xl font-serif text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
