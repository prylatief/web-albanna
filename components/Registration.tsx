
import React from 'react';
import { REGISTRATION_REQUIREMENTS, REGISTRATION_WAVES, EDUCATION_COSTS, COST_NOTE, BONUSES, CONTACT } from '../constants';

const Registration: React.FC = () => {
  return (
    <section id="pendaftaran" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">Informasi Pendaftaran</h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Left Column - Requirements & Waves */}
          <div className="space-y-8">
            {/* Syarat Pendaftaran */}
            <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-lg p-6">
              <h3 className="font-bold text-xl text-emerald-900 mb-4">Syarat Pendaftaran</h3>
              <ul className="space-y-2">
                {REGISTRATION_REQUIREMENTS.map((req, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cara Daftar */}
            <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-lg p-6">
              <h3 className="font-bold text-xl text-emerald-900 mb-4">Cara Daftar</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                  <span className="text-slate-700 text-sm">Bayar biaya pendaftaran ke rekening resmi ponpes</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                  <div className="text-slate-700 text-sm">
                    <p className="font-semibold mb-1">Transfer ke:</p>
                    <p className="bg-emerald-50 p-3 rounded-lg">
                      <strong>{CONTACT.bankAccount.bank}:</strong> {CONTACT.bankAccount.number}<br />
                      <strong>a/n</strong> {CONTACT.bankAccount.name}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                  <span className="text-slate-700 text-sm">
                    Konfirmasi pembayaran via WhatsApp: <a href={CONTACT.whatsappLink} className="text-emerald-700 font-semibold hover:underline">{CONTACT.whatsapp}</a>
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column - Waves & Costs */}
          <div className="space-y-8">
            {/* Gelombang Pendaftaran */}
            <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-lg p-6">
              <h3 className="font-bold text-xl text-emerald-900 mb-4">Gelombang Pendaftaran & Promo</h3>
              <div className="space-y-4">
                {REGISTRATION_WAVES.map((wave, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-4 py-2 bg-emerald-50 rounded">
                    <h4 className="font-bold text-emerald-900">{wave.wave}</h4>
                    <p className="text-sm text-slate-600">{wave.period}</p>
                    <p className="text-sm font-semibold text-emerald-700">{wave.discount}</p>
                    <p className="text-lg font-bold text-emerald-900">{wave.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biaya Pendidikan */}
            <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-lg p-6">
              <h3 className="font-bold text-xl text-emerald-900 mb-4">Biaya Pendidikan</h3>
              <div className="space-y-3 mb-4">
                {EDUCATION_COSTS.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-slate-700">{cost.item}</span>
                    <span className="font-bold text-emerald-900">{cost.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 italic">{COST_NOTE}</p>
            </div>
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border-2 border-yellow-300 shadow-lg p-8 mb-10">
          <h3 className="font-bold text-2xl text-center text-emerald-900 mb-6">🎉 Bonus / Kabar Gembira 🎉</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {BONUSES.map((bonus, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg text-emerald-900 mb-2">{bonus.title}</h4>
                <p className="text-slate-700">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition-all duration-300 text-lg font-bold hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Daftar Sekarang via WhatsApp
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-center space-y-2 text-slate-600">
          <p>WhatsApp: <a href={CONTACT.whatsappLink} className="text-emerald-700 font-semibold hover:underline">{CONTACT.whatsapp}</a></p>
          <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-emerald-700 font-semibold hover:underline">{CONTACT.email}</a></p>
          <p>Lokasi: <em>{CONTACT.location}</em></p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
