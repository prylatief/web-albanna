
import React, { useState } from 'react';
import { KEGIATAN_IMAGES } from '../constants';
import ImageModal from './ImageModal';

interface GalleryKegiatanProps {
  compact?: boolean;
}

const GalleryKegiatan: React.FC<GalleryKegiatanProps> = ({ compact = false }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % KEGIATAN_IMAGES.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + KEGIATAN_IMAGES.length) % KEGIATAN_IMAGES.length
      );
    }
  };

  // Compact mode: tampilkan hanya 6 gambar pertama dalam grid 3x2
  const imagesToShow = compact ? KEGIATAN_IMAGES.slice(0, 6) : KEGIATAN_IMAGES;

  if (compact) {
    return (
      <>
        <div className="grid grid-cols-3 gap-2">
          {imagesToShow.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              loading="lazy"
              className="h-24 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        {selectedImageIndex !== null && (
          <ImageModal
            isOpen={selectedImageIndex !== null}
            imageSrc={KEGIATAN_IMAGES[selectedImageIndex].src}
            imageAlt={KEGIATAN_IMAGES[selectedImageIndex].alt}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </>
    );
  }

  return (
    <section id="galeri-kegiatan" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Galeri Kegiatan Santri</h2>
        <p className="mt-2 text-slate-600">Dokumentasi kegiatan sehari-hari santri di Pondok Pesantren Al-Banna</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {KEGIATAN_IMAGES.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              loading="lazy"
              className="h-40 w-full object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          imageSrc={KEGIATAN_IMAGES[selectedImageIndex].src}
          imageAlt={KEGIATAN_IMAGES[selectedImageIndex].alt}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </section>
  );
};

export default GalleryKegiatan;
