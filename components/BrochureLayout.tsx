
import React from 'react';
import GalleryKegiatan from './GalleryKegiatan';
import Extracurriculars from './Extracurriculars';
import Leadership from './Leadership';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import RegistrationTechnical from './RegistrationTechnical';
import RegistrationWaves from './RegistrationWaves';
import EducationCosts from './EducationCosts';

/**
 * BrochureLayout Component
 * Layout 3 kolom yang meniru struktur brosur offline:
 * - Kolom Kiri: Galeri Kegiatan + Ekstrakurikuler
 * - Kolom Tengah: Dewan Pimpinan + Dewan Guru + Petunjuk Teknis
 * - Kolom Kanan: Testimoni + Gelombang Pendaftaran + Biaya Pendidikan
 *
 * Responsive: Stack 1 kolom di mobile
 */
const BrochureLayout: React.FC = () => {
  return (
    <section className="bg-albanna-green py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 3 Columns | Mobile: Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ========== KOLOM KIRI (4/12) ========== */}
          <div className="lg:col-span-4 space-y-6">
            {/* Galeri Kegiatan */}
            <div className="bg-white/5 backdrop-blur rounded-2xl border-2 border-albanna-yellow/30 overflow-hidden">
              <div className="bg-albanna-yellow px-6 py-3">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">📸 Galeri Kegiatan</h2>
              </div>
              <div className="p-4">
                <GalleryKegiatan compact={true} />
              </div>
            </div>

            {/* Ekstrakurikuler */}
            <div className="bg-white/5 backdrop-blur rounded-2xl border-2 border-albanna-yellow/30 overflow-hidden">
              <div className="bg-albanna-yellow px-6 py-3">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">⚽ Ekstrakurikuler</h2>
              </div>
              <div className="p-4">
                <Extracurriculars compact={true} />
              </div>
            </div>
          </div>

          {/* ========== KOLOM TENGAH (4/12) ========== */}
          <div className="lg:col-span-4 space-y-6">
            {/* Dewan Pimpinan */}
            <div className="bg-albanna-yellow rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-3 border-b-2 border-albanna-green/20">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">👔 Dewan Pimpinan</h2>
              </div>
              <div className="p-4">
                <Leadership compact={true} />
              </div>
            </div>

            {/* Dewan Guru */}
            <div className="bg-albanna-yellow rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-3 border-b-2 border-albanna-green/20">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">👨‍🏫 Dewan Guru</h2>
              </div>
              <div className="p-4">
                <Teachers compact={true} />
              </div>
            </div>

            {/* Petunjuk Teknis Pendaftaran */}
            <div className="bg-albanna-yellow rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-3 border-b-2 border-albanna-green/20">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">📋 Petunjuk Pendaftaran</h2>
              </div>
              <div className="p-4">
                <RegistrationTechnical />
              </div>
            </div>
          </div>

          {/* ========== KOLOM KANAN (4/12) ========== */}
          <div className="lg:col-span-4 space-y-6">
            {/* Testimoni */}
            <div className="bg-white/5 backdrop-blur rounded-2xl border-2 border-albanna-yellow/30 overflow-hidden">
              <div className="bg-albanna-yellow px-6 py-3">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">💬 Testimoni</h2>
              </div>
              <div className="p-4">
                <Testimonials compact={true} />
              </div>
            </div>

            {/* Gelombang Pendaftaran & Promo */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-albanna-yellow">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3">
                <h2 className="text-xl md:text-2xl font-bold text-white">🎉 Gelombang & Promo</h2>
              </div>
              <div className="p-4">
                <RegistrationWaves />
              </div>
            </div>

            {/* Biaya Pendidikan */}
            <div className="bg-albanna-yellow rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-3 border-b-2 border-albanna-green/20">
                <h2 className="text-xl md:text-2xl font-bold text-albanna-green">💰 Biaya Pendidikan</h2>
              </div>
              <div className="p-4">
                <EducationCosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureLayout;
