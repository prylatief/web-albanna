
import React, { useState } from 'react';
import { BIAYA_POKOK, SERAGAM_PUTRA, SERAGAM_PUTRI, KITAB_BUKU, TOTAL_BIAYA, ACADEMIC_YEAR } from '../constants';

/**
 * EducationCosts Component
 * Menampilkan rincian biaya pendidikan lengkap dengan tabel-tabel detail
 */
const EducationCosts: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<'putra' | 'putri'>('putra');

  // Hitung total per kategori
  const totalBiayaPokok = BIAYA_POKOK.reduce((sum, item) => {
    const amount = parseInt(item.amount.replace(/\D/g, ''));
    return sum + amount;
  }, 0);

  const totalSeragamPutra = SERAGAM_PUTRA.reduce((sum, item) => {
    const amount = parseInt(item.amount.replace(/\D/g, ''));
    return sum + amount;
  }, 0);

  const totalSeragamPutri = SERAGAM_PUTRI.reduce((sum, item) => {
    const amount = parseInt(item.amount.replace(/\D/g, ''));
    return sum + amount;
  }, 0);

  const totalKitab = KITAB_BUKU.reduce((sum, item) => {
    const amount = parseInt(item.amount.replace(/\D/g, ''));
    return sum + amount;
  }, 0);

  const formatRupiah = (amount: number) => {
    return `Rp${amount.toLocaleString('id-ID')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-albanna-green">
          Daftar Biaya Pokok Santri Baru
        </h3>
        <p className="text-sm text-albanna-green/70">
          Tahun Ajaran {ACADEMIC_YEAR}
        </p>
      </div>

      {/* Toggle Gender */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSelectedGender('putra')}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
            selectedGender === 'putra'
              ? 'bg-albanna-green text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Santri Putra
        </button>
        <button
          onClick={() => setSelectedGender('putri')}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
            selectedGender === 'putri'
              ? 'bg-albanna-green text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Santri Putri
        </button>
      </div>

      {/* Biaya Pokok Table */}
      <div className="bg-white rounded-xl shadow-sm border border-albanna-green/20 overflow-hidden">
        <div className="bg-gradient-to-r from-albanna-green to-emerald-700 px-4 py-3">
          <h4 className="font-bold text-white text-sm sm:text-base">
            1. Biaya Pokok
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-albanna-green/5">
              <tr>
                <th className="text-left px-4 py-2 text-xs font-semibold text-albanna-green">No.</th>
                <th className="text-left px-4 py-2 text-xs font-semibold text-albanna-green">Biaya Pokok</th>
                <th className="text-right px-4 py-2 text-xs font-semibold text-albanna-green">Harga</th>
              </tr>
            </thead>
            <tbody>
              {BIAYA_POKOK.map((item, index) => (
                <tr key={index} className="border-t border-albanna-green/10 hover:bg-albanna-green/5 transition">
                  <td className="px-4 py-2.5 text-xs text-gray-600">{index + 1}</td>
                  <td className="px-4 py-2.5 text-xs sm:text-sm text-gray-800">{item.item}</td>
                  <td className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-right text-albanna-green">
                    {item.amount}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-albanna-green/30 bg-albanna-green/10">
                <td colSpan={2} className="px-4 py-3 text-sm font-bold text-albanna-green">
                  Total
                </td>
                <td className="px-4 py-3 text-sm sm:text-base font-bold text-right text-albanna-green">
                  {formatRupiah(totalBiayaPokok)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Seragam Table - Conditional based on gender */}
      <div className="bg-white rounded-xl shadow-sm border border-albanna-green/20 overflow-hidden">
        <div className="bg-gradient-to-r from-albanna-green to-emerald-700 px-4 py-3">
          <h4 className="font-bold text-white text-sm sm:text-base">
            2. Kain Bahan & Seragam {selectedGender === 'putra' ? 'Putra' : 'Putri'}
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-albanna-green/5">
              <tr>
                <th className="text-left px-4 py-2 text-xs font-semibold text-albanna-green">No.</th>
                <th className="text-left px-4 py-2 text-xs font-semibold text-albanna-green">
                  Kain Bahan & Seragam {selectedGender === 'putra' ? 'Putra' : 'Putri'}
                </th>
                <th className="text-right px-4 py-2 text-xs font-semibold text-albanna-green">Harga</th>
              </tr>
            </thead>
            <tbody>
              {(selectedGender === 'putra' ? SERAGAM_PUTRA : SERAGAM_PUTRI).map((item, index) => (
                <tr key={index} className="border-t border-albanna-green/10 hover:bg-albanna-green/5 transition">
                  <td className="px-4 py-2.5 text-xs text-gray-600">{index + 1}</td>
                  <td className="px-4 py-2.5 text-xs sm:text-sm text-gray-800">{item.item}</td>
                  <td className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-right text-albanna-green">
                    {item.amount}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-albanna-green/30 bg-albanna-green/10">
                <td colSpan={2} className="px-4 py-3 text-sm font-bold text-albanna-green">
                  Total
                </td>
                <td className="px-4 py-3 text-sm sm:text-base font-bold text-right text-albanna-green">
                  {formatRupiah(selectedGender === 'putra' ? totalSeragamPutra : totalSeragamPutri)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Kitab dan Buku Table */}
      <div className="bg-white rounded-xl shadow-sm border border-albanna-green/20 overflow-hidden">
        <div className="bg-gradient-to-r from-albanna-green to-emerald-700 px-4 py-3">
          <h4 className="font-bold text-white text-sm sm:text-base">
            3. Kitab dan Buku Pelajaran
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-albanna-green/5">
              <tr>
                <th className="text-left px-4 py-2 text-xs font-semibold text-albanna-green">No.</th>
                <th className="text-left px-4 py-2 text-xs font-semibold text-albanna-green">Kitab dan Buku Pelajaran</th>
                <th className="text-right px-4 py-2 text-xs font-semibold text-albanna-green">Harga</th>
              </tr>
            </thead>
            <tbody>
              {KITAB_BUKU.map((item, index) => (
                <tr key={index} className="border-t border-albanna-green/10 hover:bg-albanna-green/5 transition">
                  <td className="px-4 py-2.5 text-xs text-gray-600">{index + 1}</td>
                  <td className="px-4 py-2.5 text-xs sm:text-sm text-gray-800">{item.item}</td>
                  <td className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-right text-albanna-green">
                    {item.amount}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-albanna-green/30 bg-albanna-green/10">
                <td colSpan={2} className="px-4 py-3 text-sm font-bold text-albanna-green">
                  Total
                </td>
                <td className="px-4 py-3 text-sm sm:text-base font-bold text-right text-albanna-green">
                  {formatRupiah(totalKitab)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Total Keseluruhan */}
      <div className="bg-gradient-to-br from-emerald-600 to-albanna-green rounded-xl shadow-lg p-6 text-white">
        <div className="text-center space-y-3">
          <h4 className="font-bold text-base sm:text-lg">
            Total Keseluruhan
          </h4>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm opacity-90 mb-2">
              {selectedGender === 'putra' ? 'Santri Putra' : 'Santri Putri'}
            </p>
            <p className="text-3xl sm:text-4xl font-bold">
              {selectedGender === 'putra' ? TOTAL_BIAYA.putra : TOTAL_BIAYA.putri}
            </p>
          </div>
        </div>
      </div>

      {/* Bonus/Kabar Gembira */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-4 mt-4 border-2 border-emerald-600">
        <h4 className="font-bold text-sm text-emerald-900 mb-2 flex items-center gap-2">
          <span>🎉</span>
          <span>Kabar Gembira!</span>
        </h4>
        <ul className="space-y-2 text-xs text-emerald-800">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">✓</span>
            <span><strong>Beasiswa Hafidz:</strong> Beasiswa penuh bagi yang hafal 15 juz++</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">✓</span>
            <span><strong>Diskon Anak Yatim:</strong> Diskon 50% (S&K berlaku)</span>
          </li>
        </ul>
      </div>

      {/* Note */}
      <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
        <p className="text-xs text-amber-900 leading-relaxed">
          <strong>Catatan:</strong> Biaya dapat berubah sewaktu-waktu. Untuk informasi lebih lanjut,
          silakan hubungi kami melalui WhatsApp atau kunjungi langsung pondok pesantren.
        </p>
      </div>
    </div>
  );
};

export default EducationCosts;
