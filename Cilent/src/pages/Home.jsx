import React from 'react';

const Home = () => {
  return (
    <main className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden">
        
        {/* Background Image Layer */}
        <img 
          src="/home.png" 
          alt="Modern dental office" 
          className="absolute inset-0 w-full h-full object-cover" 
        />

        {/* Improved Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent"></div>

        {/* Content Layer */}
        <div className="relative z-10 flex h-full items-center max-w-7xl mx-auto px-6 md:px-14">
          <div className="max-w-3xl text-white space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Elevating Smiles with <span className="text-blue-400">Expert Care</span> and a Gentle Touch
            </h1>
            <p className="text-lg md:text-xl text-blue-50 max-w-xl leading-relaxed">
              Experience world-class dental treatments in a relaxing environment designed for your comfort and long-term health.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20">
                Book Appointment
              </button>
              <button className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Info Bar (The Blue Banner) */}
      <section className="bg-blue-700 w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-white">
            
            {/* Box 1: Urgent Contact */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-blue-500/50 pb-6 md:pb-0">
              <span className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-1">Emergency Call</span>
              <h2 className="text-2xl font-bold">+1 (555) 000-1234</h2>
            </div>

            {/* Box 2: CTA */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-blue-500/50 pb-6 md:pb-0">
              <span className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-1">Our Location</span>
              <h2 className="text-2xl font-bold">123 Dental Plaza, NY</h2>
            </div>

            {/* Box 3: Hours */}
            <div className="flex flex-col">
              <span className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-1">Opening Hours</span>
              <h2 className="text-2xl font-bold">Mon - Sat: 9am - 6pm</h2>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;