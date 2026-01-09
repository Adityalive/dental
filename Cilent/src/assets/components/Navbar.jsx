import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react'; // Optional: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between">
        
        {/* 1. Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Dental<span className="text-blue-500">Excellence</span>
          </span>
        </div>

        {/* 2. Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={`font-semibold transition-colors hover:text-blue-500 ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 3. CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20">
            Book Now
          </button>
        </div>

        {/* 4. Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* 5. Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-bold text-slate-900">Menu</span>
            <button onClick={() => setIsOpen(false)}><X size={32} /></button>
          </div>
          
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-slate-100 pb-4">
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-slate-800 flex justify-between items-center"
                >
                  {link.name} <ChevronRight className="text-blue-600" />
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-auto w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-blue-100">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;