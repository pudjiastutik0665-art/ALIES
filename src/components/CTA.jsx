import React from 'react';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="py-24 bg-primarydark text-white relative overflow-hidden">
      {/* Parallax Radial Glow & Dot Grid */}
      <Parallax speed={0.18} className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[120%] opacity-15 bg-[radial-gradient(#ffcf71_1.2px,transparent_1.2px)] [background-size:22px_22px]"></div>
      </Parallax>

      <Parallax speed={-0.2} className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-96 h-96 bg-accentgold/15 rounded-full blur-3xl"></div>
      </Parallax>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal direction="scale" delay={100} duration={800}>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">
            Siap Menjadi Juara?
          </h2>
          <p className="text-lg text-softcream max-w-2xl mx-auto mb-10 font-light">
            Tunjukkan kemampuanmu, raih prestasimu, dan jadilah bagian dari ALIES 2027.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-accentgold text-primarydark font-bold rounded-2xl shadow-lg hover:bg-softcream transition-smooth hover-trigger hover:shadow-xl hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-softcream/40 text-white font-bold rounded-2xl hover:bg-white/10 transition-smooth hover-trigger hover:-translate-y-0.5"
            >
              Hubungi Customer Service
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
