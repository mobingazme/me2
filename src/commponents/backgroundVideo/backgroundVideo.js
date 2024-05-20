'use client'
import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="w-full h-full">
      <ReactPlayer
        url="/videos/bgVideo2.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default BackgroundVideo; 