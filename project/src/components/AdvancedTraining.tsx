import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, Users, Award } from 'lucide-react';

interface TrainingModule {
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  level: string;
  topics: string[];
}

const trainingModules: TrainingModule[] = [
  {
    title: "Advanced WMS Architecture",
    description: "Deep dive into warehouse management system architecture, design patterns, and scalability considerations.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "45 mins",
    level: "Advanced",
    topics: ["System Architecture", "Design Patterns", "Scalability", "Performance Optimization"]
  },
  {
    title: "Automation Integration Strategies",
    description: "Learn how to integrate various automation technologies with warehouse management systems.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "60 mins",
    level: "Expert",
    topics: ["AGV Integration", "Robotics", "IoT Sensors", "Real-time Communication"]
  },
  {
    title: "Advanced Inventory Algorithms",
    description: "Master complex inventory management algorithms and optimization techniques.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "50 mins",
    level: "Advanced",
    topics: ["Demand Forecasting", "Safety Stock Optimization", "ABC Analysis", "Cycle Counting"]
  },
  {
    title: "Performance Tuning & Optimization",
    description: "Advanced techniques for optimizing warehouse management system performance.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "40 mins",
    level: "Expert",
    topics: ["Database Optimization", "Query Performance", "System Monitoring", "Bottleneck Analysis"]
  },
  {
    title: "Enterprise Integration Patterns",
    description: "Learn enterprise-level integration patterns for connecting WMS with other business systems.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "55 mins",
    level: "Advanced",
    topics: ["API Design", "Message Queues", "Event-Driven Architecture", "Microservices"]
  },
  {
    title: "Advanced Analytics & Reporting",
    description: "Master advanced analytics techniques and create sophisticated reporting solutions.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "35 mins",
    level: "Advanced",
    topics: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Dashboard Design"]
  }
];

const AdvancedTraining: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Advanced Training</h1>
          
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-blue-600" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Master Advanced Warehouse Concepts</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Take your warehouse management expertise to the next level with our advanced training modules. 
                These comprehensive courses cover complex topics, advanced algorithms, and cutting-edge technologies 
                used in modern warehouse operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BookOpen className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Expert-Level Content</h3>
                <p className="text-sm text-gray-600">Advanced concepts and real-world applications</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Industry Experts</h3>
                <p className="text-sm text-gray-600">Learn from experienced professionals</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <PlayCircle className="text-purple-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Interactive Learning</h3>
                <p className="text-sm text-gray-600">Hands-on exercises and practical examples</p>
              </div>
            </div>
          </div>

          {/* Training Modules */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle size={64} className="text-blue-600" />
                  </div>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={module.videoUrl}
                    title={module.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{module.title}</h3>
                    <div className="flex space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        module.level === 'Expert' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {module.level}
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Recommended Learning Path</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Foundation</h3>
                <p className="text-sm text-gray-600">Start with WMS Architecture and Integration Patterns</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Specialization</h3>
                <p className="text-sm text-gray-600">Focus on Automation and Advanced Algorithms</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Mastery</h3>
                <p className="text-sm text-gray-600">Complete with Performance Tuning and Analytics</p>
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-yellow-50 rounded-lg p-8">
            <h2 className="text-xl font-bold text-yellow-800 mb-6">Prerequisites & Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-yellow-700 mb-3">Required Knowledge</h3>
                <ul className="space-y-2 text-yellow-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Basic warehouse management concepts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Understanding of database systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Programming fundamentals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    System integration experience
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-700 mb-3">Recommended Experience</h3>
                <ul className="space-y-2 text-yellow-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    2+ years in warehouse operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    WMS implementation experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Technical background preferred
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Completion of basic training modules
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedTraining;