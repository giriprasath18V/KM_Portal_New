import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Shield, Truck, Package, Cpu, Zap } from 'lucide-react';

interface WarehouseComponent {
  name: string;
  description: string;
  image: string;
  category: string;
}

const warehouseComponents: WarehouseComponent[] = [
  // Infrastructure
  {
    name: 'Dock Doors',
    description: 'Loading and unloading bays with hydraulic levelers for efficient truck operations',
    image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Staging Locations',
    description: 'Temporary storage areas for incoming and outgoing goods processing',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Storage Racks',
    description: 'Multi-level steel racking systems for maximum space utilization',
    image: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Pallet Positions',
    description: 'Designated storage locations for palletized goods with precise tracking',
    image: 'https://images.pexels.com/photos/4481332/pexels-photo-4481332.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Pick Zones',
    description: 'Optimized areas for order picking operations with easy access',
    image: 'https://images.pexels.com/photos/4481345/pexels-photo-4481345.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Packing Stations',
    description: 'Ergonomic workstations for order packing and preparation',
    image: 'https://images.pexels.com/photos/4481350/pexels-photo-4481350.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Cross-docking Area',
    description: 'Direct transfer zone for goods from inbound to outbound without storage',
    image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg',
    category: 'Infrastructure'
  },
  {
    name: 'Mezzanine Floors',
    description: 'Additional storage levels to maximize vertical space utilization',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    category: 'Infrastructure'
  },

  // Storage Equipment
  {
    name: 'Wooden Pallets',
    description: 'Traditional wooden platforms for goods transportation and storage',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Plastic Pallets',
    description: 'Durable, lightweight plastic pallets for hygienic storage requirements',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Metal Pallets',
    description: 'Heavy-duty steel pallets for industrial and high-weight applications',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Euro Pallets',
    description: 'Standardized European pallets for international shipping compatibility',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Block Pallets',
    description: 'Four-way entry pallets with blocks for forklift access from all sides',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Stringer Pallets',
    description: 'Two-way entry pallets with stringers for specific handling requirements',
    image: 'https://images.pexels.com/photos/3183141/pexels-photo-3183141.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Totes',
    description: 'Stackable containers for small parts and component storage',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Gaylord Boxes',
    description: 'Large corrugated containers for bulk storage and transportation',
    image: 'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Drums',
    description: 'Cylindrical containers for liquid and powder storage in cold environments',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
    category: 'Storage Equipment'
  },
  {
    name: 'Barrels',
    description: 'Specialized containers for temperature-sensitive liquid products',
    image: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg',
    category: 'Storage Equipment'
  },

  // Material Handling
  {
    name: 'Belt Conveyors',
    description: 'Continuous belt systems for smooth product transportation',
    image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Roller Conveyors',
    description: 'Gravity and powered roller systems for package movement',
    image: 'https://images.pexels.com/photos/3183192/pexels-photo-3183192.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Spiral Conveyors',
    description: 'Space-saving vertical conveyor systems for multi-level transport',
    image: 'https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Sortation Conveyors',
    description: 'Automated sorting systems for order fulfillment and distribution',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Forklifts',
    description: 'Versatile lifting vehicles for pallet handling and stacking operations',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Counterbalance Forklifts',
    description: 'Standard forklifts with rear counterweight for stable lifting',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Reach Trucks',
    description: 'Narrow aisle forklifts for high-density storage operations',
    image: 'https://images.pexels.com/photos/3760264/pexels-photo-3760264.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Order Pickers',
    description: 'Elevated platforms for picking items from high storage locations',
    image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Manual Pallet Jacks',
    description: 'Hand-operated lifting devices for short-distance pallet movement',
    image: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Electric Pallet Jacks',
    description: 'Battery-powered pallet movers for efficient material handling',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Automated Guided Vehicles (AGVs)',
    description: 'Self-guided vehicles for automated material transport',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Autonomous Mobile Robots (AMRs)',
    description: 'Intelligent robots for flexible and adaptive warehouse operations',
    image: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Cranes',
    description: 'Heavy-duty lifting equipment for large and heavy items',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    category: 'Material Handling'
  },
  {
    name: 'Hoists',
    description: 'Mechanical lifting devices for vertical material movement',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    category: 'Material Handling'
  },

  // Technology Systems
  {
    name: 'Warehouse Management System (WMS)',
    description: 'Comprehensive software for warehouse operations management',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    category: 'Technology'
  },
  {
    name: 'Enterprise Resource Planning (ERP)',
    description: 'Integrated business management software for end-to-end operations',
    image: 'https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg',
    category: 'Technology'
  },
  {
    name: 'Barcode Scanners',
    description: 'Handheld and fixed scanners for inventory tracking and identification',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Technology'
  },
  {
    name: 'RFID Systems',
    description: 'Radio frequency identification for real-time inventory tracking',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
    category: 'Technology'
  },
  {
    name: 'Pick-to-light Systems',
    description: 'LED-guided picking systems for accuracy and efficiency',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
    category: 'Technology'
  },
  {
    name: 'Put-to-light Systems',
    description: 'Light-directed putaway systems for accurate inventory placement',
    image: 'https://images.pexels.com/photos/3183141/pexels-photo-3183141.jpeg',
    category: 'Technology'
  },
  {
    name: 'Voice Picking Systems',
    description: 'Hands-free voice-directed picking for improved productivity',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg',
    category: 'Technology'
  },
  {
    name: 'Automated Storage and Retrieval Systems (AS/RS)',
    description: 'Computer-controlled systems for automated storage and retrieval',
    image: 'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg',
    category: 'Technology'
  },

  // Operations
  {
    name: 'Receiving',
    description: 'Incoming goods acceptance and verification processes',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
    category: 'Operations'
  },
  {
    name: 'Putaway',
    description: 'Strategic placement of received goods in optimal storage locations',
    image: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg',
    category: 'Operations'
  },
  {
    name: 'Picking',
    description: 'Order fulfillment process of selecting items from storage',
    image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg',
    category: 'Operations'
  },
  {
    name: 'Packing',
    description: 'Order preparation and packaging for shipment',
    image: 'https://images.pexels.com/photos/3183192/pexels-photo-3183192.jpeg',
    category: 'Operations'
  },
  {
    name: 'Shipping',
    description: 'Outbound logistics and transportation coordination',
    image: 'https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg',
    category: 'Operations'
  },
  {
    name: 'Inventory Management',
    description: 'Real-time tracking and control of stock levels and movements',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    category: 'Operations'
  },
  {
    name: 'Cycle Counting',
    description: 'Regular inventory audits for accuracy and discrepancy resolution',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    category: 'Operations'
  },
  {
    name: 'Returns Processing',
    description: 'Handling and processing of returned merchandise',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    category: 'Operations'
  },
  {
    name: 'Reverse Logistics',
    description: 'Management of product returns and recycling processes',
    image: 'https://images.pexels.com/photos/3760264/pexels-photo-3760264.jpeg',
    category: 'Operations'
  }
];

const categories = ['Infrastructure', 'Storage Equipment', 'Material Handling', 'Technology', 'Operations'];

const categoryIcons = {
  'Infrastructure': <Package size={24} />,
  'Storage Equipment': <Package size={24} />,
  'Material Handling': <Truck size={24} />,
  'Technology': <Cpu size={24} />,
  'Operations': <Zap size={24} />
};

const Warehouse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cold Storage Warehouse</h1>
          
          {/* Introduction Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a Cold Storage Warehouse?</h2>
                <p className="text-gray-600 mb-4">
                  A cold storage warehouse is a specialized facility designed to store temperature-sensitive products 
                  at controlled temperatures. These facilities are essential for preserving the quality, safety, and 
                  shelf life of perishable goods including food products, pharmaceuticals, and other temperature-critical items.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-700">Temperature Control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-700">Product Safety</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-700">Quality Preservation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-700">Energy Efficiency</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg"
                  alt="Cold Storage Warehouse"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Components by Category */}
          {categories.map((category, categoryIndex) => (
            <section key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="text-blue-600 mr-3">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {warehouseComponents
                  .filter(component => component.category === category)
                  .map((component, index) => (
                    <motion.div
                      key={component.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={component.image}
                          alt={component.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <h3 className="text-white font-semibold text-sm">{component.name}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 text-sm">{component.description}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </section>
          ))}

          {/* Key Features Summary */}
          <div className="bg-blue-50 rounded-lg p-8 mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Cold Storage Warehouse Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Temperature Zones</h3>
                <p className="text-gray-600 text-sm">
                  Multiple temperature zones from -25°C to +15°C for different product requirements
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Advanced Security</h3>
                <p className="text-gray-600 text-sm">
                  24/7 monitoring, access control, and comprehensive tracking systems
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Smart Technology</h3>
                <p className="text-gray-600 text-sm">
                  IoT sensors, automated systems, and real-time data analytics
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Warehouse;