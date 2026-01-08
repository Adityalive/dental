import React from 'react';

const Navbar = () => {
  return (
    <div className="w-screen h-14 bg-emerald-600 flex items-center justify-between px-6">
      {/* Left: Logo */}
      <div className="text-2xl text-white font-semibold">
        Dental
      </div>

      {/* Center: Nav Links */}
      <div className="flex gap-6 text-white text-lg">
        <h1>Home</h1>
        <h1>Service</h1>
        <h1>Blog</h1>
        <h1>Contact</h1>
      </div>

      {/* Right: Button */}
      <button className="bg-white text-black text-base px-4 py-2 rounded-xl hover:bg-gray-100 transition">
        Book Now
      </button>
    </div>
  );
};

export default Navbar;