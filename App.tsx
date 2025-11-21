
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrochureLayout from './components/BrochureLayout';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import GalleryPondok from './components/GalleryPondok';
import GalleryGuru from './components/GalleryGuru';
import WhyAlbanna from './components/WhyAlbanna';
import CtaBand from './components/CtaBand';
import Donation from './components/Donation';
import Alumni from './components/Alumni';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

/**
 * App Component
 * Struktur landing page dengan layout mirip brosur:
 * 1. Hero Section (background hijau dengan CTA)
 * 2. BrochureLayout (3 kolom utama: Galeri+Ekskul | Pimpinan+Guru+Petunjuk | Testimoni+Promo+Biaya)
 * 3. Additional sections (About, Programs, dll)
 */
const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Background Hijau dengan Value Proposition */}
        <Hero />

        {/* Layout 3 Kolom Utama (Mirip Brosur) */}
        <BrochureLayout />

        {/* Section Tambahan */}
        <About />
        <Programs />
        <Facilities />

        {/* Galeri Lainnya */}
        <section id="galeri" className="bg-slate-50">
          <GalleryPondok />
          <GalleryGuru />
        </section>

        <WhyAlbanna />
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
