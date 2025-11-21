import React from 'react';
import RegistrationWaves from './RegistrationWaves';

/**
 * RegistrationWavesSection Component
 * Section prominent untuk gelombang pendaftaran & promo
 * Ditempatkan di bagian atas setelah hero untuk mendapatkan perhatian maksimal
 */
const RegistrationWavesSection: React.FC = () => {
  return (
    <section id="gelombang-promo" className="py-16 md:py-20 bg-[#066836] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl text-[#F9D302]">🎉</div>
        <div className="absolute top-40 right-20 text-7xl text-[#F9D302]">💰</div>
        <div className="absolute bottom-20 left-20 text-8xl text-[#F9D302]">⭐</div>
        <div className="absolute bottom-10 right-10 text-9xl text-[#F9D302]">🎓</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title with Ribbon Effect */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full mb-4 shadow-xl animate-pulse">
            <span className="text-lg font-bold">🔥 PROMO SPESIAL TAHUN AJARAN 2026-2027 🔥</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Gelombang Pendaftaran & <span className="text-[#F9D302]">Diskon</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Daftarkan putra-putri Anda sekarang dan dapatkan diskon hingga <span className="text-[#F9D302] font-bold">500.000</span>!
          </p>
          <div className="h-1 w-32 bg-[#F9D302] mx-auto mt-4"></div>
        </div>

        {/* Registration Waves Cards */}
        <RegistrationWaves />

        {/* Info Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F9D302]/20 border-2 border-[#F9D302] backdrop-blur px-6 py-4 rounded-xl">
            <svg className="w-6 h-6 text-[#F9D302]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold text-sm md:text-base">
              Daftar lebih awal, hemat lebih banyak! Kuota terbatas untuk setiap gelombang.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationWavesSection;
