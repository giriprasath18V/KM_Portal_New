import React, { useState, useEffect } from 'react';
import { Menu, X, Snowflake, User, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  title: string;
  items: string[];
}

const menuItems: MenuItem[] = [
  {
    title: 'About AMC',
    items: ['About AMC'],
  },
  {
    title: 'Our Applications',
    items: ['Applications', 'Koerber', 'BY/JDA/RP', 'iSeries P2/Atlanta', 'i3PL'],
  },
  {
    title: 'AMC Collections',
    items: [
      'Customer Onboarding flow',
      'EDI',
      'Automation',
      'Bootcamp',
      'Business Flow',
      'Advanced Training',
      'Jira, MSCVP',
    ],
  },
  {
    title: 'Tools',
    items: ['Bot', 'Innovations', 'GenAi', 'Register Ideas', 'Documents', 'Courses'],
  },
  {
    title: 'AMC Add-on',
    items: ['Freeze Flyer', 'Atlas', 'Client visits', 'Domain Expertise', 'Appreciation'],
  },
];

const getRoutePath = (title: string, item: string): string => {
  const routeMap: { [key: string]: string } = {
    'About AMC': '/about',
    'Applications': '/applications',
    'Freeze Flyer': '/freeze-flyer',
    'Atlas': '/atlas',
    'Client visits': '/client-visits',
    'Domain Expertise': '/domain-expertise',
    'Appreciation': '/appreciation',
    'Customer Onboarding flow': '/customer-onboarding',
    'EDI': '/edi-info',
    'Automation': '/automation',
    'Bootcamp': '/bootcamp',
    'Business Flow': '/business-flow',
    'Advanced Training': '/advanced-training',
    'Jira, MSCVP': '/jira-mscvp',
    'Bot': '/chat-bot',
    'Innovations': '/innovations',
    'GenAi': '/genai',
    'Register Ideas': '/idea-register',
    'Documents': '/documents',
    'Courses': '/courses'
  };

  if (title === 'Our Applications' && item !== 'Applications') {
    return `/applications/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }

  return routeMap[item] || '/';
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleItemClick = (title: string, item: string) => {
    const path = getRoutePath(title, item);
    navigate(path);
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      } py-3`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="cursor-pointer flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Snowflake className="text-white" size={28} />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ArcticVault
              </span>
              <div className="text-xs text-gray-500 font-medium">Cold Storage Solutions</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 flex items-center space-x-1
                    ${activeMenu === item.title 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  <span>{item.title}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 transition-all duration-200 origin-top
                    ${activeMenu === item.title 
                      ? 'opacity-100 scale-y-100 translate-y-0' 
                      : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
                    }
                  `}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden min-w-64">
                    <div className="py-2">
                      {item.items.map((subItem, index) => (
                        <button
                          key={subItem}
                          onClick={() => handleItemClick(item.title, subItem)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* User Menu / Auth buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-700 font-medium">{user.name}</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
                
                <div className="absolute top-full right-0 mt-1 opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 transition-all duration-200 origin-top pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden min-w-48">
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <LogOut size={16} />
                        <span>Sign out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Sign in
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-gray-700" size={24} />
            ) : (
              <Menu className="text-gray-700" size={24} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4">
            {menuItems.map((item) => (
              <div key={item.title} className="py-2">
                <button
                  onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeMenu === item.title ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.items.map((subItem) => (
                    <button
                      key={subItem}
                      onClick={() => handleItemClick(item.title, subItem)}
                      className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Mobile auth buttons */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              {user ? (
                <div>
                  <div className="px-4 py-3 mb-2">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => navigate('/login')}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                  >
                    Sign in
                  </button>
                  <button 
                    onClick={() => navigate('/register')}
                    className="w-full text-left px-4 py-3 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 mt-2"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;