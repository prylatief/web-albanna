import React from 'react';
import { WHY_ALBANNA } from '../constants';

const WhyAlbanna: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Mengapa Memilih Albanna?
        </h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {WHY_ALBANNA.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-5 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/90 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlbanna;
