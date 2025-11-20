
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Extracurriculars from './components/Extracurriculars';
import Leadership from './components/Leadership';
import Teachers from './components/Teachers';
import GalleryKegiatan from './components/GalleryKegiatan';
import GalleryPondok from './components/GalleryPondok';
import GalleryGuru from './components/GalleryGuru';
import WhyAlbanna from './components/WhyAlbanna';
import Testimonials from './components/Testimonials';
import Registration from './components/Registration';
import CtaBand from './components/CtaBand';
import Donation from './components/Donation';
import Alumni from './components/Alumni';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Extracurriculars />
        <Leadership />
        <Teachers />
        <section id="galeri">
          <GalleryKegiatan />
          <GalleryPondok />
          <GalleryGuru />
        </section>
        <WhyAlbanna />
        <Testimonials />
        <Registration />
        <CtaBand />
        <Donation />
        <Alumni />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  );
};

export default App;
