import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

interface VideoContent {
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  category: string;
}

const videos: VideoContent[] = [
  {
    title: "Warehouse Management Fundamentals",
    description: "Comprehensive overview of WMS core concepts and best practices",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "45 mins",
    category: "WMS"
  },
  {
    title: "Inventory Control Systems",
    description: "Deep dive into inventory management and control systems",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "30 mins",
    category: "Inventory"
  },
  {
    title: "Supply Chain Integration",
    description: "Understanding supply chain integration and optimization",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "40 mins",
    category: "Supply Chain"
  },
  {
    title: "EDI Implementation",
    description: "Technical aspects of EDI implementation and maintenance",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "35 mins",
    category: "EDI"
  }
];

const DomainExpertise: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Domain Expertise Videos</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle size={64} className="text-blue-600" />
                  </div>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{video.title}</h2>
                    <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
                      {video.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <span className="text-sm text-blue-600 font-medium">
                    Category: {video.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainExpertise;