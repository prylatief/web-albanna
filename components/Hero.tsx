import React from 'react';
import { ACADEMIC_YEAR, REGISTRATION_TITLE, CONTACT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#066836]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/pondok-1.jpg"
          alt="Suasana Pondok Pesantren Al-Banna"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#066836]/70 via-[#066836]/60 to-[#066836]/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge Top */}
          <div className="inline-flex items-center gap-2 bg-[#F9D302]/20 border-2 border-[#F9D302] backdrop-blur px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <span className="text-[#F9D302] text-xl">☪</span>
            <span className="text-sm font-semibold text-[#F9D302]">Pendidikan • Kepedulian • Keteladanan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Pondok Pesantren Tahfidz<br />Al-Qur'an <span className="text-[#F9D302]">Albanna</span>
          </h1>

          {/* Tahun Ajaran & Pendaftaran */}
          <div className="inline-flex flex-col items-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="text-[#F9D302] font-bold text-lg md:text-xl">
              Tahun Ajaran {ACADEMIC_YEAR}
            </div>
            <div className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-base md:text-lg shadow-lg">
              🎓 {REGISTRATION_TITLE}
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white font-semibold max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Mencetak Generasi Qur'ani, Mandiri, dan Berprestasi
          </p>

          {/* Info Pendaftaran Card - PROMINENT */}
          <div className="max-w-2xl mx-auto bg-[#F9D302] rounded-2xl p-6 md:p-8 shadow-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#066836] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#F9D302]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-[#066836] font-bold text-sm mb-1">📞 Info & Pendaftaran</div>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl font-extrabold text-[#066836] hover:text-[#044824] transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
                <div className="text-[#066836] text-sm mt-1 font-medium">Klik untuk WhatsApp</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <a
              href="#gelombang-promo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9D302] text-[#066836] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#e8c602] transition-all transform hover:scale-105 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Daftar Sekarang
            </a>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 backdrop-blur transition-all text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi Admin
            </a>
          </div>

          {/* Quote */}
          <p className="mt-8 text-base sm:text-lg text-[#F9D302]/90 max-w-2xl mx-auto italic animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya." (HR. Bukhari)
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-4 top-1/2 hidden lg:block opacity-10">
          <div className="text-6xl text-[#F9D302]">☪</div>
        </div>
        <div className="absolute right-4 top-1/2 hidden lg:block opacity-10">
          <div className="text-6xl text-[#F9D302]">📖</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
