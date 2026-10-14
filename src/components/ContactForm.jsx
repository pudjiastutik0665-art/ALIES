import React, { useState } from 'react';
import Reveal from './Reveal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    school: '',
    category: 'Science (IPA)',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [shakingFields, setShakingFields] = useState({});

  const validate = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const waRegex = /^[0-9]{9,15}$/;

    if (!data.name.trim()) errors.name = 'Nama lengkap wajib diisi.';
    if (!emailRegex.test(data.email.trim())) errors.email = 'Masukkan alamat email yang valid.';
    if (!waRegex.test(data.whatsapp.trim().replace(/^0/, '62').replace(/\D/g, ''))) {
      errors.whatsapp = 'Nomor WhatsApp minimal 10 digit angka valid.';
    }
    if (!data.school.trim()) errors.school = 'Asal sekolah wajib diisi.';
    if (data.message.trim().length < 5) errors.message = 'Pesan minimal berisi 5 karakter.';
    return errors;
  };

  const errors = validate(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const triggerShake = (errorKeys) => {
    const shakeMap = {};
    errorKeys.forEach((key) => {
      shakeMap[key] = true;
    });
    setShakingFields(shakeMap);

    // Auto-remove shaking class after animation duration (280ms) to allow re-trigger
    setTimeout(() => {
      setShakingFields({});
    }, 350);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      whatsapp: true,
      school: true,
      message: true,
    });

    const currentErrors = validate(formData);
    const errorKeys = Object.keys(currentErrors);

    if (errorKeys.length > 0) {
      triggerShake(errorKeys);
      return;
    }

    setIsSuccess(true);
    const text = `Halo Panitia ALIES 2027,%0A%0ASaya ingin mendaftar/bertanya mengenai ALIES 2027:%0A- Nama: ${encodeURIComponent(formData.name)}%0A- Asal Sekolah: ${encodeURIComponent(formData.school)}%0A- Cabang Lomba: ${encodeURIComponent(formData.category)}%0A- Email: ${encodeURIComponent(formData.email)}%0A- WhatsApp: ${encodeURIComponent(formData.whatsapp)}%0A- Pesan: ${encodeURIComponent(formData.message)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    }, 1200);

    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      school: '',
      category: 'Science (IPA)',
      message: '',
    });
    setTouched({});
    setTimeout(() => setIsSuccess(false), 9000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-primarymed/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Registrasi & Konsultasi
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Pendaftaran & Hubungi Panitia
            </h2>
            <p className="text-sm sm:text-base text-charcoalgrey/70 mt-2">
              Isi formulir di bawah ini untuk pendaftaran awal atau mengajukan pertanyaan ke panitia ALIES 2027.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={150} duration={800}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-primarydark/5 border border-primarymed/15 relative">
            {isSuccess && (
              <div className="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 flex items-center gap-4 shadow-sm animate-fade-in">
                {/* transitions.dev Success Check Icon with animated SVG path & bob */}
                <span className="t-success-check flex-shrink-0" data-state="in" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-primarymed">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                    <path
                      d="M14 24.5L21 31.5L34 17.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-heading font-bold text-primarydark text-base">Pendaftaran Berhasil Dikirim!</h4>
                  <p className="text-xs sm:text-sm text-charcoalgrey/80 mt-0.5">
                    Data Anda telah tercatat dan Anda akan dialihkan ke WhatsApp resmi panitia ALIES 2027.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primarydark mb-2">
                    Nama Lengkap Siswa / Pembina
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Contoh: Muhammad Ali"
                    className={`t-input w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:border-primarydark text-sm transition-smooth hover-trigger ${
                      touched.name && errors.name
                        ? `border-rose-500 bg-rose-50/20 is-error ${shakingFields.name ? 'is-shaking' : ''}`
                        : 'border-gray-200'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-xs text-rose-500 mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="school" className="block text-sm font-bold text-primarydark mb-2">
                    Asal Sekolah (SD/MI)
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Contoh: MI Pembangunan"
                    className={`t-input w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:border-primarydark text-sm transition-smooth hover-trigger ${
                      touched.school && errors.school
                        ? `border-rose-500 bg-rose-50/20 is-error ${shakingFields.school ? 'is-shaking' : ''}`
                        : 'border-gray-200'
                    }`}
                  />
                  {touched.school && errors.school && (
                    <p className="text-xs text-rose-500 mt-1.5">{errors.school}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primarydark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="nama@example.com"
                    className={`t-input w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:border-primarydark text-sm transition-smooth hover-trigger ${
                      touched.email && errors.email
                        ? `border-rose-500 bg-rose-50/20 is-error ${shakingFields.email ? 'is-shaking' : ''}`
                        : 'border-gray-200'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-xs text-rose-500 mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-primarydark mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="081234567890"
                    className={`t-input w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:border-primarydark text-sm transition-smooth hover-trigger ${
                      touched.whatsapp && errors.whatsapp
                        ? `border-rose-500 bg-rose-50/20 is-error ${shakingFields.whatsapp ? 'is-shaking' : ''}`
                        : 'border-gray-200'
                    }`}
                  />
                  {touched.whatsapp && errors.whatsapp && (
                    <p className="text-xs text-rose-500 mt-1.5">{errors.whatsapp}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-bold text-primarydark mb-2">
                  Pilihan Cabang Lomba
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primarydark text-sm transition-smooth bg-white hover-trigger"
                >
                  <option value="Science (IPA)">Science (IPA)</option>
                  <option value="Mathematics (Matematika)">Mathematics (Matematika)</option>
                  <option value="English (Bahasa Inggris)">English (Bahasa Inggris)</option>
                  <option value="Arabic (Bahasa Arab)">Arabic (Bahasa Arab)</option>
                  <option value="Konsultasi Umum">Konsultasi / Pertanyaan Umum</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primarydark mb-2">
                  Pesan / Pertanyaan Tambahan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tuliskan pertanyaan atau kebutuhan pendaftaran Anda..."
                  className={`t-input w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:border-primarydark text-sm transition-smooth resize-none hover-trigger ${
                    touched.message && errors.message
                      ? `border-rose-500 bg-rose-50/20 is-error ${shakingFields.message ? 'is-shaking' : ''}`
                      : 'border-gray-200'
                  }`}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="text-xs text-rose-500 mt-1.5">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primarydark text-white font-bold rounded-xl shadow-md hover:bg-primarymed transition-smooth hover-trigger hover:shadow-lg flex items-center justify-center gap-2 group active:scale-[0.99]"
              >
                <span>Kirim Pendaftaran / Pesan</span>
                <i className="fa-solid fa-paper-plane text-sm transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"></i>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
