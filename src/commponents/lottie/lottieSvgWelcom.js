'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/welcom.json'; // مسیر فایل JSON
//
const WelcomSvg = () => {
  return (
    <div className=' p-1 w-[170px] h-[170px] md:w-[200px] md:h-[200px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default WelcomSvg