'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/welcom.json'; // مسیر فایل JSON
//
const WelcomSvg = () => {
  return (
    <div className=' p-1 w-[200px] h-[200px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default WelcomSvg