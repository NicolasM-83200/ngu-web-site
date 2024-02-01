import React from 'react';
import logo from '../assets/logo-ngu-inverse.png';

const HamburgerSnake = ({ isOpen }) => {
  return (
    <button className='navbar-toggle'>
      <img src={logo} height={75} alt='bouton navbar' />
    </button>
  );
};

export default HamburgerSnake;
