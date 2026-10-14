/**
 * DATA KONTEN YANG MUDAH DIEDIT
 * Ubah isi file ini untuk memperbarui website tanpa menyentuh komponen.
 */

// ---------------------------------------------------------------
// GAMBAR
// Taruh file gambar di folder  public/images/  lalu tulis nama filenya di sini
// (tanpa awalan "/"). Kosongkan ('') jika belum ada gambar: website akan memakai
// tampilan cadangan (teks / ikon).
// ---------------------------------------------------------------

// Mengubah 'images/logo.png' menjadi alamat yang benar di website.
// Alamat yang diawali http(s):// dibiarkan apa adanya.
export const asset = (path) => {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};

export const images = {
  logo: '', // contoh: 'images/logo.png'
  mascot: '', // contoh: 'images/maskot.png'
};

// Dokumentasi: foto ATAU video animasi (misalnya hasil ekspor animos.app).
//   image    : foto (JPG/PNG/WebP). Jika `video` diisi, `image` jadi gambar
//              sampul yang tampil sebelum video termuat (opsional).
//   video    : file video MP4. Diputar otomatis, tanpa suara, berulang.
//   videoWebm: (opsional) versi WebM dari video yang sama, mis. WebM transparan.
// Semua boleh kosong ('') = tampil kotak gradien + ikon.
// Tambah / hapus baris sesuka Anda.
export const gallery = [
  { title: 'Suasana Pengerjaan Ujian', image: '', video: '', videoWebm: '', icon: 'fa-image', gradient: 'from-primarydark/40 to-primarymed/40' },
  { title: 'Penyerahan Trofi Juara Umum', image: '', video: '', videoWebm: '', icon: 'fa-trophy', gradient: 'from-primarymed/40 to-accentgold/40' },
  { title: 'Antusiasme Peserta Cilik', image: '', video: '', videoWebm: '', icon: 'fa-users', gradient: 'from-accentgold/40 to-primarydark/40' },
];

// ---------------------------------------------------------------
// Tautan Pamflet & Guidance Book (diambil dari alies.alamin.id)
// ---------------------------------------------------------------
export const resourceLinks = {
  // Halaman pendaftaran resmi (tombol "Daftar Sekarang" mengarah ke sini)
  registration: 'https://alies.alamin.id/registration',
  pamphlet:
    'https://drive.google.com/file/d/1ajI1ZIp-q6WMhulJLLftvsZRgyOFpKnn/view?usp=sharing',
  guidebook:
    'https://drive.google.com/file/d/1O6m3OA0SI_A8NcFArbE5ptj1VSEdAZtX/view?usp=sharing',
};

// ---------------------------------------------------------------
// REKAP NILAI (berupa tautan saja)
// Ganti `url` jika alamat rekap nilai berubah.
// ---------------------------------------------------------------
export const rekapNilai = {
  title: 'Rekap Nilai ALIES',
  description:
    'Lihat hasil dan rekapitulasi nilai peserta ALIES melalui halaman resmi panitia.',
  url: 'https://alies.alamin.id/rekap-nilai',
};

// ---------------------------------------------------------------
// MEDIA SOSIAL (diambil dari alies.alamin.id)
// `icon` memakai FontAwesome Brands.
// ---------------------------------------------------------------
export const socialLinks = [
  { name: 'YouTube', icon: 'fa-youtube', url: 'https://www.youtube.com/c/ponpesalamin' },
  { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://web.facebook.com/alaminmojokerto' },
  { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/alaminmojokerto/' },
];

// ---------------------------------------------------------------
// CONTACT PERSON
// TODO: ganti dengan nama & nomor WhatsApp panitia yang sebenarnya.
// Nomor ditulis format bebas (0812..., +62812..., 62812...).
// Jika `phone` dikosongkan, tombol WhatsApp otomatis dinonaktifkan.
// ---------------------------------------------------------------
export const contactPersons = [
  { name: 'Contact Person 1', role: 'Panitia Pendaftaran', phone: '' },
  { name: 'Contact Person 2', role: 'Panitia Teknis Lomba', phone: '' },
  { name: 'Contact Person 3', role: 'Informasi Umum', phone: '' },
];

// ---------------------------------------------------------------
// SPONSOR (saat ini memakai logo dari alies.alamin.id)
// TODO: ganti `name` dengan nama sponsor sebenarnya.
// `logo` bisa file Anda sendiri, contoh: 'images/sponsors/nama-sponsor.png'
// `logo` boleh dikosongkan (akan tampil nama sponsor sebagai teks).
// ---------------------------------------------------------------
export const sponsors = [
  {
    name: 'Sponsor 1',
    logo: 'https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72vT2StH9nwTbDjHfsAUj5WKQYpqii1_Vi3qrHAr_UDXmVaro1FrzJRNtdRwrAEH2sm9Sba8qFVbHwmae-8eiTYO1a4nWODiwZ6m6-YXkXC0M2NlMr728gkZ85JIMAx4zFO6yDXj_5_1drZV6uhA-tiWgx_8InzH-PkHn6LsBPcSNLetaky-1hCyi__pjpLHMJTci_MGafUj9d6Cbj4Pn4fjD_qtbWrIgf6ue2BqfQw=w1280',
    url: '',
  },
  {
    name: 'Sponsor 2',
    logo: 'https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72vpeD7jkIUujNXBePxsrRmgg8YXOJv13TGXGyhDuaa4mGvSyIF3q7mvzMJTlhj5uCSBSZefgZp6UotDPRQtRmzHB0DAV5oGpzP5WA0ZRImrrNtoW2SkwQtYokjyaoENuKfm371BA8Hx4rCNMHnunhef2K3uirCfUJ6xEYK6NWjxisr7x48ONzY3TRxl=w1280',
    url: '',
  },
  {
    name: 'Sponsor 3',
    logo: 'https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72tovXcB0kVr1mZC4HU2QOd5HwTwd3FL4z0PxvyyvaDxlwtRJosIdwQbJgMbWGk9l_UeMfuCKJVypcdKJv9y0KXssIsSc_z3B0gaokDgziY3ZIi7CkK_ExVq8OGqI10PIxHQdnWX51XJcqzJxwp6RwuhoaAs7lrRTENO7ePX74HEnBkNMwb5OvpDxfzY-ibQNtjl32xm06GmFxxENSwZ3zCa_u_ajmByeJKwCwZ8=w1280',
    url: '',
  },
];
