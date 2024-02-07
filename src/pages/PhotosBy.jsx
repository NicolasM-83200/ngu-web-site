import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { PhotoAlbum } from 'react-photo-album';
import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';

const PhotosBy = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);

  const photosList = location.state;

  console.log(photosList);

  if (photosList.paging.hasOwnProperty('next')) {
    //If there are any more albums
    fetch(photosList.paging.next)
      .then((response) => response.json())
      .then((response) => {
        // response.data.forEach(album => {
        //   album.cover_photo = album.cover_photo.picture; //All we need is picture
        // });
        // console.log(response.data);
        photosList.data.push(...response.data); //Append albums
        photosList.paging = response.paging; //Set paging to new values
      });
  } else {
    console.log('no more albums');
  }

  const photos = photosList.data.map((photo) => ({
    src: photo.webp_images[0].source,
    width: photo.webp_images[0].width,
    height: photo.webp_images[0].height,
    key: photo.id,
    alt: photo.id,
  }));

  return (
    <section id='album'>
      <h2>Photos Album Page</h2>
      <p>Album Name: Photos de vous</p>

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

export default PhotosBy;
