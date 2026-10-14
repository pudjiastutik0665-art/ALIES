import React from 'react';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Parallax Background shapes */}
      <Parallax speed={0.2} className="absolute -top-20 -right-20 pointer-events-none">
        <div className="w-96 h-96 bg-primarymed/5 rounded-full blur-3xl"></div>
      </Parallax>
      <Parallax speed={-0.15} className="absolute -bottom-20 -left-20 pointer-events-none">
        <div className="w-80 h-80 bg-accentgold/10 rounded-full blur-3xl"></div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={50}>
              <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-4 py-1.5 rounded-full">
                Tentang ALIES
              </span>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-primarydark mt-6 mb-8 tracking-tight">
                Membangun Generasi Cerdas & Berkarakter
              </h2>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <p className="text-lg text-charcoalgrey/80 leading-relaxed mb-6 font-light">
                <strong>ALIES (Al-Amin Intelligence of Elementary School)</strong> adalah kompetisi akademik bergengsi yang dirancang khusus untuk menguji kemampuan dan potensi terbaik pelajar tingkat sekolah dasar sederajat. 
              </p>
              <p className="text-base text-charcoalgrey/70 leading-relaxed mb-10">
                Diselenggarakan secara konsisten oleh OSIS MTs–MA Pesantren Al-Amin Mojokerto, acara ini tidak hanya sekadar ajang perlombaan akademik, tetapi juga sarana pembentukan karakter luhur, sportivitas, dan daya saing global.
              </p>
            </Reveal>

            {/* Timeline Milestones */}
            <Reveal direction="up" delay={350}>
              <div className="flex items-center gap-6 text-sm font-semibold text-primarydark">
                <div className="flex flex-col items-center gap-2 hover-trigger">
                  <span className="w-4 h-4 rounded-full bg-primarydark ring-4 ring-primarydark/20"></span>
                  <span className="text-xs text-charcoalgrey/60">2007/2008</span>
                </div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-primarydark/20 to-primarymed/20"></div>
                <div className="flex flex-col items-center gap-2 hover-trigger">
                  <span className="w-4 h-4 rounded-full bg-primarymed ring-4 ring-primarymed/20"></span>
                  <span className="text-xs text-charcoalgrey/60">Agenda Tahunan</span>
                </div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-primarymed/20 to-accentgold/20"></div>
                <div className="flex flex-col items-center gap-2 hover-trigger">
                  <span className="w-4 h-4 rounded-full bg-accentgold ring-4 ring-accentgold/20 animate-pulse"></span>
                  <span className="text-xs text-charcoalgrey/60">ALIES 2027</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Philosophy Card with subtle Parallax */}
          <div className="lg:col-span-5 relative">
            <Parallax speed={-0.1}>
              <Reveal direction="scale" delay={300} duration={850}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primarymed/10 transform rotate-3 rounded-[32px] scale-105 -z-10 transition-transform duration-500"></div>
                  <div className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl p-10 shadow-2xl relative overflow-hidden group hover-trigger">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primarydark to-primarymed text-white flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <i className="fa-solid fa-graduation-cap text-2xl"></i>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primarydark mb-2">Filosofi Kami</h3>
                    <p className="text-sm font-medium text-charcoalgrey/60 mb-6">Al-Amin Intelligence of Elementary School</p>
                    <p className="text-base text-charcoalgrey/80 leading-relaxed border-t border-gray-100 pt-6 italic">
                      "Mencetak generasi yang cerdas secara intelektual, tangguh secara mental, serta memiliki semangat kebangsaan yang tinggi dalam balutan nilai Islami."
                    </p>
                  </div>
                </div>
              </Reveal>
            </Parallax>
          </div>

        </div>
      </div>
    </section>
  );
}
