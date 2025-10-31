
import React from 'react';
import { PROGRAMS } from '../constants';

const ProgramCard: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => (
  <div className="p-6 bg-white rounded-2xl border shadow-soft animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
    <h3 className="font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </div>
);

const Programs: React.FC = () => {
  return (
    <section id="program" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Program Unggulan</h2>
          <a href="#pendaftaran" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold">Daftar Sekarang →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.title} title={program.title} description={program.description} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
