import React from 'react';
import { categoriesData } from '../data/categories';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { resourceLinks } from '../data/siteData';

// Posisi kartu pada bento grid (layar besar). Ubah di sini jika ingin menata ulang.
const BENTO_FEATURED = 'science';
const BENTO_SPAN = {
  science: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
  arabic: 'md:col-span-2 lg:col-span-2',
};

// Kotak info di bawah grid. Isi sesuai fakta dari website resmi.
const INFO_TILES = [
  { big: '2007/2008', text: 'Agenda tahunan sejak masa kepengurusan OSIS 2007/2008.' },
  { big: 'SD/MI', text: 'Olimpiade pelajar tingkat nasional untuk SD/MI sederajat.' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-primarydark mb-4">
                Cabang Lomba
              </h2>
              <p className="text-lg text-charcoalgrey/60">
                Pilih bidang keahlian dan daftarkan dirimu segera.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={resourceLinks.pamphlet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-backgroundlight border border-primarymed/20 text-primarydark font-bold hover:bg-primarymed hover:text-white transition-smooth hover-trigger shadow-sm"
              >
                Pamflet <i className="fa-solid fa-image"></i>
              </a>
              <a
                href={resourceLinks.guidebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primarydark text-white font-bold hover:bg-primarymed transition-smooth hover-trigger shadow-sm"
              >
                Guidance Book <i className="fa-solid fa-book-open"></i>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bento grid: Science sebagai kartu utama, sisanya bervariasi ukuran */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(13rem,auto)] gap-5">
          {categoriesData.map((cat, idx) => {
            const featured = cat.id === BENTO_FEATURED;
            const span = BENTO_SPAN[cat.id] || '';
            return (
              <Reveal
                key={cat.id}
                className={`${span} h-full`}
                direction={featured ? 'scale' : 'up'}
                delay={120 + idx * 120}
                duration={700}
              >
                <TiltCard maxTilt={featured ? 5 : 8} glare={true} className="h-full rounded-[32px]">
                  <div
                    className={`h-full bg-backgroundlight rounded-[32px] border border-primarymed/10 hover:border-primarymed/30 transition-smooth group hover-trigger relative overflow-hidden flex flex-col justify-between hover:shadow-lg ${
                      featured ? 'p-8 sm:p-10 min-h-[22rem]' : 'p-7'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primarymed/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                    {featured && (
                      <i
                        className={`fa-solid ${cat.icon} absolute -bottom-6 -right-4 text-[10rem] text-primarymed/[0.07] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none`}
                        aria-hidden="true"
                      ></i>
                    )}

                    <div className="relative z-10">
                      <div
                        className={`rounded-2xl bg-white shadow-sm flex items-center justify-center text-primarydark group-hover:bg-primarydark group-hover:text-white transition-smooth mb-6 ${
                          featured ? 'w-20 h-20' : 'w-14 h-14'
                        }`}
                      >
                        <i className={`fa-solid ${cat.icon} ${featured ? 'text-3xl' : 'text-xl'}`}></i>
                      </div>
                      <span className="text-xs font-bold text-primarymed uppercase tracking-widest block mb-2">
                        {cat.code}
                      </span>
                      <h3
                        className={`font-heading font-bold text-primarydark mb-3 ${
                          featured ? 'text-4xl sm:text-5xl' : 'text-2xl'
                        }`}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className={`text-charcoalgrey/60 leading-relaxed ${
                          featured ? 'text-base max-w-sm' : 'text-sm'
                        }`}
                      >
                        {cat.desc}
                      </p>
                    </div>

                    <a
                      href={resourceLinks.guidebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-primarydark font-bold group-hover:text-primarymed transition-colors relative z-10"
                    >
                      Detail <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}

          {/* Kotak info (fakta dari alies.alamin.id) */}
          {INFO_TILES.map((t, i) => (
            <Reveal
              key={t.big}
              className="lg:col-span-2 h-full"
              direction="up"
              delay={120 + (categoriesData.length + i) * 120}
              duration={700}
            >
              <div className="h-full min-h-[10rem] rounded-[32px] bg-primarydark text-white p-7 sm:p-8 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accentgold/15 blur-2xl pointer-events-none"></div>
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-softcream relative z-10">
                  {t.big}
                </div>
                <p className="text-sm text-white/80 mt-2 max-w-xs relative z-10">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
