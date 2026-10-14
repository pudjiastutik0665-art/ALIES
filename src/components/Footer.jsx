import React from 'react';
import SocialLinks from './SocialLinks';
import { images, asset } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-primarydark text-white pt-16 pb-12 border-t border-primarymed/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {images.logo && (
                <img src={asset(images.logo)} alt="Logo ALIES" className="h-10 w-auto object-contain" />
              )}
              <h3 className="font-heading text-xl font-extrabold">ALIES 2027</h3>
            </div>
            <p className="text-sm text-softcream/80 leading-relaxed mb-4 max-w-sm">
              Al-Amin Intelligence of Elementary School. Ajang olimpiade pelajar tingkat SD/MI sederajat oleh OSIS MTs–MA Pesantren Al-Amin Mojokerto.
            </p>
            <SocialLinks />
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
                <a href="#rekap-nilai" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  Rekap Nilai
                </a>
              </li>
              <li>
                <a href="#faq" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact-person" className="text-softcream/80 hover:text-white transition-colors hover-trigger">
                  Contact Person
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
