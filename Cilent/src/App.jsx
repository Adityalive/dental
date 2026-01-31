import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import Navbar from './assets/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Dentalteam from './pages/Dentalteam';
import Book from './pages/Book';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <About />
            <Services />
            <Dentalteam />
          </>
        } />
        <Route path='/book' element={<Book />} />
      </Routes>
    </>
  );
};

export default App;