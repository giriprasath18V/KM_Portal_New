import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, CheckSquare, BarChart3, Users, Workflow, Target } from 'lucide-react';

const JiraMSCVP: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">JIRA & MSCVP</h1>
          
          {/* JIRA Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is JIRA?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  JIRA is a powerful project management and issue tracking tool developed by Atlassian. 
                  It's designed to help teams plan, track, and manage their work efficiently, from 
                  software development to business projects.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CheckSquare className="text-blue-600" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Agile Project Management</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                  alt="JIRA Dashboard"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* JIRA Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-blue-50 rounded-lg"
              >
                <CheckSquare className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Issue Tracking</h3>
                <p className="text-gray-600">Track bugs, tasks, and user stories throughout the development lifecycle</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-green-50 rounded-lg"
              >
                <Workflow className="text-green-600 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Workflow Management</h3>
                <p className="text-gray-600">Customize workflows to match your team's processes and methodologies</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-purple-50 rounded-lg"
              >
                <BarChart3 className="text-purple-600 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Reporting & Analytics</h3>
                <p className="text-gray-600">Generate detailed reports and track team performance metrics</p>
              </motion.div>
            </div>

            {/* How We Use JIRA */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">How We Use JIRA</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Project Management</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Sprint planning and management
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      User story creation and tracking
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Release planning and coordination
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Quality Assurance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Bug tracking and resolution
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Test case management
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Defect lifecycle management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* JIRA Video */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">JIRA Tutorial Video</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={64} className="text-blue-600" />
                </div>
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="JIRA Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* MSCVP Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is MSCVP?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  MSCVP (Microsoft Certified Virtual Professional) is a comprehensive certification program 
                  that validates expertise in Microsoft technologies and cloud solutions. It demonstrates 
                  proficiency in implementing and managing Microsoft-based enterprise solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Target className="text-green-600" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Professional Certification</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Microsoft Certification"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* MSCVP Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-green-50 rounded-lg"
              >
                <Target className="text-green-600 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Skill Validation</h3>
                <p className="text-gray-600">Proves expertise in Microsoft technologies and best practices</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-blue-50 rounded-lg"
              >
                <Users className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Career Advancement</h3>
                <p className="text-gray-600">Opens doors to new opportunities and higher positions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-purple-50 rounded-lg"
              >
                <BarChart3 className="text-purple-600 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Industry Recognition</h3>
                <p className="text-gray-600">Globally recognized certification by Microsoft</p>
              </motion.div>
            </div>

            {/* How We Use MSCVP */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">How We Leverage MSCVP</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Team Development</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Continuous skill enhancement
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Microsoft best practices adoption
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Cloud solution expertise
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Client Solutions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Enterprise-grade implementations
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Azure cloud migrations
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Microsoft 365 integrations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MSCVP Video */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">MSCVP Overview Video</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={64} className="text-green-600" />
                </div>
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="MSCVP Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Combined Benefits */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Why We Use Both JIRA & MSCVP</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Enhanced Productivity</h3>
                <p className="opacity-90">
                  JIRA helps us manage projects efficiently while MSCVP ensures our team has the 
                  latest Microsoft technology expertise to deliver cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="opacity-90">
                  The combination of structured project management and certified expertise 
                  ensures we deliver high-quality solutions that meet industry standards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JiraMSCVP;