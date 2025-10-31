
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
          alt="Suasana santri belajar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-white/95"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="max-w-4xl text-white animate-fade-in-up" style={{ animationFillMode: 'both' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-primary/20 border border-gold/30 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-lg">
            <span className="text-gold text-xl">ﷺ</span>
            <span className="text-sm font-medium">Bersama Al-Qur'an, menuju akhlak mulia</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Pondok Pesantren
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold via-gold to-gold/80 bg-clip-text text-transparent">
              Tahfidz Al-Qur'an
            </span>
            <br />
            <span className="text-white">
              Al Banna
            </span>
          </h1>

          {/* Subtitle */}
          <div className="relative pl-6 border-l-4 border-gold/50 mb-10">
            <p className="text-lg sm:text-2xl text-white/95 font-light italic leading-relaxed">
              "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya."
            </p>
            <p className="mt-2 text-sm text-gold/80">— HR. Bukhari</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pendaftaran"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-dark font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300"
            >
              <span>Daftar Sekarang</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Lihat Program</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">30+</div>
              <div className="text-sm text-white/70">Juz Hafalan</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">500+</div>
              <div className="text-sm text-white/70">Santri Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">10+</div>
              <div className="text-sm text-white/70">Tahun Berpengalaman</div>
            </div>
          </div>
        </div>

        {/* Islamic Icons */}
        <div className="absolute right-8 bottom-12 hidden lg:flex items-center gap-6 text-gold/70">
          <div className="text-5xl animate-pulse" style={{ animationDuration: '3s' }} title="bulan sabit">☾</div>
          <div className="text-5xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} title="kitab">📖</div>
          <div className="text-5xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }} title="masjid">🕌</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
