import React from 'react';
import logo from '../assets/logo-ngu-inverse.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
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
      <nav className='navbar'>
        <ul className='navbar__links'>
          {links.map((link, index) => (
            <li className='navbar__item' key={index}>
              <NavLink
                to={link.path}
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
