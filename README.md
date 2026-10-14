# ALIES 2027 (Al-Amin Intelligence of Elementary School)

Official landing page & registration portal untuk ajang olimpiade pelajar tingkat SD/MI Nasional yang diselenggarakan oleh OSIS MTs–MA Pesantren Al-Amin Mojokerto.

---

## 🚀 Teknologi yang Digunakan

* **Framework UI:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/) (Fast HMR & Instant bundling)
* **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) dengan palet warna resmi Al-Amin
* **Ikon:** FontAwesome 6 & Lucide Icons

---

## 📁 Struktur Direktori

```text
ALIES/
├── dist/                     # Hasil build produksi
├── src/
├── ├── transitions/          # Komponen transitions 
│   ├── components/           # Komponen modular
│   │   ├── About.jsx         # Profil & filosofi acara
│   │   ├── Article.jsx       # Konten informasi resmi (SEO)
│   │   ├── Benefits.jsx      # Keuntungan & fasilitas peserta
│   │   ├── Categories.jsx    # 4 Cabang Lomba (IPA, Math, English, Arabic)
│   │   ├── ContactForm.jsx   # Formulir registrasi & integrasi WhatsApp
│   │   ├── CTA.jsx           # Banner ajakan partisipasi
│   │   ├── CustomCursor.jsx  # Interactive cursor follower
│   │   ├── FAQ.jsx           # Accordion tanya-jawab
│   │   ├── Footer.jsx        # Footer & tautan media sosial
│   │   ├── Gallery.jsx       # Dokumentasi foto kegiatan
│   │   ├── Hero.jsx          # Banner utama & maskot
│   │   ├── Navbar.jsx        # Navigasi responsif
│   │   └── Values.jsx        # 4 Pilar kompetisi
│   ├── data/                 # Data terstruktur (kategori, FAQ, nilai)
│   │   ├── categories.js
│   │   └── faq.js
│   ├── App.jsx               # Komponen utama
│   ├── index.css             # Tailwind base & animasi khusus
│   └── main.jsx              # Entry point aplikasi
├── index.html                # Dokumen HTML utama
├── index.html.original       # Cadangan file HTML asli (standalone)
├── package.json              # Dependensi & script
├── tailwind.config.js        # Konfigurasi tema warna & tipografi
└── vite.config.js            # Konfigurasi Vite
```

---

## 💻 Cara Menjalankan

### 1. Mode Pengembangan (Development Server)
```bash
npm run dev
```
Buka browser pada alamat yang muncul (biasanya `http://localhost:3000`).

### 2. Membangun untuk Produksi (Build)
```bash
npm run build
```
File hasil optimasi akan berada di folder `dist/` dan siap di-deploy ke Vercel, Netlify, cPanel, atau GitHub Pages.
