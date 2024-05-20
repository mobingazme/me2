'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/Animation - three.json'; // مسیر فایل JSON

const CodingSvg3 = () => {
  return (
    <div className=' p-1 w-[200px] h-[200px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default CodingSvg3
//همونهی ک باید رنگش عوض بشه