
import React from 'react';
import { REGISTRATION_WAVES } from '../constants';

/**
 * RegistrationWaves Component
 * Menampilkan gelombang pendaftaran dengan harga promo (harga coret + harga merah)
 */
const RegistrationWaves: React.FC = () => {
  // Harga asli infaq pembangunan sebelum diskon
  const originalPrice = 2000000;

  const calculateDiscountedPrice = (wave: typeof REGISTRATION_WAVES[0]) => {
    if (wave.wave === 'Gelombang I') {
      // Diskon 25%
      return originalPrice * 0.75;
    } else if (wave.wave === 'Gelombang II') {
      // Diskon 15%
      return originalPrice * 0.85;
    }
    return null;
  };

  const formatPrice = (price: number) => {
    return `Rp${price.toLocaleString('id-ID')}`;
  };

  return (
    <div className="space-y-4">
      {REGISTRATION_WAVES.map((wave, index) => {
        const discountedPrice = calculateDiscountedPrice(wave);

        return (
          <div
            key={index}
            className="bg-gradient-to-br from-albanna-yellow/20 to-yellow-50 border-2 border-albanna-green/30 rounded-xl p-4 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-base text-albanna-green">{wave.wave}</h4>
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">PROMO</span>
            </div>

            <p className="text-xs text-slate-700 mb-2">📅 {wave.period}</p>
            <p className="text-sm font-semibold text-emerald-700 mb-3">✨ {wave.discount}</p>

            {discountedPrice ? (
              <div className="space-y-1">
                <p className="text-xs text-slate-600">
                  <span className="line-through">Harga Normal: {formatPrice(originalPrice)}</span>
                </p>
                <p className="text-lg font-extrabold text-red-600">
                  {formatPrice(discountedPrice)}
                </p>
              </div>
            ) : (
              <p className="text-base font-bold text-albanna-green">{wave.price}</p>
            )}
          </div>
        );
      })}

      {/* CTA Button */}
      <a
        href="https://wa.me/628128525648?text=Halo,%20saya%20ingin%20mendaftar%20ke%20Pondok%20Pesantren%20Albanna"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-center transition-all mt-4 shadow-lg hover:shadow-xl"
      >
        <span className="inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Daftar via WhatsApp
        </span>
      </a>
    </div>
  );
};

export default RegistrationWaves;
