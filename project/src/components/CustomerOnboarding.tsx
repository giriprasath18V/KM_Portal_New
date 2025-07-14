import React from 'react';
import { motion } from 'framer-motion';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const flowSteps: FlowStep[] = [
  {
    id: '1',
    title: 'External Customer',
    description: 'Initial customer inquiry and interest in our services',
    icon: '👤',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Sales Team',
    description: 'Sales team engagement and requirement discussion',
    icon: '💼',
    color: 'bg-green-500'
  },
  {
    id: '3',
    title: 'Project Allocation',
    description: 'Resource allocation and project team assignment',
    icon: '📋',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    title: 'Onboarding Meeting',
    description: 'Kickoff meeting with stakeholders and project planning',
    icon: '🤝',
    color: 'bg-orange-500'
  },
  {
    id: '5',
    title: 'Collaboration',
    description: 'Active collaboration and implementation phase',
    icon: '⚙️',
    color: 'bg-red-500'
  },
  {
    id: '6',
    title: 'Hypercare',
    description: 'Intensive support and monitoring during go-live',
    icon: '🔧',
    color: 'bg-yellow-500'
  },
  {
    id: '7',
    title: 'Sign Off',
    description: 'Project completion and formal sign-off',
    icon: '✅',
    color: 'bg-teal-500'
  }
];

const CustomerOnboarding: React.FC = () => {
  const radius = 350;
  const centerX = 400;
  const centerY = 400;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Customer Onboarding Flow</h1>
          
          <div className="bg-white rounded-2xl shadow-2xl p-12 mb-8">
            <div className="relative w-full h-[800px] flex items-center justify-center">
              <svg width="800" height="800" className="absolute inset-0">
                {/* Outer decorative circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius + 50}
                  fill="none"
                  stroke="#e0e7ff"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  opacity="0.5"
                />
                
                {/* Main circular path */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="8,4"
                  opacity="0.3"
                />
                
                {/* Flow arrows */}
                {flowSteps.map((step, index) => {
                  const angle = (index * 360) / flowSteps.length - 90;
                  const nextAngle = ((index + 1) * 360) / flowSteps.length - 90;
                  
                  const startAngleRad = (angle * Math.PI) / 180;
                  const endAngleRad = (nextAngle * Math.PI) / 180;
                  
                  const startX = centerX + radius * Math.cos(startAngleRad);
                  const startY = centerY + radius * Math.sin(startAngleRad);
                  const endX = centerX + radius * Math.cos(endAngleRad);
                  const endY = centerY + radius * Math.sin(endAngleRad);
                  
                  const midAngle = (angle + (360 / flowSteps.length) / 2) * Math.PI / 180;
                  const controlX = centerX + (radius + 30) * Math.cos(midAngle);
                  const controlY = centerY + (radius + 30) * Math.sin(midAngle);
                  
                  return (
                    <g key={`arrow-${index}`}>
                      <defs>
                        <marker
                          id={`arrowhead-${index}`}
                          markerWidth="12"
                          markerHeight="8"
                          refX="10"
                          refY="4"
                          orient="auto"
                        >
                          <polygon
                            points="0 0, 12 4, 0 8"
                            fill="#3b82f6"
                          />
                        </marker>
                      </defs>
                      <path
                        d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        markerEnd={`url(#arrowhead-${index})`}
                        opacity="0.7"
                      />
                    </g>
                  );
                })}
              </svg>
              
              {/* Flow step nodes */}
              {flowSteps.map((step, index) => {
                const angle = (index * 360) / flowSteps.length - 90;
                const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
                const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.3, duration: 0.6, type: "spring" }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: x, top: y }}
                  >
                    <div className={`w-32 h-32 ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                      <div className="text-center">
                        <div className="text-3xl mb-2">{step.icon}</div>
                        <div className="text-sm font-bold">{step.id}</div>
                      </div>
                    </div>
                    
                    {/* Step label */}
                    <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 w-40 text-center">
                      <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-gray-100">
                        <h3 className="font-bold text-sm text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Center logo/title */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                className="absolute bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-40 h-40 flex items-center justify-center shadow-2xl border-4 border-white"
                style={{ left: centerX, top: centerY, transform: 'translate(-50%, -50%)' }}
              >
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-lg font-bold">AMC</div>
                  <div className="text-xs opacity-90">Onboarding</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Process Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Streamlined Process</h3>
              <p className="text-sm text-gray-600">7-step systematic approach ensuring smooth customer onboarding</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Collaborative Approach</h3>
              <p className="text-sm text-gray-600">Close partnership throughout the entire implementation journey</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Success Focused</h3>
              <p className="text-sm text-gray-600">Dedicated support until successful project completion and sign-off</p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Onboarding Timeline</h2>
            <div className="grid md:grid-cols-7 gap-4">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-lg`}>
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerOnboarding;