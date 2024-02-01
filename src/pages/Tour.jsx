import React from 'react';
import { motion } from 'framer-motion';

const Tour = () => {
  return (
    <motion.section
      id='tour'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='tour-container'>
        <h2>Dates concerts</h2>
      </div>
    </motion.section>
  );
};

export default Tour;
