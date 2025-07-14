import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Arctic Vault's temperature precision has been crucial for our pharmaceutical products. Their monitoring systems give us confidence our inventory is always in optimal conditions.",
    author: "Sarah Johnson",
    company: "MediPharm Innovations",
    image: "https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "We've reduced product loss by 98% since moving to Arctic Vault. Their attention to detail and technological approach to cold storage is unmatched in the industry.",
    author: "Michael Rodriguez",
    company: "Fresh Foods Distribution",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The energy efficiency of their facility has helped us meet our sustainability goals while maintaining perfect storage conditions. Truly the future of cold storage.",
    author: "Emma Chen",
    company: "EcoHarvest Organics",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trusted by industry leaders who depend on precise temperature control and reliability for their valuable products.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div 
            ref={slideRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
                      <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 bg-blue-600 p-3 rounded-full text-white">
                          <Quote size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="text-xl font-semibold">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;