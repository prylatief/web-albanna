
import React from 'react';
import { MOTTO, VISION, MISSION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4">Tentang Kami</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-8"></div>

          {/* Motto */}
          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-emerald-700 italic">{MOTTO}</p>
          </div>

          {/* About */}
          <p className="text-center text-slate-600 mb-10 text-lg">
            Pondok Pesantren Tahfidz Al-Qur'an Al Banna berkomitmen melahirkan generasi Qur'ani yang unggul dalam hafalan, berakhlak mulia, dan siap berkarya di masyarakat.
          </p>

          {/* Vision */}
          <div className="mb-8 p-6 rounded-2xl border-2 border-emerald-200 shadow-lg bg-emerald-50">
            <h3 className="font-bold text-xl text-emerald-900 mb-3">Visi</h3>
            <p className="italic text-emerald-800 mb-3">{VISION.quote}</p>
            <p className="text-slate-700 leading-relaxed">{VISION.statement}</p>
          </div>

          {/* Mission */}
          <div className="p-6 rounded-2xl border-2 border-emerald-200 shadow-lg bg-white">
            <h3 className="font-bold text-xl text-emerald-900 mb-4">Misi</h3>
            <ul className="space-y-3">
              {MISSION.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
