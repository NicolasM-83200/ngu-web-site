import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { PhotoAlbum } from 'react-photo-album';
import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';

const PhotosOf = () => {
  // On utilise useLocation pour récupérer l'objet location
  const location = useLocation();

  const [index, setIndex] = useState(-1);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);

  // On utilise useState pour définir l'état initial de photosList en utilisant location.state pour récupérer les données de l'album
  const [photosList, setPhotosList] = useState(location.state);
  const [photos, setPhotos] = useState([]);

  // On définit une fonction loadMore pour charger plus de photos
  const loadMore = () => {
    // Si l'objet photosList contient une propriété paging et que cette propriété a une propriété next
    if (photosList.paging?.hasOwnProperty('next')) {
      // Si il y a plus de photos
      fetch(photosList.paging.next)
        .then((response) => response.json())
        .then((response) => {
          // On met à jour l'album avec les nouvelles photos
          const updatedAlbum = {
            ...photosList,
            // On utilise le spread operator pour ajouter les nouvelles photos à l'objet data
            data: [...photosList.data, ...response.data],
            paging: response.paging,
          };
          setPhotosList(updatedAlbum);
          console.log(updatedAlbum);
        });
    } else {
      console.log('no more photos');
      alert('No more photos');
    }
  };

  // On définit une fonction loadImages pour charger les images
  const loadImages = async (photosList) => {
    console.log('loadImages is running');
    try {
      // On utilise Promise.all pour attendre que toutes les promesses soient résolues
      const loadImg = (src) =>
        new Promise((resolve, reject) => {
          if (!src) {
            reject('No src');
            return;
          }
          // On crée une nouvelle instance de l'objet Image
          const img = new Image();
          // On définit une fonction onload pour résoudre la promesse avec la largeur et la hauteur de l'image
          img.onload = () => {
            resolve({ width: img.naturalWidth, height: img.naturalHeight });
          };
          // On définit une fonction onerror pour rejeter la promesse avec l'erreur
          img.onerror = (error) => {
            console.error('Fail in loadImg: ', error);
            reject(error);
          };
          img.src = src;
        });

      // On utilise Promise.all pour attendre que toutes les promesses soient résolues
      const photos = await Promise.all(
        // On utilise la méthode filter pour filtrer les photos sans full_picture
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
      // On utilise la méthode filter pour filtrer les photos sans valeur null
      return photos.filter(Boolean);
    } catch (error) {
      console.error('Fail in loadImages: ', error);
    }
  };

  // On utilise useEffect pour charger les images lorsque photosList change
  useEffect(() => {
    console.log('useEffect is running');
    const getPhotos = async () => {
      try {
        console.log('photosList: ', photosList);
        const images = await loadImages(photosList);
        setPhotos(images);
        console.log(photos);
      } catch (error) {
        console.error('Fail in getPhotos: ', error);
      }
    };
    getPhotos();
  }, [photosList]);

  return (
    <section id='album'>
      <p className='album__name'>Album Name: Photos du journal</p>

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

export default PhotosOf;
