
import React from 'react';
import { EXTRACURRICULARS } from '../constants';

const Extracurriculars: React.FC = () => {
  return (
    <section id="ekskul" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Ekstrakurikuler</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRACURRICULARS.map((item) => (
            <div key={item.name} className="p-5 rounded-2xl border bg-white shadow-soft">{item.emoji} {item.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
