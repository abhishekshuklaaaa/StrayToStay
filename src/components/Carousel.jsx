import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  // ... your existing slider data ...

  {url: 'https://images.pexels.com/photos/13876626/pexels-photo-13876626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
  url: 'https://images.pexels.com/photos/5834389/pexels-photo-5834389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/14913190/pexels-photo-14913190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/10094979/pexels-photo-10094979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/15473014/pexels-photo-15473014/free-photo-of-a-puppy-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/10609028/pexels-photo-10609028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/1959055/pexels-photo-1959055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/1959054/pexels-photo-1959054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  url: 'https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
];

const slideColors = [
  'red',   // Color for slide 0
  'blue',  // Color for slide 1
  'green', // Color for slide 2
  // Add more colors for additional slides
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-black cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-black cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={index === slide ? 'opacity-100' : 'opacity-0'}
          style={{ backgroundColor: slideColors[index] }} // Apply the slide's color
        >
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;













//******************************************************************************************** */


// import React, { useState } from 'react';
// import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

// const sliderData = [
//   {
//     url: 'https://images.pexels.com/photos/13876626/pexels-photo-13876626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },{
//     url: 'https://images.pexels.com/photos/5834389/pexels-photo-5834389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/14913190/pexels-photo-14913190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/10094979/pexels-photo-10094979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/15473014/pexels-photo-15473014/free-photo-of-a-puppy-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/10609028/pexels-photo-10609028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/1959055/pexels-photo-1959055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/1959054/pexels-photo-1959054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     url: 'https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
// ];

// const Carousel = () => {
//   const [slide, setSlide] = useState(0);
//   const length = sliderData.length;
//   // console.log(length)

//   const prevSlide = () => {
//     setSlide(slide === length - 1 ? 0 : slide + 1);
//   };
//   const nextSlide = () => {
//     setSlide(slide === 0 ? length - 1 : slide - 1);
//   };

//   return (
//     <div className='max-w-[1240px] mx-600px px-4 py-16 relative flex justify-center items-center bg-black text-center'>
//       <BsArrowLeftSquareFill
//         onClick={prevSlide}
//         className='absolute top-[50%] text-3xl text-black cursor-pointer left-8'
//       />
//       <BsArrowRightSquareFill
//         onClick={nextSlide}
//         className='absolute top-[50%] text-3xl text-black cursor-pointer right-8'
//       />
//       {sliderData.map((item, index) => (
//         <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
//           {index === slide && (
//             <img className='w-full rounded-md ' src={item.url} alt='/' />
//           )}
//         </div>
//       ))}
//     </div>
//   );
  

// };

// export default Carousel;
