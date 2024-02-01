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
        {videos
          .slice()
          .reverse()
          .map((video) => (
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
    </motion.section>
  );
};

export default Videos;
