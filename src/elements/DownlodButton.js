'use client'
import React, { useEffect, useState } from 'react';
import 'animate.css';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import animationData from '/public/animation/Loading.json'

function DownlodButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {

    setLoading(true);
    const fileURL = '/resume/مبین_گزمه-fa-1-7.pdf';
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = 'مبین_گزمه-fa-1.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000); // تنظیم زمان مدت نمایش لودینگ به میلی ثانیه
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className={`flex items-center justify-center bg-gradient-to-r hover:bg-gradient-to-l  transition-all duration-700 ease-in  from-[#10509f]   via-[#cf6dd8] to-[#ec82bc] w-28 h-10  rounded-lg p-2 border-none  `}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {loading ? (
          <div className='w-20 '>
            <Lottie animationData={animationData} />
          </div>
        ) : (
          <>
            <div className="mr-2 text-white">
              <Icon className={`w-8 text-white h-fit ${isHovered ? 'flex animate__animated animate__fadeInDown' : 'hidden animate__animated animate__fadeOutUp'}`} icon="line-md:cloud-download-outline-loop" />
            </div>
            <div className={`${isHovered ? 'hidden animate__animated animate__fadeOutDown' : 'flex animate__animated animate__fadeInUp'}`}>
              <div className="text-white text-sm ">دانلود رزومه</div>
            </div>
          </>
        )}
      </button>
    </div>
  );
}

export default DownlodButton;
