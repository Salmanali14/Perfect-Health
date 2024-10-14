import React from "react";
import tribeimg from "../Images/pexels-photo-1640773 1.png";

export default function Tribe() {
  return (
    <>
      
      <div className="relative w-full h-[85%]">
        {/* Image */}
        <img src={tribeimg} alt="img" className="w-[100%] h-full" />

        {/* Text Container */}
        <div
          className="absolute inset-0 sm:w-[100%] w-[100%] flex flex-col justify-center items-center text-center text-white mx-auto"
      
        >
          <h2 className="sm:text-[30px] text-[13px] font-bold sm:leading-[46px]">
            Join the tribe and get early access.
          </h2>
         
          <button className="bg-[white] text-[#126847] sm:h-[40px] sm:w-[150px] h-[35px] w-[120px] sm:mt-5 mt-2 rounded-lg">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}
