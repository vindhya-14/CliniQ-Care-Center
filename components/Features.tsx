import React from 'react';
import { FEATURES, SERVICES } from '../constants';
import { GlassCard, SectionTitle } from './ui/GlassComponents';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-medical-900 text-white relative overflow-hidden">
      {/* Dark glass texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-medical-900 to-slate-900 opacity-90" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CliniQ?</h2>
          <p className="text-medical-100 max-w-2xl mx-auto">We combine advanced technology with human touch to provide the best healthcare experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-medical-500/20 rounded-xl text-medical-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-slate-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
    return (
      <section className="py-24 relative bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Our Premium Services" 
            subtitle="Tailored medical services designed for your comfort and recovery." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <GlassCard key={service.id} className="flex items-center gap-6 group hover:border-medical-300 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
                           <Icon className="w-8 h-8 text-medical-500 group-hover:text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                            <p className="text-slate-500 text-sm mt-1">{service.description}</p>
                        </div>
                    </GlassCard>
                  )
              })}
          </div>
        </div>
      </section>
    );
};