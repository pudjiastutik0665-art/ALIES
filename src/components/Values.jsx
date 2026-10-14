import React from 'react';
import { valuesData } from '../data/categories';
import Reveal from './Reveal';

export default function Values() {
  return (
    <section className="py-24 bg-backgroundlight border-y border-primarymed/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-softcream/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-primarydark mb-4">
              Why Join ALIES?
            </h2>
            <p className="text-lg text-charcoalgrey/60">
              Empat pilar utama yang mendasari setiap pelaksanaan kompetisi.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val, idx) => (
            <Reveal key={val.num} direction="up" delay={100 + idx * 120} duration={650}>
              <div className="h-full group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-primarymed/20 hover-trigger">
                <div
                  className="text-4xl font-extrabold text-transparent mb-6 select-none"
                  style={{ WebkitTextStroke: '1.5px #b6771d', opacity: 0.35 }}
                >
                  {val.num}
                </div>
                <h3 className="font-heading text-xl font-bold text-primarydark mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-charcoalgrey/70 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
