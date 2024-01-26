import React from 'react';
import VideoBackground from '../components/VideoBackground';

const Home = () => {
  return (
    <>
      <VideoBackground />
      <section className='home'>
        <h1 className='home__title'>NEW VIDEO AVAILABLE</h1>
      </section>
    </>
  );
};

export default Home;
