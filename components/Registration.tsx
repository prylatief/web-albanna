
import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="pendaftaran" className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Informasi Pendaftaran <span className="text-primary">2026–2027</span></h2>
            <div className="mt-4 space-y-2 text-slate-700">
              <p>Kontak pendaftaran (WhatsApp): <a className="text-primary font-semibold" href="https://wa.me/6281285256488" target="_blank" rel="noopener noreferrer">0812-8525-6488</a></p>
              <p>Email: <a className="text-primary font-semibold" href="mailto:pondoktafhidzalbanna@gmail.com">pondoktafhidzalbanna@gmail.com</a></p>
              <p>Lokasi: <em>Babakan Kp. Cisawu, Kec. Sukajaya, Jonggol, Kab. Bogor</em></p>
            </div>

            <div className="mt-6 p-6 bg-white rounded-2xl border shadow-soft">
              <h3 className="font-semibold text-primary">Gelombang Pendaftaran</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
                <li>Gelombang 1: Nov–Des 2025 <span className="text-emerald-600 font-semibold">(Diskon 25%)</span></li>
                <li>Gelombang 2: Jan–Feb 2026 <span className="text-emerald-600 font-semibold">(Diskon 15%)</span></li>
                <li>Gelombang 3: Maret–Juni 2026 <span className="text-emerald-600 font-semibold">(Diskon sesuai kebijakan)</span></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="p-6 bg-white rounded-2xl border shadow-soft">
              <h3 className="font-semibold text-primary">Biaya Pendidikan</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border">
                  <p className="text-sm">Pendaftaran</p>
                  <p className="text-xl font-bold">Rp200.000</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border">
                  <p className="text-sm">Uang Pangkal</p>
                  <p className="text-xl font-bold">Rp3.500.000</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border sm:col-span-2">
                  <p className="text-sm">SPP Bulanan (asrama + makan)</p>
                  <p className="text-xl font-bold">Rp850.000</p>
                </div>
              </div>
              <a href="https://wa.me/6281285256488" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center text-center w-full sm:w-auto gap-2 bg-primary text-white px-5 py-3 rounded-xl shadow-soft hover:opacity-95 transition">
                Ayo Mondok di Albanna — Pesantrenku Keren!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
