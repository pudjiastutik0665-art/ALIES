import React from 'react';
import { socialLinks } from '../data/siteData';

/**
 * Tautan media sosial dengan logo.
 * variant="icon"  : tombol bulat berisi logo saja (untuk footer gelap)
 * variant="label" : tombol pil berisi logo + nama (untuk section terang)
 */
export default function SocialLinks({ variant = 'icon', items = socialLinks }) {
  if (variant === 'label') {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-backgroundlight border border-primarymed/20 text-primarydark text-sm font-bold hover:bg-primarymed hover:text-white transition-smooth hover-trigger shadow-sm"
          >
            <i className={`fa-brands ${s.icon}`} aria-hidden="true"></i>
            {s.name}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex space-x-3">
      {items.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          title={s.name}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accentgold hover:text-primarydark transition-smooth hover-trigger"
        >
          <i className={`fa-brands ${s.icon} text-sm`} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
}
