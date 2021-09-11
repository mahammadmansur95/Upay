import React from 'react';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HowitWorks from './components/HowitWorks';
import Navbar from './components/navbar';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HowitWorks/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
