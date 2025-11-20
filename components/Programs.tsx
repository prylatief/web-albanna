
import React from 'react';
import { PROGRAMS, KEUNGGULAN } from '../constants';

const ProgramCard: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => (
  <div className="p-6 bg-white rounded-2xl border shadow-soft animate-fade-in-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${delay}ms` }}>
    <h3 className="font-semibold text-emerald-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </div>
);

const Programs: React.FC = () => {
  return (
    <section id="program" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programs Section */}
        <div className="mb-16">
          <div className="md:flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Program Utama</h2>
              <div className="h-1 w-20 bg-emerald-600 mt-2"></div>
            </div>
            <a href="#pendaftaran" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">
              Daftar Sekarang →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => (
              <ProgramCard key={program.title} title={program.title} description={program.description} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Keunggulan Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Keunggulan Albanna</h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto mt-2"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEUNGGULAN.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-emerald-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
