import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { MdTravelExplore, MdPets } from 'react-icons/md'; // Import MdPets instead of MdOutlinePets
import { RiCustomerService2Fill } from 'react-icons/ri'; // Import RiCustomerService2Fill

const Search = () => {
  return (
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 z-40'> 
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
          <div>
            <h2 className='z-40'>Embrace the Stray Dogs' Journey</h2>
            <p className='py-4 z-40'>
              At our sanctuary, we rescue, rehabilitate, and rehome stray dogs, providing them with love and care. Join us in making a difference and giving these beautiful souls a chance at a brighter future. Together, let's create a world where every stray dog finds love and a forever home. Be a part of their heartwarming journey!
            </p>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 py-4 z-40'>
            <div className='flex flex-col lg:flex-row items-center text-center z-40'>
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div className='mb-4 z-40'>
                <h3 className='py-2 z-40'>TOP DOG RESCUE</h3>
                <p className='py-1 z-40'>LEADING IN PET RESCUE FOR 20 YEARS STRAIGHT</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center mt-4 z-40'>
              <button>
                <MdPets size={50} />
              </button>
              <div className='ml-4 z-40'>
                <h3 className='py-2 z-40'>COMPASSIONATE CARE</h3>
                <p className='py-1 z-40'>DEDICATED TO STRAY DOGS'{'\n'}WELL-BEING</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='border text-center'>
            <p className='pt-2'>ADOPT A STRAY TODAY</p>
            <p className='py-4'>LIMITED TIME ONLY</p>
            <p className='bg-gray-800 text-gray-200 py-2'>GIVE A STRAY A FOREVER HOME</p>
          </div>
          <form className='w-full'>
            <div className='flex flex-col my-2'>
              <label className='text-white'>Adoption Center</label>
              <select className='border rounded-md p-2'>
                <option>Local Shelter</option>
                <option>Rescue Sanctuary</option>
                <option>Adoption Fair</option>
                <option>Foster Home</option>
              </select>
            </div>
            <div className='flex flex-col my-4'>
              <label>Check-In</label>
              <input className='border rounded-md p-2' type='date' />
            </div>
            <div className='flex flex-col my-2'>
              <label>Adoption Date</label>
              <input className='border rounded-md p-2' type='date' />
            </div>
            <button className='w-full my-4'>Find Your Paw-some Companion</button>
          </form>
        </div>
      </div>
  );
};

export default Search;






//******************************************************************************************************* */

// import React, { useState } from 'react';
// import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
// import { MdOutlineTravelExplore, MdPets } from 'react-icons/md'; // Import MdPets instead of MdOutlinePets
// import { RiCustomerService2Fill } from 'react-icons/ri'; // Import RiCustomerService2Fill

// // Rest of your code...

// const Search = () => {
//   return (
//     <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
//       <div className='lg:col-span-2 flex flex-col justify-evenly'>
//         <div>
//           <h2>Embrace the Stray Dogs' Journey</h2>
//           <p className='py-4'>
//           At our sanctuary, we rescue, rehabilitate, and rehome stray dogs, providing them with love and care. Join us in making a difference and giving these beautiful souls a chance at a brighter future. Together, let's create a world where every stray dog finds love and a forever home. Be a part of their heartwarming journey!
//           </p>
//         </div>
//         <div className='flex flex-col py-4'>
//           <div className='flex'>
//             <button>
//               <RiCustomerService2Fill size={50} />
//             </button>
//             <div className='ml-4'>
//               <h3 className='py-2'>TOP DOG RESCUE</h3>
//               <p className='py-1'>LEADING IN PET RESCUE FOR 20 YEARS STRAIGHT</p>
//             </div>
//             <div className='flex '>
//               <button>
//                 <MdPets size={50} />
//               </button>
//               <div className='ml-4'>
//                 <h3 className='py-2'>COMPASSIONATE CARE</h3>
//                 <p className='py-1'>DEDICATED TO STRAY DOGS' WELL-BEING</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
        
//       <div>
//         <div className='border text-center'>
//             <p className='pt-2'>ADOPT A STRAY TODAY</p>
//             <p className='py-4'>LIMITED TIME ONLY</p>
//             <p className='bg-gray-800 text-gray-200 py-2'>GIVE A STRAY A FOREVER HOME</p>
//         </div>
//         <form className='w-full'>
//           <div className='flex flex-col my-2'>
//             <label>Adoption Center</label>
//             <select className='border rounded-md p-2'>
//               <option>Local Shelter</option>
//               <option>Rescue Sanctuary</option>
//               <option>Adoption Fair</option>
//               <option>Foster Home</option>
//             </select>
//                       </div>
//                       <div className='flex flex-col my-4'>
//                           <label>Check-In</label>
//                           <input className='border rounded-md p-2' type="date" />
//                       </div>
//                       <div className='flex flex-col my-2'>
//           <label>Adoption Date</label>
//           <input className='border rounded-md p-2' type="date" />
//         </div>
//         <button className='w-full my-4'>Find Your Paw-some Companion</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Search;
