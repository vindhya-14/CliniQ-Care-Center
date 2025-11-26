import React from 'react';
import { Activity, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 border-t border-slate-200 pt-16 pb-8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 text-medical-700 mb-6">
                <div className="bg-medical-100 p-2 rounded-full">
                   <Activity className="w-6 h-6 text-medical-600" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-800">Clini<span className="text-medical-500">Q</span></span>
             </div>
             <p className="text-slate-500 text-sm leading-relaxed mb-6">
               Providing premium healthcare with a focus on patient comfort, advanced technology, and clinical excellence.
             </p>
             <div className="flex gap-4">
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-medical-500 hover:text-white transition-all">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              {['About Us', 'Find a Doctor', 'Services', 'Appointments', 'Contact'].map(link => (
                <li key={link}><a href="#" className="hover:text-medical-600 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-slate-800 mb-6">Departments</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Surgery'].map(link => (
                <li key={link}><a href="#" className="hover:text-medical-600 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-slate-800 mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Patient Rights'].map(link => (
                <li key={link}><a href="#" className="hover:text-medical-600 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} CliniQ Care Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;