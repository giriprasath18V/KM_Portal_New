import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Clock, Users, Brain, Shield } from 'lucide-react';

const ChatBot: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">AI-Powered ChatBot</h1>
          
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a ChatBot?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A ChatBot is an AI-powered conversational interface that can understand and respond to user queries 
                  in natural language. Our ChatBot is designed to provide instant support, answer questions, and 
                  guide users through various warehouse management processes.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MessageCircle className="text-blue-600" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">24/7 Intelligent Support</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="ChatBot Interface"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Responses</h3>
              <p className="text-gray-600">Get immediate answers to your questions without waiting for human support.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Available round the clock to assist with your warehouse management needs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Brain className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Learning</h3>
              <p className="text-gray-600">Continuously learns from interactions to provide better responses over time.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-User Support</h3>
              <p className="text-gray-600">Handle multiple conversations simultaneously with personalized responses.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-600">All conversations are encrypted and data privacy is maintained.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                <MessageCircle className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Language</h3>
              <p className="text-gray-600">Understands and responds in natural, conversational language.</p>
            </motion.div>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">ChatBot Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Answer frequently asked questions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Provide system status updates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Guide through troubleshooting steps
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Schedule appointments and meetings
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Warehouse Operations</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Inventory status inquiries
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Order tracking and updates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Process documentation access
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Training and onboarding assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How Our ChatBot Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">User Input</h3>
                <p className="text-sm text-gray-600">User types a question or request in natural language</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">AI Processing</h3>
                <p className="text-sm text-gray-600">Natural language processing analyzes the intent and context</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Knowledge Search</h3>
                <p className="text-sm text-gray-600">System searches knowledge base for relevant information</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Response</h3>
                <p className="text-sm text-gray-600">Provides accurate, helpful response to the user</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatBot;