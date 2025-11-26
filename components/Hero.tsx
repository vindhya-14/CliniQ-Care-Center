import React from 'react';
import { motion } from 'framer-motion';
import { GlassButton } from './ui/GlassComponents';
import { ArrowRight, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background with blurry blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        {/* Background Image Overlay */}
        <div 
          className="absolute right-0 top-0 h-full w-full md:w-2/3 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1579684385136-137af1898abe?auto=format&fit=crop&q=80&w=2000")',
            maskImage: 'linear-gradient(to right, transparent, black)' 
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">Accepting New Patients</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Your Health, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-cyan-500">
              Our Priority.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg font-light leading-relaxed">
            Experience world-class healthcare with expert doctors, modern facilities, and compassionate care—all under one roof.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <GlassButton className="text-lg px-8 py-4">
              Book Appointment <ArrowRight className="w-5 h-5" />
            </GlassButton>
            <GlassButton variant="secondary" className="text-lg px-8 py-4">
              Explore Departments
            </GlassButton>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-slate-800">25+</p>
              <p className="text-sm text-slate-500">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-slate-300" />
            <div>
              <p className="text-3xl font-bold text-slate-800">50+</p>
              <p className="text-sm text-slate-500">Specialist Doctors</p>
            </div>
            <div className="w-px h-10 bg-slate-300" />
            <div>
              <p className="text-3xl font-bold text-slate-800">10k+</p>
              <p className="text-sm text-slate-500">Happy Patients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Floating Glass Card with Doctor */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
        >
           {/* Abstract visual composition */}
           <div className="relative z-10">
              <div className="glass-panel p-3 rounded-[3rem] shadow-2xl bg-white/30 border-white/40 transform rotate-[-2deg]">
                 <img 
                   src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
                   alt="Doctor" 
                   className="rounded-[2.5rem] w-full object-cover h-[500px]"
                 />
                 
                 {/* Floating badge */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-3xl bg-white/80 shadow-xl flex items-center gap-4 max-w-xs"
                 >
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Top Rated Clinic</p>
                      <p className="text-xs text-slate-500">4.9/5 stars from 2000+ reviews</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;