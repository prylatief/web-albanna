
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Extracurriculars from './components/Extracurriculars';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Registration from './components/Registration';
import CtaBand from './components/CtaBand';
import Donation from './components/Donation';
import Alumni from './components/Alumni';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Extracurriculars />
        <Gallery />
        <Testimonials />
        <Registration />
        <CtaBand />
        <Donation />
        <Alumni />
      </main>
      <Footer />
    </>
  );
};

export default App;
