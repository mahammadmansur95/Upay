import React from 'react';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import HowitWorks from './components/HowitWorks';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HowitWorks/>
      <AboutUs/>
    </div>
  );
};

export default App;
