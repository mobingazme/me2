'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/Animation - Six.json'; // مسیر فایل JSON
//مهارت هایه من
const SvgSix = () => {
  return (
    <div className=' p-1 w-[300px] h-[300px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default SvgSix