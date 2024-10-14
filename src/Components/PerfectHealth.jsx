import React from 'react';
import Slider from 'react-slick';
import cus from '../Images/pngwing.com (19).png';
import per from '../Images/pngwing.com (33).png';
import tem from '../Images/Group 2085663964.png';
import awr from '../Images/Award.png';
import "./Style.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Appfeature() {
  const mobileScreen = window.innerWidth;

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='sm:w-[90%] w-[90%] flex-col sm:mt-[100px] mt-[60px] flex justify-center items-center'>
      <h1 className='text-black font-bold text-[20px]'>Why Perfect Health?</h1>

      {/* Show slider on mobile screens */}
      {mobileScreen <= 450 ? (
        <Slider {...sliderSettings} className="w-full mt-10">
          <div>
            <div className='flex justify-center items-center flex-col h-[300px] rounded-3xl shadow-md border'>
              <img src={cus} className='h-[100px] w-[100px]' alt="Nutrition Packed" />
              <p className='text-[#126847] font-[500] mt-2 '>Nutrition Packed, Taste Approved</p>
              <p className='text-center text-[14px] w-[80%]'>Our dietitians and chefs collaborate to craft meals that are packed with nutrition and bursting with flavor, so you can enjoy every bite guilt-free.</p>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center flex-col h-[300px] rounded-3xl shadow-md border'>
              <img src={per} className='h-[100px] w-[100px]' alt="Personalized" />
              <p className='text-[#126847] font-[500] mt-2 '>Personalized for You</p>
              <p className='text-center text-[14px] w-[80%]'>Our advanced algorithm creates a meal plan tailored specifically to your health goals and dietary preferences, ensuring every meal is perfect for you.</p>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center flex-col h-[300px] rounded-3xl shadow-md border'>
              <img src={awr} className='h-[100px] w-[100px]' alt="Track Goals" />
              <p className='text-[#126847] font-[500] mt-2 '>Track & Achieve your Goals</p>
              <p className='text-center text-[14px] w-[80%]'>Easily track your daily calorie intake and progress through our app, helping you stay on course to achieve your health goals faster and smarter.</p>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center flex-col h-[300px] rounded-3xl shadow-md border'>
              <img src={tem} className='h-[100px] ' alt="Delivered Fresh" />
              <p className='text-[#126847] font-[500] mt-2 '>Delivered Fresh, Never Frozen</p>
              <p className='text-center text-[14px] w-[80%]'>Enjoy chef-prepared meals made with premium ingredients and delivered fresh never frozen to your door or place of work.</p>
            </div>
          </div>
        </Slider>
      ) : (
        // Show grid layout on screens larger than 450px
        <div className='flex sm:justify-between justify-center flex-wrap items-center w-[55%] gap-6 mt-10 '>
          <div className='flex justify-center items-center flex-col sm:w-[48%] h-[300px] rounded-3xl shadow-md border'>
            <img src={cus} className='h-[100px] w-[100px]' alt="Nutrition Packed" />
            <p className='text-[#126847] font-[500] mt-2 '>Nutrition Packed, Taste Approved</p>
            <p className='text-center text-[14px] w-[80%]'>Our dietitians and chefs collaborate to craft meals that are packed with nutrition and bursting with flavor, so you can enjoy every bite guilt-free.</p>
          </div>
          <div className='flex justify-center items-center flex-col sm:w-[48%] h-[300px] rounded-3xl shadow-md border'>
            <img src={per} className='h-[100px] w-[100px]' alt="Personalized" />
            <p className='text-[#126847] font-[500] mt-2 '>Personalized for You</p>
            <p className='text-center text-[14px] w-[80%]'>Easily track your daily calorie intake and progress through our app, helping you stay on course to achieve your health goals faster and smarter.</p>
          </div>
          <div className='flex justify-center items-center flex-col sm:w-[48%] h-[300px] rounded-3xl shadow-md border'>
            <img src={awr} className='h-[100px] w-[100px]' alt="Track Goals" />
            <p className='text-[#126847] font-[500] mt-2 '>Track & Achieve your Goals</p>
            <p className='text-center text-[14px] w-[80%]'>Our dietitians and chefs collaborate to craft meals that are packed with nutrition and bursting with flavor, so you can enjoy every bite guilt-free.</p>
          </div>
          <div className='flex justify-center items-center flex-col sm:w-[48%] h-[300px] rounded-3xl shadow-md border'>
            <img src={tem} className='h-[100px]' alt="Delivered Fresh" />
            <p className='text-[#126847] font-[500] mt-2 '>Delivered Fresh, Never Frozen</p>
            <p className='text-center text-[14px] w-[80%]'>Enjoy chef-prepared meals made with premium ingredients and delivered fresh never frozen to your door or place of work.</p>
          </div>
        </div>
      )}
    </div>
  );
}
