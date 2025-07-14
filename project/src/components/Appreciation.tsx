import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, ThumbsUp } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: "Excellence in Innovation",
    description: "Recognized for developing cutting-edge solutions that significantly improved warehouse operations",
    date: "March 2024"
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Outstanding Team Performance",
    description: "Achieved exceptional results in implementing new WMS features across multiple client sites",
    date: "February 2024"
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    title: "Client Satisfaction Award",
    description: "Received recognition for maintaining 100% client satisfaction rate throughout the year",
    date: "January 2024"
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />,
    title: "Process Improvement Champion",
    description: "Successfully optimized warehouse processes resulting in 30% efficiency increase",
    date: "December 2023"
  }
];

const Appreciation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Team Achievements & Recognition</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {achievement.title}
                      </h2>
                      <span className="text-sm text-gray-500">{achievement.date}</span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-blue-50 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Celebrating Our Success Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These achievements represent our team's dedication to excellence, innovation, and 
              continuous improvement. We're proud of our accomplishments and remain committed to 
              delivering exceptional results for our clients.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Appreciation;