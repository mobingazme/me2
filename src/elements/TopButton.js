'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import 'animate.css';

function TopButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 0); // تنظیم isVisible به true اگر scrollTop بزرگتر از 0 است و به false در غیر این صورت
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <ScrollLink
      activeClass="active"
      to="1"
      spy={true}
      smooth={true}
      offset={-70}
      duration={800}
    >
      <div className='z-50'>
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`flex items-center  fixed bottom-8 left-8 justify-center w-14 group group-hover:before:duratio-700 group-hover:after:duration-700 after:duration-700  hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-700 before:duration-700 hover:duration-700  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur    origin-left hover:decoration-2    text-left   text-base font-bold   overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1  before:bg-[#10509f] before:rounded-full before:blur-md  after:absolute  after:w-20 after:h-20 after:content['']  after:bg-[#ec82bc] after:right-8 after:top-3 after:rounded-full after:blur-md hover:w-28 h-14  rounded-full p-2 shadow-none border-none  transition-all ${isVisible ? 'visible animate__bounceInUp animate__animated animate__delay-2s' : 'hidden animate__bounceOut animate__animated animate__delay-2s'}`}>
          <Icon className={`w-8 h-fit text-white z-10 ${isHovered ? 'hidden animate__animated animate__fadeOutLeft' : 'flex animate__animated animate__fadeInRight'}`} icon="line-md:upload-loop" />
          <h4 className={`w-fit text-white font-bold border-none z-10 text-sm h-fit ${isHovered ? 'flex animate__animated animate__fadeInLeft' : 'hidden animate__animated animate__fadeOutRight'}`} > برگشت ب بالا</h4>
        </button>
      </div>
    </ScrollLink>
  );

}

export default TopButton;