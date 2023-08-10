import React, { useState, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex w-full justify-between items-center h-20 px-4 absolute z-10 ${sticky ? 'sticky' : ''} ${nav ? 'hidden' : ''}`}>
      <div>
        <h1 className='cursor-pointer text-3xl md:text-4xl font-bold' onClick={() => window.location.reload()}>StrayToStay.</h1> {/* Adding the website name */}
      </div>
      <ul className='hidden md:flex'>
        <li>🏠 Home</li>
        <li>🛠️ Services</li>
        {/* Add other components */}
        <li>🌟 About Us</li>
        <li>💌 Contact</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>
      {/* ... rest of your code */}
    </div>
  );
};

export default Navbar;