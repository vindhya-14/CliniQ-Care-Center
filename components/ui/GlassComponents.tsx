import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, translateY: -5 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`glass-panel rounded-3xl p-6 shadow-xl border border-white/50 bg-white/60 relative overflow-hidden ${className}`}
    >
      {/* Decorative gradient blob inside card */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const GlassButton: React.FC<GlassButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-medical-600 text-white shadow-lg shadow-medical-500/30 hover:shadow-medical-600/50 border border-transparent hover:bg-medical-700",
    secondary: "bg-white/50 text-medical-900 border border-white/60 hover:bg-white/80 shadow-md backdrop-blur-sm",
    outline: "bg-transparent border-2 border-medical-600 text-medical-600 hover:bg-medical-600 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      )}
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; center?: boolean }> = ({ title, subtitle, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
        {subtitle}
      </p>
    )}
    <div className={`h-1.5 w-24 bg-gradient-to-r from-medical-400 to-medical-600 rounded-full mt-4 ${center ? 'mx-auto' : ''}`} />
  </div>
);