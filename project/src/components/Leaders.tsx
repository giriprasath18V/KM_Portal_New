import React from 'react';
import { motion } from 'framer-motion';

interface Leader {
  name: string;
  role: string;
  image: string;
}

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const leaders: Leader[] = [
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Operations Officer',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  }
];

const partners: Partner[] = [
  {
    name: 'TechCorp Solutions',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    description: 'Leading provider of warehouse automation solutions'
  },
  {
    name: 'LogiTech Systems',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    description: 'Innovative logistics technology partner'
  },
  {
    name: 'Global Shipping Co',
    logo: 'https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg',
    description: 'International shipping and logistics partner'
  }
];

const Leaders: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                    <p className="text-gray-600">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Partners & Clients</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-video relative">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaders;