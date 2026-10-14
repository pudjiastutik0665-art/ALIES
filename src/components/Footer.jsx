import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primarydark text-white pt-16 pb-12 border-t border-primarymed/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-heading text-xl font-extrabold mb-3">ALIES 2027</h3>
            <p className="text-sm text-softcream/80 leading-relaxed mb-4 max-w-sm">
              Al-Amin Intelligence of Elementary School. Ajang olimpiade pelajar tingkat SD/MI sederajat oleh OSIS MTs–MA Pesantren Al-Amin Mojokerto.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accentgold hover:text-primarydark transition-smooth hover-trigger"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accentgold hover:text-primarydark transition-smooth hover-trigger"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-softcream uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  About
                </a>
              </li>
              <li>
                <a href="#categories" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  Cabang Lomba
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  Hadiah
                </a>
              </li>
              <li>
                <a href="#faq" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-softcream uppercase tracking-wider mb-4">
              Lokasi Penyelenggara
            </h4>
            <p className="text-sm text-softcream/80 leading-relaxed">
              Pesantren Al-Amin Mojokerto<br />
              Jawa Timur, Indonesia
            </p>
          </div>
        </div>

        <div className="border-t border-primarymed/30 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-softcream/70 gap-4">
          <p>&copy; {new Date().getFullYear()} ALIES. All rights reserved.</p>
          <p>Diselenggarakan oleh OSIS MTs - MA Pesantren Al-Amin</p>
        </div>
      </div>
    </footer>
  );
}
