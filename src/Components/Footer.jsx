import React from "react";
import logo from "../Images/Group 2500.png";
import link1 from "../Images/Mask group.png";
import link2 from "../Images/Mask group (1).png";
import link3 from "../Images/Mask group (2).png";
import link4 from "../Images/Mask group (3).png";
import link5 from "../Images/Mask group (4).png";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import perfecthealth from "../Images/PERFECT HEALTH (2) 1 (1).png";
import perfectfooter from "../Images/PERFECT HEALTH (3) 1.png";
import facebook from '../Images/facebookfooter.png'
import youtube from '../Images/youtubefooter.png'
import linkedin from '../Images/linkedinfooter.png'
import pintres from '../Images/pintresfooter.png'
import whatsapp from '../Images/whtasappfooter.png'


export default function Footer() {
  let handleOnclick = () => {
    window.open("https://www.avicennaenterprise.com/", "_blank");
  };
  let handleFb = () => {
    window.open(
      "https://www.facebook.com/avicennaenterprisesolutions/",
      "_blank"
    );
  };
  let handleLinkiden = () => {
    window.open("https://www.linkedin.com/company/a-esolutions/", "_blank");
  };
  let handleInsta = () => {
    window.open("https://www.instagram.com/__aesolutions/?hl=en", "_blank");
  };
  const handlePhoneClick = () => {
    window.location.href = "tel:+923200001511";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:Info@avicennaenterprise.com";
  };

  const handleAddressClick = () => {
    window.open(
      "https://maps.google.com/?q=P-79, P Block, Johar town phase 2, Lahore, Pakistan",
      "_blank"
    );
  };
  const mobileScreen = window.innerWidth;
  return (
    <>
      <div className="flex w-[90%] mx-auto text-white  items-center ">
        <div className="w-[70%] flex flex-col border-r-4 sm:mb-0 mb-10  ">
          <div className="sm:w-[58%] w-[100%]  ">
            <img
              src={perfecthealth}
              alt=""
              className="w-[105px] bg-none text-white mb-2"
            />
            <h2 className="sm:text-[20px] text-[16px] mb-2">
              Perfect Nutrition for Busy People
            </h2>
            <p className="text-[10px]">
              Our nutritionist-approved algorithm analyses your needs and
              matches you with chef-cooked meals, customized to your body,
              goals, and taste. Embrace a healthier you with Perfect Health
              today!
            </p>
          </div>
        </div>
        <div className="w-[30%]  flex flex-col items-center sm:mb-0 p-2 mb-10">
          <img src={perfectfooter} alt="" className="w-[195px]" />
          <p className="text-[10px] sm:text-[12px] sm:px-6">Our Food Preparation Partner</p>
        </div>
      </div>
      <hr className="w-full border-gray-300 sm:mt-[50px]" />
      <div className="flex justify-between w-[90%] sm:pr-10 mx-auto mt-[20px] text-white text-[14px]">
      <div className="flex gap-2 ">
        <img className="w-[22px] h-[22px]" src={facebook} alt="facebookicon" />
        <img className="w-[22px] h-[22px]" src={whatsapp} alt="whatsappicon" />
        <img className="w-[22px] h-[22px]" src={linkedin} alt="linkedin" />
        <img  className="w-[22px] h-[22px]"src={pintres} alt="pintresicon" />
        <img className="w-[22px] h-[22px]" src={youtube} alt="youtubeicon" />
      </div>
      <p className="flex justify-end items-end text-[12px] sm:text-[16px]   w-[50%]">©2024 Perfrct Health | All Rights Reserved</p>
      </div>
    </>
  );
}
