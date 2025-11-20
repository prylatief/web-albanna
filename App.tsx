
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Extracurriculars from './components/Extracurriculars';
import GalleryKegiatan from './components/GalleryKegiatan';
import GalleryPondok from './components/GalleryPondok';
import GalleryGuru from './components/GalleryGuru';
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
        <section id="galeri">
          <GalleryKegiatan />
          <GalleryPondok />
          <GalleryGuru />
        </section>
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
