import React from 'react';
import { Plus } from 'lucide-react'; // Optional: npm install lucide-react

const Services = () => {
  const serviceData = [
    {
      title: "General Dentistry",
      description: "Complete oral care for every smile with cleanings, exams, and more.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile's beauty with whitening, veneers, and more.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      )
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and fun dental care for kids to grow healthy, happy smiles.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      )
    },
    {
      title: "Restorative Dentistry",
      description: "Repair and restore your teeth for lasting comfort and function.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-blue-50/50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
        <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Services</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Complete Care for Every Smile</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          From routine cleanings to advanced restorations, we provide personalized dental solutions for patients of all ages.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col items-start text-left"
          >
            <div className="mb-6 bg-blue-50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {service.description}
            </p>
            <button className="mt-auto p-3 rounded-full border border-slate-200 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
              <Plus size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;