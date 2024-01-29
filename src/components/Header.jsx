import React, { useState } from 'react';
import logo from '../assets/logo-ngu-inverse.png';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <nav>
        <li>
          <NavLink
            to='/'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/photos'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            PHOTOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/videos'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            VIDEOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <img src={logo} height={150} width='auto' alt='logo' />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/tour'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            TOUR
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/merch'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            MERCH
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            CONTACT
          </NavLink>
        </li>
      </nav>
    </motion.header>
  );
};

export default Header;
