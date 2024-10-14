import React, { useState } from 'react';
import logo from '../Images/PERFECT HEALTH (2) 1.png';
import { Link, Element } from 'react-scroll';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Appfeature from '../Components/PerfectHealth';
import HowItwork from '../Components/Goals';
import Herosection from '../Components/Herosection';
import Benifits from '../Components/HowItWorks';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import Explainer from '../Components/Explainer';
import Tribe from '../Components/Tribe';
import { RiMenu3Line } from 'react-icons/ri';

export default function LandingPage() {
  const mobileScreen = window.innerWidth;
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const linkStyles = (isHovered) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    color: isHovered ? 'transparent' : '#7B7B7B',
    background: isHovered ? '#126847' : 'none',
    WebkitBackgroundClip: isHovered ? 'text' : 'initial',
    WebkitTextFillColor: isHovered ? 'transparent' : 'initial',
    backgroundClip: isHovered ? 'text' : 'initial',
    textFillColor: isHovered ? 'transparent' : 'initial',
  });

  const DrawerList = (
    <Box sx={{ width: 250, height: "100vh", background: "#fff",color:"#7B7B7B" }} role="presentation" onClick={toggleDrawer(false)}>
      <img src={logo} className='w-[149px] h-[30px] ml-4 mt-5 mb-5' alt="Logo" />
      <Divider />
      {["Why Perfect Health", "How It Works", "Digital Tracking"].map((item, index) => (
        <Link
          key={item}
          to={item}
          smooth={true}
          duration={500}
          onClick={toggleDrawer(false)}
          style={{ textDecoration: 'none',color:"#000" }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText sx={{ color: "#7B7B7B" }} primary={item.replace(/^\w/, (c) => c.toUpperCase())} />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>
      ))}
      <Divider />
    
    </Box>
  );
  const buttonStyles = {
    height: '50px',
    width: '178px',
    color: 'white',
    borderRadius: '12px',
    background: 'linear-gradient(to right, #9C7BFC 0%, #46CBE9 100%)',
    transition: 'all 0.4s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const hoverStyles = {
    ':hover': {
      background: 'linear-gradient(to right, #46CBE9, #9C7BFC)',
      transform: 'scale(1.05)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
  };
  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'HvDTrial Niveau Grotesk';
            src: url('/fonts/HvDTrialNiveauGrotesk.woff2') format('woff2'),
                 url('/fonts/HvDTrialNiveauGrotesk.woff') format('woff');
          }
        `}
      </style>
      <div className='flex items-center w-[100%] flex-col bg-[#fff] relative '>
        {mobileScreen > 430 &&
          <div className='w-[100%] h-[100px] bg-[#fff] flex justify-center fixed top-0 z-50 items-center'>
            <div className='w-[90%] flex justify-between items-center'>
              <img src={logo} className='w-[189px] h-[55px]' alt="Logo" />
              {["Why Perfect Health", "How It Works", "Digital Tracking"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  style={linkStyles(hoveredLink === item)}
                  onMouseEnter={() => setHoveredLink(item)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className='text-[#7B7B7B] cursor-pointer'
                >
                  {item.replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
              ))}
              <button
              className="h-[50px] w-[178px] text-white rounded-xl group border border-[#126847] relative overflow-hidden"
              style={{ background: '#126847' }}
            >
              <span className="relative z-10 text-[#126847] group-hover:text-white">CONTACT US</span>
              <span className="absolute inset-0 bg-white left-[-100%] group-hover:left-[100%] transition-all duration-500 ease-in-out"></span>
            </button>
            
            </div>
          </div>
        }
  
        {mobileScreen <= 450 &&
          <div className='flex justify-between w-[100%] pl-5 pr-5 bg-[#fff] fixed top-0 z-50 items-center h-[60px]'>
          <img src={logo} className='w-[130px] h-[25px] mb-2' alt="Logo" />
          <div className='flex justify-center items-center'>
          <button
          className="h-[30px] w-[128px] text-white rounded-[3px] group border border-[#126847] relative overflow-hidden"
          style={{ background: '#126847' }}
        >
          <span className="relative z-10 text-[#126847] text-[12px] group-hover:text-white">CONTACT US</span>
          <span className="absolute inset-0 bg-white left-[-100%] group-hover:left-[100%] transition-all duration-500 ease-in-out"></span>
        </button>
        
            <RiMenu3Line onClick={toggleDrawer(true)} className=' ml-4 text-[#126847] text-[35px]' />
            </div>
            
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        }
        <Herosection />
        <div className='w-[100%] h-[40px]'   style={{ background: 'linear-gradient(180deg, #D7F0DE 0%, #FFFFFF 100%)' }}></div>
        
        <Element className='w-[100%]  flex justify-center' name="Why Perfect Health">
          <Appfeature />
        </Element>
      
        <Element className='w-[100%]  flex justify-center' name="">
          <HowItwork />
        </Element>
        
        <Element className='w-[100%]  flex justify-center' name="How It Works">
          <Benifits />
        </Element>
        <Element className='w-[100%]  flex justify-center' name="Digital Tracking">
        <Testimonials/>
        </Element>
        <Element className='w-[100%]  flex justify-center' name="Explainer">
          <Explainer />
        </Element>
        <Element className='w-[100%] mt-[50px] relative  '  name="Tribe">
          <Tribe />
        </Element>
        <Element className='w-[100%] h-[266px] flex justify-center flex-col sm:mt-[70px] relative  mt-[60px] bg-[#484E4A]'  style={{ fontFamily: 'HvDTrial Niveau Grotesk' }}  name="Footer">
          <Footer/>
          
        </Element>
      
      </div>
    
      
    </>
  );
}
