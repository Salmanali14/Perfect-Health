import React, { useState } from 'react';
import Slider from 'react-slick';
import quik from '../Images/Group 2085664272.png';
import img1 from '../Images/benefitsimg1.png';
import img2 from '../Images/benefitsimg2.png';
import img3 from '../Images/benefitsimg3.png';
import img4 from '../Images/benefitsimg4.png';
import img5 from '../Images/benefitsimg5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Benifits() {
  const [activeImage, setActiveImage] = useState(null);
  const mobileScreen = window.innerWidth;

  const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
  ];

  const handleImageClick = (id) => {
    setActiveImage(id); // Set the clicked image as active
  };

  // Slider settings for screens wider than 450px
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
      <h1 className='text-black font-bold w-[100%] text-[20px] mb-5'>How It Works</h1>

      {/* Show image slider on screens wider than 450px */}
      {mobileScreen < 450 ? (
        <Slider {...sliderSettings} className="w-full">
          {images.map((image) => (
            <div key={image.id}>
              <div className='flex justify-center items-center flex-col'>
                <img src={image.src} alt={image.alt} className='w-[100%] h-auto' />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
      // Show static image on smaller screens
      <img src={quik} className='w-[100%] h-auto' alt="Quick Overview" />
    )}
    </div>
  );
}
