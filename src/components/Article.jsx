import React from 'react';

export default function Article() {
  return (
    <article id="article" className="py-20 bg-backgroundlight border-t border-primarymed/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoalgrey/90 leading-relaxed">
        <header className="mb-10 text-center">
          <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
            Informasi Resmi
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
            ALIES Al-Amin 2027: Ajang Olimpiade Pelajar SD/MI Berprestasi
          </h1>
        </header>

        <p className="text-base sm:text-lg mb-8 leading-relaxed">
          <strong>ALIES Al-Amin</strong> (Al-Amin Intelligence of Elementary School) kembali hadir sebagai ajang olimpiade pelajar tingkat SD/MI sederajat bergengsi. Diselenggarakan secara konsisten oleh OSIS MTs–MA{' '}
          <a
            href="https://alamin.id/osis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarymed font-semibold underline hover:text-primarydark transition-colors"
          >
            Pesantren Al Amin Mojokerto
          </a>
          , kompetisi ini dirancang untuk menguji kemampuan akademik sekaligus membentuk karakter siswa yang sportif dan berdaya saing tinggi.
        </p>

        <h2 className="font-heading text-2xl font-bold text-primarydark mt-10 mb-4">
          Mengapa Harus Mengikuti ALIES Al-Amin?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong>Standar Soal Berkualitas:</strong> Menguji pemahaman konsep, logika, dan analisis siswa secara mendalam.</li>
          <li><strong>Pengembangan Karakter:</strong> Membentuk sikap sportif, jujur, dan berani berkompetisi secara sehat.</li>
          <li><strong>Sertifikat & Penghargaan:</strong> Setiap peserta mendapatkan sertifikat resmi, serta trofi bagi para pemenang.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-primarydark mt-10 mb-4">
          Cabang Lomba dari Al Amin
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li><strong>Ilmu Pengetahuan Alam (IPA):</strong> Menguji analisis fenomena alam dan pemahaman sains dasar.</li>
          <li><strong>Matematika:</strong> Mengasah logika berpikir, ketepatan, dan kecepatan berhitung.</li>
          <li><strong>Bahasa Inggris:</strong> Melatih penguasaan <em>grammar</em>, <em>vocabulary</em>, dan pemahaman bacaan.</li>
          <li><strong>Bahasa Arab:</strong> Menguji kemampuan mufradat, qawaid, serta pemahaman teks bahasa Arab.</li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-primarydark mt-10 mb-4">
          Cara Mendaftar
        </h2>
        <ol className="list-decimal pl-6 space-y-2 mb-8">
          <li>
            Kunjungi portal resmi pendaftaran di{' '}
            <a
              href="https://alies.alamin.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primarymed font-semibold underline hover:text-primarydark transition-colors"
            >
              alies.alamin.id
            </a>
            .
          </li>
          <li>Isi formulir pendaftaran dengan data diri siswa dan asal sekolah yang valid.</li>
          <li>Pilih cabang lomba yang ingin diikuti.</li>
          <li>Lakukan konfirmasi pembayaran melalui WhatsApp.</li>
        </ol>
      </div>
    </article>
  );
}
