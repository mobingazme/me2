'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/HwJN3VGBoI.json'; // مسیر فایل JSON
//footer
const SvgFooterOne = () => {
  return (
    <div className=' p-1 w-[300px] h-[300px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default SvgFooterOne