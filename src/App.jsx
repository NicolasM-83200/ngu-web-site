import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <div className='main-wrapper'>
        <Header />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
