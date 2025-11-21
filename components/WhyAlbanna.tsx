import React from 'react';
import { WHY_ALBANNA } from '../constants';

const WhyAlbanna: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#066836] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <div className="text-9xl text-[#F9D302]">✨</div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <div className="text-9xl text-[#F9D302]">📚</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3">
            KENAPA SAYA HARUS PILIH <span className="text-[#F9D302]">ALBANNA</span>???
          </h2>
          <div className="h-1 w-24 bg-[#F9D302] mx-auto"></div>
        </div>

        {/* Content Grid: List + Photos */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content - 2 Columns of Reasons */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            {WHY_ALBANNA.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#F9D302]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/95 leading-relaxed text-base">{reason}</p>
              </div>
            ))}
          </div>

          {/* Photos Column */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F9D302]/30">
              <img
                src="/images/kegiatan-1.jpg"
                alt="Santri Belajar"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F9D302]/30">
              <img
                src="/images/kegiatan-2.jpg"
                alt="Kegiatan Tahfidz"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats/Highlights (Optional) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-[#F9D302] mb-2">30 Juz</div>
            <div className="text-sm text-white/80">Target Hafalan</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-[#F9D302] mb-2">3 Bahasa</div>
            <div className="text-sm text-white/80">Arab, Inggris, Indonesia</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-[#F9D302] mb-2">24/7</div>
            <div className="text-sm text-white/80">Boarding School</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-[#F9D302] mb-2">100%</div>
            <div className="text-sm text-white/80">Pelayanan Prima</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlbanna;
