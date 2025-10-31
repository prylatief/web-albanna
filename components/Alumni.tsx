
import React from 'react';

const Alumni: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Terima kasih! Data alumni terkirim.');
  };

  return (
    <section id="alumni" className="py-16 bg-slate-50 hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Alumni Portal</h2>
            <p className="mt-3 text-slate-700">Terhubung kembali dengan sesama alumni Albanna, berbagi kabar, dan kolaborasi kebaikan.</p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
              <li>Direktori Alumni (angkatan & kampus/pekerjaan)</li>
              <li>Form Update Kabar</li>
              <li>Pengumuman & Kegiatan Reuni</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-2xl border shadow-soft">
            <h3 className="font-semibold text-primary">Join Mailing List Alumni</h3>
            <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
              <input required type="text" placeholder="Nama Lengkap" className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/40" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/40" />
              <input type="text" placeholder="Angkatan / Tahun Lulus" className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/40" />
              <button type="submit" className="mt-2 bg-primary text-white px-5 py-3 rounded-xl shadow-soft hover:opacity-95">Daftar Alumni</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
