import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-albanna-green">
      <div className="absolute inset-0 -z-10">
        <img src="/images/pondok-1.jpg" alt="Suasana Pondok Pesantren Al-Banna" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-albanna-green/95 via-albanna-green/90 to-albanna-green/85"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
          {/* Badge Top */}
          <div className="inline-flex items-center gap-2 bg-albanna-yellow/20 border-2 border-albanna-yellow backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="text-albanna-yellow text-xl">☪</span>
            <span className="text-sm font-semibold text-albanna-yellow">Pendidikan - Kepedulian - Keteladanan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Pondok Pesantren Tahfidz<br />Al-Qur'an <span className="text-albanna-yellow">Albanna</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl sm:text-2xl text-white font-semibold max-w-3xl mx-auto leading-relaxed">
            Mencetak Generasi Qur'ani, Mandiri, dan Berprestasi
          </p>

          {/* Quote */}
          <p className="mt-4 text-base sm:text-lg text-albanna-yellow/90 max-w-2xl mx-auto italic">
            "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya." (HR. Bukhari)
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pendaftaran"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-albanna-yellow text-albanna-green font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Daftar Sekarang
            </a>
            <a
              href="/brosur-albanna.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 backdrop-blur transition-all text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh Brosur
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-4 top-1/2 hidden lg:block opacity-10">
          <div className="text-6xl text-albanna-yellow">☪</div>
        </div>
        <div className="absolute right-4 top-1/2 hidden lg:block opacity-10">
          <div className="text-6xl text-albanna-yellow">📖</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
