"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CodingSvg from '../lottie/lottieSvgOne';
import { Icon } from '@iconify/react';
import './../styles/gradientAnimation.css'
import './../styles/textGradient.css'
function Abute() {
    return (
        <div id="abute" className=' w-full  flex items-center  md:px-20 py-40 relative'>
            <div className='  backdrop-blur-sm bg-[#0000006] grid grid-cols-1 md:flex  items-center justify-center w-full h-fit md:h-80 '>
                <div data-aos="zoom-in" data-aos-duration="1500" className='p-5'>
                    <Image className=' px-20 md:px-0 md:w-60  h-fit runded-full' width={600} height={600} alt='logo' src='/images/IMG_9793.png' />
                </div>
                <div className=' p-4'>
                    <h6 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className='  animate__animated animate__fadeInUp animate__delay-1s text-lg mb-2 text-gradient' >_درباره من</h6>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='  mb-1 md:mb-3 text-center md:text-start text-white'>من مبین هستم، ۲۳ سال سن دارم و دانشجوی رشته مهندسی نرم‌افزار  هستم.</p>
                    <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine" className=' mb-1 md:mb-3 text-center md:text-start text-white'>از دو سال پیش، یادگیری برنامه‌نویسی را آغاز کرده‌ام. منابع اصلی یادگیری من شامل وب‌سایت‌هایی مانند <span className='text-gradient-animation  duration-700 ease-in transition-all transform  md:hover:text-lg font-bold cursor-pointer'><Link href='https://roocket.ir'> roocket </Link></span>
                        و <span className=' text-gradient-animation  duration-700 ease-in text-white transition-all transform md:hover:text-lg font-bold cursor-pointer' > <Link href='https://botostart.ir'> botostart </Link></span> بوده و همچنین از مستندات تخصصی و ویدیوهای آموزشی یوتوب برای پیشبرد دانش خود استفاده کرده‌ام.</p>
                    <p data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine" className=' text-center md:text-start text-white'>از پروژه‌ها و تجربیات برنامه‌نویسی خودم به عنوان ابزاری برای تقویت مهارت‌هایم استفاده می‌کنم و همواره در جستجوی یادگیری و پیشرفت هستم.</p>

                    <div data-aos="flip-up" data-aos-duration="2000" data-aos-easing="ease-in-sine" className=' grid grid-cols-1 md:flex justify-center mt-5 p-5'>
                        <Link href={'https://wa.me/989033695751'}>
                            <div className=" bg-gradient-to-r hover:bg-gradient-to-l  transition-all duration-700 ease-in-out  from-[#10509f]   via-[#cf6dd8] to-[#ec82bc]  border animate-transition-all transform  cursor-pointer flex  justify-center items-center p-2 rounded-lg w-26 h-10">
                                <h4 className='z-10 text-white  md:text-sm px-2'>whatsapp</h4>
                                <Icon className='w-8 md:w-6 h-fit text-white flex hover:hidden z-10' icon="ic:baseline-whatsapp" />
                            </div>
                        </Link>
                        <Link href={'https://www.linkedin.com/in/mobin-gazmeh'}>
                            <div className=" bg-gradient-to-r hover:bg-gradient-to-l  transition-all duration-700 ease-in-out  from-[#10509f]   via-[#cf6dd8] to-[#ec82bc]  border animate-transition-all transform  cursor-pointer flex  justify-center items-center p-2 rounded-lg w-26 h-10 mx-0 md:mx-3 my-3 md:my-0">
                                <h4 className='z-10 text-white  md:text-sm px-2'>linkedin</h4>
                                <Icon className='w-8 md:w-6 h-fit text-white z-10' icon="brandico:linkedin-rect" />
                            </div>
                        </Link>
                        <Link href={'https://www.instagram.com/_mobingm'}>
                            <div className=" bg-gradient-to-r hover:bg-gradient-to-l  transition-all duration-700 ease-in-out  from-[#10509f]   via-[#cf6dd8] to-[#ec82bc]  border animate-transition-all transform  cursor-pointer flex  justify-center items-center p-2 rounded-lg w-26 h-10">
                                <h4 className=' text-white md:text-sm px-2'>instagram</h4>
                                <Icon className='w-8 md:w-6 h-fit text-white ' icon="teenyicons:instagram-outline" />
                            </div>
                        </Link>
                        <Link href={'https://t.me/Mobin_gazmeh'}>
                            <div className=" bg-gradient-to-r hover:bg-gradient-to-l  transition-all duration-700 ease-in-out  from-[#10509f]   via-[#cf6dd8] to-[#ec82bc]  border animate-transition-all transform  cursor-pointer flex  justify-center items-center p-2 rounded-lg w-26 h-10 mx-0 md:mx-3 my-3 md:my-0">
                                <h4 className='z-10 text-white text-sm px-2'>telegram</h4>
                                <Icon className='w-8 md:w-6 h-fit text-white z-10' icon="bi:telegram" />
                            </div>
                        </Link>
                        <Link href={'https://github.com/mobingazme'}>
                            <div className=" bg-gradient-to-r hover:bg-gradient-to-l  transition-all duration-700 ease-in-out  from-[#10509f]   via-[#cf6dd8] to-[#ec82bc]  border animate-transition-all transform  cursor-pointer flex  justify-center items-center p-2 rounded-lg w-26 h-10">
                                <h4 className='z-10 text-white  md:text-sm px-2'>github</h4>
                                <Icon className='w-8 md:w-6 h-fit text-white z-10' icon="bi:github" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-in-sine" className='absolute bottom-7 md:bottom-20 left-0 md:left-5'>
                <CodingSvg />
            </div>
        </div>
    )
}

export default Abute