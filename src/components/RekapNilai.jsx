import React from 'react';
import Reveal from './Reveal';
import { rekapNilai } from '../data/siteData';

export default function RekapNilai({ data = rekapNilai }) {
  return (
    <section id="rekap-nilai" className="py-24 bg-white border-t border-primarymed/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center bg-backgroundlight border border-primarymed/15 rounded-3xl p-10 sm:p-14 shadow-sm">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Hasil Lomba
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              {data.title}
            </h2>
            <p className="text-sm sm:text-base text-charcoalgrey/70 mt-3 max-w-md mx-auto">
              {data.description}
            </p>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primarydark text-white font-bold rounded-2xl shadow-lg hover:bg-primarymed hover:-translate-y-0.5 transition-smooth hover-trigger"
            >
              Lihat Rekap Nilai <i className="fa-solid fa-arrow-up-right-from-square text-sm" aria-hidden="true"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
