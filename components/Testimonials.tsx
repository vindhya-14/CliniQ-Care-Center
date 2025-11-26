import React from 'react';
import { TESTIMONIALS } from '../constants';
import { GlassCard, SectionTitle } from './ui/GlassComponents';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 via-white to-blue-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Patient Stories" subtitle="What our community says about their experience." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.id} className="relative mt-8">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <img 
                  src={t.imageUrl} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover" 
                />
              </div>
              <div className="mt-8 text-center">
                 <div className="flex justify-center gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                   ))}
                 </div>
                 <p className="text-slate-600 italic mb-6">"{t.comment}"</p>
                 <h4 className="font-bold text-slate-900">{t.name}</h4>
                 <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;