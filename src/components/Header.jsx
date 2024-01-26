import React from 'react';
import logo from '../assets/logo-ngu-inverse.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/photos'>PHOTOS</Link>
        </li>
        <li>
          <Link to='/videos'>VIDEOS</Link>
        </li>
        <li>
          <Link to='/'>
            <img src={logo} height={160} width='auto' alt='logo' />
          </Link>
        </li>
        <li>
          <Link to='/tour'>TOUR</Link>
        </li>
        <li>
          <Link to='/merch'>MERCH</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
