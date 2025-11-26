import React from 'react';
import { DEPARTMENTS } from '../constants';
import { GlassCard, SectionTitle, GlassButton } from './ui/GlassComponents';
import { ArrowRight } from 'lucide-react';

const Departments: React.FC = () => {
  return (
    <section id="departments" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Specialized Departments" 
          subtitle="Comprehensive care across a wide range of medical specialties." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            return (
              <GlassCard key={dept.id} hoverEffect className="group">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-medical-50 text-medical-600 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{dept.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {dept.description}
                </p>
                <button className="flex items-center text-medical-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </GlassCard>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
           <GlassButton variant="outline">View All Departments</GlassButton>
        </div>
      </div>
    </section>
  );
};

export default Departments;