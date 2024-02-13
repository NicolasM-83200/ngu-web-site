import React from 'react';
import { motion } from 'framer-motion';

const Tour = () => {
  const tourDates = [
    {
      date: '2024-03-30',
      city: 'Montpellier',
      venue: 'KJBI',
      price: '$',
    },
  ];

  return (
    <motion.section
      id='tour'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='tour-container'>
        {tourDates.map((date, index) => (
          <div className='tour-container__dates' key={index}>
            <h3 className='tour-container__dates__date'>{date.date}</h3>
            <h4 className='tour-container__dates__city'>{date.city}</h4>
            <h5 className='tour-container__dates__venue'>{date.venue}</h5>
            <span className='tour-container__dates__price'>{date.price}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tour;
