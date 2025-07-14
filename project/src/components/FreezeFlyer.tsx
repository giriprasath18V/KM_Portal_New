import React from 'react';

const FreezeFlyer: React.FC = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
      title: "Team Collaboration"
    },
    {
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      title: "Project Planning"
    },
    {
      url: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      title: "Data Analysis"
    },
    {
      url: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
      title: "Innovation Workshop"
    },
    {
      url: "https://images.pexels.com/photos/3183141/pexels-photo-3183141.jpeg",
      title: "Tech Discussion"
    },
    {
      url: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg",
      title: "Team Meeting"
    },
    {
      url: "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg",
      title: "Code Review"
    },
    {
      url: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      title: "Design Sprint"
    },
    {
      url: "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg",
      title: "Product Demo"
    },
    {
      url: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg",
      title: "Strategy Session"
    },
    {
      url: "https://images.pexels.com/photos/3183192/pexels-photo-3183192.jpeg",
      title: "Client Meeting"
    },
    {
      url: "https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg",
      title: "Team Building"
    }
  ];

  return (
    <div className="page-container min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Freeze Flyer Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreezeFlyer;