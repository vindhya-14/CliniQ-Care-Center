import React from 'react';
import { DOCTORS } from '../constants';
import { GlassCard, SectionTitle, GlassButton } from './ui/GlassComponents';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-24 relative">
       {/* Background decorative blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Meet Our Specialists" 
          subtitle="A team of highly qualified and experienced doctors dedicated to your well-being." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <GlassCard key={doctor.id} className="p-0 overflow-hidden text-center group" hoverEffect>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-medical-900/10 group-hover:bg-medical-900/0 transition-colors z-10" />
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative">
                 {/* Floating badge for experience */}
                 <div className="absolute -top-5 right-6 bg-white shadow-lg px-3 py-1 rounded-full text-xs font-bold text-medical-600 border border-medical-50">
                    {doctor.experience}
                 </div>
                 
                <h3 className="text-xl font-bold text-slate-800 mb-1">{doctor.name}</h3>
                <p className="text-medical-600 font-medium text-sm mb-4">{doctor.specialization}</p>
                
                <GlassButton variant="secondary" className="w-full text-sm py-2">
                  Book Now
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;