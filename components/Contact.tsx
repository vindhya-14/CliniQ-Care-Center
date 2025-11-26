import React from 'react';
import { GlassCard, GlassButton } from './ui/GlassComponents';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 pb-0">
      {/* Appointment CTA */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="relative rounded-3xl overflow-hidden p-12 text-center bg-medical-600 shadow-2xl">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Book Your Appointment?</h2>
                <p className="text-medical-100 text-lg mb-8 max-w-2xl mx-auto">Skip the queue. Connect with our digital scheduling system for a seamless experience.</p>
                <GlassButton className="bg-white text-medical-700 hover:bg-white/90 mx-auto px-10 py-4 text-lg shadow-xl">
                    Start Booking
                </GlassButton>
            </div>
        </div>
      </div>

      {/* Location & Info */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
         <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
               <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="bg-blue-100 p-3 rounded-full text-medical-600">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-800">Visit Us</h4>
                        <p className="text-slate-600">123 Health Avenue, Medical District<br/>New York, NY 10001</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                     <div className="bg-blue-100 p-3 rounded-full text-medical-600">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-800">Call Us</h4>
                        <p className="text-slate-600">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="bg-blue-100 p-3 rounded-full text-medical-600">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-800">Email</h4>
                        <p className="text-slate-600">contact@cliniq.com<br/>appointments@cliniq.com</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="bg-blue-100 p-3 rounded-full text-medical-600">
                        <Clock className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-800">Working Hours</h4>
                        <p className="text-slate-600">Mon - Fri: 8:00 AM - 9:00 PM<br/>Sat - Sun: 9:00 AM - 5:00 PM</p>
                     </div>
                  </div>
               </div>
            </GlassCard>

            <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg border border-white/50">
               {/* Static Map Image Placeholder for simplicity as requested (no external API keys) */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133446979!2d-73.98565668459415!3d40.74843644349479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689625925893!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(0.5)' }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
         </div>
      </div>
    </section>
  );
};

export default Contact;