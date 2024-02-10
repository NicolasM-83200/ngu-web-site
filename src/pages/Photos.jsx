import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getDatas } from '../lib/common';
import Loader from '../components/Loader';

const Photos = () => {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDatasList() {
      const datas = await getDatas();
      setDatas(datas);
    }
    getDatasList();
  }, []);

  useEffect(() => {
    if (datas !== null) {
      setIsLoading(false);
    }
  }, [datas]);

  // console.log(datas);

  return (
    <motion.section
      id='photos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {isLoading ? (
        <div className='loader-container'>
          <Loader />
        </div>
      ) : (
        <div className='album-container'>
          <Link
            to={`/photos/photos_of`}
            className='album-container__link'
            state={datas?.feed}
          >
            <figure className='album-container__figure'>
              <img
                src={datas.feed?.data[1].full_picture}
                alt='Photos By'
                className='album-container__image'
                width={180}
              />
              <figcaption className='album-container__figcaption'>
                Photos du journal
              </figcaption>
            </figure>
          </Link>
          <Link
            to={`/photos/photos_by`}
            className='album-container__link'
            state={datas?.photos}
          >
            <figure className='album-container__figure'>
              <img
                src={datas.photos?.data[0].webp_images[0].source}
                alt='Photos By'
                className='album-container__image'
                width={180}
              />
              <figcaption className='album-container__figcaption'>
                {datas.photos?.data[0].album.name}
              </figcaption>
            </figure>
          </Link>
          {datas?.albums?.data.map((album) => (
            <Link
              className='album-container__link'
              to={`/photos/${album.id}`}
              key={album.id}
              state={album}
            >
              <figure className='album-container__figure'>
                <img
                  src={album.picture.data.url}
                  alt={album.name}
                  className='album-container__image'
                  width={180}
                />
                <figcaption className='album-container__figcaption'>
                  {album.name}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Photos;
