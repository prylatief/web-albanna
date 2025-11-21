import React from 'react';
import { VISION, MISSION } from '../constants';

const VisiMisi: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F9D302] relative overflow-hidden">
      {/* Pattern Background - Subtle */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23066836' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#066836] mb-2">
            Visi & Misi Albanna
          </h2>
          <div className="h-1 w-24 bg-[#066836] mx-auto"></div>
        </div>

        {/* 2 Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* VISI - Kolom Kiri */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#066836]/20 hover:border-[#066836]/40 transition-all duration-300 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">{VISION.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#066836]">{VISION.title}</h3>
            </div>

            {/* Arabic Text */}
            <div className="bg-[#066836] text-[#F9D302] text-center py-4 px-6 rounded-xl mb-4 text-xl md:text-2xl font-arabic leading-loose">
              {VISION.arabic}
            </div>

            {/* Translation */}
            <p className="text-[#066836] italic text-center mb-6 text-sm md:text-base font-medium">
              {VISION.translation}
            </p>

            {/* Statement */}
            <p className="text-[#066836]/90 leading-relaxed text-base md:text-lg">
              {VISION.statement}
            </p>
          </div>

          {/* MISI - Kolom Kanan */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#066836]/20 hover:border-[#066836]/40 transition-all duration-300 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">{MISSION.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#066836]">{MISSION.title}</h3>
            </div>

            {/* Mission Items */}
            <ul className="space-y-4">
              {MISSION.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#066836] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#F9D302]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[#066836]/90 leading-relaxed text-base md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
