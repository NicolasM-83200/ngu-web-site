import React from 'react';
import videoBackground2 from '../assets/video-background-2.mp4'


const VideoBackground = () => {
  return (
    <>
      <video width={1660} height={841}  autoPlay muted loop>
        <source src={videoBackground2} type='video/mp4'/>
      </video>
    </>
  );
};

export default VideoBackground;