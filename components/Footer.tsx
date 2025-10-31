
import React from 'react';

const InstagramIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
    <path d="M16.5 7.5h.01" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a9.5 9.5 0 0 0-8.06 14.71L3 22l5.48-.94A9.5 9.5 0 1 0 12 2Z" />
    <path d="M8.5 10.5c.3 1.7 2.3 3.7 4 4 .3.1.7 0 1-.2l1.1-.6c.3-.2.5-.6.3-1l-.6-1.3c-.2-.4-.7-.6-1.1-.4l-.7.3a5.7 5.7 0 0 1-2-2l.3-.7c.2-.4 0-.9-.4-1.1l-1.3-.6c-.4-.2-.8 0-1 .3l-.6 1.1c-.1.3-.2.7 0 1Z" />
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 6h18v12H3z" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Al Banna</h3>
                <p className="text-sm text-slate-600">Tahfidz Al-Qur'an</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
              Pondok Pesantren Tahfidz Al-Qur'an Al Banna berkomitmen melahirkan generasi Qur'ani yang unggul dalam hafalan, berakhlak mulia, dan siap berkarya di masyarakat.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/"
                aria-label="Instagram"
                className="w-10 h-10 bg-slate-200 hover:bg-primary rounded-xl flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/6281285256488"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-slate-200 hover:bg-primary rounded-xl flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="mailto:pondoktafhidzalbanna@gmail.com"
                aria-label="Email"
                className="w-10 h-10 bg-slate-200 hover:bg-primary rounded-xl flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Menu Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tentang" className="text-slate-600 hover:text-primary transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#program" className="text-slate-600 hover:text-primary transition-colors">Program</a>
              </li>
              <li>
                <a href="#galeri" className="text-slate-600 hover:text-primary transition-colors">Galeri</a>
              </li>
              <li>
                <a href="#testimoni" className="text-slate-600 hover:text-primary transition-colors">Testimoni</a>
              </li>
              <li>
                <a href="#pendaftaran" className="text-slate-600 hover:text-primary transition-colors">Pendaftaran</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Kontak</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">
                  Babakan Kp. Cisawu, Kec. Sukajaya, Jonggol, Kab. Bogor
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a9.5 9.5 0 0 0-8.06 14.71L3 22l5.48-.94A9.5 9.5 0 1 0 12 2Z" />
                </svg>
                <a href="https://wa.me/6281285256488" className="text-sm hover:text-primary transition-colors">
                  0812-8525-6488
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:pondoktafhidzalbanna@gmail.com" className="text-sm hover:text-primary transition-colors break-all">
                  pondoktafhidzalbanna@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t-2 border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              © 2025 <span className="font-semibold text-primary">Pondok Pesantren Tahfidz Al-Qur'an Al Banna</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>for better education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
