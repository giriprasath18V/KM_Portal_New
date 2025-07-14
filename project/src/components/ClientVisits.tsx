import React from 'react';
import { motion } from 'framer-motion';

interface VisitGalleryItem {
  image: string;
  title: string;
  description: string;
  date: string;
}

const visitGallery: VisitGalleryItem[] = [
  {
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    title: "Client Workshop Session",
    description: "Interactive workshop with key stakeholders discussing system optimization",
    date: "March 15, 2024"
  },
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    title: "Technical Review Meeting",
    description: "Detailed technical discussion and system architecture review",
    date: "March 10, 2024"
  },
  {
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    title: "Process Implementation",
    description: "On-site implementation of new warehouse management processes",
    date: "March 5, 2024"
  },
  {
    image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
    title: "Training Session",
    description: "Hands-on training session with client team members",
    date: "February 28, 2024"
  }
];

const ClientVisits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Client Visits Gallery</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {visitGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientVisits;