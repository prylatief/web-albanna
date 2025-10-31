
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeri" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Galeri Kegiatan</h2>
        <p className="mt-2 text-slate-600">Halaqah Al-Qur’an • Tasmi’ & Apel Pagi • Futsal • Pelantikan Santri Ustaz • Tadabbur Alam</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <img 
              key={image.src} 
              loading="lazy" 
              className="h-40 w-full object-cover rounded-xl" 
              src={image.src} 
              alt={image.alt} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
