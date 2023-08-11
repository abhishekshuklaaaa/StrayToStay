import React, { useState, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaMusic } from 'react-icons/fa'; // Import the music icon
import bgAudio from './music.mp3.mp3'

import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false); // State to track music playing

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  useEffect(() => {
    let audio = new Audio(bgAudio);

    if (musicPlaying) {
      audio.play();
      audio.loop = true;
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }

    const handleScroll = () => {
      // Your scroll handling logic here
    };

    const handleVisibilityChange = () => {
      // Your visibility change handling logic here
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      audio.pause(); // Pause the audio when the component unmounts
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [musicPlaying]);

  return (
    <div className={`flex w-full justify-between items-center h-20 px-4 absolute z-10 ${sticky ? 'sticky' : ''} ${nav ? 'hidden' : ''}`}>
    <div className='cursor-pointer text-3xl md:text-4xl font-bold flex items-center'>
      StrayToStay
      <button className="music-button" onClick={toggleMusic}>
        <FaMusic size={18} className={`${musicPlaying ? 'playing' : ''}`} />
        </button>
      </div>
      <ul className={`hidden md:flex ${nav ? '' : 'md:flex'}`}>
        <li>🏠 Home</li>
        <li>🛠️ Services</li>
        <li>🌟 About Us</li>
        <li>💌 Contact</li>
      </ul>
      <div className='md:hidden'>
        <HiOutlineMenuAlt4 size={20} onClick={handleNav} />
      </div>
    </div>
  );
};
 

export default Navbar;
