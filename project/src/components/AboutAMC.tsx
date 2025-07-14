import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutAMC: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'History',
      image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg',
      path: '/about/history'
    },
    {
      title: 'Leaders',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      path: '/about/leaders'
    },
    {
      title: 'Warehouse',
      image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
      path: '/about/warehouse'
    },
    {
      title: 'Team',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      path: '/about/team'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">About AMC</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => navigate(section.path)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h2 className="text-white text-xl font-semibold p-6">
                      {section.title}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutAMC;