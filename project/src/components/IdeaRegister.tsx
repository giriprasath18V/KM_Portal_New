import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Send, CheckCircle } from 'lucide-react';

const IdeaRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    ideaTitle: '',
    ideaDescription: '',
    category: '',
    expectedBenefit: '',
    implementation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate email sending (in real implementation, this would call an API)
    setTimeout(() => {
      // Here you would typically send the data to your backend API
      // which would then send an email to the admin
      console.log('Idea submitted:', formData);
      
      // For demonstration, we'll just show success
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          department: '',
          ideaTitle: '',
          ideaDescription: '',
          category: '',
          expectedBenefit: '',
          implementation: ''
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md"
        >
          <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Idea Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your innovative idea. It has been sent to our admin team for review.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting to form in a few seconds...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Register Your Ideas</h1>
          
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-yellow-600" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Your Innovation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe that great ideas can come from anywhere. Share your innovative thoughts, 
                suggestions, and solutions that could improve our warehouse operations, technology, 
                or processes. Every idea matters!
              </p>
            </div>
          </div>

          {/* Idea Registration Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your department or team"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Idea Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="process-improvement">Process Improvement</option>
                    <option value="technology">Technology Enhancement</option>
                    <option value="automation">Automation</option>
                    <option value="cost-reduction">Cost Reduction</option>
                    <option value="safety">Safety & Security</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Idea Details */}
              <div>
                <label htmlFor="ideaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Idea Title *
                </label>
                <input
                  type="text"
                  id="ideaTitle"
                  name="ideaTitle"
                  value={formData.ideaTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Give your idea a descriptive title"
                />
              </div>

              <div>
                <label htmlFor="ideaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Idea Description *
                </label>
                <textarea
                  id="ideaDescription"
                  name="ideaDescription"
                  value={formData.ideaDescription}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Describe your idea in detail. What problem does it solve? How would it work?"
                ></textarea>
              </div>

              <div>
                <label htmlFor="expectedBenefit" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Benefits
                </label>
                <textarea
                  id="expectedBenefit"
                  name="expectedBenefit"
                  value={formData.expectedBenefit}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="What benefits would this idea bring? (e.g., time savings, cost reduction, improved efficiency)"
                ></textarea>
              </div>

              <div>
                <label htmlFor="implementation" className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Suggestions
                </label>
                <textarea
                  id="implementation"
                  name="implementation"
                  value={formData.implementation}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="How do you think this idea could be implemented? Any specific steps or requirements?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-4 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Idea</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Guidelines */}
          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <h2 className="text-xl font-bold text-blue-800 mb-6">Idea Submission Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-700 mb-3">What Makes a Good Idea?</h3>
                <ul className="space-y-2 text-blue-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Addresses a real problem or opportunity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Provides clear benefits
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Is feasible to implement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Aligns with company goals
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-3">Review Process</h3>
                <ul className="space-y-2 text-blue-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Ideas are reviewed within 5 business days
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    You'll receive feedback via email
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Selected ideas may be developed further
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Contributors are recognized for their input
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

export default IdeaRegister;