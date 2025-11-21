
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

  // State untuk show more
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6;
  const displayedImages = showAll ? KEGIATAN_IMAGES : KEGIATAN_IMAGES.slice(0, initialCount);

  return (
    <section id="galeri" className="py-16 bg-[#066836]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            📸 Galeri Kegiatan
          </h2>
          <p className="text-white/90 text-lg">Dokumentasi kegiatan sehari-hari santri</p>
          <div className="h-1 w-24 bg-[#F9D302] mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative overflow-hidden rounded-2xl border-4 border-[#F9D302]/30 hover:border-[#F9D302] transition-all duration-300 cursor-pointer shadow-xl"
              onClick={() => handleImageClick(index)}
            >
              <img
                loading="lazy"
                className="h-48 md:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && KEGIATAN_IMAGES.length > initialCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-[#F9D302] text-[#066836] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#e8c602] transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4 4m0 0l4-4m-4 4V4" />
              </svg>
              Lihat Semua ({KEGIATAN_IMAGES.length} Foto)
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 bg-white/10 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Tampilkan Lebih Sedikit
            </button>
          </div>
        )}
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
