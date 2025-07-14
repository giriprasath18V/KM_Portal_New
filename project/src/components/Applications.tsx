import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, Settings, Cloud } from 'lucide-react';

interface Application {
  id: string;
  name: string;
  description: string;
  uses: string[];
  features: string[];
  image: string;
  icon: React.ReactNode;
  color: string;
  howWeUse: string;
}

const applications: Application[] = [
  {
    id: 'koerber',
    name: 'Koerber WMS',
    description: 'Advanced Warehouse Management System providing comprehensive control over warehouse operations with real-time visibility and optimization.',
    uses: [
      'Inventory Management',
      'Order Fulfillment',
      'Labor Management',
      'Yard Management',
      'Transportation Management'
    ],
    features: [
      'Real-time inventory tracking',
      'Advanced picking strategies',
      'Labor optimization',
      'Multi-client support',
      'Integration capabilities'
    ],
    image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
    icon: <Database size={32} />,
    color: 'blue',
    howWeUse: 'We implement and customize Koerber WMS for our clients to optimize their warehouse operations. Our team configures the system to meet specific business requirements, integrates it with existing systems, and provides ongoing support to ensure maximum efficiency and productivity.'
  },
  {
    id: 'blue-yonder',
    name: 'Blue Yonder / JDA / RP',
    description: 'Comprehensive supply chain planning and execution platform that optimizes inventory, labor, and transportation across the entire supply chain.',
    uses: [
      'Supply Chain Planning',
      'Demand Forecasting',
      'Inventory Optimization',
      'Workforce Management',
      'Transportation Planning'
    ],
    features: [
      'AI-driven forecasting',
      'End-to-end visibility',
      'Dynamic optimization',
      'Cloud-native architecture',
      'Machine learning algorithms'
    ],
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
    icon: <Cloud size={32} />,
    color: 'green',
    howWeUse: 'Our expertise in Blue Yonder (formerly JDA) allows us to help clients transform their supply chain operations. We implement demand planning, inventory optimization, and workforce management solutions that leverage AI and machine learning to drive better business outcomes.'
  },
  {
    id: 'iseries',
    name: 'iSeries P2/Atlanta',
    description: 'Legacy warehouse management system running on IBM iSeries platform, providing robust and reliable warehouse operations for traditional environments.',
    uses: [
      'Legacy System Integration',
      'Warehouse Operations',
      'Inventory Control',
      'Order Processing',
      'Reporting & Analytics'
    ],
    features: [
      'IBM iSeries reliability',
      'Proven stability',
      'Custom modifications',
      'Legacy integration',
      'Robust reporting'
    ],
    image: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg',
    icon: <Cpu size={32} />,
    color: 'purple',
    howWeUse: 'We maintain and enhance legacy iSeries P2/Atlanta systems for clients who require stable, proven warehouse management solutions. Our team provides modernization services, custom development, and integration with newer technologies while preserving the reliability of these established systems.'
  },
  {
    id: 'i3pl',
    name: 'i3PL',
    description: 'Third-party logistics management system designed specifically for 3PL providers to manage multiple clients and complex billing scenarios.',
    uses: [
      '3PL Operations',
      'Multi-client Management',
      'Billing & Invoicing',
      'Contract Management',
      'Performance Analytics'
    ],
    features: [
      'Multi-tenant architecture',
      'Flexible billing models',
      'Client-specific configurations',
      'Performance dashboards',
      'Automated invoicing'
    ],
    image: 'https://images.pexels.com/photos/4481332/pexels-photo-4481332.jpeg',
    icon: <Settings size={32} />,
    color: 'orange',
    howWeUse: 'We specialize in implementing i3PL solutions for third-party logistics providers. Our team configures the system to handle complex multi-client scenarios, custom billing requirements, and performance tracking to help 3PL companies manage their operations efficiently and profitably.'
  }
];

const Applications: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  if (selectedApp) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setSelectedApp(null)}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Applications
            </button>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={selectedApp.image}
                  alt={selectedApp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className={`bg-${selectedApp.color}-600 p-3 rounded-lg mb-4 inline-block`}>
                    {selectedApp.icon}
                  </div>
                  <h1 className="text-3xl font-bold">{selectedApp.name}</h1>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">{selectedApp.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Primary Uses</h2>
                    <ul className="space-y-3">
                      {selectedApp.uses.map((use, index) => (
                        <li key={index} className="flex items-center">
                          <span className={`w-2 h-2 bg-${selectedApp.color}-600 rounded-full mr-3`}></span>
                          <span className="text-gray-700">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {selectedApp.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className={`w-2 h-2 bg-${selectedApp.color}-600 rounded-full mr-3`}></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`bg-${selectedApp.color}-50 rounded-lg p-6`}>
                  <h2 className="text-xl font-semibold mb-4">How We Use This Application</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedApp.howWeUse}
                  </p>
                </div>
              </div>
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
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Applications</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedApp(app)}
              >
                <div className="relative h-48">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className={`bg-${app.color}-600 p-2 rounded-lg mb-2 inline-block`}>
                      {app.icon}
                    </div>
                    <h2 className="text-xl font-bold">{app.name}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {app.uses.length} primary uses
                    </span>
                    <div className={`bg-${app.color}-600 text-white px-4 py-2 rounded-lg flex items-center text-sm hover:bg-${app.color}-700 transition-colors`}>
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Our Application Expertise?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Deep Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Years of experience implementing and customizing these systems
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Tailored configurations to meet your specific business needs
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  Round-the-clock support and maintenance services
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Applications;