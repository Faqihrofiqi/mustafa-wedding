# 💍 Undangan Pernikahan Digital Elegan & Modern (The Wedding of Mustafa & Salsabila)

Template website undangan pernikahan digital berbasis HTML5, CSS3, dan JavaScript murni dengan desain **Royal Gold & Warm Ivory** yang mewah, anggun, responsif di semua perangkat (khususnya smartphone), dan sangat mudah dikustomisasi.

---

## ✨ Fitur-Fitur Utama

1. **Cover Amplop Interaktif & Personalisasi Nama Tamu:**
   - Personalisasi nama tamu otomatis melalui URL query:
     - Contoh: `index.html?to=Bapak+Budi+Santoso`
     - Otomatis menampilkan nama tamu di cover depan dan form RSVP.
   - Efek transisi pembukaan amplop mulus saat tombol *"Buka Undangan"* ditekan.

2. **Pemutar Musik Latar (Backsound) Otomatis:**
   - Pemutar audio HTML5 native dengan ikon piringan hitam (*vinyl record*) yang berputar saat musik aktif.
   - Tombol mengambang (*floating*) untuk menjeda atau memutar kembali musik kapan saja.

3. **Hitung Mundur Waktu Nyata (Live Countdown):**
   - Menghitung mundur Hari, Jam, Menit, dan Detik menuju akad/resepsi pernikahan.
   - Tombol 1-klik untuk menyimpan acara ke **Google Calendar**.

4. **Profil Mempelai Pria & Wanita:**
   - Foto mempelai dengan frame emas elegan bertekstur, nama lengkap, gelar, nama orang tua, serta tautan Instagram.

5. **Rangkaian Acara (Akad & Walimatul 'Ursy/Resepsi):**
   - Rincian hari, tanggal, waktu, nama lokasi, dan alamat lengkap.
   - Tombol langsung terhubung ke **Google Maps** untuk navigasi tamu.

6. **Galeri Kenangan Prewedding:**
   - Tampilan galeri foto interaktif dengan slider LightGallery responsif.

7. **Amplop Digital / Wedding Gift (Cashless):**
   - Kartu rekening bank (BCA, BSI, Mandiri, dll.) lengkap dengan tombol **1-Klik Salin Nomor Rekening**.
   - Dilengkapi notifikasi *Toast* animasi saat nomor rekening tersalin.
   - Opsi alamat pengiriman untuk kado fisik.

8. **Buku Tamu & RSVP Interaktif:**
   - Form konfirmasi kehadiran (Hadir, Ragu-ragu, Tidak Hadir) dan kolom ucapan doa restu.
   - Doa yang dikirimkan langsung tersimpan dan tampil di daftar ucapan secara instan.
   - Pilihan otomatis untuk meneruskan konfirmasi kehadiran langsung ke **WhatsApp Mempelai**.

9. **Floating Bottom Navigation Bar:**
   - Navigasi bawah melayang yang nyaman dioperasikan satu tangan di smartphone untuk melompat antar seksi acara.

---

## 🛠️ Cara Mengubah Data & Kustomisasi

Seluruh data undangan telah dipusatkan dalam **1 berkas saja**:
👉 **`js/wedding-config.js`**

Anda tidak perlu mengutak-atik kode HTML yang panjang! Cukup buka file tersebut dan ubah bagian berikut:

```javascript
window.WEDDING_CONFIG = {
  // 1. Data Mempelai
  groom: {
    fullName: "Mustafa, S.Kom.",
    shortName: "Mustafa",
    parentInfo: "Putra dari Bapak H. Ahmad & Ibu Hj. Siti Aminah",
    photo: "images/groom.jpg" // Ganti dengan foto Anda
  },
  bride: {
    fullName: "Nama Pasangan, S.Farm.",
    shortName: "Nama Pasangan",
    parentInfo: "Putri dari Bapak H. Mansyur & Ibu Hj. Nurhayati",
    photo: "images/bride.jpg"
  },

  // 2. Waktu & Lokasi Acara
  events: {
    countdownTarget: "2026-11-28T09:00:00", // Waktu hitung mundur (YYYY-MM-DDTHH:mm:ss)
    akad: {
      dateFormatted: "28 November 2026",
      time: "08:00 WIB - Selesai",
      locationName: "Masjid Raya Baiturrahman",
      address: "Jl. Mohd. Jam No.1, Banda Aceh",
      mapsUrl: "https://maps.google.com/..."
    },
    resepsi: {
      dateFormatted: "28 November 2026",
      time: "11:00 - 17:00 WIB",
      locationName: "Grand Ballroom Hotel",
      address: "Jl. Protokol Utama",
      mapsUrl: "https://maps.google.com/..."
    }
  },

  // 3. Rekening Amplop Digital
  gifts: [
    {
      bankName: "Bank Central Asia (BCA)",
      accountNumber: "8405123456",
      accountHolder: "Mustafa",
      badge: "BCA"
    }
  ],

  // 4. Nomor WhatsApp untuk Menerima Konfirmasi RSVP
  whatsapp: {
    number: "6281234567890" // Berawalan 62 tanpa tanda + atau 0 di depan
  }
};
```

---

## 🎵 Mengganti Lagu Latar

Di dalam `js/wedding-config.js`:
- Anda dapat mengganti tautan pada properti `audio.src`.
- Bisa menggunakan file audio lokal: simpan file `.mp3` di folder `images/audio/` (misalnya `images/audio/wedding-song.mp3`), lalu ubah:
  ```javascript
  audio: {
    src: "images/audio/wedding-song.mp3"
  }
  ```

---

## 📸 Mengganti Foto Galeri

1. Masukkan foto-foto Anda ke dalam folder `images/gallery/`.
2. Di bagian bawah `index.html` (pada script inisialisasi LightGallery), sesuaikan daftar nama berkas foto Anda:
   ```javascript
   dynamicEl: [
     { src: 'images/gallery/foto1.jpg', thumb: 'images/gallery/foto1.jpg' },
     { src: 'images/gallery/foto2.jpg', thumb: 'images/gallery/foto2.jpg' }
   ]
   ```

---

## 🚀 Akses & Tautan GitHub Pages

- **Repositori GitHub:**  
  👉 [https://github.com/Faqihrofiqi/mustafa-wedding](https://github.com/Faqihrofiqi/mustafa-wedding)

- **Website Undangan Online (GitHub Pages):**  
  👉 **[https://faqihrofiqi.github.io/mustafa-wedding/](https://faqihrofiqi.github.io/mustafa-wedding/)**

- **Contoh Tautan Khusus untuk Tamu Undangan:**  
  👉 `https://faqihrofiqi.github.io/mustafa-wedding/?to=Bapak+Budi+Santoso`
  👉 `https://faqihrofiqi.github.io/mustafa-wedding/?to=Keluarga+Besar+Haji+Sulaiman`
