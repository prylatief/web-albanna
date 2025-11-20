
import React from 'react';
import { CONTACT } from '../constants';

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

const FacebookIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Pondok Pesantren Tahfidz Al-Qur'an Albanna</h3>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Mewujudkan pesantren unggulan berbasis pelayanan paripurna untuk membentuk generasi Islami berakhlak mulia, kreatif, cerdas, dan berdaya saing global.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak & Lokasi</h3>
            <div className="space-y-2 text-sm text-emerald-200">
              <p>
                <strong className="text-white">WhatsApp:</strong><br />
                <a href={CONTACT.whatsappLink} className="hover:text-yellow-400 transition-colors">{CONTACT.whatsapp}</a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-yellow-400 transition-colors">{CONTACT.email}</a>
              </p>
              <p>
                <strong className="text-white">Instagram:</strong><br />
                <a href={CONTACT.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">@{CONTACT.instagram}</a>
              </p>
              <p>
                <strong className="text-white">Facebook:</strong><br />
                <a href={CONTACT.facebookLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">{CONTACT.facebook}</a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">Alamat</h3>
            <p className="text-emerald-200 text-sm leading-relaxed">
              {CONTACT.location}
            </p>
            <div className="mt-4 flex gap-4">
              <a href={CONTACT.instagramLink} aria-label="Instagram" className="hover:text-yellow-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href={CONTACT.facebookLink} aria-label="Facebook" className="hover:text-yellow-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href={CONTACT.whatsappLink} aria-label="WhatsApp" className="hover:text-yellow-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-yellow-400 transition-colors">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-800 pt-6 text-center">
          <p className="text-sm text-emerald-200">
            Hak cipta © {new Date().getFullYear()} Pondok Pesantren Tahfidz Al-Qur'an Albanna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
