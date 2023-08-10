import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import Services from './components/Services';
import WhoweAre from './components/WhoweAre'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <WhoweAre/>
      <Search />
      <Services/>
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
