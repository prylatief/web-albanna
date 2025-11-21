
import React from 'react';
import { REGISTRATION_REQUIREMENTS } from '../constants';

/**
 * RegistrationTechnical Component
 * Menampilkan petunjuk teknis pendaftaran (syarat & cara daftar)
 */
const RegistrationTechnical: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Syarat Pendaftaran */}
      <div>
        <h3 className="font-bold text-base text-albanna-green mb-3">Syarat Pendaftaran:</h3>
        <ul className="space-y-1.5">
          {REGISTRATION_REQUIREMENTS.map((req, index) => (
            <li key={index} className="flex items-start text-xs sm:text-sm">
              <span className="text-albanna-green mr-2 font-bold">•</span>
              <span className="text-albanna-green/90">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cara Daftar */}
      <div className="mt-4 pt-4 border-t-2 border-albanna-green/20">
        <h3 className="font-bold text-base text-albanna-green mb-3">Cara Daftar:</h3>
        <ol className="space-y-2">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-albanna-green text-albanna-yellow rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
            <span className="text-xs sm:text-sm text-albanna-green/90">Isi formulir pendaftaran (manual atau online)</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-albanna-green text-albanna-yellow rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
            <span className="text-xs sm:text-sm text-albanna-green/90">Bayar biaya pendaftaran & lengkapi berkas</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-albanna-green text-albanna-yellow rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
            <span className="text-xs sm:text-sm text-albanna-green/90">Konfirmasi via WhatsApp: 0812-8525-6488</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-albanna-green text-albanna-yellow rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
            <span className="text-xs sm:text-sm text-albanna-green/90">Mengikuti tes masuk & wawancara</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RegistrationTechnical;
