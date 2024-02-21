import React, { useEffect } from 'react';
import facebookLogo from '../assets/img/facebook.png';
import instagramLogo from '../assets/img/instagram.png';
import youtubeLogo from '../assets/img/youtube.png';
import tiktokLogo from '../assets/img/tiktok.png';
import { motion } from 'framer-motion';
import { mouseLeaveHandler, mouseMoveHandler } from '../lib/common';
import FormContact from '../components/FormContact';

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

  const socialMedia = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100064151672863',
      logo: facebookLogo,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/nevergiveuphxc/',
      logo: instagramLogo,
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@NeverGiveUptoulon',
      logo: youtubeLogo,
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@never_give_up.hxc',
      logo: tiktokLogo,
    },
  ];

  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='contact-container'>
        <ul className='contact-container__logos-container'>
          {socialMedia.map((social, index) => (
            <li className='contact-container__list-item' key={index}>
              <a
                href={social.link}
                target='_blank'
                rel='noreferrer'
                className='contact-container__link'
              >
                <div className='contact-container__highlight-container'>
                  <img
                    src={social.logo}
                    width={100}
                    height={100}
                    alt={social.name}
                    className='contact-container__logo'
                  />
                </div>
                <div className='contact-container__highlight'></div>
              </a>
            </li>
          ))}
        </ul>

        <div className='contact-container__form-container'>
          <FormContact />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
