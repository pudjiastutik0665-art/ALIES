import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { gallery as galleryItems, asset } from '../data/siteData';

/**
 * Media satu kartu dokumentasi: video (otomatis diputar saat terlihat) ->
 * foto -> kotak gradien + ikon. Jika file video gagal dimuat, otomatis jatuh
 * ke foto / gradien.
 */
function GalleryMedia({ item }) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const hasVideo = (item.video || item.videoWebm) && !videoFailed;

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !hasVideo) return;
    el.muted = true; // wajib agar autoplay diizinkan browser

    // Pengguna yang memilih "kurangi gerakan": jangan putar otomatis.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // Putar hanya saat terlihat di layar (hemat baterai & kuota).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasVideo]);

  if (hasVideo) {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return (
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        poster={item.image ? asset(item.image) : undefined}
        muted
        loop
        playsInline
        preload="metadata"
        controls={reduced}
        aria-label={item.title}
        onError={() => setVideoFailed(true)}
      >
        {item.videoWebm && <source src={asset(item.videoWebm)} type="video/webm" />}
        {item.video && <source src={asset(item.video)} type="video/mp4" />}
      </video>
    );
  }

  if (item.image) {
    return (
      <img
        src={asset(item.image)}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className={`w-full h-full bg-gradient-to-tr ${item.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
    >
      <i className={`fa-solid ${item.icon} text-4xl text-white/80 group-hover:scale-125 transition-transform duration-500`}></i>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Dokumentasi
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Dokumentasi ALIES
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={120 + idx * 140} duration={700}>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-gray-100 hover-trigger">
                <GalleryMedia item={item} />
                <div className="absolute inset-0 bg-gradient-to-t from-primarydark/90 via-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
