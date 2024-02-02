import React, { useState } from 'react';
import logo from '../assets/logo-ngu-inverse.png';
import { NavLink } from 'react-router-dom';
import HamburgerSnake from './HamburgerSnake';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'PHOTOS',
      path: '/photos',
    },
    {
      name: 'VIDEOS',
      path: '/videos',
    },
    {
      name: <img src={logo} height={150} width='auto' alt='logo' />,
      path: '/',
    },
    {
      name: 'TOUR',
      path: '/tour',
    },
    {
      name: 'MERCH',
      path: '/merch',
    },
    {
      name: 'CONTACT',
      path: '/contact',
    },
  ];

  return (
    <>
      <div className='hamburger-btn' onClick={handleToggle}>
        <div className='hamburger-btn__outline --outline-1'></div>
        <div className='hamburger-btn__outline --outline-2'></div>
        <HamburgerSnake isOpen={isOpen} />
      </div>
      <nav className={isOpen ? 'navbar open' : 'navbar'} onClick={handleToggle}>
        <ul className='navbar__links'>
          {links.map((link, index) => (
            <li className='navbar__item' key={index}>
              <NavLink
                to={link.path}
                onClick={handleToggle}
                className={(nav) =>
                  nav.isActive ? 'nav-active navbar__link' : 'navbar__link'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
