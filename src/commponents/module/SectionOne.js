'use client'
import React from 'react'
import 'animate.css';
import './../styles/gradientAnimation.css'
import './../styles/textGradient.css'
function SectionOne() {
  return (
    <div className='flex w-fit justify-center items-center backdrop-blur-sm bg-[#0000006] rounded-md overflow-hidden p-2 m-10 md:m-0 md:p-10 mt-96 md:mt-20 md:mr-60'>
      <div className='z-40'>
        <h6 data-aos="fade-up" className=' text-gradient animate__animated animate__fadeInUp animate__delay-1s ' >_معرفی</h6>
        <h2 data-aos="fade-up" data-aos-duration="2000" className='text-white pt-4 md:pt-0 animate__animated animate__fadeInUp animate__delay-2s font-bold text-2xl   animate__animated animate__fadeInUp animate__delay-2s '>سلام من <span className=' text-gradient-animation'> مبین</span> هستم!</h2>
        <p data-aos="fade-up" data-aos-duration="3000" className=' text-center md:text-start my-3 text-white animate__animated animate__fadeInUp animate__delay-2s'>به وبسایت شخصی من خوش آمدید. من یک توسعه‌دهنده وب. فرانت‌اند هستم <br />و مشتاقم تا تجربیات و مهارت‌هایم را با شما به اشتراک بگذارم.</p>
      </div>
    </div>
  )
}

export default SectionOne