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
        <div className="w-screen h-screen ">
            <Header />
            <div>{children}</div>
            <TopButton/>
            <Footer />
        </div>
    )
}

export default Layout