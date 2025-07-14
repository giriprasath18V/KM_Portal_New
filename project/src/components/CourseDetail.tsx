import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Clock, Star, Users, Award, PlayCircle } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { platform, courseId } = useParams();
  const navigate = useNavigate();

  // Mock course data - in a real app, this would come from an API
  const courseData = {
    title: 'Complete Warehouse Management System',
    description: 'Master warehouse operations from basics to advanced automation. This comprehensive course covers everything you need to know about modern warehouse management systems.',
    instructor: 'John Smith',
    duration: '12 hours',
    rating: 4.8,
    students: 2500,
    level: 'Beginner',
    price: '$89.99',
    image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
    platform: platform?.toUpperCase() || 'PLATFORM',
    modules: [
      'Introduction to Warehouse Management',
      'Inventory Control Systems',
      'Order Processing and Fulfillment',
      'Warehouse Layout and Design',
      'Technology Integration',
      'Performance Metrics and KPIs',
      'Advanced Automation Techniques',
      'Case Studies and Best Practices'
    ],
    requirements: [
      'Basic understanding of business operations',
      'No prior warehouse experience required',
      'Computer with internet access',
      'Willingness to learn and practice'
    ],
    outcomes: [
      'Understand core warehouse management principles',
      'Implement efficient inventory control systems',
      'Design optimal warehouse layouts',
      'Integrate modern technology solutions',
      'Measure and improve warehouse performance',
      'Apply automation strategies effectively'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/courses')}
            className="mb-6 flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Courses
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="aspect-video relative">
                  <img
                    src={courseData.image}
                    alt={courseData.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all">
                      <PlayCircle size={48} className="text-white" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {courseData.platform}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">{courseData.title}</h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">{courseData.description}</p>

                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={20} />
                      <span className="ml-1 font-semibold">{courseData.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-gray-400" size={20} />
                      <span className="ml-1">{courseData.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-gray-400" size={20} />
                      <span className="ml-1">{courseData.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {courseData.level}
                    </span>
                  </div>

                  <div className="border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Modules</h2>
                    <div className="space-y-3">
                      {courseData.modules.map((module, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="text-green-600 mt-1 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {courseData.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-800 mb-2">{courseData.price}</div>
                  <div className="text-gray-600">One-time payment</div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4 flex items-center justify-center">
                  <ExternalLink size={16} className="mr-2" />
                  Enroll Now
                </button>

                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors mb-6">
                  Add to Wishlist
                </button>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-semibold">{courseData.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{courseData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{courseData.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-semibold">English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-semibold">Yes</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">This course includes:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 12 hours of video content</li>
                    <li>• Downloadable resources</li>
                    <li>• Lifetime access</li>
                    <li>• Certificate of completion</li>
                    <li>• Mobile and TV access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;