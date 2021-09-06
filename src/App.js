import React from 'react';
import Header from './components/Header';
import HowitWorks from './components/HowitWorks';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HowitWorks/>
    </div>
  );
};

export default App;
