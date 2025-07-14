import React from 'react';
import { motion } from 'framer-motion';

interface EDIType {
  code: string;
  name: string;
  description: string;
  details: string[];
}

const ediTypes: EDIType[] = [
  {
    code: '943',
    name: 'Warehouse Stock Transfer Shipment Advice',
    description: 'Used to communicate warehouse stock transfer shipment details',
    details: [
      'Tracks movement of inventory between warehouse locations',
      'Includes detailed item information and quantities',
      'Records source and destination locations',
      'Contains shipment tracking information'
    ]
  },
  {
    code: '944',
    name: 'Warehouse Stock Transfer Receipt Advice',
    description: 'Confirms receipt of transferred stock between warehouses',
    details: [
      'Acknowledges receipt of transferred inventory',
      'Validates quantities received against shipped',
      'Records any discrepancies or damages',
      'Updates inventory system automatically'
    ]
  },
  {
    code: '940',
    name: 'Warehouse Shipping Order',
    description: 'Instructions for shipping products from a warehouse',
    details: [
      'Contains detailed picking instructions',
      'Specifies shipping method and carrier',
      'Includes special handling requirements',
      'Provides customer delivery information'
    ]
  },
  {
    code: '945',
    name: 'Warehouse Shipping Advice',
    description: 'Confirms shipment of products from a warehouse',
    details: [
      'Confirms order fulfillment details',
      'Includes tracking numbers and carrier info',
      'Lists actual quantities shipped',
      'Records shipping date and time'
    ]
  },
  {
    code: '856',
    name: 'Ship Notice/Manifest',
    description: 'Detailed shipment information including contents and tracking',
    details: [
      'Provides advance notice of incoming shipments',
      'Contains hierarchical packaging details',
      'Includes product identification and quantities',
      'Lists transportation details and routing'
    ]
  },
  {
    code: '947',
    name: 'Warehouse Inventory Adjustment Advice',
    description: 'Reports inventory adjustments in the warehouse',
    details: [
      'Records inventory count adjustments',
      'Documents reasons for adjustments',
      'Tracks inventory accuracy metrics',
      'Maintains audit trail of changes'
    ]
  },
  {
    code: '210',
    name: 'Motor Carrier Freight Details',
    description: 'Contains freight transportation details and invoice information',
    details: [
      'Specifies freight charges and terms',
      'Includes pickup and delivery information',
      'Details weight and dimensions',
      'Lists special handling requirements'
    ]
  }
];

const EDIInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">EDI Information</h1>
          <div className="grid gap-6">
            {ediTypes.map((edi, index) => (
              <motion.div
                key={edi.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-lg px-4 py-2 text-xl font-bold mb-4 md:mb-0 md:mr-6 md:w-32 text-center">
                    EDI {edi.code}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{edi.name}</h2>
                    <p className="text-gray-600 mb-4">{edi.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-700 mb-2">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {edi.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EDIInfo;