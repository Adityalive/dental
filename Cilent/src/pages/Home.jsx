import React from 'react';

const Home = () => {
  return (
    // Main Container: needs relative so children can be absolute positioned
    <>
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* 1. The Background Image Layer */}
      <img 
        src="/home.png" 
        alt="Home" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* 2. The Blue Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/75 to-blue-900/20"></div>

      {/* 3. The Content Layer (Text, Navbar, etc.) */}
      <div className="relative z-10 flex h-full items-center px-14">
         {/* Example content to show readability */}
         <div className="max-w-2xl text-white">
            <h1 className="text-6xl  leading-tight">
               Elevating Smiles with Expert Care and a Gentle Touch
            </h1>
            <button className="mt-8 bg-transparent border border-white hover:bg-blue-600 px-6 py-3 rounded-2xl font-semibold">
              Book Appointment
            </button>
         </div>
      </div>

      
      
    </div>
    <div className='bg-blue-700 h-42 w-screen p-10 pl-14 grid grid-cols-3 justify-between items-center text-2xl font-sans font-semibold'>
        <h1> Need Dental Services? </h1>
    
         <h1> Need Dental Services? </h1>
         <h1> Need Dental Services? </h1>

      </div>
    </>
  );
};

export default Home;