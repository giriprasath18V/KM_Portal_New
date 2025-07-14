import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Clock, Star, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  rating: number;
  students: number;
  level: string;
  price: string;
  image: string;
  platform: string;
}

const courses: { [key: string]: Course[] } = {
  udemy: [
    {
      id: 'udemy-1',
      title: 'Complete Warehouse Management System',
      description: 'Master warehouse operations from basics to advanced automation',
      instructor: 'John Smith',
      duration: '12 hours',
      rating: 4.8,
      students: 2500,
      level: 'Beginner',
      price: '$89.99',
      image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
      platform: 'Udemy'
    },
    {
      id: 'udemy-2',
      title: 'Supply Chain Management Fundamentals',
      description: 'Learn end-to-end supply chain processes and optimization',
      instructor: 'Sarah Johnson',
      duration: '8 hours',
      rating: 4.6,
      students: 1800,
      level: 'Intermediate',
      price: '$79.99',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
      platform: 'Udemy'
    },
    {
      id: 'udemy-3',
      title: 'Inventory Management Best Practices',
      description: 'Advanced inventory control and optimization techniques',
      instructor: 'Mike Chen',
      duration: '6 hours',
      rating: 4.7,
      students: 1200,
      level: 'Advanced',
      price: '$69.99',
      image: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg',
      platform: 'Udemy'
    }
  ],
  aws: [
    {
      id: 'aws-1',
      title: 'AWS Cloud for Warehouse Operations',
      description: 'Deploy warehouse management systems on AWS cloud infrastructure',
      instructor: 'AWS Training',
      duration: '10 hours',
      rating: 4.9,
      students: 3200,
      level: 'Intermediate',
      price: 'Free',
      image: 'https://images.pexels.com/photos/4481332/pexels-photo-4481332.jpeg',
      platform: 'AWS'
    },
    {
      id: 'aws-2',
      title: 'IoT Solutions for Smart Warehouses',
      description: 'Implement IoT sensors and automation using AWS services',
      instructor: 'AWS IoT Team',
      duration: '15 hours',
      rating: 4.8,
      students: 2100,
      level: 'Advanced',
      price: 'Free',
      image: 'https://images.pexels.com/photos/4481345/pexels-photo-4481345.jpeg',
      platform: 'AWS'
    }
  ],
  'c-learn': [
    {
      id: 'clearn-1',
      title: 'Cold Storage Technology Fundamentals',
      description: 'Understanding temperature-controlled storage systems',
      instructor: 'Dr. Emily Davis',
      duration: '20 hours',
      rating: 4.9,
      students: 850,
      level: 'Beginner',
      price: '$149.99',
      image: 'https://images.pexels.com/photos/4481350/pexels-photo-4481350.jpeg',
      platform: 'C-Learn'
    },
    {
      id: 'clearn-2',
      title: 'Advanced Refrigeration Systems',
      description: 'Deep dive into industrial refrigeration and HVAC systems',
      instructor: 'Prof. Robert Wilson',
      duration: '25 hours',
      rating: 4.8,
      students: 650,
      level: 'Advanced',
      price: '$199.99',
      image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg',
      platform: 'C-Learn'
    }
  ],
  coursera: [
    {
      id: 'coursera-1',
      title: 'Operations Management Specialization',
      description: 'Comprehensive operations management from top universities',
      instructor: 'University of Pennsylvania',
      duration: '40 hours',
      rating: 4.7,
      students: 15000,
      level: 'Intermediate',
      price: '$49/month',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      platform: 'Coursera'
    },
    {
      id: 'coursera-2',
      title: 'Data Analytics for Supply Chain',
      description: 'Use data analytics to optimize supply chain operations',
      instructor: 'MIT',
      duration: '30 hours',
      rating: 4.8,
      students: 8500,
      level: 'Advanced',
      price: '$79/month',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      platform: 'Coursera'
    }
  ]
};

const platforms = [
  { id: 'udemy', name: 'Udemy', color: 'purple' },
  { id: 'aws', name: 'AWS', color: 'orange' },
  { id: 'c-learn', name: 'C-Learn', color: 'blue' },
  { id: 'coursera', name: 'Coursera', color: 'green' }
];

const Courses: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCourseClick = (platform: string, courseId: string) => {
    navigate(`/courses/${platform}/${courseId}`);
  };

  if (selectedPlatform) {
    const platformCourses = courses[selectedPlatform] || [];
    const platformInfo = platforms.find(p => p.id === selectedPlatform);

    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setSelectedPlatform(null)}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Platforms
            </button>

            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              {platformInfo?.name} Courses
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleCourseClick(selectedPlatform, course.id)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 bg-${platformInfo?.color}-600 text-white text-sm rounded-full`}>
                        {course.platform}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="text-gray-400" size={16} />
                          <span className="ml-1 text-sm text-gray-600">{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 bg-${platformInfo?.color}-100 text-${platformInfo?.color}-800 text-xs rounded-full`}>
                        {course.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Clock className="text-gray-400" size={16} />
                        <span className="ml-1 text-sm text-gray-600">{course.duration}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-800">{course.price}</span>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      Instructor: {course.instructor}
                    </div>

                    <button className={`w-full bg-${platformInfo?.color}-600 text-white py-2 rounded-lg hover:bg-${platformInfo?.color}-700 transition-colors flex items-center justify-center`}>
                      <ExternalLink size={16} className="mr-2" />
                      View Course
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Learning Platforms</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedPlatform(platform.id)}
              >
                <div className={`bg-gradient-to-br from-${platform.color}-500 to-${platform.color}-600 p-8 text-white text-center`}>
                  <BookOpen size={48} className="mx-auto mb-4" />
                  <h2 className="text-2xl font-bold">{platform.name}</h2>
                </div>
                
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {courses[platform.id]?.length || 0}
                    </div>
                    <div className="text-gray-600">Available Courses</div>
                  </div>
                  
                  <button className={`w-full mt-6 bg-${platform.color}-600 text-white py-3 rounded-lg hover:bg-${platform.color}-700 transition-colors flex items-center justify-center`}>
                    <Award size={16} className="mr-2" />
                    Explore Courses
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Learning Platform?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Comprehensive Content</h3>
                <p className="text-gray-600 text-sm">
                  Curated courses from top platforms covering all aspects of warehouse management
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Industry Experts</h3>
                <p className="text-gray-600 text-sm">
                  Learn from experienced professionals and leading institutions
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Community Learning</h3>
                <p className="text-gray-600 text-sm">
                  Join thousands of learners advancing their warehouse management skills
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;