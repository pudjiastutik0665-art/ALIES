import React from 'react';
import { categoriesData } from '../data/categories';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

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
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-backgroundlight border border-primarymed/20 text-primarydark font-bold hover:bg-primarymed hover:text-white transition-smooth hover-trigger shadow-sm"
              >
                Unduh Silabus <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat, idx) => (
            <Reveal key={cat.id} direction="up" delay={120 + idx * 120} duration={650}>
              <TiltCard maxTilt={10} glare={true} className="h-full rounded-[32px]">
                <div className="h-full bg-backgroundlight rounded-[32px] p-8 border border-primarymed/10 hover:border-primarymed/30 transition-smooth group hover-trigger relative overflow-hidden flex flex-col justify-between hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primarymed/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primarydark group-hover:bg-primarydark group-hover:text-white transition-smooth mb-8 relative z-10">
                      <i className={`fa-solid ${cat.icon} text-xl`}></i>
                    </div>
                    <span className="text-xs font-bold text-primarymed uppercase tracking-widest block mb-2">
                      {cat.code}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-primarydark mb-4">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-charcoalgrey/60 mb-8 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primarydark font-bold group-hover:text-primarymed transition-colors relative z-10"
                  >
                    Detail <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
