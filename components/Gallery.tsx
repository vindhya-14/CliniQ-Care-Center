import React from 'react';
import { SectionTitle } from './ui/GlassComponents';

const IMAGES = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", // Reception
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800", // MRI
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800", // Lab
  "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=800", // Doctor
  "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=800", // Waiting Area
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800", // Equipment
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionTitle title="Clinic Gallery" subtitle="Take a tour of our modern facilities." />
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbar">
        {IMAGES.map((src, index) => (
          <div 
            key={index} 
            className="snap-center shrink-0 w-[80vw] md:w-[400px] h-[300px] rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">View Facility</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;