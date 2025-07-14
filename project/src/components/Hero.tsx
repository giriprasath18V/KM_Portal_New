import React, { useEffect, useState } from 'react';
import { ChevronDown, Clock, Globe, Award, Thermometer, Package, Zap, Building2, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState({
    ist: new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata", hour12: true}),
    est: new Date().toLocaleString("en-US", {timeZone: "America/New_York", hour12: true})
  });

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime({
        ist: new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata", hour12: true}),
        est: new Date().toLocaleString("en-US", {timeZone: "America/New_York", hour12: true})
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
              The future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cold Storage
              </span>
              is here
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Revolutionary transportation, logistics, and supply chain solutions 
              with AI-powered temperature control across 200+ global branches.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Global Branches</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
                <div className="text-sm text-gray-600">Temperature Accuracy</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">500M+</div>
                <div className="text-sm text-gray-600">Cubic Feet Storage</div>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Package, title: "Transportation", desc: "Global logistics network", color: "blue" },
              { icon: Building2, title: "Warehouse", desc: "Smart storage solutions", color: "green" },
              { icon: Thermometer, title: "Temperature", desc: "Precision control systems", color: "purple" },
              { icon: Globe, title: "Supply Chain", desc: "End-to-end management", color: "orange" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`bg-${service.color}-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`text-${service.color}-600`} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Real-time Clocks */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">India (IST)</h3>
                  <p className="text-2xl font-mono text-blue-600">{currentTime.ist}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">USA (EST)</h3>
                  <p className="text-2xl font-mono text-purple-600">{currentTime.est}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why We're Leading */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why We're the Leading Cold Storage Company
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-700">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-700">Global Branches</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
                <div className="text-gray-700">Temperature Accuracy</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Package className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500M+</div>
                <div className="text-gray-700">Cubic Feet Storage</div>
              </div>
            </div>
          </div>

          {/* Featured Image/Video Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Cold Storage Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facilities combine cutting-edge technology with 
                sustainable practices to deliver unparalleled cold storage solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Zap className="text-green-600" size={20} />
                  </div>
                  <span className="text-gray-700">AI-powered temperature monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <TrendingUp className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">Real-time analytics and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="text-purple-600" size={20} />
                  </div>
                  <span className="text-gray-700">24/7 expert support team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg"
                alt="Cold Storage Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2 opacity-80">Explore more</span>
        <button 
          onClick={scrollToFeatures} 
          aria-label="Scroll down" 
          className="hover:scale-110 transition-transform duration-300 p-3 rounded-full bg-white shadow-lg border border-gray-100"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;