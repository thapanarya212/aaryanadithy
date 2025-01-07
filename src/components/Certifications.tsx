import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Java Full Stack Development',
      issuer: 'Wipro, Talent Next',
      date: 'Octber 2024',
      // id: 'AWS-SAA-001',
      logo: 'https://imgs.search.brave.com/YSG2q-O5o_sjgl-g2CccOvIHxtCzhVnCBsS1Q7Vp3yE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvV2lwcm8tTG9n/by01MDB4MjgxLmpw/Zw', // You'll need to add these images to your public folder
      viewLink: 'https://cert.diceid.com/cid/e1JARLL7W4', // Replace with actual verification link
    },
    {
      name: 'Azure Cloud-900',
      issuer: ' Microsoft Azure',
      date: 'MAY 2024',
      // id: 'GCP-PRO-002',
      logo: 'data:image/jpeg;base64,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',
      viewLink: 'https://learn.microsoft.com/en-in/users/sonumonu-3706/achievements/f2e2e5cx',
    },
    {
      name: 'Java',
      issuer: 'CodeTantra',
      date: 'January 2024',
      // id: 'AWS-SAA-001',
      logo: 'data:image/jpeg;base64,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', // You'll need to add these images to your public folder
      viewLink: 'https://cutmap.codetantra.com/cert/certificate.jsp?certId=CT1739-tNWPVvj-cw', // Replace with actual verification link
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-serif text-gray-900 dark:text-white text-center mb-12">Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-gold-600 mr-2" />
                      <h3 className="text-xl font-serif text-gray-900 dark:text-white">{cert.name}</h3>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`}
                        className="w-8 h-8 object-contain mr-2"
                      />
                      <p className="text-gold-600 font-medium">{cert.issuer}</p>
                    </div>
                    
                     <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{cert.date}</span>
                    </div> 
                    
                    {/* <p className="mt-2 text-gray-600 dark:text-gray-300">ID: {cert.id}</p> */}
                    
                    <a 
                      href={cert.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  
                  {/* Background Logo Watermark */}
                  <div className="absolute right-0 top-0 opacity-5 transform translate-x-1/4 -translate-y-1/4">
                    <img 
                      src={cert.logo}
                      alt=""
                      className="w-32 h-32 object-contain"
                    />
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

export default Certifications;