import React, { useState } from 'react';
import { EDUCATION_COSTS, COST_NOTE, BONUSES, REGISTRATION_REQUIREMENTS, CONTACT } from '../constants';

/**
 * BiayaDanPendaftaran Component
 * Menggunakan tabs untuk menampilkan:
 * 1. Biaya Pendidikan
 * 2. Cara Pendaftaran
 */
const BiayaDanPendaftaran: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'biaya' | 'cara'>('biaya');

  return (
    <section id="pendaftaran" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#066836] mb-2">
            Informasi Pendaftaran
          </h2>
          <p className="text-slate-600 text-lg">Biaya transparan dan cara daftar yang mudah</p>
          <div className="h-1 w-24 bg-[#066836] mx-auto mt-4"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl shadow-lg p-1">
            <button
              onClick={() => setActiveTab('biaya')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'biaya'
                  ? 'bg-[#066836] text-[#F9D302]'
                  : 'text-[#066836] hover:bg-slate-100'
              }`}
            >
              💰 Biaya Pendidikan
            </button>
            <button
              onClick={() => setActiveTab('cara')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'cara'
                  ? 'bg-[#066836] text-[#F9D302]'
                  : 'text-[#066836] hover:bg-slate-100'
              }`}
            >
              📋 Cara Pendaftaran
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'biaya' && (
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in-up">
              {/* Biaya Table */}
              <div className="space-y-3 mb-6">
                {EDUCATION_COSTS.map((cost, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-[#066836]">{cost.item}</span>
                    <span className="font-bold text-lg text-[#066836]">{cost.amount}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="bg-[#F9D302]/20 border-l-4 border-[#F9D302] p-4 rounded-r-lg mb-6">
                <p className="text-sm text-[#066836]">
                  <span className="font-bold">Catatan:</span> {COST_NOTE}
                </p>
              </div>

              {/* Bonuses/Scholarships */}
              <div>
                <h3 className="text-xl font-bold text-[#066836] mb-4">🎁 Bonus & Beasiswa</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {BONUSES.map((bonus, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#066836] to-[#044824] text-white p-5 rounded-xl"
                    >
                      <h4 className="font-bold text-[#F9D302] mb-2">{bonus.title}</h4>
                      <p className="text-sm text-white/90">{bonus.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cara' && (
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in-up">
              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#066836] mb-4 flex items-center gap-2">
                  <span>📄</span> Persyaratan Calon Santri
                </h3>
                <ul className="space-y-2">
                  {REGISTRATION_REQUIREMENTS.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#F9D302] mt-1">✓</span>
                      <span className="text-[#066836]">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Formulir Section */}
              <div className="mb-8">
                <div className="bg-gradient-to-br from-[#066836] to-[#044824] rounded-2xl p-6 md:p-8 text-center shadow-xl border-4 border-[#F9D302]">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F9D302] rounded-full mb-3">
                      <svg className="w-8 h-8 text-[#066836]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#F9D302] mb-2">
                      📥 Download Formulir Pendaftaran
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-6">
                      Siap untuk mendaftar? Download formulir pendaftaran di bawah ini, isi dengan lengkap, lalu ikuti langkah pendaftaran selanjutnya.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/14JK6Y_t5PjCg2DZ5-f5gAp4PVEI_ACnD/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#F9D302] hover:bg-[#e0c002] text-[#066836] font-extrabold px-8 py-4 rounded-xl text-lg shadow-2xl transition-all transform hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Formulir Sekarang
                  </a>
                  <p className="text-white/70 text-xs mt-4">
                    File akan terbuka di Google Drive
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-xl font-bold text-[#066836] mb-4 flex items-center gap-2">
                  <span>🚀</span> Langkah Pendaftaran
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Hubungi Admin',
                      desc: `Hubungi kami via WhatsApp di ${CONTACT.whatsapp} untuk informasi dan formulir pendaftaran`
                    },
                    {
                      step: '2',
                      title: 'Isi Formulir',
                      desc: 'Lengkapi formulir pendaftaran dan siapkan dokumen persyaratan'
                    },
                    {
                      step: '3',
                      title: 'Transfer Biaya',
                      desc: `Transfer biaya pendaftaran ke rekening ${CONTACT.bankAccount.bank} ${CONTACT.bankAccount.number} a.n ${CONTACT.bankAccount.name}`
                    },
                    {
                      step: '4',
                      title: 'Konfirmasi',
                      desc: `Kirim bukti transfer dan formulir ke WhatsApp ${CONTACT.bankAccount.confirmationPhone}`
                    },
                    {
                      step: '5',
                      title: 'Selesai',
                      desc: 'Tim kami akan mengonfirmasi dan memberikan informasi lebih lanjut'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#066836] text-[#F9D302] rounded-full flex items-center justify-center font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#066836] mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href={`${CONTACT.whatsappLink}?text=Halo,%20saya%20ingin%20mendaftar%20ke%20Pondok%20Pesantren%20Albanna`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#066836] hover:bg-[#044824] text-[#F9D302] font-extrabold px-8 py-4 rounded-xl text-lg shadow-xl transition-all transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Hubungi Admin Sekarang
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BiayaDanPendaftaran;
