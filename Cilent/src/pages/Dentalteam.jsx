import React from 'react';

const Dentalteam = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-100/50 border border-blue-50 max-w-4xl mx-auto my-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Doctor Image Container */}
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
          <div className="absolute inset-0 bg-blue-600 rounded-full translate-x-2 translate-y-2 opacity-10"></div>
          <img 
            src="/doctor-portrait.jpg" 
            alt="Dr. Sarah Mitchell" 
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-4">
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-slate-900">Dr. Sarah Mitchell</h3>
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Lead Dentist & Founder</p>
          </div>
          
          <p className="text-slate-600 text-lg leading-relaxed italic">
            "My goal is to change the way you feel about the dentist. We don't just treat teeth; we care for people. Every smile has a story, and I’m here to make sure yours is bright, healthy, and full of confidence."
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <span className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold">Cosmetic Specialist</span>
            <span className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold">Pediatric Certified</span>
            <span className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold">15+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentalteam;