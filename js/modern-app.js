/**
 * ====================================================================
 * MODERN WEDDING APPLICATION LOGIC
 * ====================================================================
 */

(function () {
  'use strict';

  var config = window.WEDDING_CONFIG || {};

  // 1. Inisialisasi Data dari Config ke DOM
  function populateConfigData() {
    if (!config.groom || !config.bride) return;

    // Nama Mempelai di Cover & Hero
    var coupleDisplay = config.groom.shortName + " & " + config.bride.shortName;
    document.querySelectorAll('.couple-names-display').forEach(function (el) {
      el.textContent = coupleDisplay;
    });

    // Profil Pria
    var groomNameEl = document.getElementById('groom-full-name');
    var groomParentEl = document.getElementById('groom-parent-info');
    var groomPhotoEl = document.getElementById('groom-photo');
    if (groomNameEl) groomNameEl.textContent = config.groom.fullName;
    if (groomParentEl) groomParentEl.textContent = config.groom.parentInfo;
    if (groomPhotoEl && config.groom.photo) groomPhotoEl.src = config.groom.photo;

    // Profil Wanita
    var brideNameEl = document.getElementById('bride-full-name');
    var brideParentEl = document.getElementById('bride-parent-info');
    var bridePhotoEl = document.getElementById('bride-photo');
    if (brideNameEl) brideNameEl.textContent = config.bride.fullName;
    if (brideParentEl) brideParentEl.textContent = config.bride.parentInfo;
    if (bridePhotoEl && config.bride.photo) bridePhotoEl.src = config.bride.photo;

    // Rangkaian Acara (Akad)
    if (config.events && config.events.akad) {
      var akad = config.events.akad;
      var akadDateEl = document.getElementById('akad-date');
      var akadTimeEl = document.getElementById('akad-time');
      var akadLocationEl = document.getElementById('akad-location');
      var akadAddressEl = document.getElementById('akad-address');
      var akadMapsEl = document.getElementById('akad-maps-link');

      if (akadDateEl) akadDateEl.textContent = akad.dayName + ", " + akad.dateFormatted;
      if (akadTimeEl) akadTimeEl.textContent = akad.time;
      if (akadLocationEl) akadLocationEl.textContent = akad.locationName;
      if (akadAddressEl) akadAddressEl.textContent = akad.address;
      if (akadMapsEl) akadMapsEl.href = akad.mapsUrl;
    }

    // Rangkaian Acara (Resepsi)
    if (config.events && config.events.resepsi) {
      var resepsi = config.events.resepsi;
      var resepsiDateEl = document.getElementById('resepsi-date');
      var resepsiTimeEl = document.getElementById('resepsi-time');
      var resepsiLocationEl = document.getElementById('resepsi-location');
      var resepsiAddressEl = document.getElementById('resepsi-address');
      var resepsiMapsEl = document.getElementById('resepsi-maps-link');

      if (resepsiDateEl) resepsiDateEl.textContent = resepsi.dayName + ", " + resepsi.dateFormatted;
      if (resepsiTimeEl) resepsiTimeEl.textContent = resepsi.time;
      if (resepsiLocationEl) resepsiLocationEl.textContent = resepsi.locationName;
      if (resepsiAddressEl) resepsiAddressEl.textContent = resepsi.address;
      if (resepsiMapsEl) resepsiMapsEl.href = resepsi.mapsUrl;
    }

    // Kutipan Ayat
    if (config.quote) {
      var quoteTextEl = document.getElementById('quote-verse-text');
      var quoteSourceEl = document.getElementById('quote-source-text');
      if (quoteTextEl) quoteTextEl.textContent = config.quote.verse;
      if (quoteSourceEl) quoteSourceEl.textContent = config.quote.source;
    }

    // Amplop Digital / Rekening Bank
    renderGifts();

    // Kado Fisik
    if (config.physicalGift) {
      var giftReceiverEl = document.getElementById('physical-gift-receiver');
      var giftAddressEl = document.getElementById('physical-gift-address');
      if (giftReceiverEl) giftReceiverEl.textContent = config.physicalGift.receiver + " (" + config.physicalGift.phone + ")";
      if (giftAddressEl) giftAddressEl.textContent = config.physicalGift.address;
    }
  }

  // Render Kartu Hadiah / Bank
  function renderGifts() {
    var container = document.getElementById('gift-cards-container');
    if (!container || !config.gifts || !config.gifts.length) return;

    var html = '';
    config.gifts.forEach(function (gift) {
      html += `
        <div class="gift-card holographic-gold">
          <div class="gift-bank-info">
            <span class="gift-bank-badge">${gift.badge || gift.bankName}</span>
            <div class="gift-account-number" id="acc-${gift.accountNumber}">${gift.accountNumber}</div>
            <div class="gift-account-holder">a.n ${gift.accountHolder}</div>
          </div>
          <button type="button" class="btn-copy-account" onclick="window.copyToClipboard('${gift.accountNumber}', this)">
            <i class="icon-copy"></i> Salin No. Rekening
          </button>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // 2. Baca Nama Tamu dari Parameter URL (?to=...)
  function initRecipientName() {
    var urlParams = new URLSearchParams(window.location.search);
    var recipient = urlParams.get('to') || urlParams.get('u') || urlParams.get('kpd') || 'Tamu Undangan';

    // Bersihkan karakter jika ada
    var cleanName = recipient.replace(/\+/g, ' ');
    var recipientEl = document.getElementById('cover-recipient-name');
    if (recipientEl) {
      recipientEl.textContent = cleanName;
    }

    // Otomatis isikan ke input RSVP jika belum diisi
    var rsvpNameInput = document.getElementById('rsvp-name');
    if (rsvpNameInput && recipient !== 'Tamu Undangan') {
      rsvpNameInput.value = cleanName;
    }
  }

  // 3. Audio & Cover Unlock Controller
  var audioEl = document.getElementById('wedding-audio');
  var musicBtn = document.getElementById('floating-music-btn');
  var isPlaying = false;

  function initAudio() {
    if (config.audio && config.audio.src && audioEl) {
      audioEl.src = config.audio.src;
    }
  }

  function playMusic() {
    if (!audioEl) return;
    audioEl.play().then(function () {
      isPlaying = true;
      if (musicBtn) {
        musicBtn.classList.add('rotating-vinyl', 'playing');
        var discIcon = musicBtn.querySelector('i');
        if (discIcon) discIcon.className = 'icon-disc';
      }
    }).catch(function (err) {
      console.warn("Autoplay audio blocked or error:", err);
    });
  }

  function pauseMusic() {
    if (!audioEl) return;
    audioEl.pause();
    isPlaying = false;
    if (musicBtn) {
      musicBtn.classList.remove('rotating-vinyl', 'playing');
      var discIcon = musicBtn.querySelector('i');
      if (discIcon) discIcon.className = 'icon-controller-play';
    }
  }

  function toggleMusic() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  // Buka Undangan
  var openBtn = document.getElementById('btn-open-invitation');
  if (openBtn) {
    openBtn.addEventListener('click', function () {
      var cover = document.getElementById('modern-cover');
      if (cover) {
        cover.classList.add('cover-opened');
      }
      document.body.classList.remove('invitation-locked');

      // Putar musik
      playMusic();

      // Trigger animasi Waypoints jika tersedia
      if (window.$ && typeof $.fn.waypoint === 'function') {
        setTimeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 300);
      }
    });
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
  }

  // 4. Countdown Timer Logic
  function initCountdown() {
    var targetStr = (config.events && config.events.countdownTarget) ? config.events.countdownTarget : "2026-11-28T09:00:00";
    var targetDate = new Date(targetStr).getTime();

    var daysEl = document.getElementById('count-days');
    var hoursEl = document.getElementById('count-hours');
    var minutesEl = document.getElementById('count-minutes');
    var secondsEl = document.getElementById('count-seconds');

    if (!daysEl) return;

    function update() {
      var now = new Date().getTime();
      var distance = targetDate - now;

      if (distance < 0) {
        distance = 0;
      }

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = days < 10 ? '0' + days : days;
      hoursEl.textContent = hours < 10 ? '0' + hours : hours;
      minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
      secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    update();
    setInterval(update, 1000);
  }

  // 5. Salin Nomor Rekening & Toast
  window.copyToClipboard = function (text, btnElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(fallback);
    } else {
      fallback();
    }

    function fallback() {
      var temp = document.createElement("input");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      onSuccess();
    }

    function onSuccess() {
      showToast("✓ Nomor rekening " + text + " berhasil disalin!");
      if (btnElement) {
        var originalText = btnElement.innerHTML;
        btnElement.classList.add('copied');
        btnElement.innerHTML = '<i class="icon-check"></i> Tersalin!';
        setTimeout(function () {
          btnElement.classList.remove('copied');
          btnElement.innerHTML = originalText;
        }, 2200);
      }
    }
  };

  function showToast(message) {
    var toast = document.getElementById('modern-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 2800);
  }

  // 6. Buku Tamu & RSVP Interaktif
  var STORAGE_KEY = "wedding_wishes_mustafa_v1";

  var defaultWishes = [
    {
      name: "Budi Santoso & Keluarga",
      status: "attending",
      message: "Selamat menempuh hidup baru untuk Mustafa dan pasangan! Semoga senantiasa sakinah, mawaddah, warahmah.",
      time: "Baru saja"
    },
    {
      name: "Rizky Firmansyah",
      status: "attending",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khoir. Lancar sampai hari H!",
      time: "1 jam yang lalu"
    },
    {
      name: "Siti Rahmawati",
      status: "tentative",
      message: "Selamat ya Mustafa! Semoga acaranya berkah dan selalu dilimpahi kebahagiaan.",
      time: "3 jam yang lalu"
    }
  ];

  function getStoredWishes() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : defaultWishes;
    } catch (e) {
      return defaultWishes;
    }
  }

  function saveWishes(wishes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {
      console.warn("Storage quota or error:", e);
    }
  }

  function renderWishes() {
    var listContainer = document.getElementById('wishes-list');
    if (!listContainer) return;

    var wishes = getStoredWishes();
    var html = '';

    wishes.forEach(function (w) {
      var badgeClass = 'badge-attending';
      var badgeLabel = 'Hadir';

      if (w.status === 'not-attending') {
        badgeClass = 'badge-not-attending';
        badgeLabel = 'Tidak Hadir';
      } else if (w.status === 'tentative') {
        badgeClass = 'badge-tentative';
        badgeLabel = 'Ragu-ragu';
      }

      html += `
        <div class="wish-item">
          <div class="wish-header">
            <span class="wish-author">${escapeHtml(w.name)}</span>
            <span class="wish-status-badge ${badgeClass}">${badgeLabel}</span>
          </div>
          <div class="wish-message">${escapeHtml(w.message)}</div>
          <div class="wish-time">${escapeHtml(w.time || 'Baru saja')}</div>
        </div>
      `;
    });

    listContainer.innerHTML = html;
  }

  function escapeHtml(string) {
    var div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
  }

  var rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameInput = document.getElementById('rsvp-name');
      var statusInput = document.getElementById('rsvp-status');
      var messageInput = document.getElementById('rsvp-message');
      var sendWaCheckbox = document.getElementById('rsvp-send-wa');

      var name = nameInput ? nameInput.value.trim() : '';
      var status = statusInput ? statusInput.value : 'attending';
      var message = messageInput ? messageInput.value.trim() : '';

      if (!name || !message) {
        showToast("Mohon lengkapi nama dan doa restu Anda.");
        return;
      }

      var newWish = {
        name: name,
        status: status,
        message: message,
        time: "Baru saja"
      };

      var current = getStoredWishes();
      current.unshift(newWish);
      saveWishes(current);
      renderWishes();

      showToast("✓ Terima kasih atas doa restu Anda!");

      // Kirim via WhatsApp jika dicentang
      if (sendWaCheckbox && sendWaCheckbox.checked && config.whatsapp && config.whatsapp.number) {
        var statusText = status === 'attending' ? 'Hadir' : (status === 'not-attending' ? 'Tidak Hadir' : 'Ragu-ragu');
        var waMsg = `${config.whatsapp.defaultMessageTemplate}\n\n*Nama:* ${name}\n*Kehadiran:* ${statusText}\n*Ucapan:* ${message}`;
        var waUrl = `https://api.whatsapp.com/send?phone=${config.whatsapp.number}&text=${encodeURIComponent(waMsg)}`;
        window.open(waUrl, '_blank');
      }

      // Reset form pesan
      if (messageInput) messageInput.value = '';
    });
  }

  // 7. Bottom Dock Active Spy
  function initDockScroll() {
    var dockLinks = document.querySelectorAll('.floating-bottom-dock .dock-item');
    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY + 200;

      dockLinks.forEach(function (link) {
        var targetId = link.getAttribute('href');
        if (!targetId || targetId.charAt(0) !== '#') return;
        var section = document.querySelector(targetId);
        if (section) {
          var top = section.offsetTop;
          var height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            dockLinks.forEach(function (l) { l.classList.remove('active'); });
            link.classList.add('active');
          }
        }
      });
    });
  }

  // 8. Efek Animasi Motion Kelopak Bunga Melayang
  function initFallingPetals() {
    var container = document.getElementById('falling-petals');
    if (!container) return;

    var petalCount = 16;
    for (var i = 0; i < petalCount; i++) {
      createPetal(container);
    }

    function createPetal(parent) {
      var petal = document.createElement('div');
      petal.className = 'petal';

      var size = Math.random() * 10 + 12; // 12px - 22px
      petal.style.width = size + 'px';
      petal.style.height = (size * 1.35) + 'px';
      petal.style.left = (Math.random() * 96 + 2) + '%';

      var duration = Math.random() * 5 + 7; // 7s - 12s
      var delay = Math.random() * 8;
      petal.style.animationDuration = duration + 's';
      petal.style.animationDelay = delay + 's';

      parent.appendChild(petal);
    }
  }

  // 9. Floating Love Reaction & Particle Burst (Gen-Z Delight)
  function initLoveReaction() {
    var loveBtn = document.getElementById('floating-love-btn');
    var loveCounterEl = document.getElementById('love-counter');
    if (!loveBtn || !loveCounterEl) return;

    var STORAGE_LOVE_KEY = "mustafa_salsabila_love_count";
    var currentCount = parseInt(localStorage.getItem(STORAGE_LOVE_KEY) || "128", 10);
    loveCounterEl.textContent = currentCount;

    var heartEmojis = ['💖', '💕', '❤️', '✨', '🌸', '💐', '🥰', '💍'];

    loveBtn.addEventListener('click', function () {
      currentCount++;
      loveCounterEl.textContent = currentCount;
      localStorage.setItem(STORAGE_LOVE_KEY, currentCount);

      // Spawn burst particles
      var burstCount = Math.floor(Math.random() * 3) + 3;
      var rect = loveBtn.getBoundingClientRect();
      var originX = rect.left + rect.width / 2;
      var originY = rect.top;

      for (var i = 0; i < burstCount; i++) {
        spawnBurstHeart(originX, originY, heartEmojis[Math.floor(Math.random() * heartEmojis.length)]);
      }
    });

    function spawnBurstHeart(x, y, emoji) {
      var particle = document.createElement('div');
      particle.className = 'heart-burst-particle';
      particle.textContent = emoji;

      var offsetX = (Math.random() - 0.5) * 60;
      var rot = (Math.random() - 0.5) * 45;
      particle.style.left = (x + offsetX) + 'px';
      particle.style.top = y + 'px';
      particle.style.setProperty('--rot', rot + 'deg');

      document.body.appendChild(particle);

      setTimeout(function () {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1600);
    }
  }

  // 10. Framer Motion Style Staggered Scroll Reveal
  function initScrollReveal() {
    var revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      });

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealElements.forEach(function (el) {
        el.classList.add('revealed');
      });
    }
  }

  // 11. Subtle 3D Card Spring Tilt on Pointer Move (Desktop / Tablet)
  function initCardTiltPhysics() {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch screens

    var cards = document.querySelectorAll('.luxury-card');
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = ((y - centerY) / centerY) * -3.5;
        var rotateY = ((x - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // DOM Ready Execution
  document.addEventListener('DOMContentLoaded', function () {
    populateConfigData();
    initRecipientName();
    initAudio();
    initCountdown();
    renderWishes();
    initDockScroll();
    initFallingPetals();
    initLoveReaction();
    initScrollReveal();
    initCardTiltPhysics();
  });

})();
