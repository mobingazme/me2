'use client'
import React, { useEffect, useState } from 'react'
import ThreeDMoon from '../3DModels/ThreeDMoon'
import { Link } from 'react-scroll';
import 'animate.css';
import DownlodButton from '@/elements/DownlodButton'
import Image from 'next/image';
import WelcomSvg from '../lottie/lottieSvgWelcom'
import './../styles/gradientAnimation.css'

function Header() {
  const [isVisible, setIsVisible] = useState(false);//باید false باشه


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

  return (
    <div className={`w-full h-fit flex items-center relative justify-center md:justify-between  p-2 md:p-7 `}>
      <div className='absolute top-56   md:top-32 md:right-5 z-10'>
        <WelcomSvg />
      </div>
      <div className={` flex items-center justify-between  md:p-10 w-full md:w-[1000px] transition-colors md:mx-28 h-16 p-5 z-50  ${isVisible ? 'backdrop-blur-sm bg-[#0000006]  p-5 rounded-md  fixed top-8  animate__animated animate__zoomInUp ' : 'animate__fadeInDown animate__animated'}`}>
        <Image className='animate__animated animate__fadeInDown animate__delay-2s' width={100} height={80} alt='logo' src='/images/logo-header.svg' />
        <div className='  hidden md:flex justify-between items-center  animate__animated animate__fadeInUp animate__delay-2s'>
          <Link activeClass="active" to="abute" spy={true} smooth={true} offset={-70} duration={700}>
            <h2 className=" text-white text-gradient-animation duration-700 ease-in transition-all rounded-md w-fit text-center cursor-pointer transform hover:text-lg p-1">درباره من</h2>
          </Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={700}>
            <h2 className='text-white text-gradient-animation  duration-700 ease-in transition-all rounded-md w-fit text-center hover:backdrop-blur-lg cursor-pointer transform hover:text-lg p-1 mx-2'>مهارت های من</h2>
          </Link>
          <Link activeClass="active" to="workSamples" spy={true} smooth={true} offset={-70} duration={700}>
            <h2 className='text-white text-gradient-animation  duration-700 ease-in transition-all rounded-md w-fit text-center hover:backdrop-blur-lg cursor-pointer transform hover:text-lg p-1'>نمونه کارها</h2>
          </Link>
          <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-70} duration={700}>
            <h2 className='text-white text-gradient-animation duration-700 ease-in transition-all rounded-md w-fit text-center hover:backdrop-blur-lg cursor-pointer transform hover:text-lg p-1 mx-2'>ارتباط بامن</h2>
          </Link>
        </div>
        <div className=' animate__animated animate__fadeInDown animate__delay-2s'>
          <DownlodButton />
        </div>
      </div>  
      <div  id='1' className='absolute md:left-0 top-0 md:top-5   '>
        <ThreeDMoon />
      </div>
    </div>
  )
}

export default Header

