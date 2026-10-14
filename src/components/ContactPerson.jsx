import React from 'react';
import Reveal from './Reveal';
import SocialLinks from './SocialLinks';
import { contactPersons } from '../data/siteData';

// Ubah 0812... / +62812... / 62812... menjadi 62812... untuk tautan wa.me
const toWaNumber = (phone) => {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('0')) return `62${digits.slice(1)}`;
  return digits;
};

export default function ContactPerson({ people = contactPersons }) {
  return (
    <section id="contact-person" className="py-24 bg-white border-t border-primarymed/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Hubungi Kami
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Contact Person
            </h2>
            <p className="text-sm sm:text-base text-charcoalgrey/70 mt-2">
              Ada pertanyaan seputar pendaftaran atau teknis lomba? Hubungi panitia melalui WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, idx) => {
            const wa = toWaNumber(p.phone);
            return (
              <Reveal key={`${p.name}-${idx}`} direction="up" delay={120 + idx * 120} duration={650}>
                <div className="h-full bg-backgroundlight border border-primarymed/10 hover:border-primarymed/30 rounded-3xl p-7 text-center flex flex-col items-center hover:shadow-lg transition-smooth hover-trigger">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primarydark mb-4">
                    <i className="fa-solid fa-user-tie text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primarydark">{p.name}</h3>
                  <p className="text-xs font-bold text-primarymed uppercase tracking-wider mt-1 mb-5">{p.role}</p>

                  {wa ? (
                    <a
                      href={`https://wa.me/${wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primarydark text-white text-sm font-bold hover:bg-primarymed transition-smooth hover-trigger"
                    >
                      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat WhatsApp
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-400 text-sm font-bold cursor-not-allowed"
                    >
                      Nomor segera diumumkan
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" delay={200}>
          <div className="mt-14 text-center">
            <p className="text-sm font-bold text-primarydark uppercase tracking-widest mb-4">
              Ikuti Media Sosial Kami
            </p>
            <SocialLinks variant="label" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
