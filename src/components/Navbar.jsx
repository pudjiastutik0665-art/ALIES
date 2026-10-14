import React, { useState, useEffect } from 'react';
import { resourceLinks, images, asset } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Cabang Lomba', href: '#categories' },
    { label: 'Hadiah', href: '#benefits' },
    { label: 'Dokumentasi', href: '#gallery' },
    { label: 'Rekap Nilai', href: '#rekap-nilai' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#contact-person' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-smooth ${
        scrolled
          ? 'bg-backgroundlight/90 backdrop-blur-md border-b border-primarydark/10 shadow-sm'
          : 'bg-transparent border-b border-primarydark/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2 group">
            {images.logo && (
              <img src={asset(images.logo)} alt="Logo ALIES" className="h-10 w-auto object-contain" />
            )}
            <span className="font-heading text-2xl font-extrabold text-primarydark tracking-tight group-hover:text-primarymed transition-colors">
              ALIES 2027
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoalgrey hover:text-accentgold transition-colors hover-trigger"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href={resourceLinks.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primarydark text-white text-sm font-bold rounded-full shadow-md hover:bg-primarymed transition-smooth hover-trigger hover:shadow-lg"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="text-primarydark p-2 hover-trigger focus:outline-none"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl transition-transform`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl absolute w-full transition-smooth">
          <div className="px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-charcoalgrey hover:text-primarymed py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resourceLinks.registration}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 mt-4 bg-primarydark text-white font-bold rounded-xl shadow-md hover:bg-primarymed transition-smooth"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
