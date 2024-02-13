import React, { useEffect } from 'react';
import facebookLogo from '../assets/img/facebook.png';
import instagramLogo from '../assets/img/instagram.png';
import youtubeLogo from '../assets/img/youtube.png';
import { motion } from 'framer-motion';
import { mouseLeaveHandler, mouseMoveHandler } from '../lib/common';

const Contact = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.contact-container__link');

    cards.forEach((element) => {
      element.addEventListener('mousemove', (e) =>
        mouseMoveHandler(element, e)
      );
      element.addEventListener('mouseleave', mouseLeaveHandler(element));

      // Supprimez les écouteurs d'événements lorsque le composant est démonté
      return () => {
        element.removeEventListener('mousemove', mouseMoveHandler(element));
        element.removeEventListener('mouseleave', mouseLeaveHandler(element));
      };
    });
  }, []); // Exécutez une fois lorsque le composant est monté

  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='contact-container'>
        <ul className='contact-container__logos-container'>
          <li className='contact-container__list-item'>
            <a
              href='https://www.facebook.com/profile.php?id=100064151672863'
              target='_blank'
              rel='noreferrer'
              className='contact-container__link'
            >
              <div className='contact-container__highlight-container'>
                <img
                  src={facebookLogo}
                  width={120}
                  height={120}
                  alt='Facebook'
                  className='contact-container__logo'
                />
              </div>
              <div className='contact-container__highlight'></div>
            </a>
          </li>
          <li className='contact-container__list-item'>
            <a
              href='https://www.instagram.com/nevergiveuphxc/'
              target='_blank'
              rel='noreferrer'
              className='contact-container__link'
            >
              <div className='contact-container__highlight-container'>
                <img
                  src={instagramLogo}
                  width={120}
                  height={120}
                  alt='Instagram'
                  className='contact-container__logo'
                />
              </div>
              <div className='contact-container__highlight'></div>
            </a>
          </li>
          <li className='contact-container__list-item'>
            <a
              href='https://www.youtube.com/@NeverGiveUptoulon'
              target='_blank'
              rel='noreferrer'
              className='contact-container__link'
            >
              <div className='contact-container__highlight-container'>
                <img
                  src={youtubeLogo}
                  width={120}
                  height={120}
                  alt='Youtube'
                  className='contact-container__logo'
                />
              </div>
              <div className='contact-container__highlight'></div>
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
