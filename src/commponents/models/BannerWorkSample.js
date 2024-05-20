'use client'
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image'

import 'animate.css';
import './../styles/textGradient.css'
import './../styles/gradientAnimation.css'
function BannerWorkSample() {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-10 p-5 md:p-12 bg-B shadow-lg' >
            <div>
                <div className=' w-full  relative cursor-pointer overflow-hidden  shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
                    <Image data-aos="zoom-in-right" width={500} height={500} alt='mahbano' className='w-full h-full ' src='/images/Screenshot 2024-04-18 104643.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
                        <div className='bg-gray-900 z-10   p-4 text-sm md:text-md rounded-lg'>
                            <Link className='text-gradient-animation' href=''>
                                نمایش وبسایت
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' backdrop-blur-sm  bg-[#0000006] py-5'>
                    <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='text-gradient-animation text-3xl py-2'>_ماه بانو</h4>
                    <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine" className='text-center text-sm text-white'>این وبسایت فروشگاهی با استفاده از آخرین تکنولوژی‌های فرانت‌اند شامل <span className='text-gradient text-sm '>Next.js 14  (App Router)</span><br />, Zustand, animate.css, Yup, Swiper, Tailwind CSS, و Formik طراحی و پیاده‌سازی شده است تا تجربه خرید آنلاین بی‌نظیری برای مشتریان فراهم آورد. با کاربری آسان و تجربه کاربری پویا، این پلتفرم به کاربران امکان می‌دهد به راحتی محصولات مورد نظر خود را جستجو، مشاهده و خریداری کنند.</p>
                    <Link href={'https://github.com/mobingazme/mahbano'}>
                        <div className=' text-gradient-animation duration-700  flex cursor-pointer ease-in transition-all transform hover:translate-x-[-10px] items-center pt-3 w-32 justify-between '>
                            <h5 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=''>دانلود از github</h5>
                            <Icon data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='w-8 h-fit' icon="mdi:github" />
                        </div>
                    </Link>
                </div>

            </div>


            <div>
                <div className=' w-full  relative cursor-pointer overflow-hidden  shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
                    <Image data-aos="zoom-in-left" width={500} height={500} alt='mobin' className='w-full h-full ' src='/images/m.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0   ease-in transform hover:opacity-100 transition-opacity duration-700 bg-black/50'>
                        <div className='bg-gray-900  text-sm md:text-md p-4 rounded-lg'>
                            <Link className='text-gradient-animation' href='/'>
                                نمایش وبسایت
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='backdrop-blur-sm  bg-[#0000006] py-5'>
                    <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine"  className='text-gradient-animation text-3xl py-2'>_mobin </h4>
                    <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine"  className='text-center text-sm text-white'>این وبسایت شخصی با استفاده از آخرین تکنولوژی‌های فرانت‌اند شامل <span className='text-gradient text-sm '>Next.js 14  (App Router)</span><br />, , animate.css, , Swiper, Tailwind,lottie-react,,aos,react-scroll ...   استفاده کردم  و این وبسایت تک صفحه ای رو ب منظور معرفی خود ومهارت هایم  این قالب رو طراحی و توسعه داده ام  .</p>
                    <Link href={'https://github.com/mobingazme/me'}>
                        <div className=' text-gradient-animation duration-700  flex cursor-pointer ease-in items-center transition-all transform hover:translate-x-[-10px]  pt-3 w-32 justify-between '>
                            <h5 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=''>دانلود از github</h5>
                            <Icon data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='w-8 h-fit ' icon="mdi:github" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerWorkSample














