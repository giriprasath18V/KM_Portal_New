import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, GitCompare, TestTube, Zap, Settings } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  uses: string[];
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const innovationProjects: Project[] = [
  {
    name: 'TestPlan Generator',
    description: 'Automated test plan generation tool that creates comprehensive test scenarios based on requirements and user stories.',
    uses: [
      'Automated test case creation',
      'Requirements analysis',
      'Test coverage optimization',
      'Documentation generation'
    ],
    features: [
      'AI-powered test scenario generation',
      'Integration with JIRA and Azure DevOps',
      'Customizable test templates',
      'Real-time collaboration',
      'Export to multiple formats'
    ],
    icon: <FileText size={32} />,
    color: 'blue'
  },
  {
    name: 'RF Script Generator',
    description: 'Radio Frequency script automation tool that generates RF device scripts for warehouse operations and testing.',
    uses: [
      'RF device automation',
      'Warehouse testing scripts',
      'Device configuration',
      'Performance testing'
    ],
    features: [
      'Multi-device support',
      'Script template library',
      'Real-time script validation',
      'Performance optimization',
      'Integration with WMS systems'
    ],
    icon: <Code size={32} />,
    color: 'green'
  },
  {
    name: 'Cold Compare Tool',
    description: 'Advanced comparison tool for analyzing differences between cold storage environments, configurations, and data sets.',
    uses: [
      'Environment comparison',
      'Configuration analysis',
      'Data validation',
      'Migration verification'
    ],
    features: [
      'Visual diff representation',
      'Automated reporting',
      'Custom comparison rules',
      'Integration APIs',
      'Historical tracking'
    ],
    icon: <GitCompare size={32} />,
    color: 'purple'
  },
  {
    name: 'Automation Framework',
    description: 'Comprehensive test automation framework supporting multiple applications and technologies for end-to-end testing.',
    uses: [
      'Cross-platform testing',
      'Regression automation',
      'Performance testing',
      'API testing'
    ],
    features: [
      'Multi-browser support',
      'Parallel execution',
      'Detailed reporting',
      'CI/CD integration',
      'Reusable components'
    ],
    icon: <TestTube size={32} />,
    color: 'orange'
  },
  {
    name: 'Performance Monitor',
    description: 'Real-time performance monitoring tool for warehouse management systems with predictive analytics capabilities.',
    uses: [
      'System performance tracking',
      'Bottleneck identification',
      'Predictive maintenance',
      'Resource optimization'
    ],
    features: [
      'Real-time dashboards',
      'Alert notifications',
      'Historical analysis',
      'Machine learning insights',
      'Custom metrics'
    ],
    icon: <Zap size={32} />,
    color: 'red'
  },
  {
    name: 'Config Manager',
    description: 'Centralized configuration management tool for maintaining and deploying system configurations across environments.',
    uses: [
      'Configuration management',
      'Environment synchronization',
      'Version control',
      'Deployment automation'
    ],
    features: [
      'Version tracking',
      'Environment comparison',
      'Automated deployment',
      'Rollback capabilities',
      'Audit trails'
    ],
    icon: <Settings size={32} />,
    color: 'teal'
  }
];

const Innovations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Innovation Projects</h1>
          
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Building the Future of Warehouse Technology</h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              Our innovation team develops cutting-edge tools and solutions that streamline warehouse operations, 
              improve efficiency, and reduce manual effort. These projects represent our commitment to technological 
              advancement and continuous improvement.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {innovationProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-${project.color}-500 p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className={`bg-${project.color}-600 p-3 rounded-lg`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Primary Uses:</h4>
                      <ul className="space-y-2">
                        {project.uses.map((use, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className={`w-2 h-2 bg-${project.color}-500 rounded-full mr-3`}></span>
                            <span className="text-sm">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className={`w-2 h-2 bg-${project.color}-500 rounded-full mr-3`}></span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Innovation Impact */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Innovation Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-90">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-sm opacity-90">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Accuracy Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-90">Cost Savings</div>
              </div>
            </div>
          </div>
          
          {/* Technology Stack */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-gray-600 text-sm">Python, Java, JavaScript, React, Node.js</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Testing</h3>
                <p className="text-gray-600 text-sm">Selenium, Pytest, Jest, Cypress</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <p className="text-gray-600 text-sm">Docker, Kubernetes, AWS, Azure</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Innovations;