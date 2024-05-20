"use client"
import React from 'react'
import CodingSvg3 from '../lottie/lottieSvgThree'
import BannerWorkSample from '../models/BannerWorkSample'
import SvgFive from '../lottie/lottieFive'
import './../styles/gradientAnimation.css'
function WorkSamples() {
    return (
        <div id="workSamples" className=' relative w-full h-fit py-10'>
            <div className='md:flex grid grid-cols-1 px-4 items-center  '>
                <div  className=''>
                  <SvgFive/>
                </div>
                <div className='backdrop-blur-sm bg-[#0000006] md:absolute md:left-16  p-5 w-full md:w-[800px]' >
                    <h6 data-aos="fade-up"  data-aos-duration="800" data-aos-easing="ease-in-sine" className='text-gradient'>_نمونه کار ها</h6>
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' text-2xl font-bold my-5 text-white'>سفری از یادگیری تا پیاده‌سازی در فرانت‌اند</h2>
                    <p className='text-center pb-2 md:pb-0 md:text-start text-white' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine">علی‌رغم اینکه دوران آموزشی ام را تازه پشت سر گذاشته‌ام، اما تلاش کرده‌ام که با استفاده از آخرین فناوری‌ها و کتابخانه‌ها در زمینه برنامه‌نویسی فرانت‌اند، پروژه‌هایی را به تنهایی و یا در تیم‌های کوچک به انجام برسانم. این نمونه کارها، شاید محدود باشند، اما بازتاب‌دهنده توانایی‌ام در یادگیری سریع و کاربرد دانش فنی در موقعیت‌های واقعی است. هر پروژه برای من فرصتی بوده است تا مهارت‌هایم را تقویت کنم و درک عمیق‌تری از توسعه وب به دست آورم.</p>
                </div>
                <div   className='absolute left-0 md:left-5 top-72 md:top-5 '>
                    <CodingSvg3 />
                </div>
            </div>
            <div  >
                <BannerWorkSample />
            </div>
        </div>
    )
}

export default WorkSamples

