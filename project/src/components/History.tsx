import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HistoryPage {
  year: string;
  title: string;
  description: string;
  image: string;
}

const historyPages: HistoryPage[] = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'AMC was founded with a vision to revolutionize warehouse management through innovative solutions and cutting-edge technology.',
    image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg'
  },
  {
    year: '2012',
    title: 'First Major Client',
    description: 'Successfully implemented our first large-scale warehouse management system for a Fortune 500 company.',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Expanded operations to multiple countries, serving clients across different continents with 24/7 support.',
    image: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg'
  },
  {
    year: '2018',
    title: 'Digital Transformation',
    description: 'Implemented cutting-edge technology solutions including AI, automation, and cloud-based warehouse processes.',
    image: 'https://images.pexels.com/photos/4481332/pexels-photo-4481332.jpeg'
  },
  {
    year: '2020',
    title: 'Innovation Hub',
    description: 'Launched innovation centers focused on developing next-generation warehouse solutions and automation tools.',
    image: 'https://images.pexels.com/photos/4481345/pexels-photo-4481345.jpeg'
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Pioneered the integration of artificial intelligence and machine learning in warehouse optimization.',
    image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg'
  },
  {
    year: '2023',
    title: 'Sustainability Focus',
    description: 'Initiated green warehouse practices and sustainable operations across all facilities worldwide.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
  },
  {
    year: '2024',
    title: 'Future Ready',
    description: 'Leading the industry with innovative solutions, serving over 500+ clients globally with excellence.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  }
];

const History: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    // Auto-flip pages every 5 seconds
    const interval = setInterval(() => {
      nextPage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPage]);

  const nextPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setIsSpinning(true);
    
    setTimeout(() => {
      setCurrentPage(prev => (prev + 1) % historyPages.length);
      setIsFlipping(false);
    }, 800);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 1200);
  };

  const prevPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setIsSpinning(true);
    
    setTimeout(() => {
      setCurrentPage(prev => (prev - 1 + historyPages.length) % historyPages.length);
      setIsFlipping(false);
    }, 800);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">
            AMC Historical Chronicles
          </h1>
          
          {/* Ancient manuscript style container */}
          <div className="relative">
            {/* Decorative spiral background */}
            <div className={`absolute inset-0 transition-transform duration-1000 ${isSpinning ? 'rotate-180' : 'rotate-0'}`}>
              <div className="w-full h-full opacity-10">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path
                    d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    className="animate-spin"
                    style={{ animationDuration: '20s' }}
                  />
                  <path
                    d="M200,200 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1"
                    className="animate-spin"
                    style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                  />
                  <path
                    d="M200,200 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1"
                    className="animate-spin"
                    style={{ animationDuration: '10s' }}
                  />
                </svg>
              </div>
            </div>

            {/* Manuscript page */}
            <motion.div
              className="relative bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              animate={{
                rotateY: isFlipping ? 180 : 0,
                scale: isFlipping ? 0.9 : 1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Decorative border */}
              <div className="absolute inset-4 border-4 border-amber-300 rounded-lg opacity-30"></div>
              <div className="absolute inset-6 border-2 border-amber-400 rounded-lg opacity-20"></div>
              
              {/* Content */}
              <div className="relative p-12 min-h-[600px] flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="inline-block">
                    <div className="text-8xl font-bold text-amber-700 mb-4 drop-shadow-lg">
                      {historyPages[currentPage].year}
                    </div>
                    <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <h2 className="text-4xl font-bold text-amber-800 mb-6">
                    {historyPages[currentPage].title}
                  </h2>
                  
                  <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
                    <img
                      src={historyPages[currentPage].image}
                      alt={historyPages[currentPage].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                  </div>
                  
                  <p className="text-xl text-amber-700 leading-relaxed max-w-2xl mx-auto font-medium">
                    {historyPages[currentPage].description}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600">
                    <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z"/>
                  </svg>
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600">
                    <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-8 left-8 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600">
                    <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-8 right-8 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600">
                    <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevPage}
              disabled={isFlipping}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-amber-200 hover:bg-amber-300 shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft size={24} className="text-amber-800" />
            </button>
            
            <button
              onClick={nextPage}
              disabled={isFlipping}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-amber-200 hover:bg-amber-300 shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight size={24} className="text-amber-800" />
            </button>
          </div>
          
          {/* Page indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {historyPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentPage === index ? 'bg-amber-600 scale-125' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
          
          {/* Timeline at bottom */}
          <div className="mt-12 bg-amber-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-amber-800 mb-4 text-center">
              AMC Journey Timeline
            </h3>
            <div className="flex justify-between items-center overflow-x-auto">
              {historyPages.map((page, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    currentPage === index ? 'scale-110' : 'opacity-60'
                  }`}
                  onClick={() => setCurrentPage(index)}
                >
                  <div className={`w-3 h-3 rounded-full mb-2 ${
                    currentPage === index ? 'bg-amber-600' : 'bg-amber-400'
                  }`}></div>
                  <span className="text-sm font-medium text-amber-700">{page.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;