import React from 'react'
import apple from '../Images/Group 2085664274.png'
export default function Testimonials() {
  const handleZoomIn = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleZoomOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };
  const mobileScreen = window.innerWidth;
  return (
    <div className='sm:w-[90%]  w-[90%]  flex-col sm:mt-[100px]  mt-[60px] flex justify-center items-center'>
    <h1 className='text-black font-bold text-[20px]'>Digital Tracking of Calories</h1>
    <p className='text-[11px] sm:text-[17px] text-black text-center mt-2 sm:w-[50%] mb-10'>Vizpro, prioritizes data security and compliance, ensuring peace of mind for both distributors and merchants.</p>
   <div className='w-[100%] mt-5 bg-[#126847] sm:h-[400px] h-[640px] relative flex-col rounded-[44px] p-10 mb-5 flex justify-center '>
   <div className='sm:w-[50%] w-[100%] sm:flex sm:justify-start sm:items-start flex justify-center items-center flex-col'>
   {mobileScreen >450 &&
   <img src={apple} className='sm:w-[31%] absolute top-[-20px] right-10  '/>}
   <h1 className='text-white font-bold sm:text-[30px] text-[20px] w-[75%] sm:text-start text-center sm:w-[80%]'>Track calories digitally with the app</h1>
   <p className='text-white mt-3 sm:text-start text-center sm:w-[70%]'>Coming Soon!</p>
   <button className='bg-[white]  text-[#126847] h-[40px] w-[150px] mt-3 rounded-lg'>Join Now</button>
   {mobileScreen <450 &&
    <img src={apple} className='sm:w-[30%] mt-5 '/>}
   </div>
   </div>

    </div>
  )
}
