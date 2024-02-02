import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='home-title'>
        <h1 className='home-title__text'>NEW VIDEO AVAILABLE</h1>
      </div>
    </motion.section>
  );
};

export default Home;
