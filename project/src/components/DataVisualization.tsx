import React, { useEffect, useRef } from 'react';

const DataVisualization: React.FC = () => {
  const chartRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chart = entry.target as HTMLElement;
            const value = parseInt(chart.getAttribute('data-value') || '0');
            const fill = chart.querySelector('.chart-fill') as HTMLElement;
            
            if (fill) {
              setTimeout(() => {
                fill.style.width = `${value}%`;
                
                const counter = chart.querySelector('.chart-counter') as HTMLElement;
                if (counter) {
                  let currentValue = 0;
                  const interval = setInterval(() => {
                    currentValue++;
                    counter.textContent = `${currentValue}%`;
                    if (currentValue >= value) {
                      clearInterval(interval);
                    }
                  }, 15);
                }
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    chartRefs.current.forEach((chart) => {
      if (chart) observer.observe(chart);
    });

    return () => {
      chartRefs.current.forEach((chart) => {
        if (chart) observer.unobserve(chart);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    chartRefs.current[index] = el;
  };

  return (
    <section id="metrics" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Performance Metrics</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our facility consistently outperforms industry standards across all key metrics, ensuring your products are stored in optimal conditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center">Facility Performance</h3>
            <div className="space-y-12">
              <div 
                ref={(el) => addToRefs(el, 0)}
                className="chart-container"
                data-value="99"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Temperature Accuracy</span>
                  <span className="chart-counter">0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="chart-fill h-full bg-blue-600 w-0 transition-all duration-1500"></div>
                </div>
              </div>
              
              <div 
                ref={(el) => addToRefs(el, 1)}
                className="chart-container"
                data-value="97"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Energy Efficiency</span>
                  <span className="chart-counter">0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="chart-fill h-full bg-blue-600 w-0 transition-all duration-1500"></div>
                </div>
              </div>
              
              <div 
                ref={(el) => addToRefs(el, 2)}
                className="chart-container"
                data-value="100"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Security Rating</span>
                  <span className="chart-counter">0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="chart-fill h-full bg-blue-600 w-0 transition-all duration-1500"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center">Industry Comparison</h3>
            <div className="space-y-12">
              <div 
                ref={(el) => addToRefs(el, 3)}
                className="chart-container"
                data-value="40"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Energy Consumption</span>
                  <span className="chart-counter">0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="chart-fill h-full bg-green-500 w-0 transition-all duration-1500"></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Compared to industry average (lower is better)</p>
              </div>
              
              <div 
                ref={(el) => addToRefs(el, 4)}
                className="chart-container"
                data-value="95"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Uptime Reliability</span>
                  <span className="chart-counter">0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="chart-fill h-full bg-blue-600 w-0 transition-all duration-1500"></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Industry average: 92%</p>
              </div>
              
              <div 
                ref={(el) => addToRefs(el, 5)}
                className="chart-container"
                data-value="75"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Carbon Footprint Reduction</span>
                  <span className="chart-counter">0%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="chart-fill h-full bg-green-500 w-0 transition-all duration-1500"></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Compared to traditional facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;