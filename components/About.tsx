import React from 'react';
import { GlassCard, SectionTitle } from './ui/GlassComponents';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    "Board Certified Doctors",
    "Modern Diagnostic Labs",
    "Patient-Centered Approach",
    "24/7 Emergency Care"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
             <div className="absolute inset-0 bg-medical-500 rounded-3xl blur-3xl opacity-20 -rotate-3" />
             <img 
               src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
               alt="Hospital Interior" 
               className="relative rounded-3xl shadow-2xl border-4 border-white/50"
             />
          </div>

          <div className="order-1 md:order-2">
            <GlassCard className="bg-white/50 border-white/60">
                <SectionTitle title="25+ Years of Excellence" subtitle="Leading the way in medical innovation and compassionate care." center={false} />
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  At CliniQ Care Center, we believe that healing is more than just medicine—it's about trust, comfort, and expertise. Since our inception, we have been dedicated to providing the highest standard of medical care using state-of-the-art technology.
                </p>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Our multi-disciplinary team of experts collaborates to treat complex conditions with precision and empathy, ensuring that every patient leaves healthier and happier.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-medical-600" />
                      <span className="text-slate-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;