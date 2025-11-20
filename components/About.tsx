
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold">Tentang Kami</h2>
          <p className="mt-4 text-slate-600">Pondok Pesantren Tahfidz Al-Qur'an Al Banna berkomitmen melahirkan generasi Qur'ani yang unggul dalam hafalan, berakhlak mulia, dan siap berkarya di masyarakat.</p>
          <div className="mt-6 p-6 rounded-2xl border shadow-soft bg-white">
            <h3 className="font-semibold text-primary">Visi</h3>
            <p className="mt-2 italic">"Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya."</p>
            <h3 className="mt-6 font-semibold text-primary">Misi</h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
              <li>Mengimani, memahami, dan mengamalkan Al-Qur'an</li>
              <li>Menyelenggarakan pendidikan berorientasi karakter</li>
              <li>Mencetak generasi Qur'ani yang unggul dan inovatif</li>
              <li>Menyediakan pendidikan Islami yang terjangkau</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
