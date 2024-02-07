import React from 'react';

const HamburgerSnake = ({ isOpen }) => {
  return (
    <div className='hamburger'>
      <span
        className={`hamburger__burger ${isOpen ? '--open' : '--closed'}`}
      ></span>
      <span
        className={`hamburger__burger ${isOpen ? '--open' : '--closed'}`}
      ></span>
      <span
        className={`hamburger__burger ${isOpen ? '--open' : '--closed'}`}
      ></span>
    </div>
  );
};

export default HamburgerSnake;
