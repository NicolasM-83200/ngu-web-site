import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { PhotoAlbum } from 'react-photo-album';
import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';

const PhotosOf = () => {
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

  const loadImages = async (photosList) => {
    console.log('loadImages is running');
    try {
      const loadImg = (src) =>
        new Promise((resolve, reject) => {
          if (!src) {
            reject('No src');
            return;
          }
          const img = new Image();
          img.onload = () => {
            // console.log('Image loaded: ', img.src);
            resolve({ width: img.naturalWidth, height: img.naturalHeight });
          };
          img.onerror = (error) => {
            console.error('Fail in loadImg: ', error);
            reject(error);
          };
          img.src = src;
          console.log('Image ', img.naturalWidth, img.naturalHeight);
        });

      const photos = await Promise.all(
        photosList.data
          .filter((photo) => photo?.full_picture)
          .map(async (photo) => {
            try {
              const { width, height } = await loadImg(photo?.full_picture);
              return {
                src: photo?.full_picture,
                width,
                height,
                key: photo.id,
                alt: photo.id,
              };
            } catch (error) {
              console.error('Fail loading image: ', photo?.full_picture, error);
              return null;
            }
          })
      );
      return photos;
    } catch (error) {
      console.error('Fail in loadImages: ', error);
    }
  };

  useEffect(() => {
    console.log('useEffect is running');
    const getPhotos = async () => {
      try {
        console.log('photosList: ', photosList);
        const photos = await loadImages(photosList);
        setPhotosList(photos);
        console.log(photos);
      } catch (error) {
        console.error('Fail in getPhotos: ', error);
      }
    };
    getPhotos();
  }, []);

  return (
    <section id='album'>
      <p>Album Name: Photos du journal</p>

      <PhotoAlbum
        layout='masonry'
        photos={photosList}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        index={index}
        slides={photosList}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick }}
      />
      <button onClick={loadMore}>Load More</button>
    </section>
  );
};

export default PhotosOf;
