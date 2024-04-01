import React, { useState } from 'react';
import videoBackground2 from '../assets/video-background-2.mp4';
import background from '../assets/logo-ngu.webp';
import { useLocation } from 'react-router-dom';

const Background = () => {
  const location = useLocation();
  const [showVideo, setShowVideo] = useState(true);
  return (
    <div className='background'>
      {location.pathname === '/' && showVideo ? (
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
      {location.pathname === '/' && (
        <div className='background__toggle-container'>
          <label htmlFor='show-video' className='background__toggle-label'>
            <input
              className='background__toggle-input'
              type='checkbox'
              name='show-video'
              id='show-video'
              checked={showVideo}
              onChange={() => setShowVideo(!showVideo)}
            />
            <span className='background__toggle-text'>Show video</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default Background;
