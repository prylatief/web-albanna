
import React from 'react';
import { EXTRACURRICULARS } from '../constants';

const Extracurriculars: React.FC = () => {
  return (
    <section id="ekskul" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold">Ekstrakurikuler</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Kembangkan <span className="text-gold">Bakat & Minat</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berbagai kegiatan ekstrakurikuler untuk mengembangkan potensi santri secara holistik
          </p>
        </div>

        {/* Extracurriculars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {EXTRACURRICULARS.map((item, index) => (
            <div
              key={item.name}
              className="group relative p-6 rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-soft hover:shadow-xl hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Emoji */}
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {item.emoji}
              </div>
              {/* Name */}
              <p className="font-semibold text-slate-800 text-center leading-tight">
                {item.name}
              </p>
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 max-w-2xl">
            <p className="text-slate-700">
              <span className="font-semibold text-primary">💡 Semua kegiatan</span> dirancang untuk mengembangkan karakter, jiwa kepemimpinan, dan keseimbangan antara spiritual dan fisik santri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
