'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/Animation - Five.json'; // مسیر فایل JSON
//footer
const SvgFive = () => {
  return (
    <div className=' p-1 w-[330px] h-[350px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default SvgFive