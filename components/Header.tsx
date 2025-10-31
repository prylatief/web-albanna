
import React from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-primary/10"></span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2a9 9 0 1 0 7.743 13.5A8 8 0 1 1 12 2Z" fill="currentColor" />
            </svg>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="absolute -right-1 text-gold">
              <path d="M4 7h16M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
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
        <a href="#pendaftaran" className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl shadow-soft hover:opacity-95 transition">
          <span>Daftar Sekarang</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
