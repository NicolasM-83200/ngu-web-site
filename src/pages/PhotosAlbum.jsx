import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { PhotoAlbum } from 'react-photo-album';
import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';

const PhotosAlbum = () => {
  const location = useLocation();

  const [index, setIndex] = useState(-1);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);
  // const [photosList, setPhotosList] = useState(location.state.photos.data);
  const [album, setAlbum] = useState(location.state);

  const photos = album?.photos?.data.map((photo) => ({
    src: photo.webp_images[0].source,
    width: photo.webp_images[0].width,
    height: photo.webp_images[0].height,
    key: photo.id,
    alt: photo.id,
  }));

  const loadMore = () => {
    if (album.photos?.paging.hasOwnProperty('next')) {
      //If there are any more photos
      fetch(album.photos.paging.next)
        .then((response) => response.json())
        .then((response) => {
          const updatedAlbum = {
            ...album,
            photos: {
              ...album.photos,
              data: [...album.photos.data, ...response.data],
              paging: response.paging,
            },
          };
          setAlbum(updatedAlbum);
        });
    } else {
      console.log('no more photos');
      alert('No more photos');
    }
  };

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
      <button onClick={loadMore}>Load More</button>
    </section>
  );
};

export default PhotosAlbum;
