"use client"
import TopButton from "@/elements/TopButton"
import Footer from "./Footer"
import Header from "./Header"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";



function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);
  return (
    <div className="mx-auto h-full  flex flex-col justify-between max-w-[1400px] ">
      <Header />
      <div className='h-fit w-full mx-auto'>
        {children}
      </div>
      <TopButton />
      <Footer />
    </div>
  )
}

export default Layout