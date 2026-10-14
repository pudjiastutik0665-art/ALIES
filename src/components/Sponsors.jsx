import React, { useState } from 'react';
import Reveal from './Reveal';
import { sponsors, asset } from '../data/siteData';

function SponsorLogo({ sponsor }) {
  const [failed, setFailed] = useState(false);
  const showImage = sponsor.logo && !failed;

  const inner = showImage ? (
    <img
      src={asset(sponsor.logo)}
      alt={sponsor.name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="max-h-16 sm:max-h-20 w-auto object-contain"
    />
  ) : (
    <span className="font-heading font-bold text-primarydark/70 text-center">{sponsor.name}</span>
  );

  const box =
    'h-28 sm:h-32 bg-white rounded-2xl border border-primarymed/10 hover:border-primarymed/30 hover:shadow-md transition-smooth flex items-center justify-center p-5 hover-trigger';

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className={box}>
      {inner}
    </a>
  ) : (
    <div className={box}>{inner}</div>
  );
}

export default function Sponsors({ items = sponsors }) {
  if (!items.length) return null;

  return (
    <section id="sponsors" className="py-20 bg-backgroundlight border-t border-primarymed/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Didukung Oleh
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Sponsored By
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((s, idx) => (
            <Reveal key={`${s.name}-${idx}`} direction="up" delay={100 + idx * 100} duration={600}>
              <SponsorLogo sponsor={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
