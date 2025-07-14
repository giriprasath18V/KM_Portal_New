import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Box } from 'lucide-react';

interface DocumentSection {
  title: string;
  description: string;
  items: {
    name: string;
    type: 'doc' | 'video' | 'image';
    url: string;
  }[];
}

const sections: DocumentSection[] = [
  {
    title: 'EDI Fundamentals',
    description: 'Learn the basics of Electronic Data Interchange and its importance in warehouse management.',
    items: [
      {
        name: 'EDI Overview',
        type: 'doc',
        url: '#'
      },
      {
        name: 'EDI Standards Tutorial',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    title: 'Inbound Flow',
    description: 'Understanding the complete inbound process flow in warehouse operations.',
    items: [
      {
        name: 'Receiving Process',
        type: 'image',
        url: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
      },
      {
        name: 'Inbound Flow Guide',
        type: 'doc',
        url: '#'
      }
    ]
  },
  {
    title: 'Outbound Flow',
    description: 'Detailed overview of outbound operations and shipping processes.',
    items: [
      {
        name: 'Shipping Operations',
        type: 'image',
        url: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg'
      },
      {
        name: 'Outbound Process Tutorial',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    title: 'Applications Overview',
    description: 'Introduction to the key applications used in our warehouse management system.',
    items: [
      {
        name: 'Koerber WMS',
        type: 'image',
        url: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg'
      },
      {
        name: 'Blue Yonder Overview',
        type: 'doc',
        url: '#'
      },
      {
        name: 'i2 System Guide',
        type: 'doc',
        url: '#'
      }
    ]
  }
];

const Bootcamp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Bootcamp Resources</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        {item.type === 'doc' && <FileText className="text-blue-600" />}
                        {item.type === 'video' && <Video className="text-blue-600" />}
                        {item.type === 'image' && <Box className="text-blue-600" />}
                        
                        {item.type === 'image' ? (
                          <div className="relative w-full h-40">
                            <img
                              src={item.url}
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        ) : (
                          <a
                            href={item.url}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
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

export default Bootcamp;