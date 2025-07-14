import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck } from 'lucide-react';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const inboundFlow: FlowStep[] = [
  {
    id: '1',
    title: 'Supplier',
    description: 'Goods shipped from supplier with advance notice',
    icon: '🏭'
  },
  {
    id: '2',
    title: 'Receipt Check',
    description: 'Verify shipment details against purchase orders',
    icon: '📋'
  },
  {
    id: '3',
    title: 'Goods Receiving',
    description: 'Physical receipt and unloading of goods',
    icon: '📦'
  },
  {
    id: '4',
    title: 'Scanning',
    description: 'Barcode/RFID scanning for inventory tracking',
    icon: '📱'
  },
  {
    id: '5',
    title: 'Quality Inspection',
    description: 'Quality control and damage assessment',
    icon: '🔍'
  },
  {
    id: '6',
    title: 'Staging',
    description: 'Temporary placement in staging area',
    icon: '📍'
  },
  {
    id: '7',
    title: 'Putaway',
    description: 'Move goods to designated storage locations',
    icon: '🏪'
  },
  {
    id: '8',
    title: 'Reserved Location',
    description: 'Final storage in optimal warehouse location',
    icon: '📌'
  }
];

const outboundFlow: FlowStep[] = [
  {
    id: '1',
    title: 'Verify Shipment Details',
    description: 'Confirm order details and shipping requirements',
    icon: '✅'
  },
  {
    id: '2',
    title: 'Picking',
    description: 'Select items from storage locations',
    icon: '🎯'
  },
  {
    id: '3',
    title: 'Scanning',
    description: 'Scan picked items for accuracy verification',
    icon: '📱'
  },
  {
    id: '4',
    title: 'Quality Inspection',
    description: 'Final quality check before packing',
    icon: '🔍'
  },
  {
    id: '5',
    title: 'ASN',
    description: 'Generate Advance Shipment Notice',
    icon: '📄'
  },
  {
    id: '6',
    title: 'Loading',
    description: 'Load goods onto delivery vehicle',
    icon: '🚛'
  },
  {
    id: '7',
    title: 'Invoice',
    description: 'Generate and send invoice to customer',
    icon: '💰'
  },
  {
    id: '8',
    title: 'Customer',
    description: 'Goods delivered to customer location',
    icon: '🏢'
  }
];

const BusinessFlow: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<'inbound' | 'outbound' | null>(null);

  const renderFlowChart = (steps: FlowStep[], title: string, color: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{title}</h2>
      
      {/* Flow Chart */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-${color}-50 border-2 border-${color}-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                <div className={`mt-3 w-8 h-8 bg-${color}-500 text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold`}>
                  {step.id}
                </div>
              </motion.div>
              
              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className={`text-${color}-500`} size={24} />
                </div>
              )}
              
              {/* Mobile arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-4">
                  <ArrowRight className={`text-${color}-500 rotate-90`} size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Process Summary */}
      <div className={`mt-8 bg-${color}-50 rounded-lg p-6`}>
        <h3 className="font-semibold mb-4">Process Summary</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Streamlined operations</li>
              <li>• Real-time tracking</li>
              <li>• Quality assurance</li>
              <li>• Automated documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Technology Used:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Barcode/RFID scanning</li>
              <li>• WMS integration</li>
              <li>• Real-time updates</li>
              <li>• Automated notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Flow Processes</h1>
          
          {!activeFlow && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-8 cursor-pointer"
                onClick={() => setActiveFlow('inbound')}
              >
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package className="text-blue-600" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Inbound Flow</h2>
                  <p className="text-gray-600 mb-6">
                    Complete process from supplier delivery to warehouse storage
                  </p>
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
                    View Process <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-8 cursor-pointer"
                onClick={() => setActiveFlow('outbound')}
              >
                <div className="text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="text-green-600" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Outbound Flow</h2>
                  <p className="text-gray-600 mb-6">
                    Order fulfillment process from picking to customer delivery
                  </p>
                  <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
                    View Process <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          
          {activeFlow === 'inbound' && (
            <div>
              <button
                onClick={() => setActiveFlow(null)}
                className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Back to Options
              </button>
              {renderFlowChart(inboundFlow, 'Inbound Flow Process', 'blue')}
            </div>
          )}
          
          {activeFlow === 'outbound' && (
            <div>
              <button
                onClick={() => setActiveFlow(null)}
                className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Back to Options
              </button>
              {renderFlowChart(outboundFlow, 'Outbound Flow Process', 'green')}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessFlow;