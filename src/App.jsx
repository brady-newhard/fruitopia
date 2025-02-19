import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fruits from './components/Fruits/Fruits';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/About/Contact/Contact';
import FruitSearch from './components/Fruits/FruitSearch/FruitSearch';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search" element={<FruitSearch />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> 
      <Footer />
    </>
  )
}

export default App
