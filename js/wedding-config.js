/**
 * ====================================================================
 * KONFIGURASI UTAMA UNDANGAN DIGITAL (WEDDING CONFIG)
 * ====================================================================
 * Anda dapat dengan mudah mengubah seluruh data undangan di file ini:
 * nama mempelai, tanggal acara, lokasi, nomor rekening, hingga musik.
 */

window.WEDDING_CONFIG = {
  // --- INFORMASI MEMPELAI PRIA & WANITA ---
  groom: {
    fullName: "Mustafa, S.Kom.",
    shortName: "Mustafa",
    parentInfo: "Putra tercinta dari Bapak H. Ahmad & Ibu Hj. Siti Aminah",
    bio: "Pria yang penuh keteguhan dan kehangatan, siap melangkah ke jenjang suci pernikahan.",
    instagram: "https://instagram.com/",
    photo: "images/molid-square.jpg" // Foto Mempelai Pria (Mustafa)
  },
  bride: {
    fullName: "Salsabila",
    shortName: "Salsabila",
    parentInfo: "Putri tercinta dari Bapak H. Mansyur & Ibu Hj. Nurhayati",
    bio: "Wanita yang anggun dan berhati mulia, menyambut masa depan penuh cinta dan berkah.",
    instagram: "https://instagram.com/",
    photo: "images/rehan-square.jpg" // Foto Mempelai Wanita (Salsabila)
  },

  // --- ACARA PERNIKAHAN & WAKTU ---
  events: {
    // Target waktu hitung mundur (Format: YYYY-MM-DDTHH:mm:ss)
    countdownTarget: "2026-11-28T09:00:00",

    akad: {
      title: "Akad Nikah",
      dayName: "Sabtu",
      dateFormatted: "28 November 2026",
      time: "08:00 WIB - Selesai",
      locationName: "Masjid Raya Baiturrahman",
      address: "Jl. Mohd. Jam No.1, Kp. Baru, Kec. Baiturrahman, Kota Banda Aceh",
      mapsUrl: "https://maps.app.goo.gl/9y1u1Z12345678"
    },
    resepsi: {
      title: "Walimatul 'Ursy / Resepsi",
      dayName: "Sabtu",
      dateFormatted: "28 November 2026",
      time: "11:00 - 17:00 WIB",
      locationName: "Grand Ballroom Hotel Hermes Palace",
      address: "Jl. T. Panglima Nyak Makam, Lambhuk, Kec. Ulee Kareng, Kota Banda Aceh",
      mapsUrl: "https://maps.app.goo.gl/8x9v8Z12345678"
    }
  },

  // --- KUTIPAN & AYAT SUCI ---
  quote: {
    verse: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
    source: "Q.S. Ar-Rum : 21"
  },

  // --- AMPLOP DIGITAL / WEDDING GIFT ---
  gifts: [
    {
      bankName: "Bank Central Asia (BCA)",
      accountNumber: "8405123456",
      accountHolder: "Mustafa",
      badge: "BCA"
    },
    {
      bankName: "Bank Syariah Indonesia (BSI)",
      accountNumber: "7123456789",
      accountHolder: "Mustafa",
      badge: "BSI"
    },
    {
      bankName: "Bank Mandiri",
      accountNumber: "1580001234567",
      accountHolder: "Salsabila",
      badge: "MANDIRI"
    }
  ],

  // Alamat kirim kado fisik (jika tamu ingin mengirim paket hadiah langsung)
  physicalGift: {
    receiver: "Mustafa / Salsabila",
    phone: "0812-3456-7890",
    address: "Jl. Teuku Umar No. 45, Desa Lamtemen, Kec. Jaya Baru, Kota Banda Aceh, 23232"
  },

  // --- AUDIO MUSIK LATAR ---
  audio: {
    // Tautan file MP3 romantis instrumental (Bisa diganti dengan file lokal 'images/audio/lagu.mp3')
    src: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=romantic-wedding-piano-112191.mp3",
    title: "Romantic Wedding Piano Instrumental"
  },

  // --- KONTAK KONFIRMASI WHATSAPP UNTUK RSVP ---
  whatsapp: {
    number: "6281234567890", // Ganti dengan nomor WhatsApp aktif berawalan 62
    defaultMessageTemplate: "Halo Mustafa & Salsabila, selamat atas pernikahannya! Saya ingin konfirmasi kehadiran:"
  }
};
