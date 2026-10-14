import React, { useEffect, useRef, useState } from 'react';

/**
 * Komponen Reveal untuk animasi scroll yang halus, ringan, dan hemat performa (Native Intersection Observer).
 * 
 * Props:
 * - direction: 'up' | 'down' | 'left' | 'right' | 'none' (default: 'up')
 * - delay: delay kemunculan dalam milidetik (contoh: 150 untuk stagger)
 * - duration: durasi transisi dalam milidetik (default: 700)
 * - distance: jarak pergeseran awal dalam px (default: 30)
 */
export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = 30,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [noMotion, setNoMotion] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Pengguna memilih "kurangi gerakan": tampilkan langsung tanpa animasi.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      setNoMotion(true);
      return;
    }

    let waiting = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        // Jika animasi pembuka sedang tampil, tunggu sampai selesai
        // supaya animasi muncul tidak terbuang di balik layar pembuka.
        if (document.documentElement.classList.contains('intro-playing')) {
          waiting = () => setIsVisible(true);
          window.addEventListener('alies:intro-done', waiting, { once: true });
        } else {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (waiting) window.removeEventListener('alies:intro-done', waiting);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.92)';
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: noMotion ? 'none' : getTransform(),
        transitionProperty: noMotion ? 'none' : 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
