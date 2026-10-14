import React from 'react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

export default function Hero() {
  return (
    <section id="home" className="hero-bg pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden flex items-center min-h-[92vh]">
      {/* 1. Parallax Dot Grid Background Layer */}
      <Parallax speed={0.15} className="absolute inset-0 pointer-events-none -z-0">
        <div className="w-full h-[120%] opacity-20 bg-[radial-gradient(#b6771d_1.2px,transparent_1.2px)] [background-size:26px_26px]"></div>
      </Parallax>

      {/* 2. Parallax Floating Ambient Glow Orb */}
      <Parallax speed={-0.3} className="absolute top-1/4 right-10 pointer-events-none -z-0">
        <div className="w-72 h-72 bg-gradient-to-br from-softcream/60 to-accentgold/30 rounded-full blur-3xl opacity-70"></div>
      </Parallax>

      <Parallax speed={0.25} className="absolute -bottom-10 left-10 pointer-events-none -z-0">
        <div className="w-80 h-80 bg-primarydark/10 rounded-full blur-3xl opacity-50"></div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left">
            <Reveal direction="down" delay={100}>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-softcream/40 text-primarydark text-xs font-bold tracking-wide uppercase mb-6 border border-primarymed/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accentgold animate-pulse"></span>
                <span className="t-shimmer" data-text="ALIES 2027 • NATIONAL STUDENT OLYMPIAD">
                  ALIES 2027 • NATIONAL STUDENT OLYMPIAD
                </span>
              </div>
            </Reveal>
            
            <Reveal direction="up" delay={200}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primarydark leading-tight tracking-tighter mb-6 relative">
                CROWN YOUR MIND, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primarymed to-accentgold relative inline-block">
                  RISE AS A CHAMPION
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-softcream/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                  </svg>
                </span>
              </h1>
            </Reveal>
            
            <Reveal direction="up" delay={300}>
              <p className="text-lg sm:text-xl font-medium text-primarymed mb-4">
                "Merdeka Berprestasi, Berkarya Menginspirasi"
              </p>
              <p className="text-base text-charcoalgrey/80 max-w-xl mb-10 leading-relaxed">
                ALIES (Al-Amin Intelligence of Elementary School) merupakan ajang olimpiade pelajar tingkat SD/MI sederajat yang diselenggarakan oleh OSIS MTs–MA Pesantren Al-Amin Mojokerto.
              </p>
            </Reveal>
            
            <Reveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-primarydark text-white font-bold rounded-2xl shadow-xl hover:bg-primarymed transition-smooth text-center flex items-center justify-center gap-2 hover-trigger hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Daftar Sekarang <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
                <a
                  href="#categories"
                  className="px-8 py-4 bg-white/70 backdrop-blur-sm text-primarydark border border-primarymed/30 font-bold rounded-2xl shadow-sm hover:bg-softcream/30 transition-smooth text-center hover-trigger hover:-translate-y-0.5"
                >
                  Lihat Cabang Lomba
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero Visual Card (Mascot with 3D Tilt & Subtle Parallax) */}
          <div className="lg:col-span-5 relative">
            <Parallax speed={-0.1}>
              <Reveal direction="scale" delay={350} duration={900}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <TiltCard maxTilt={14} glare={true} className="rounded-3xl">
                    <div className="glass-card rounded-3xl p-8 relative overflow-hidden animate-float">
                      <div className="flex justify-between items-center mb-6">
                        <span className="t-badge" data-open="true">
                          <span className="t-badge-dot px-3 py-1 bg-accentgold/20 text-primarydark text-xs font-bold rounded-full border border-accentgold/30 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accentgold animate-ping"></span>
                            Open Registration
                          </span>
                        </span>
                        <i className="fa-solid fa-award text-2xl text-primarymed"></i>
                      </div>

                      <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-primarydark/5 to-softcream/40 flex flex-col items-center justify-center text-center p-6 relative mb-6 group hover-trigger">
                        <i className="fa-solid fa-shield-halved text-6xl text-primarydark mb-4 transform group-hover:scale-110 transition-transform duration-500"></i>
                        <h3 className="font-heading font-bold text-primarydark text-lg">Musha the Knight</h3>
                        <p className="text-xs text-charcoalgrey/70 mt-1">Official Mascot of ALIES 2027</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primarymed/10 text-center">
                        <div>
                          <div className="font-heading font-extrabold text-primarydark text-2xl">4+</div>
                          <div className="text-xs text-charcoalgrey/60 mt-1">Cabang Lomba</div>
                        </div>
                        <div className="border-x border-primarymed/10">
                          <div className="font-heading font-extrabold text-primarydark text-2xl">2027</div>
                          <div className="text-xs text-charcoalgrey/60 mt-1">Tahun Event</div>
                        </div>
                        <div>
                          <div className="font-heading font-extrabold text-primarydark text-2xl">SD/MI</div>
                          <div className="text-xs text-charcoalgrey/60 mt-1">Peserta</div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </Reveal>
            </Parallax>
          </div>

        </div>
      </div>
    </section>
  );
}
