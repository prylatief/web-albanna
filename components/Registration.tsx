
import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="pendaftaran" className="py-20 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">Pendaftaran</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Informasi Pendaftaran <span className="text-primary">2026–2027</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar Al Banna. Daftar sekarang dan raih masa depan yang cemerlang!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Info & Registration Waves */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hubungi Kami
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a9.5 9.5 0 0 0-8.06 14.71L3 22l5.48-.94A9.5 9.5 0 1 0 12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">WhatsApp</p>
                    <a className="text-primary font-bold text-lg hover:underline" href="https://wa.me/6281285256488" target="_blank" rel="noopener noreferrer">
                      0812-8525-6488
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Email</p>
                    <a className="text-gold font-bold hover:underline" href="mailto:pondoktafhidzalbanna@gmail.com">
                      pondoktafhidzalbanna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Lokasi</p>
                    <p className="text-slate-800 font-medium">
                      Babakan Kp. Cisawu, Kec. Sukajaya<br />Jonggol, Kab. Bogor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Waves Card */}
            <div className="p-8 bg-gradient-to-br from-primary to-primary/90 rounded-3xl shadow-2xl text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Gelombang Pendaftaran
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Gelombang 1</span>
                    <span className="bg-gold text-dark px-3 py-1 rounded-full text-sm font-bold">Diskon 25%</span>
                  </div>
                  <p className="text-sm text-white/80">Nov–Des 2025</p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Gelombang 2</span>
                    <span className="bg-gold text-dark px-3 py-1 rounded-full text-sm font-bold">Diskon 15%</span>
                  </div>
                  <p className="text-sm text-white/80">Jan–Feb 2026</p>
                </div>

                <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Gelombang 3</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Kebijakan Khusus</span>
                  </div>
                  <p className="text-sm text-white/80">Maret–Juni 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:sticky lg:top-24">
            <div className="p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Biaya Pendidikan</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                  <p className="text-sm text-slate-600 mb-2">Pendaftaran</p>
                  <p className="text-3xl font-bold text-primary">Rp 200.000</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-gold/5 to-gold/10 border-2 border-gold/20">
                  <p className="text-sm text-slate-600 mb-2">Uang Pangkal</p>
                  <p className="text-3xl font-bold text-gold">Rp 3.500.000</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-2 border-emerald-500/20">
                  <p className="text-sm text-slate-600 mb-2">SPP Bulanan</p>
                  <p className="text-sm text-slate-500 mb-1">(asrama + makan)</p>
                  <p className="text-3xl font-bold text-emerald-600">Rp 850.000</p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/6281285256488"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white font-bold px-8 py-5 rounded-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 text-center"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a9.5 9.5 0 0 0-8.06 14.71L3 22l5.48-.94A9.5 9.5 0 1 0 12 2Z" />
                </svg>
                <span>Ayo Mondok di Albanna — Pesantrenku Keren!</span>
              </a>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-600 text-center">
                  💳 Tersedia berbagai metode pembayaran dan kemudahan cicilan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
