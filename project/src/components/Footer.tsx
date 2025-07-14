import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Snowflake,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                <Snowflake className="text-white" size={28} />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ArcticVault
                </span>
                <div className="text-xs text-gray-500 font-medium">Cold Storage Solutions</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Leading the future of cold storage with state-of-the-art temperature-controlled warehousing, 
              advanced transportation solutions, and unparalleled precision in supply chain management 
              across 200+ global locations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="text-blue-600" size={16} />
                </div>
                <span className="text-gray-700">120 Coldtech Avenue, Frostpeak Industrial Park, Boston, MA 02110</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="text-green-600" size={16} />
                </div>
                <span className="text-gray-700">+1 (617) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Mail className="text-purple-600" size={16} />
                </div>
                <span className="text-gray-700">info@arcticvault.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="text-orange-600" size={16} />
                </div>
                <span className="text-gray-700">24/7 Operations & Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {[
                { icon: Facebook, color: 'hover:text-blue-600' },
                { icon: Twitter, color: 'hover:text-cyan-500' },
                { icon: Instagram, color: 'hover:text-pink-500' },
                { icon: Linkedin, color: 'hover:text-blue-700' }
              ].map(({ icon: Icon, color }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`p-3 bg-gray-100 rounded-xl text-gray-600 ${color} transition-all duration-300 hover:bg-gray-200 hover:scale-110`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Cold Storage Solutions', 
                'Transportation & Logistics', 
                'Supply Chain Management', 
                'Temperature Monitoring',
                'Warehouse Automation',
                'Global Trade Support',
                'Quality Assurance',
                'Distribution Services'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Industries We Serve</h3>
            <ul className="space-y-3">
              {[
                'Pharmaceuticals',
                'Food & Beverage',
                'Biotechnology',
                'Chemical Products',
                'Agricultural Products',
                'Retail & E-commerce',
                'Healthcare',
                'Manufacturing'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated with Cold Storage Innovations</h3>
            <p className="text-gray-600 mb-6">
              Get the latest insights on cold storage technology, industry trends, and ArcticVault innovations.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center text-white"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-100 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Global Presence</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Warehouse Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500M+</div>
              <div className="text-gray-600">Cubic Feet Storage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} ArcticVault Cold Storage Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">Cookie Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;