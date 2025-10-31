
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
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-semibold">Pondok Pesantren Tahfidz Al-Qur’an Al Banna</p>
            <p className="text-sm text-slate-600">Hak cipta © 2025 Albanna Boarding School</p>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="https://instagram.com/" aria-label="Instagram" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/6281285256488" aria-label="WhatsApp" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </a>
            <a href="mailto:pondoktafhidzalbanna@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
