import React from 'react';
import videos from '../data/videos.json';
import { motion } from 'framer-motion';

const Videos = () => {
  return (
    <motion.section
      id='videos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='videos-container'>
        <h2>CLIP</h2>
        <div className='videos-container__clip'>
          {videos.clip.map((video) => (
            <iframe
              key={video.id}
              width='560'
              height='315'
              src={video.url}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <h2>LIVE</h2>
        <div className='videos-container__clip'>
          {videos.live.map((video) => (
            <iframe
              key={video.id}
              width='560'
              height='315'
              src={video.url}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <h2>TEASER & EPs</h2>
        <div className='videos-container__clip'>
          {videos.teaser.map((video) => (
            <iframe
              key={video.id}
              width='560'
              height='315'
              src={video.url}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Videos;
