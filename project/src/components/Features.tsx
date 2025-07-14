import React, { useRef, useEffect } from 'react';
import { Thermometer, ShieldCheck, BarChart3, Clock, Zap, Globe, Award, Users, Truck, Package, Snowflake, MapPin } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, color, delay }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Content */}
      <div className="relative p-8 z-10">
        <div className={`inline-flex p-4 rounded-2xl bg-${color}-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <div className={`text-${color}-600`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
        
        {/* Hover Effect Line */}
        <div className={`absolute bottom-0 left-0 h-1 bg-${color}-500 w-0 group-hover:w-full transition-all duration-500`}></div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureElements = entry.target.querySelectorAll('.feature-item');
            featureElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 100);
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

  const features = [
    {
      icon: <Thermometer size={32} />,
      title: "Precision Temperature Control",
      description: "Maintain exact temperatures within ±0.5°C across our entire facility with AI-powered monitoring and redundant cooling systems for optimal cold storage.",
      color: "blue",
      delay: 0
    },
    {
      icon: <Truck size={32} />,
      title: "Advanced Transportation",
      description: "State-of-the-art refrigerated transportation fleet with real-time tracking, ensuring your products maintain perfect temperature throughout the supply chain.",
      color: "green",
      delay: 100
    },
    {
      icon: <Globe size={32} />,
      title: "Global Logistics Network",
      description: "Worldwide connectivity with seamless integration across 200+ warehouse locations and real-time synchronization capabilities for efficient trade operations.",
      color: "purple",
      delay: 200
    },
    {
      icon: <Package size={32} />,
      title: "Smart Warehouse Solutions",
      description: "Automated warehouse management with AI-driven inventory optimization, robotic systems, and predictive analytics for maximum efficiency.",
      color: "orange",
      delay: 300
    },
    {
      icon: <Snowflake size={32} />,
      title: "Multi-Zone Cold Storage",
      description: "Specialized temperature zones from -25°C to +15°C with independent climate control systems for diverse product requirements and optimal preservation.",
      color: "cyan",
      delay: 400
    },
    {
      icon: <MapPin size={32} />,
      title: "Strategic Branch Network",
      description: "200+ strategically located branches worldwide providing comprehensive coverage and local expertise for seamless cold chain management.",
      color: "pink",
      delay: 500
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Supply Chain Analytics",
      description: "Real-time insights with predictive analytics, machine learning optimization, and comprehensive performance dashboards for data-driven decisions.",
      color: "indigo",
      delay: 600
    },
    {
      icon: <Award size={32} />,
      title: "Industry Leadership",
      description: "25+ years of excellence with award-winning solutions, recognized globally for innovation, reliability, and outstanding customer satisfaction in cold storage.",
      color: "yellow",
      delay: 700
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-8">
            <Zap className="mr-2" size={16} />
            Revolutionary Cold Storage Technology
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Leading Cold Storage Solutions
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the future of cold storage with our cutting-edge technology platform 
            that combines AI, automation, and precision engineering for unparalleled performance 
            in transportation, logistics, and supply chain management.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-item opacity-0 transform translate-y-10">
              <Feature {...feature} />
            </div>
          ))}
        </div>

        {/* Why We're Leading Section */}
        <div className="mt-24 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why We're the Leading Cold Storage Company
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-700">Global Branches</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Thermometer className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
              <div className="text-gray-700">Temperature Accuracy</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500M+</div>
              <div className="text-gray-700">Cubic Feet Storage</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('specifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Specifications
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;