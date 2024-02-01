import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAlbums } from '../lib/common';

const Photos = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbumsList() {
      const data = await getAlbums();
      setAlbums(data);
    }
    getAlbumsList();
  }, []);

  return (
    <motion.section
      id='photos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <h2>Photos Page</h2>
      <div className='album-container'>
        {albums.map((album) => (
          <Link
            className='album-container__link'
            to={`/photos/${album.id}`}
            key={album.id}
            state={album}
          >
            <img
              src={album.picture.data.url}
              alt={album.name}
              className='album-container__image'
              width={180}
            />
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Photos;
