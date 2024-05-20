'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/Animation - Two.json'; // مسیر فایل JSON
//skils
const CodingSvgTwo = () => {
  return (
    <div className=' p-1 w-[250px] h-[250px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default CodingSvgTwo