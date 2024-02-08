import React from 'react';
import videoBackground2 from '../assets/video-background-2.mp4';
import background from '../assets/logo-ngu.webp';
import { useLocation } from 'react-router-dom';

const Background = () => {
  const location = useLocation();
  return (
    <div className='background'>
      {location.pathname === '/' ? (
        <video
          width={1660}
          height={841}
          autoPlay
          muted
          loop
          poster={background}
        >
          <source src={videoBackground2} type='video/mp4' />
        </video>
      ) : (
        <img src={background} alt='background ngu' width={1280} height={1280} />
      )}
    </div>
  );
};

export default Background;
