'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animation/Animation - codingOne.json'; // مسیر فایل JSON
//abute
const CodingSvg = () => {
  return (
    <div className=' p-1 w-[200px] h-[200px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default CodingSvg