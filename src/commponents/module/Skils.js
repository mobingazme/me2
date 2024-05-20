'use client'
import React from 'react'
import SvgSix from '../lottie/lottieSix'
import CodingSvgTwo from '../lottie/lottieSvgTwo'
import './../styles/gradientAnimation.css'

function Skils() {
    return (
        <div id='skills' className='w-full h-fit relative py-40 md:py-20'>
            <div  className='absolute -top-20 md:top-0 '>
                <CodingSvgTwo/>
            </div>
            <div  className='absolute -bottom-5 md:top-20 left-0 md:left-3 '>
                <SvgSix />
            </div>
            <div className='flex items-center justify-center '>
                <div className='backdrop-blur-sm  bg-opacity-60 w-full md:w-[800px] p-10 '>
                    <h6 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className=' text-gradient '>_مهارت های من</h6>
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' text-xl font-bold my-5 text-white'>چرا من را برای پروژه بعدی استخدام کنید؟</h2>
                    <div className='' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                        <p className='text-center md:text-start text-white'> به عنوان یک برنامه‌نویس فرانت‌اند با بیش از دو سال تجربه، من مسلط به زبان <span className='font-bold  text-gradient-animation'>JavaScript</span> و فریم‌ورک‌هایی مانند <span className='font-bold  text-gradient-animation '>Next.js و React</span> هستم. در طول مسیر تحصیلی و کاری خود، با کتابخانه‌هایی مانند <span className='font-bold text-gradient-animation '>Tailwind CSS، Sass، Bootstrap، Yup، Redux، Redux Toolkit، Git، Flexbox، Grid، Zustand، Formik و Swiper ,Three.js...</span>   آشنا شده‌ام و توانایی استفاده موثر از آن‌ها را دارم. </p>
                        <p className='text-center md:text-start text-white'>تمرکز من بر ایجاد رابط‌های کاربری منحصر به فرد و جذاب برای کاربران است، و همچنین تضمین ارتقای تجربه کاربری از طریق بهینه‌سازی عناصر و افزودن انیمیشن‌ها و افکت‌های تصویری است. با دانش گسترده‌ای از اصول طراحی و توسعه وب، من می‌توانم به بهبود وبسایت شما کمک کنم و تجربه کاربری بهتری را برای مخاطبان فراهم کنم.</p>
                        <p className='text-center md:text-start text-white'> هدف من در آینده تبدیل شدن به یک <span className='font-bold   text-gradient-animation'>Full Stack JavaScript Developer</span> است. من تمایل دارم تا با تسلط بر تکنولوژی‌های بک‌اند و فرانت‌اند، به طراحی و توسعه برنامه‌های وب پیچیده و کارآمد بپردازم.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skils