import React, { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { GlassButton } from './ui/GlassComponents';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled ? 'md:px-8' : 'md:px-6'}`}>
        <div
          className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-lg transition-all duration-300 ${
            isScrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-md'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 text-medical-700">
            <div className="bg-medical-100 p-2 rounded-full">
               <Activity className="w-6 h-6 text-medical-600" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">Clini<span className="text-medical-500">Q</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 font-medium hover:text-medical-600 transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <GlassButton className="hidden md:flex text-sm px-6 py-2.5">
              Book Appointment
            </GlassButton>
            <button
              className="md:hidden text-slate-700 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 z-40">
          <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4 shadow-2xl bg-white/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <GlassButton className="w-full mt-2">Book Appointment</GlassButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;