
import React from 'react';
import { PONDOK_IMAGES } from '../constants';

const GalleryPondok: React.FC = () => {
  return (
    <section id="galeri-pondok" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Suasana Pondok</h2>
        <p className="mt-2 text-slate-600">Fasilitas dan lingkungan Pondok Pesantren Al-Banna</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PONDOK_IMAGES.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              loading="lazy"
              className="h-48 w-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPondok;
