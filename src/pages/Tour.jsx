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
      <h1>Tour Page</h1>
    </motion.section>
  );
};

export default Tour;
