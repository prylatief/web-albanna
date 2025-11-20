import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/images/logo-1.png" alt="Logo Al Banna" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-extrabold leading-tight">Al Banna</p>
              <p className="text-xs text-slate-500 -mt-1">Tahfidz Al-Qur'an</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
             <a href="#pendaftaran" className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl shadow-soft hover:opacity-95 transition">
                <span>Daftar Sekarang</span>
            </a>
            <button
                onClick={toggleMenu}
                className="md:hidden ml-4 p-2 rounded-md text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
                <span className="sr-only">Buka menu utama</span>
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          
        </div>
      </header>

      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col pt-16">
            <nav className="flex flex-col items-center justify-center flex-grow gap-8 text-lg">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
             <div className="p-4 sm:p-6">
                <a 
                    href="#pendaftaran" 
                    onClick={toggleMenu}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl shadow-soft hover:opacity-95 transition"
                >
                    <span>Daftar Sekarang</span>
                </a>
             </div>
        </div>
      </div>
    </>
  );
};

export default Header;
