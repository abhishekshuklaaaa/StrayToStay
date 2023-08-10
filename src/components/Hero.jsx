import React from 'react';
import { FaPaw } from 'react-icons/fa';
import beachVid from '../assets/dog.mp4';

const Hero = ({ sticky, nav }) => { // Pass sticky and nav as props
  return (
    <div className={`w-full h-screen relative ${sticky ? 'sticky' : ''} ${nav ? 'hidden' : ''}`}>
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
          className={`flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90 ${sticky ? 'sticky' : ''} ${nav ? 'hidden' : ''}`}
        >
          <div className='flex-grow relative'>
            <input
              className='bg-transparent w-full sm:w-[400px] font-[Poppins] text-sm focus:outline-none pl-3'
              type='text'
              style={{ minWidth: '220px' }}
              placeholder='Find Your Paw-some Companion'
            />
          </div>
          <div>
            <button className='bg-gray-500 p-2 rounded-md relative'>
              <div className='absolute inset-0 bg-white rounded-md opacity-20'></div>
              <FaPaw size={16} className='icon' style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
