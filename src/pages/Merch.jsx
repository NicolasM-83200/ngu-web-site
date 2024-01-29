import React from 'react';
import { motion } from 'framer-motion';

const Merch = () => {
  return (
    <motion.section
      id='merch'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <h1>Merch Page</h1>
    </motion.section>
  );
};

export default Merch;
