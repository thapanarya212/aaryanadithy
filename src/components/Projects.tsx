import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Online Quiz System',
      description: 'Designed and implemented a web-based quiz platform for efficient test management by administrators Enabled secure, credential-free login for users, improving accessibility and usability.',
      technologies: ['html','css','js','php','mysql','xml' ],
      github: 'https://github.com/thapanarya212/online-quiz-system',
      // live: 'https://e-learning-demo.netlify.app',
      image: 'https://imgs.search.brave.com/bVeT5bTroDX9xXzrjMD0FlFg-ZCBjWJLVQLbCrQ72YU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzY5Lzk2LzQ4/LzM2MF9GXzU2OTk2/NDg0N19XYTN0TnBQ/WVJHQUJwcGxQR1NG/VDNMTEI3RTJ3VTBq/Yi5qcGc'
    },
    {
      title: 'Terrain Recognition',
      description: 'Developed a machine learning model to classify terrain types using an extensive dataset Leveraged Google Colab for preprocessing, model training, and real-time deployment.',
      technologies: [
        'Terrain Recognition',
        'Machine Learning',
        'TensorFlow',
        'OpenCV',
        'Python',
        'Image Analysis',
        'Model Training',
        'Automated Detection',
        'Geographic Information System (GIS)'
      ],
      github: 'https://github.com/thapanarya212/Terrain_Recogntion_using_DeepLearning',
      live: 'https://weather-dashboard-demo.netlify.app',
      image: 'https://imgs.search.brave.com/YMexKML5ifr0V0Jlt0TETV1TDJ7p6920gI3BWsqT-hI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lY29zeXN0ZW0t/dGVycmFpbi1oZWF0/aGVyeV82OTI4OTEt/MTkuanBnP3NlbXQ9/YWlzX2h5YnJpZA'
    }
,    
    // {
    //   title: 'Task Management App',
    //   description: 'Collaborative project: A task management application with real-time updates and team collaboration features.',
    //   technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    //   github: 'https://github.com/yourusername/task-manager',
    //   live: 'https://task-manager-demo.netlify.app',
    //   image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-serif text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-600"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-600"
                    >
                      {/* <ExternalLink className="w-5 h-5 mr-1" /> */}
                      {/* <span>Live Demo</span> */}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;