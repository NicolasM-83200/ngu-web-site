import React from 'react';
import { motion } from 'framer-motion';

const Photos = () => {
  return (
    <motion.section
      id='photos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='photos-container'>
        <h1>Photos Page</h1>
        <h2>Galerie photos</h2>
      </div>
    </motion.section>
  );
};

export default Photos;
