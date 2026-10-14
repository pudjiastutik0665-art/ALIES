import React, { useEffect, useRef } from 'react';

/**
 * Parallax ringan berbasis scroll (tanpa dependency tambahan).
 * Menggeser children secara vertikal relatif terhadap posisi <section> induknya.
 *
 * Props:
 * - speed: kekuatan efek. Positif = bergerak searah scroll, negatif = berlawanan.
 * - className: kelas untuk elemen pembungkus.
 *
 * Catatan: dinonaktifkan otomatis jika pengguna memilih "prefers-reduced-motion".
 */
export default function Parallax({ children, speed = 0.2, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Gunakan section induk sebagai acuan agar tidak terjadi feedback loop
    // dari posisi elemen yang sedang digeser.
    const reference = el.closest('section') || el.parentElement;
    if (!reference) return;

    const MAX_SHIFT = 200; // px per 1.0 speed pada progres penuh
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = reference.getBoundingClientRect();
      const vh = window.innerHeight;

      // Lewati perhitungan jika section sedang di luar layar
      if (rect.bottom < 0 || rect.top > vh) return;

      const center = rect.top + rect.height / 2;
      const range = vh / 2 + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (vh / 2 - center) / range));
      el.style.transform = `translate3d(0, ${(progress * speed * MAX_SHIFT).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
