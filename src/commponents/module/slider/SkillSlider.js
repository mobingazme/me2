"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import { Autoplay, Grid } from 'swiper/modules';
import './../../styles/textGradient.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';

// import required modules

const data = [
    {
        id: 1,
        title: 'NEXT',
        icon: "teenyicons:nextjs-solid",
    },
    {
        id: 2,
        title: 'REACT',
        icon: "akar-icons:react-fill",
    },
    {
        id: 3,
        title: 'HTML',
        icon: "cib:html5",
    },
    {
        id: 4,
        title: 'CSS',
        icon: "flowbite:css-solid",
    },
    {
        id: 5,
        title: 'TAILWIND',
        icon: "simple-icons:tailwindcss",
    },
    {
        id: 6,
        title: 'BOOTSTRAP',
        icon: "cib:bootstrap",
    },
    {
        id: 7,
        title: 'SASS',
        icon: "fa6-brands:sass",
    },
    {
        id: 8,
        title: 'JS',
        icon: "raphael:js",
    },
    {
        id: 9,
        title: 'REDUX',
        icon: "akar-icons:redux-fill",
    },
    {
        id: 10,
        title: 'GIT',
        icon: "simple-icons:git",
    },
    {
        id: 11,
        title: 'Swiper',
        icon: "simple-icons:swiper",
    },
];

const SliderRight = ({ direction }) => {
    return (
        <Swiper
            breakpoints={{
                0: {
                    // width: 576,
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                320: {
                    // width: 576,
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                450: {
                    // width: 576,
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                576: {
                    // width: 576,
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                676: {
                    // width: 576,
                    slidesPerView: 5,
                    spaceBetween: 0
                },
                768: {
                    // width: 768,
                    slidesPerView: 6,
                    spaceBetween: 0
                },
                900: {
                    // width: 768,
                    slidesPerView: 7,
                    spaceBetween: 0
                },
                1148: {
                    // width: 768,
                    slidesPerView: 9,
                    spaceBetween: 0
                },
            }}
            dir="rtl"
            slidesPerView={8}
            spaceBetween={30}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Grid]}
            className="mySwiper"
            direction={direction}
        >
            {data.map((item) => (
                <SwiperSlide data-aos="flip-up" className='my-5' key={item.id}>
                    <div className=" bg-gradient-to-r hover:bg-gradient-to-l from-[#10509f]  duration-700 via-[#cf6dd8] to-[#ec82bc]  ease-in border animate-transition-all transform hover:translate-y-[-10px] cursor-pointer flex flex-col justify-center items-center  rounded-full w-24 h-24">
                        <Icon className='w-10 h-10 text-white ' icon={item.icon} />
                        <h2 className='mt-1 text-sm  text-white '>{item.title}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
const Sliderleft = ({ direction }) => {
    return (
        <Swiper
            breakpoints={{
                0: {
                    // width: 576,
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                320: {
                    // width: 576,
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                450: {
                    // width: 576,
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                576: {
                    // width: 576,
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                676: {
                    // width: 576,
                    slidesPerView: 5,
                    spaceBetween: 0
                },
                768: {
                    // width: 768,
                    slidesPerView: 6,
                    spaceBetween: 0
                },
                900: {
                    // width: 768,
                    slidesPerView: 7,
                    spaceBetween: 0
                },
                1148: {
                    // width: 768,
                    slidesPerView: 9,
                    spaceBetween: 0
                },
            }}
            dir="ltr"
            slidesPerView={8}
            spaceBetween={30}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Grid]}
            className="mySwiper"
            direction={direction}
        >

            {data.map((item) => (
                <SwiperSlide data-aos="flip-up" className='my-6' key={item.id}>
                    <div className=" bg-gradient-to-r hover:bg-gradient-to-l from-[#10509f]  duration-700 via-[#cf6dd8] to-[#ec82bc]  ease-in border animate-transition-all transform hover:translate-y-[-10px] cursor-pointer flex flex-col justify-center items-center  rounded-full w-24 h-24">
                        <Icon className='w-12 text-white h-12' icon={item.icon} />
                        <h2 className='mt-1 text-white text-sm '>{item.title}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}



const SkillSlider = () => {

    return (
        <div className='md:my-10 my-4 px-1 md:px-10 '>
            <SliderRight />
            <Sliderleft />
        </div>
    )


}







export default SkillSlider

