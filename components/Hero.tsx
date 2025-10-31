import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Suasana santri belajar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-white"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl text-white animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full mb-6">
            <span className="text-gold">ﷺ</span>
            <span className="text-sm">Bersama Al-Qur'an, menuju akhlak mulia</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Pondok Pesantren Tahfidz Al-Qur’an Al Banna</h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">“Sebaik-baik kalian adalah yang mempelajari Al-Qur’an dan mengajarkannya.”</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pendaftaran" className="inline-flex items-center gap-2 bg-gold text-dark font-semibold px-5 py-3 rounded-xl shadow-soft hover:brightness-95 transition-all">
              Daftar Sekarang
            </a>
            <a href="#program" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-3 rounded-xl hover:bg-white/15 transition-all">
              Lihat Program
            </a>
          </div>
        </div>
        <div className="absolute right-4 bottom-6 hidden md:block">
          <div className="flex items-center gap-3 text-gold opacity-90">
            <span title="bulan sabit">☾</span>
            <span title="kitab">📖</span>
            <span title="santri">🕌</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
