import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { PhotoAlbum } from 'react-photo-album';
import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';

const PhotosAlbum = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);

  const album = location.state;

  // console.log(album);

  const photos = album.photos.data.map((photo) => ({
    src: photo.images[0].source,
    width: photo.images[0].width,
    height: photo.images[0].height,
    key: photo.id,
    alt: photo.id,
  }));

  return (
    <section id='album'>
      <h2>Photos Album Page</h2>
      <p>Album Name: {album.name}</p>

      <PhotoAlbum
        layout='masonry'
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick }}
      />

      {/* {album.photos.data.map((photo) => (
        <img
          src={photo.images[0].source}
          alt={photo.id}
          className='photo'
          key={photo.id}
        />
      ))} */}
    </section>
  );
};

export default PhotosAlbum;
