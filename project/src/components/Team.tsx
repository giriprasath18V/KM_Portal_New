import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  location: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Thanegai',
    role: 'Technical Lead',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    location: 'Offshore Team - India',
    expertise: ['WMS Implementation', 'System Architecture', 'Team Leadership']
  },
  {
    name: 'Bala',
    role: 'Senior Developer',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    location: 'Offshore Team - India',
    expertise: ['Java Development', 'Database Design', 'API Integration']
  },
  {
    name: 'Sheik',
    role: 'QA Lead',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    location: 'Offshore Team - India',
    expertise: ['Test Automation', 'Quality Assurance', 'Performance Testing']
  },
  {
    name: 'Kalki',
    role: 'Business Analyst',
    image: 'https://images.pexels.com/photos/3760264/pexels-photo-3760264.jpeg',
    location: 'Offshore Team - India',
    expertise: ['Requirements Analysis', 'Process Optimization', 'Client Communication']
  },
  {
    name: 'Harini',
    role: 'DevOps Engineer',
    image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg',
    location: 'Offshore Team - India',
    expertise: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Monitoring Systems']
  },
  {
    name: 'Saras',
    role: 'UX Designer',
    image: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg',
    location: 'Offshore Team - India',
    expertise: ['User Experience', 'Interface Design', 'Prototyping']
  },
  {
    name: 'Vignesh',
    role: 'Full Stack Developer',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
    location: 'Offshore Team - India',
    expertise: ['React Development', 'Node.js', 'Database Management']
  },
  {
    name: 'Sathish',
    role: 'System Administrator',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    location: 'Offshore Team - India',
    expertise: ['Server Management', 'Network Security', 'System Monitoring']
  },
  {
    name: 'Giri',
    role: 'Data Analyst',
    image: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg',
    location: 'Offshore Team - India',
    expertise: ['Data Analytics', 'Reporting', 'Business Intelligence']
  },
  {
    name: 'Sakkti',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    location: 'Offshore Team - India',
    expertise: ['Project Planning', 'Resource Management', 'Stakeholder Communication']
  }
];

const serviceAreas = [
  {
    title: 'Technical Development',
    description: 'Custom software development and system integration',
    icon: '💻',
    services: ['WMS Implementation', 'Custom Development', 'API Integration', 'Database Design']
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality control',
    icon: '🔍',
    services: ['Automated Testing', 'Performance Testing', 'Security Testing', 'Manual Testing']
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Cloud infrastructure and deployment automation',
    icon: '⚙️',
    services: ['CI/CD Pipelines', 'Cloud Management', 'Monitoring', 'Security']
  },
  {
    title: 'Business Analysis',
    description: 'Requirements gathering and process optimization',
    icon: '📊',
    services: ['Requirements Analysis', 'Process Mapping', 'Documentation', 'Training']
  },
  {
    title: 'Support Services',
    description: '24/7 technical support and maintenance',
    icon: '🛠️',
    services: ['24/7 Support', 'Issue Resolution', 'System Maintenance', 'User Training']
  },
  {
    title: 'Project Management',
    description: 'End-to-end project delivery and coordination',
    icon: '📋',
    services: ['Project Planning', 'Resource Allocation', 'Risk Management', 'Delivery']
  }
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Offshore Team</h1>
          
          {/* Team Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dedicated Offshore Excellence</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our offshore team in India provides world-class services with deep expertise in warehouse management 
                systems, automation, and technical solutions. With 24/7 support and a commitment to excellence, 
                we deliver innovative solutions that drive business success.
              </p>
            </div>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 mb-3">{member.location}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Service Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Team Members</div>
            </div>
            <div className="bg-green-600 text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Coverage</div>
            </div>
            <div className="bg-purple-600 text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div className="bg-orange-600 text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work with Our Team?</h2>
            <p className="mb-6 opacity-90">
              Get in touch with our offshore team for your next project. We're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-90">offshore@amc.com</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-semibold">Time Zone</div>
                <div className="text-sm opacity-90">IST (UTC +5:30)</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-semibold">Availability</div>
                <div className="text-sm opacity-90">24/7 Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;