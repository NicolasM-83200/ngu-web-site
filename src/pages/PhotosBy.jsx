import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { PhotoAlbum } from 'react-photo-album';
import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';

const PhotosBy = () => {
  const location = useLocation();

  const [index, setIndex] = useState(-1);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);

  const [photosList, setPhotosList] = useState(location.state);

  const loadMore = () => {
    if (photosList.paging?.hasOwnProperty('next')) {
      //If there are any more photos
      fetch(photosList.paging.next)
        .then((response) => response.json())
        .then((response) => {
          const updatedAlbum = {
            ...photosList.data,
            data: [...photosList.data, ...response.data],
            paging: response.paging,
          };
          setPhotosList(updatedAlbum);
        });
    } else {
      console.log('no more albums');
      alert('No more photos');
    }
  };

  const photos = photosList.data.map((photo) => ({
    src: photo.webp_images[0].source,
    width: photo.webp_images[0].width,
    height: photo.webp_images[0].height,
    key: photo.id,
    alt: photo.id,
  }));

  return (
    <section id='album'>
      <p>Album Name: {photosList.data[0].album.name}</p>

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
      <button className='button' onClick={loadMore}>
        <span className='button_lg'>
          <span className='button_sl'></span>
          <span className='button_text'>Load more...</span>
        </span>
      </button>
    </section>
  );
};

export default PhotosBy;
