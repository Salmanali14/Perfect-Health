import React, { useRef, useState } from 'react';
import video from '../Images/video.mp4';
import poster from '../Images/Group 2085663754.jpg';

export default function Explainer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle video play/pause toggle
  const toggleVideoPlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true); // Update to playing
    } else {
      videoRef.current.pause();
      setIsPlaying(false); // Update to paused
    }
  };

  return (
    <div className="sm:w-[90%] w-[90%] flex-col sm:mt-[100px] flex justify-center items-center">
      {/* Title */}
      <h1 className="text-black font-bold text-[20px]">Explainer Video</h1>

      {/* Video Container */}
      <div className="w-[100%] mt-5 bg-[#126847] sm:rounded-[40px] overflow-hidden relative">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-[100%] object-cover"
          poster={poster} // Dummy poster image
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={toggleVideoPlay}
            className="bg-gray-800 bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75"
          >
            {isPlaying ? (
              // Pause Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 9v6m4-6v6"
                />
              </svg>
            ) : (
              // Play Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.518-3.757A1 1 0 007 8.222v7.556a1 1 0 001.234.97l6.518-3.757a1 1 0 000-1.94z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
