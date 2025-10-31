
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">Tentang Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Melahirkan Generasi <span className="text-primary">Qur'ani</span> Yang Unggul
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Pondok Pesantren Tahfidz Al-Qur'an Al Banna berkomitmen melahirkan generasi Qur'ani yang unggul dalam hafalan, berakhlak mulia, dan siap berkarya di masyarakat dengan landasan nilai-nilai Islami.
            </p>

            {/* Visi & Misi Cards */}
            <div className="space-y-6">
              {/* Visi */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">Visi</h3>
                  </div>
                  <p className="text-slate-700 italic leading-relaxed">
                    "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya."
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="relative p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-dark">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Misi</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Mengimani, memahami, dan mengamalkan Al-Qur'an',
                    'Menyelenggarakan pendidikan berorientasi karakter',
                    'Mencetak generasi Qur\'ani yang unggul dan inovatif',
                    'Menyediakan pendidikan Islami yang terjangkau'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop"
                  alt="Kegiatan santri Al Banna"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>

                {/* Quote Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                    <p className="text-dark font-bold text-lg mb-1">
                      "Ayo Mondok di Albanna"
                    </p>
                    <p className="text-primary font-semibold">
                      Pesantrenku Keren! 🌟
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
