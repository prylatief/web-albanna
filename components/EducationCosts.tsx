
import React from 'react';
import { EDUCATION_COSTS, COST_NOTE } from '../constants';

/**
 * EducationCosts Component
 * Menampilkan rincian biaya pendidikan dengan styling card kuning
 */
const EducationCosts: React.FC = () => {
  return (
    <div className="space-y-3">
      {/* Rincian Biaya */}
      <div className="space-y-2">
        {EDUCATION_COSTS.map((cost, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-albanna-green/20 last:border-0"
          >
            <span className="text-xs sm:text-sm text-albanna-green font-medium">
              {cost.item}
            </span>
            <span className="text-sm sm:text-base font-bold text-albanna-green">
              {cost.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="bg-albanna-green/10 rounded-lg p-3 mt-4">
        <p className="text-xs text-albanna-green/80 italic leading-relaxed">
          {COST_NOTE}
        </p>
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
    </div>
  );
};

export default EducationCosts;
