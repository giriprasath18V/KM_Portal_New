import React from 'react';
import { motion } from 'framer-motion';
import { Code2, TestTube2, Workflow } from 'lucide-react';

interface AutomationProject {
  name: string;
  technology: 'Python' | 'Java';
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const automationProjects: AutomationProject[] = [
  {
    name: 'Koerber Automation',
    technology: 'Python',
    description: 'End-to-end automation of Koerber Warehouse Management System',
    features: [
      'Automated test execution',
      'Test data generation',
      'Result reporting',
      'Regression testing'
    ],
    icon: <Workflow className="w-6 h-6" />
  },
  {
    name: 'JDA/Blue Yonder/RP',
    technology: 'Python',
    description: 'Comprehensive automation suite for JDA and Blue Yonder systems',
    features: [
      'Integration testing',
      'Performance monitoring',
      'Automated workflows',
      'Data validation'
    ],
    icon: <TestTube2 className="w-6 h-6" />
  },
  {
    name: 'i2 and P2 Applications',
    technology: 'Java',
    description: 'Java-based automation framework for legacy systems',
    features: [
      'System integration',
      'Data migration testing',
      'UI automation',
      'API testing'
    ],
    icon: <Code2 className="w-6 h-6" />
  }
];

const Automation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Automation Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                    <span className="text-sm text-blue-600 font-medium">
                      {project.technology}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Automation;