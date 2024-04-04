import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* news section */}
      <div className='news__title'>
        <h1 className='news__title-text'>NEWS</h1>
        <iframe
          className='news__video'
          loading='lazy'
          id='ytplayer'
          type='text/html'
          width='720'
          height='405'
          src='https://www.youtube.com/embed/S3UHH91fb-Y?rel=0&amp;controls=1&amp;showinfo=0'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>

      {/* About section */}
      <div className='about'>
        <div className='about__overlay'>
          <h2 className='about__title'>About</h2>
          <div className='about__text-container'>
            <p className='about__text'>
              Never Give Up, hailing from Toulon, is back on the scene after a
              hiatus of over seven years, more determined than ever to resonate
              their explosive energy across the globe. Founded at the turn of
              the 2000s, the band has carved out its reputation through its
              uncompromising blend of hardcore and metal, propelling their
              distinctive sound onto stages across France and beyond.
            </p>
            <br />
            <p className='about__text'>
              With a dynamic new lineup, Never Give Up reaffirms its commitment
              to authenticity and intensity, producing new compositions that
              capture the raw essence of their artistic vision. The band takes
              pride in its legacy, having shared the stage with heavyweight
              hardcore acts such as Madball, Warhound, Pay No Respect, Brutality
              Will Prevail, Bane, and Terror.
            </p>
            <br />
            <p className='about__text'>
              Since their inception, Never Give Up has been praised for their
              fiery stage presence and deep connection with their audience.
              Their music transcends linguistic and cultural boundaries,
              conveying a message of resilience and unity through blistering
              riffs and poignant lyrics.
            </p>
            <br />
            <p className='about__text'>
              With a fresh momentum and renewed passion, Never Give Up is poised
              to reclaim their spot on the global stage, ready to defy
              expectations and inspire a new generation of hardcore fans. Their
              long-awaited return serves as a powerful reminder that no matter
              the adversities, one should never give up.
            </p>
          </div>
        </div>
      </div>

      {/* News section */}
      <div className='news-container'></div>
    </motion.section>
  );
};

export default Home;
