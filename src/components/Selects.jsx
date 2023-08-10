import React from 'react'

import BoraBora from '../assets/d1.jpg';
import BoraBora2 from '../assets/d2.jpg';
import Maldives from '../assets/d3.jpg';
import Maldives2 from '../assets/d4.jpg';
import Maldives3 from '../assets/d5.jpg';
import KeyWest from '../assets/d6.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard bg={Maldives3} text='Romo'/>
        <SelectsCard bg={BoraBora} text='Buddy'/>
        <SelectsCard bg={BoraBora2} text='Max'/>
        <SelectsCard bg={Maldives} text='Charlie'/>
        <SelectsCard bg={Maldives2} text='Diasy'/>
        <SelectsCard bg={KeyWest} text='Druster'/>  
    </div>
  )
}

export default Selects