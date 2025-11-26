import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import { WhyChooseUs, Services } from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-[#f8fafc] selection:bg-medical-200 selection:text-medical-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Departments />
        <WhyChooseUs />
        <Doctors />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;