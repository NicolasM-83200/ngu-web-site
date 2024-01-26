import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import VideoBackground from './components/VideoBackground';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Tour from './pages/Tour';
import Merch from './pages/Merch';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='main-wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
