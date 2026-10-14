import React from 'react';
import { benefitsData } from '../data/categories';
import Reveal from './Reveal';

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-backgroundlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Keuntungan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Apa yang Kamu Dapatkan?
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={100 + idx * 140} duration={650}>
              <div className="h-full bg-white rounded-2xl p-8 border border-primarymed/15 shadow-sm hover-trigger hover:shadow-lg transition-smooth hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-softcream/50 text-primarydark flex items-center justify-center mb-5 font-bold">
                  <i className={`fa-solid ${item.icon} text-xl`}></i>
                </div>
                <h3 className="font-heading text-lg font-bold text-primarydark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoalgrey/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
