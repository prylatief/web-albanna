
import React from 'react';

const Donation: React.FC = () => {
  return (
    <section id="donasi" className="py-16 hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Program Donasi</h2>
            <p className="mt-3 text-slate-700">Dukung beasiswa santri dan peningkatan fasilitas pondok. Setiap kontribusi sangat berarti.</p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
              <li>Beasiswa Santri Dhuafa</li>
              <li>Pengembangan Perpustakaan & Asrama</li>
              <li>Operasional Tahfidz & Kegiatan Dakwah</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-2xl border shadow-soft">
            <h3 className="font-semibold text-primary">Rekening Donasi</h3>
            <p className="mt-3">Bank BRI • 141801000731562 a.n. Pondok Pesantren Tahfidz Al-Quran Albanna</p>
            <a href="https://wa.me/6281285256488?text=Assalamu'alaikum%2C%20saya%20ingin%20konfirmasi%20donasi" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl shadow-soft">Konfirmasi via WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
