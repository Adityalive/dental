import React from 'react';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT SIDE: Overlapping Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          {/* Back Image (The dentist and patient) */}
          <div className="relative z-10 w-2/3">
            <img 
              src="/clinic1.jpg" 
              alt="Dentist consultation" 
              className="rounded-3xl shadow-xl border-4 border-white object-cover aspect-[4/5]"
            />
          </div>
          
          {/* Front Image (Close up) - Positioned absolutely relative to the first */}
          <div className="absolute -bottom-10 -right-4 md:right-10 z-20 w-1/2">
            <img 
              src="/clinic2.jpg" 
              alt="Dental procedure close-up" 
              className="rounded-3xl shadow-2xl border-8 border-white object-cover aspect-square"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-sm uppercase tracking-wider">
            About Us
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Professionals and Personalized <span className="text-blue-600">Dental Excellence</span>
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed">
            We offer high-quality dental care from routine checkups to advanced treatments so your smile stays healthy and confident. Our team is dedicated to providing a comfortable and professional environment for every patient.
          </p>

          {/* Feature List */}
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-slate-800 text-lg">Personalized Treatment Plans</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-slate-800 text-lg">Gentle Care for Kids and Adults</span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              Book Appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;