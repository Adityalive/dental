import React from 'react';

const Navbar = () => {
  return (
    <div className="w-screen h-14    flex  justify-around items-center bg-emerald-600  ">
      <div className=' p-4 text-2xl text-white'>
        Dental 
      </div>
      <div className='max-w-xl flex justify-center items-center gap-6 px-6'>
         <h1>Home</h1>
         <h1>Service</h1>
         <h1>Blog</h1>
         <h1>Contact</h1>
      </div>
      <button className=' w-fit h-auto bg-white  p-4 text-xl text-black rounded-2xl '>Book Now</button>
    </div>
  )
}

export default Navbar;