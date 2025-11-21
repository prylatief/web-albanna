import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RegistrationWavesSection from './components/RegistrationWavesSection';
import VisiMisi from './components/VisiMisi';
import WhyAlbanna from './components/WhyAlbanna';
import CtaBand from './components/CtaBand';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import GalleryKegiatan from './components/GalleryKegiatan';
import Extracurriculars from './components/Extracurriculars';
import BiayaDanPendaftaran from './components/BiayaDanPendaftaran';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

/**
 * App Component
 * Struktur landing page redesign dengan pendekatan hybrid:
 * Prioritas informasi konversi dan UX optimal untuk mobile & desktop
 *
 * Flow:
 * 1. Hero (dengan info pendaftaran prominent)
 * 2. Gelombang Promo (untuk attention dan konversi)
 * 3. Mengapa Albanna? (social proof & value prop)
 * 4. CTA Band (sticky di mobile)
 * 5. Visi & Misi
 * 6. Program & Keunggulan
 * 7. Galeri Kegiatan (dengan lazy load)
 * 8. Ekstrakurikuler
 * 9. Biaya & Cara Pendaftaran (tabs)
 * 10. Testimoni
 * 11. Footer Kontak
 */
const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Info pendaftaran prominent dengan CTA jelas */}
        <Hero />

        {/* 2. Gelombang Promo - Section prominent untuk konversi */}
        <RegistrationWavesSection />

        {/* 3. Mengapa Albanna - Value proposition dengan visual */}
        <WhyAlbanna />

        {/* 4. CTA Band - Sticky di mobile untuk akses mudah */}
        <CtaBand />

        {/* 5. Visi & Misi - Background kuning dengan pattern */}
        <VisiMisi />

        {/* 6. Program Utama & Keunggulan */}
        <Programs />

        {/* 7. Fasilitas */}
        <Facilities />

        {/* 8. Galeri Kegiatan - Lazy loading dengan show more */}
        <GalleryKegiatan />

        {/* 8. Ekstrakurikuler */}
        <section className="py-16 bg-[#F9D302]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#066836] mb-2">
                ⚽ Ekstrakurikuler
              </h2>
              <p className="text-[#066836]/80 text-lg">Beragam kegiatan untuk pengembangan minat dan bakat</p>
              <div className="h-1 w-24 bg-[#066836] mx-auto mt-4"></div>
            </div>
            <Extracurriculars />
          </div>
        </section>

        {/* 9. Biaya & Cara Pendaftaran - Dengan tabs untuk kemudahan */}
        <BiayaDanPendaftaran />

        {/* 10. Testimoni */}
        <section id="testimoni" className="py-16 bg-[#066836]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                💬 Testimoni
              </h2>
              <p className="text-white/90 text-lg">Apa kata orang tua dan alumni tentang Albanna</p>
              <div className="h-1 w-24 bg-[#F9D302] mx-auto mt-4"></div>
            </div>
            <Testimonials />
          </div>
        </section>
      </main>

      {/* 11. Footer Kontak */}
      <Footer />

      {/* WhatsApp Bubble - Floating action */}
      <WhatsAppBubble />
    </>
  );
};

export default App;
