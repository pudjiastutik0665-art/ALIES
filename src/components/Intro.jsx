import React, { useEffect, useRef, useState } from 'react';
import { images, asset } from '../data/siteData';

const EXIT_AT = 2300; // ms: kapan layar pembuka mulai terangkat
const REMOVE_AFTER = 750; // ms: lama animasi terangkat

/**
 * Animasi pembuka saat pertama kali masuk website.
 * - Status "akan tampil" ditentukan skrip kecil di index.html (kelas `intro-playing`),
 *   sehingga tidak ada kedipan dan "kurangi gerakan" otomatis dilewati.
 * - Bisa dilewati: klik di mana saja, tombol "Lewati", atau tekan Esc.
 */
export default function Intro() {
  const [phase, setPhase] = useState(() =>
    document.documentElement.classList.contains('intro-playing') ? 'play' : 'off'
  );
  const exitedRef = useRef(false);

  useEffect(() => {
    if (phase !== 'play') return;

    const timers = [];
    const exit = () => {
      if (exitedRef.current) return;
      exitedRef.current = true;
      try {
        sessionStorage.setItem('alies-intro-seen', '1');
      } catch (e) {
        /* abaikan */
      }
      document.documentElement.classList.remove('intro-playing');
      window.dispatchEvent(new Event('alies:intro-done'));
      setPhase('exit');
    };

    timers.push(setTimeout(exit, EXIT_AT));
    const onKey = (e) => {
      if (e.key === 'Escape') exit();
    };
    window.addEventListener('keydown', onKey);
    // Dipakai tombol "Lewati" & klik layar
    window.__aliesSkipIntro = exit;

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', onKey);
      delete window.__aliesSkipIntro;
    };
  }, [phase]);

  // Hapus overlay dari halaman setelah animasi terangkat selesai.
  // (Efek terpisah agar timer tidak ikut terhapus saat `phase` berubah.)
  useEffect(() => {
    if (phase !== 'exit') return;
    const t = setTimeout(() => setPhase('off'), REMOVE_AFTER);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'off') return null;

  const skip = () => window.__aliesSkipIntro && window.__aliesSkipIntro();

  return (
    <div
      className={`intro-overlay ${phase === 'exit' ? 'is-exit' : ''}`}
      role="status"
      aria-label="Memuat ALIES 2027"
      onClick={skip}
    >
      <div className="intro-icon w-24 h-24 rounded-3xl bg-white shadow-xl shadow-primarymed/20 border border-primarymed/20 flex items-center justify-center mb-8">
        {images.logo ? (
          <img src={asset(images.logo)} alt="" className="w-16 h-16 object-contain" />
        ) : (
          <i className="fa-solid fa-crown text-4xl text-accentgold" aria-hidden="true"></i>
        )}
      </div>

      <div className="font-heading font-extrabold text-primarydark text-6xl sm:text-8xl tracking-tight flex" aria-hidden="true">
        {'ALIES'.split('').map((ch, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <span className="intro-letter" style={{ animationDelay: `${0.35 + i * 0.09}s` }}>
              {ch}
            </span>
          </span>
        ))}
        <span className="overflow-hidden inline-block ml-3 sm:ml-5 text-accentgold">
          <span className="intro-letter" style={{ animationDelay: '0.9s' }}>
            2027
          </span>
        </span>
      </div>

      <p className="intro-tagline mt-5 text-sm sm:text-lg font-medium text-primarymed tracking-wide text-center px-6">
        Crown Your Mind, Rise as a Champion
      </p>

      <div className="intro-bar mt-10 w-44 sm:w-60 h-1.5 rounded-full bg-primarymed/15 overflow-hidden" aria-hidden="true">
        <span></span>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute bottom-6 right-6 text-xs font-bold text-primarydark/70 hover:text-primarydark px-4 py-2 rounded-full border border-primarymed/30 bg-white/60 backdrop-blur-sm transition-colors"
      >
        Lewati
      </button>
    </div>
  );
}
