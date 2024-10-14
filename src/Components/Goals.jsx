import React from 'react';
import img from "../Images/Group 2085664001.png";
import Resume from "../Images/Group 2085664244 (1).png";

export default function HowItwork() {
  return (
    <div className='sm:w-[100%] w-[100%] sm:mt-[100px] mt-[60px] flex sm:justify-between sm:flex-row flex-col items-center'>
<div className='sm:w-[50%] w-[100%] mr-12 h-[550px] bg-[#E0FFF3] sm:rounded-tr-[54px] rounded-tr-[24px] flex justify-center items-center flex-col sm:rounded-br-[54px] rounded-br-[24px]'>
<h1 className='font-bold text-[20px] ml-12'>Set Your Goals</h1>
<img src={img} className=' h-[400px] mt-5 ml-12'/>
</div>
<div className='sm:w-[50%] w-[60%] h-[550px] flex  items-center flex-col '>
<h1 className='font-bold text-[20px] sm:mt-0 mt-5'>Track Your Progress</h1>
<img src={Resume} className=' sm:h-[500px] mt-5'/>
</div>
    </div>
  )
}
