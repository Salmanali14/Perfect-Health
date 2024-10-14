import React, { useState, useEffect } from 'react';
import main from '../Images/Group 2085664267.png';

export default function Herosection() {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate page load animation effect on initial render
    setTimeout(() => {
      setLoaded(true);
    }, 500); // Adjust timing as needed
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const textAnimationStyle = loaded ? {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.5s ease, transform 1s ease', // Adjust transition timing here
  } : {
    opacity: 0,
    transform: 'translateY(20px)',
  };

  const imageAnimationStyle = loaded ? {
    transform: 'scale(1)',
    transition: 'transform 1s ease-out', // Adjust transition timing here
  } : {
    transform: 'scale(0.7)', // Zoomed out state
  };
  const mobileScreen = window.innerWidth;

  return (
    <div className="sm:h-[100vh] pt-5 pb-5 sm:mt-[20px] mt-[60px] relative w-[100%] flex justify-center"
    style={{ background: 'linear-gradient(180deg, rgba(84, 191, 114, 0.22) 0%, rgba(84, 191, 114, 0.22) 100%)' }}>

       <div className="sm:w-[100%] w-[90%] justify-center items-center flex sm:flex-row flex-col sm:mt-12">
       {mobileScreen <450 &&
        <div className="sm:w-[50%] w-[100%] mt-[50px] flex ">
          <img className={`sm:h-[450px] h-[320px] `} src={main} alt="iPhone Image" style={imageAnimationStyle} />
        </div>
        }
        <div className="flex flex-col sm:justify-start justify-center sm:items-start items-center  sm:w-[50%] sm:pl-[5%] w-[100%]">
          <h1 className="sm:text-[30px] text-[16px] font-bold sm:w-[80%] sm:mt-4  mt-1 text-black" style={textAnimationStyle}><span className='text-[#126847] font-bold sm:text-[30px] text-[20px]'>Perfect Nutrition</span> for Busy People</h1>
          <p className="sm:text-[16px] text-[11px] w-[85%] text-center sm:text-start sm:mt-4 mt-1 text-black" style={textAnimationStyle}>Our nutritionist-approved algorithm analyses your needs and matches you with chef-cooked meals, customized to your body, goals, and taste. Embrace a healthier you with Perfect Health today!</p>
          <div className="flex justify-start items-center  sm:w-[70%] sm:mt-9 mt-3">
            <div
              id="googlePlay"
              className="sm:w-[160px]  w-[120px] cursor-pointer sm:h-[50px] h-[35px] border flex justify-center text-white items-center border-white bg-[#126847] rounded-xl overflow-hidden relative group"
             
            >
              <p className="sm:text-[16px] text-[10px]">Join Now</p>

            </div>
         
          </div>
        </div>
        {mobileScreen >450 &&
        <div className="sm:w-[50%] w-[40%] mt-[50px] flex ">
          <img className={`sm:h-[100%] h-[130px]`} src={main} alt="iPhone Image" style={imageAnimationStyle} />
        </div>
        }
      </div>
    </div>
  );
}
