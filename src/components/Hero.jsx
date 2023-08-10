import React from 'react';
import { FaHeart, FaPaw } from 'react-icons/fa'; // Import the heart icon from the react-icons library
import beachVid from '../assets/dog.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Rescue, Rehabilitate, Rehome</h1>
        <h2 className='py-4'> Changing Lives Fur-ever!</h2>
        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div className='flex-grow relative'>
            {/* Add the heart icon as a background */}
            <FaHeart className='absolute left-3 top-1/2 transform -translate-y-1/2' size={20} style={{ color: '#000000' }} />
            <input
              className='bg-transparent w-full sm:w-[400px] font-[Poppins] focus:outline-none pl-10' // Increased left padding
              type='text'
              placeholder='Find Your Paw-some Companion' // Placeholder text with heart emoji
            />
          </div>
          <div>
            {/* Replace with a heart icon */}
            <button className='bg-gray-500 p-2 rounded-md'>
              <FaPaw size={20} className='icon' style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
