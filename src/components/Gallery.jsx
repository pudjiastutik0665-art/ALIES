import React from 'react';
import Reveal from './Reveal';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Suasana Pengerjaan Ujian',
      gradient: 'from-primarydark/40 to-primarymed/40',
      icon: 'fa-image'
    },
    {
      title: 'Penyerahan Trofi Juara Umum',
      gradient: 'from-primarymed/40 to-accentgold/40',
      icon: 'fa-trophy'
    },
    {
      title: 'Antusiasme Peserta Cilik',
      gradient: 'from-accentgold/40 to-primarydark/40',
      icon: 'fa-users'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Dokumentasi
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Dokumentasi ALIES
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={120 + idx * 140} duration={700}>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-gray-100 hover-trigger">
                <div
                  className={`w-full h-full bg-gradient-to-tr ${item.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                >
                  <i className={`fa-solid ${item.icon} text-4xl text-white/80 group-hover:scale-125 transition-transform duration-500`}></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primarydark/90 via-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
