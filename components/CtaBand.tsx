
import React from 'react';

const CtaBand: React.FC = () => {
  return (
    <section className="py-10 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg text-center md:text-left font-semibold">Siap bergabung? Kuota terbatas per gelombang.</p>
        <a href="#pendaftaran" className="flex-shrink-0 inline-flex items-center gap-2 bg-gold text-dark font-semibold px-5 py-3 rounded-xl shadow-soft hover:brightness-95 transition-all">
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
};

export default CtaBand;
