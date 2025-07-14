import React, { useEffect, useRef } from 'react';
import { 
  Leaf, 
  Droplets, 
  Lightbulb, 
  Recycle 
} from 'lucide-react';

interface SustainabilityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SustainabilityItem: React.FC<SustainabilityItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="p-4 rounded-full bg-green-100 text-green-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Sustainability: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('sustainability-image')) {
              entry.target.classList.add('scale-100', 'opacity-100');
            } else {
              const items = entry.target.querySelectorAll('.sustainability-item');
              items.forEach((item, index) => {
                setTimeout(() => {
                  (item as HTMLElement).classList.add('translate-y-0', 'opacity-100');
                }, index * 200);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="sustainability" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to Sustainability</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our facility is designed from the ground up with environmental responsibility as a core principle, reducing impact while maximizing efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef}
            className="sustainability-image relative rounded-lg overflow-hidden shadow-xl transform scale-95 opacity-0 transition-all duration-1000"
          >
            <img 
              src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Sustainable cold storage facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <p className="text-white text-xl font-semibold">
                  40% reduction in carbon footprint compared to traditional cold storage
                </p>
              </div>
            </div>
          </div>
          
          <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="sustainability-item transform translate-y-10 opacity-0 transition-all duration-700">
              <SustainabilityItem 
                icon={<Leaf size={28} />}
                title="Renewable Energy"
                description="Powered by 100% renewable energy sources including on-site solar arrays and wind energy partnerships."
              />
            </div>
            <div className="sustainability-item transform translate-y-10 opacity-0 transition-all duration-700">
              <SustainabilityItem 
                icon={<Droplets size={28} />}
                title="Water Conservation"
                description="Closed-loop water systems reduce consumption by 82% compared to conventional facilities."
              />
            </div>
            <div className="sustainability-item transform translate-y-10 opacity-0 transition-all duration-700">
              <SustainabilityItem 
                icon={<Lightbulb size={28} />}
                title="Smart Lighting"
                description="Motion-activated LED lighting systems reduce energy usage by automatically dimming in unoccupied areas."
              />
            </div>
            <div className="sustainability-item transform translate-y-10 opacity-0 transition-all duration-700">
              <SustainabilityItem 
                icon={<Recycle size={28} />}
                title="Zero Waste"
                description="Our facility operates on a zero-waste protocol with comprehensive recycling and composting programs."
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-green-50 rounded-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Environmental Commitment</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-1/3 text-right pr-8 font-medium">Carbon Neutral by 2024</div>
                <div className="w-1/3 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="w-1/3 pl-8 text-sm text-gray-600">85% Complete</div>
              </div>
              <div className="flex items-center">
                <div className="w-1/3 text-right pr-8 font-medium">100% Renewable Energy</div>
                <div className="w-1/3 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="w-1/3 pl-8 text-sm text-gray-600">78% Complete</div>
              </div>
              <div className="flex items-center">
                <div className="w-1/3 text-right pr-8 font-medium">Zero Waste Operations</div>
                <div className="w-1/3 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="w-1/3 pl-8 text-sm text-gray-600">92% Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;