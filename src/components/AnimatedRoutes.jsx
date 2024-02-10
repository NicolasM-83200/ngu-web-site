import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import Videos from '../pages/Videos';
import Tour from '../pages/Tour';
import Merch from '../pages/Merch';
import Contact from '../pages/Contact';
import PhotosAlbum from '../pages/PhotosAlbum';
import PhotosBy from '../pages/PhotosBy';
import PhotosOf from '../pages/PhotosOf';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/photos/:albumId' element={<PhotosAlbum />} />
        <Route path='/photos/photos_by' element={<PhotosBy />} />
        <Route path='/photos/photos_of' element={<PhotosOf />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
