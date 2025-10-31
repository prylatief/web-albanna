
import React from 'react';
import { PROGRAMS } from '../constants';

// Icon mappings for each program
const programIcons = [
  // Tahfidz 30 Juz
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  // Kajian Al-Qur'an dan Hadis
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // Kajian Kehidupan Islami
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Bahasa Arab & Inggris
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>,
  // Seminar Keagamaan & Sains
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  // Karya Tulis & Lomba Penelitian
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
];

const ProgramCard: React.FC<{ title: string; description: string; delay: number; icon: React.ReactNode; index: number }> = ({ title, description, delay, icon, index }) => {
  const colors = [
    { bg: 'bg-primary/10', border: 'border-primary/20', icon: 'text-primary', hover: 'hover:border-primary/40' },
    { bg: 'bg-gold/10', border: 'border-gold/20', icon: 'text-gold', hover: 'hover:border-gold/40' },
    { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: 'text-emerald-600', hover: 'hover:border-emerald-500/40' },
    { bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'text-blue-600', hover: 'hover:border-blue-500/40' },
    { bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: 'text-purple-600', hover: 'hover:border-purple-500/40' },
    { bg: 'bg-rose-500/10', border: 'border-rose-500/20', icon: 'text-rose-600', hover: 'hover:border-rose-500/40' }
  ];
  const color = colors[index % colors.length];

  return (
    <div className={`group relative p-6 bg-white rounded-2xl border-2 ${color.border} ${color.hover} shadow-soft hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden`} style={{ animationDelay: `${delay}ms` }}>
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${color.bg} rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

      <div className="relative">
        {/* Icon */}
        <div className={`w-14 h-14 ${color.bg} rounded-xl flex items-center justify-center ${color.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  return (
    <section id="program" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">Program Unggulan</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Pembelajaran Yang <span className="text-primary">Komprehensif</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Program pendidikan terpadu yang menggabungkan hafalan Qur'an dengan pengembangan ilmu pengetahuan dan karakter Islami
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              delay={index * 100}
              icon={programIcons[index]}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pendaftaran"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            <span>Daftar Sekarang</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
