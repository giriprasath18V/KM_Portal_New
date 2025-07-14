import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const GenAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Generative AI (GenAI)</h1>
          
          {/* What is GenAI */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Generative AI?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Generative AI (GenAI) is a type of artificial intelligence that can create new content, 
                  including text, images, code, and data, based on patterns learned from training data. 
                  It uses advanced machine learning models to generate human-like responses and solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Brain className="text-blue-600" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Intelligent Content Generation</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="AI Technology"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Why We Use GenAI */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why We Use GenAI</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automation</h3>
                <p className="text-gray-600">Automate repetitive tasks and generate content quickly</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Efficiency</h3>
                <p className="text-gray-600">Increase productivity and reduce development time</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Brain className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">Enable creative solutions and new possibilities</p>
              </motion.div>
            </div>
          </div>

          {/* How We Use GenAI */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How We Use GenAI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Code Generation</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Automated test script generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    API documentation creation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Code review and optimization
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Documentation</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Technical documentation writing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    User manual generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Process documentation
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Analysis & Insights</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Data pattern recognition
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Performance optimization
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Intelligent chatbot responses
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Automated ticket resolution
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Knowledge base creation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* When to Use GenAI */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">When to Use GenAI</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Repetitive Tasks</h3>
                <p className="text-sm text-gray-600">When you need to automate routine, time-consuming activities</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Zap className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Rapid Prototyping</h3>
                <p className="text-sm text-gray-600">For quick development and testing of new ideas</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Brain className="text-purple-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Complex Analysis</h3>
                <p className="text-sm text-gray-600">When dealing with large datasets requiring pattern recognition</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <TrendingUp className="text-orange-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Scaling Operations</h3>
                <p className="text-sm text-gray-600">To handle increased workload without proportional resource increase</p>
              </div>
            </div>
          </div>

          {/* Advantages vs Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Advantages */}
            <div className="bg-green-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Advantages</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-green-800">Increased Productivity</h3>
                    <p className="text-green-700 text-sm">Automates tasks, allowing teams to focus on strategic work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-green-800">Cost Reduction</h3>
                    <p className="text-green-700 text-sm">Reduces manual effort and operational costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-green-800">24/7 Availability</h3>
                    <p className="text-green-700 text-sm">Works continuously without breaks or downtime</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-green-800">Scalability</h3>
                    <p className="text-green-700 text-sm">Easily scales to handle increased workload</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-green-800">Consistency</h3>
                    <p className="text-green-700 text-sm">Provides consistent output quality</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-red-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">Disadvantages</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-red-800">Data Dependency</h3>
                    <p className="text-red-700 text-sm">Requires large amounts of quality training data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-red-800">Potential Bias</h3>
                    <p className="text-red-700 text-sm">May inherit biases from training data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-red-800">Security Concerns</h3>
                    <p className="text-red-700 text-sm">Potential risks with sensitive data handling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-red-800">High Initial Costs</h3>
                    <p className="text-red-700 text-sm">Significant investment in infrastructure and training</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-red-800">Limited Creativity</h3>
                    <p className="text-red-700 text-sm">Cannot truly innovate beyond training patterns</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">GenAI Best Practices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Data Security</h3>
                <p className="text-gray-600 text-sm">Ensure proper data protection and privacy measures</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Human Oversight</h3>
                <p className="text-gray-600 text-sm">Maintain human review and validation processes</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600 text-sm">Regular model updates and performance monitoring</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GenAI;