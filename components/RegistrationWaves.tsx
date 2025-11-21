import React from 'react';
import { REGISTRATION_WAVES, CONTACT } from '../constants';

/**
 * RegistrationWaves Component
 * Menampilkan gelombang pendaftaran dengan harga promo
 * Bisa digunakan standalone atau dalam section lain
 */
interface RegistrationWavesProps {
  compact?: boolean;
  showCTA?: boolean;
}

const RegistrationWaves: React.FC<RegistrationWavesProps> = ({ compact = false, showCTA = true }) => {
  return (
    <>
      {/* 3 Cards Grid */}
      <div className={compact ? "space-y-4" : "grid md:grid-cols-3 gap-6"}>
        {REGISTRATION_WAVES.map((wave, index) => (
          <div
            key={index}
            className="bg-[#F9D302] rounded-2xl p-6 border-4 border-white shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {wave.badge}
              </div>
            </div>

            {/* Wave Title */}
            <h4 className="text-2xl font-extrabold text-[#066836] mb-3">{wave.wave}</h4>

            {/* Period */}
            <div className="flex items-center gap-2 text-[#066836] mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm">{wave.period}</span>
            </div>

            {/* Discount Description */}
            <div className="bg-[#066836] text-[#F9D302] rounded-lg p-3 mb-4 text-center">
              <p className="font-bold text-sm">✨ {wave.discount}</p>
            </div>

            {/* Price */}
            {wave.originalPrice ? (
              <div className="space-y-2">
                <p className="text-sm text-[#066836]/70">
                  <span className="line-through">Harga Normal: {wave.originalPrice}</span>
                </p>
                <p className="text-3xl font-extrabold text-red-600">
                  {wave.discountedPrice}
                </p>
              </div>
            ) : (
              <p className="text-2xl font-extrabold text-[#066836]">{wave.discountedPrice}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {showCTA && (
        <div className="mt-8 text-center">
          <a
            href={`${CONTACT.whatsappLink}?text=Halo,%20saya%20ingin%20mendaftar%20ke%20Pondok%20Pesantren%20Albanna`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#066836] hover:bg-[#044824] text-[#F9D302] font-extrabold px-10 py-5 rounded-xl text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            DAFTAR SEKARANG VIA WHATSAPP
          </a>
        </div>
      )}
    </>
  );
};

export default RegistrationWaves;
