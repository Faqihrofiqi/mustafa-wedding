---
name: ui-ux-pro-max
description: >-
  Keahlian tingkat lanjut dalam rekayasa desain UI/UX, estetika visual kelas dunia,
  ergonomi mobile-first, tipografi mewah, harmoni warna, glassmorphism, serta
  micro-interactions yang memikat dan berkonversi tinggi.
---

# UI/UX Pro Max: Standard Desain & Estetika Antarmuka Kelas Dunia

Skill ini adalah pedoman baku untuk merancang dan menyempurnakan antarmuka web dan mobile agar mencapai standar estetika premium, kenyamanan pengguna maksimal, dan eksekusi visual tanpa cela.

---

## 1. 8 Pilar Utama Estetika & UX Modern

### 1. Visual Hierarchy (Hierarki Visual yang Tegas)
- Setiap layar harus memiliki satu titik fokus utama (*Focal Point*).
- Gunakan kontras ukuran, bobot font, dan warna untuk memandu mata pengguna:
  `Judul Utama (H1) > Subtitle / Metadata > Body Text > Keterangan Halus`.

### 2. Spatial Rhythm & Whitespace (Pernapasan Ruang)
- Jangan biarkan elemen bertumpuk padat (*crowded*). Ruang kosong (*negative space*) adalah tanda kemewahan dan kejelasan.
- Gunakan kelipatan 4px/8px: `gap: 8px | 16px | 24px | 32px | 48px | 64px`.

### 3. Luxury Typography Pairing (Kombinasi Tipografi Mewah)
- **Serif Klasik Elegan (Headings):** *Playfair Display*, *Cinzel*, *Cormorant Garamond* (untuk kesan eksklusif, formal, dan monumental).
- **Modern Clean Sans-Serif (Body & UI):** *Plus Jakarta Sans*, *Inter*, *Montserrat* (sangat mudah dibaca di layar retina/ponsel).
- **Signature Script (Aksen Emosional):** *Great Vibes*, *Alex Brush* (hanya untuk kutipan pendek, inisial, atau sapaan pembuka).
- **Fluid Typography:** Gunakan `clamp()` untuk ukuran font agar fleksibel di semua layar:
  `font-size: clamp(28px, 6vw, 48px);`

### 4. Color Harmonics & Depth Elevation (Kedalaman & Warna)
- **Palet Terbatas (Rule of 60-30-10):**
  - 60% Warna Dominan (Latar belakang bersih, ivory, atau deep charcoal)
  - 30% Warna Sekunder (Permukaan kartu, border halus, teks penjelas)
  - 10% Warna Aksen (Gold foil, vibrant coral, emerald untuk tombol aksi utama)
- **Ambient Lighting & Soft Shadows:** Hindari bayangan hitam pekat (`rgba(0,0,0,0.5)`). Gunakan bayangan berlapis lembut berwarna senada:
  `box-shadow: 0 10px 30px rgba(142, 109, 20, 0.08), 0 2px 8px rgba(0,0,0,0.04);`

### 5. Glassmorphism & Modern Materials
- Latar kartu transparan bertekstur kabur untuk nuansa modern:
  ```css
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(212, 175, 55, 0.25);
  ```

### 6. Mobile-First Touch Ergonomics (Ergonomi Sentuh)
- **Thumb Zone Architecture:** Tempatkan tombol aksi primer dan navigasi di bagian bawah layar (mudah dijangkau oleh jempol).
- **Ukuran Sentuh Minimal:** Target tombol minimal `44px x 44px` hingga `48px x 48px`.
- **Pencegahan Bug Auto-Zoom iOS:** Seluruh input form (`input`, `select`, `textarea`) harus memiliki `font-size: 16px;` pada viewport ponsel.
- **Anti Horizontal Scroll:** Pastikan `max-width: 100vw; overflow-x: hidden;` terkunci dengan aman.

### 7. Micro-Interactions & Feedback Langsung
- Setiap aksi user wajib memiliki umpan balik visual instan:
  - Tombol disalin: Berubah menjadi ikon centang + teks "Tersalin!" + muncul notifikasi *Toast*.
  - Tombol aksi: Efek tekan (*scale: 0.98*) saat di-tap/klik.
  - Elemen interaktif: Efek hover terangkat (*translateY: -3px*) dan bayangan bertambah dalam.

### 8. Accessibility & Performa (A11y)
- Kontras warna teks memenuhi standar WCAG AA (minimal rasio 4.5:1).
- Gambar memiliki atribut `alt` deskriptif.
- Dukungan `prefers-reduced-motion` untuk kenyamanan semua tamu.

---

## 2. Checklist Verifikasi Desain

Sebelum mempublikasikan antarmuka ke pengguna, pastikan:
- [ ] Apakah tampilan rapi di layar iPhone SE (375px), iPhone standar, dan desktop?
- [ ] Apakah teks dapat dibaca dengan mudah di bawah sinar matahari (kontras cukup)?
- [ ] Apakah tombol aksi utama (*Call-to-Action*) langsung terlihat dalam 3 detik pertama?
- [ ] Apakah navigasi melayang tidak menghalangi tombol atau form penting di bagian bawah?
- [ ] Apakah seluruh interaksi terasa responsif tanpa jeda atau lag?
