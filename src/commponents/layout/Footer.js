'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import 'animate.css';
import './../styles/gradientAnimation.css'


function Footer() {
  return (
    <div className="footer  text-center  p-5 my-32 md:my-0 w-full h-fit md:p-20 grid col-span-1 -z-10  md:flex md:justify-center max-w-8xl items-center  shadow-lg "   >

      <div className='   backdrop-blur-sm bg-[#0000006]  flex flex-col w-fit h-fit items-center justify-center p-10 '>
        <div className=''>
          <div data-aos="zoom-in-letf" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' text-gradient-animation flex justify-between w-fit items-center  '>
            <Icon className=' w-8 h-fit mx-1  bg-gradient-to-r from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1' icon="material-symbols:call-sharp" />
            <span className='text-gradient-animation font-bold'>09033695751</span>
          </div>
          <div data-aos="zoom-in-letf" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' text-gradient-animation flex justify-between w-fit items-center  my-5 '>
            <Icon className=' w-8 h-fit mx-1 bg-gradient-to-r from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1 ' icon="bxl:gmail" />
            <span className='text-gradient-animation font-bold'>mobingazmeh1@gmail.com</span>
          </div>
          <div data-aos="zoom-in-letf" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' text-gradient-animation flex justify-between w-fit items-center  '>
            <Icon className=' w-8 h-fit mx-1   bg-gradient-to-r from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1' icon="mdi:location" />
            <span className='font-bold'>استان گلستان.گنبدکاووس</span>
          </div>
        </div>

        <div id="footer" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine" className='flex justify-around  mt-10'>
          <Link href={'https://wa.me/989033695751'}>
            <div className='w-12 h-12 flex items-center justify-center cursor-pointer  ease-in transition-all transform hover:translate-y-[10px]  bg-gradient-to-r hover:bg-gradient-to-l   duration-700   from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1 delay-100'>
              <Icon className='w-8 h-fit ' icon="ic:baseline-whatsapp" />
            </div>
          </Link>
          <Link href={'https://www.linkedin.com/in/mobin-gazmeh'}>
            <div className='w-12 h-12 flex items-center justify-center cursor-pointer  ease-in transition-all transform hover:translate-y-[10px]  bg-gradient-to-r hover:bg-gradient-to-l   duration-700   from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1 delay-100 mx-2'>
              <Icon className='w-8 h-fit ' icon="brandico:linkedin-rect" />
            </div>
          </Link>
          <Link href={'https://www.instagram.com/_mobingm'}>
            <div className='w-12 h-12 flex items-center justify-center cursor-pointer  ease-in transition-all transform hover:translate-y-[10px]  bg-gradient-to-r hover:bg-gradient-to-l   duration-700   from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1 delay-100'>
              <Icon className='w-8 h-fit ' icon="teenyicons:instagram-outline" />
            </div>
          </Link>
          <Link href={'https://t.me/Mobin_gazmeh'}>
            <div className='w-12 h-12 flex items-center justify-center cursor-pointer  ease-in transition-all transform hover:translate-y-[10px]  bg-gradient-to-r hover:bg-gradient-to-l   duration-700   from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1 delay-100 mx-2'>
              <Icon className='w-8 h-fit ' icon="bi:telegram" />
            </div>
          </Link>
          <Link href={'https://github.com/mobingazme'}>
            <div className='w-12 h-12 flex items-center justify-center cursor-pointer  ease-in transition-all transform hover:translate-y-[10px]  bg-gradient-to-r hover:bg-gradient-to-l   duration-700   from-[#10509f] rounded-full  via-[#cf6dd8] to-[#ec82bc] p-1 delay-100'>
              <Icon className='w-8 h-fit ' icon="bi:github" />
            </div>
          </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Footer

