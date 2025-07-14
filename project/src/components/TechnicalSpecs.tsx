import React, { useState, useRef, useEffect } from 'react';
import { Server, Cpu, Database, Shield, Zap, Globe } from 'lucide-react';

interface SpecificationProps {
  title: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  gradient: string;
}

const SpecificationCard: React.FC<SpecificationProps> = ({ title, icon, specs, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Header */}
      <div className={`${gradient} p-6 text-white relative overflow-hidden`}>
        <div className="flex items-center space-x-4 relative z-10">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                spec.highlight ? 'bg-blue-50 -mx-2 px-2 rounded-lg' : ''
              }`}
            >
              <span className="text-gray-600 font-medium">{spec.label}</span>
              <span className={`font-bold ${spec.highlight ? 'text-blue-600' : 'text-gray-800'}`}>
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className={`absolute bottom-0 left-0 h-1 ${gradient} transition-all duration-500 ${
        isHovered ? 'w-full' : 'w-0'
      }`}></div>
    </div>
  );
};

const TechnicalSpecs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.spec-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const specifications = [
    {
      title: "Temperature Zones",
      icon: <Server size={24} />,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      specs: [
        { label: "Deep Freeze", value: "-25°C to -18°C", highlight: true },
        { label: "Standard Freezer", value: "-18°C to -10°C" },
        { label: "Chiller", value: "0°C to 4°C" },
        { label: "Cool Storage", value: "8°C to 15°C" },
        { label: "Precision Control", value: "±0.5°C", highlight: true },
        { label: "Monitoring Points", value: "1,200+" }
      ]
    },
    {
      title: "Facility Capacity",
      icon: <Database size={24} />,
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
      specs: [
        { label: "Total Area", value: "125,000 sq ft", highlight: true },
        { label: "Storage Volume", value: "800,000 cu ft" },
        { label: "Pallet Positions", value: "18,000+" },
        { label: "Loading Bays", value: "24 Docks" },
        { label: "Ceiling Height", value: "40 feet" },
        { label: "Daily Throughput", value: "50,000 units", highlight: true }
      ]
    },
    {
      title: "Technology Systems",
      icon: <Cpu size={24} />,
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      specs: [
        { label: "AI Processing", value: "Real-time", highlight: true },
        { label: "Backup Generators", value: "4 Redundant" },
        { label: "Data Center", value: "Tier 4" },
        { label: "Network Speed", value: "10Gb Fiber" },
        { label: "Security Cameras", value: "320+ 4K" },
        { label: "IoT Sensors", value: "5,000+", highlight: true }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield size={24} />,
      gradient: "bg-gradient-to-br from-red-500 to-red-600",
      specs: [
        { label: "Security Rating", value: "ISO 27001", highlight: true },
        { label: "Access Control", value: "Biometric" },
        { label: "Surveillance", value: "24/7 Monitoring" },
        { label: "Compliance", value: "FDA, HACCP" },
        { label: "Audit Trail", value: "Blockchain" },
        { label: "Incident Response", value: "< 2 minutes", highlight: true }
      ]
    },
    {
      title: "Performance Metrics",
      icon: <Zap size={24} />,
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
      specs: [
        { label: "Uptime", value: "99.99%", highlight: true },
        { label: "Energy Efficiency", value: "40% Better" },
        { label: "Processing Speed", value: "< 30 seconds" },
        { label: "Accuracy Rate", value: "99.98%" },
        { label: "Response Time", value: "< 1 second" },
        { label: "Carbon Reduction", value: "60%", highlight: true }
      ]
    },
    {
      title: "Global Operations",
      icon: <Globe size={24} />,
      gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      specs: [
        { label: "Locations", value: "50+ Countries", highlight: true },
        { label: "Time Zones", value: "24/7 Coverage" },
        { label: "Languages", value: "25+ Supported" },
        { label: "Clients Served", value: "500+" },
        { label: "Support Response", value: "< 15 minutes" },
        { label: "Global Capacity", value: "10M+ sq ft", highlight: true }
      ]
    }
  ];

  return (
    <section id="specifications" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Cpu className="mr-2" size={16} />
            Technical Excellence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Engineering Specifications
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Our facility is engineered to the highest standards, providing unparalleled precision, 
            reliability, and performance for your critical storage requirements.
          </p>
        </div>
        
        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-card opacity-0 transform translate-y-10">
              <SpecificationCard {...spec} />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get detailed specifications tailored to your specific requirements and discover 
              how our technology can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Detailed Specs
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;