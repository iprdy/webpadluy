/* ==========================================================================
   Gladys Ayu Adelia | Our Story - Application JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- CONFIG ---------- */
  const BIRTHDAY_DATE = "2026-12-24"; // Format YYYY-MM-DD

  const galleryItems = [
    {
      title: "Underwater Dreams With You",
      date: "January 2026",
      src: "images/aquariumDate.png",
      description: "Saat berdiri berdua di depan dinding kaca akuarium raksasa, menyaksikan ribuan ikan melintas bebas di bawah pendar cahaya biru dreamlike. Kehangatan tanganmu di jemariku membuat segalanya terasa begitu sempurna."
    },
    {
      title: "Lost in the City With You",
      date: "April 2025",
      src: "images/Blok-MDate.png",
      description: "Menelusuri jalanan kota di sore hari, bergandengan tangan tanpa peduli keramaian di sekeliling. Dari foto strip kecil hingga gelak tawa di trotoar — setiap sudut kota terasa jauh lebih hangat saat bersamamu."
    },
    {
      title: "Breaking Fast Together",
      date: "March 2025",
      src: "images/bukberRicheese.jpg",
      description: "Momen sederhana berbuka puasa bersama. Canda tawa di meja makan dan tatapan manismu yang menenangkan menjadikan hidangan biasa terasa seperti santapan paling lezat di dunia."
    },
    {
      title: "A Night Just For Us",
      date: "December 2024",
      src: "images/fancyDinner.jpg",
      description: "Malam yang syahdu khusus untuk kita berdua. Di bawah pendar lampu restoran yang hangat, kita bertukar cerita, impian, dan tatapan yang mengisyaratkan betapa berharganya kita satu sama lain."
    },
    {
      title: "Competitive, But So In Love",
      date: "February 2025",
      src: "images/gamingDate.jpg",
      description: "Momen main game bareng yang seru dan penuh gelak tawa. Walau kadang kita sama-sama tak mau kalah, pada akhirnya senyuman bahagia di wajahmulah yang selalu memenangkan hatiku."
    },
    {
      title: "Part of Your Family Now",
      date: "January 2025",
      src: "images/holidayWithHerFamily.jpg",
      description: "Saat bisa berkumpul dan berlibur bersama keluarga terkasihmu. Diterima dengan begitu hangat dan melihatmu tersenyum bahagia bersama mereka adalah salah satu kado terindah dalam hidupku."
    },
    {
      title: "Quiet Moments in Our Favorite Place",
      date: "December 2024",
      src: "images/libraryDate.jpg",
      description: "Duduk bersama di sudut perpustakaan favorit yang tenang. Tanpa perlu banyak kata, hanya ditemani aroma buku dan kehadiranmu di sisiku, hatiku sudah merasa sangat utuh dan damai."
    },
    {
      title: "Creating Art, Creating Memories",
      date: "February 2025",
      src: "images/paintingDate.jpg",
      description: "Sesi melukis bersama dengan jemari berbalut cat warna-warni. Setiap goresan kuas di atas kanvas bukan sekadar menciptakan gambar, melainkan mengukir kenangan indah yang takkan pernah pudar."
    },
    {
      title: "Our First Date",
      date: "April 2024",
      src: "images/firstDate.jpg",
      description: "Kencan pertama kita yang dipenuhi rasa gugup sekaligus kebahagiaan luar biasa. Dari momen rumah hantu hingga kedai kopi kecil, hari ini menjadi awal dari perjalanan panjang cinta kita."
    },
    {
      title: "Kebun Raya Bogor with You",
      date: "November 2025",
      src: "images/kebunRayaBogor.jpeg",
      description: "Berjalan santai di bawah rindangnya pepohonan hijau Kebun Raya Bogor. Udara sejuk, gemericik angin, dan tawa bahagiamu membuat hari itu terasa begitu magis dan tak terlupakan."
    },
    {
      title: "Our First Braga Trip",
      date: "November 2025",
      src: "images/Braga.jpeg",
      description: "Menyusuri nuansa klasik Jalan Braga Bandung. Setiap sudut arsitektur bersejarah terasa jauh lebih hidup dan romantis saat kita melangkah bersama sambil menikmati malam."
    },
    {
      title: "My First Bandung Solo Trip",
      date: "October 2025",
      src: "images/firstBandung.jpeg",
      description: "Perjalanan menuju Bandung yang membawaku lebih dekat kepadamu. Karena sejauh apapun jarak Bekasi – Bandung, setiap langkahku selalu tahu ke mana tujuan akhirnya: kamu."
    }
  ];

  const reasons = [
    { icon: "😊", text: "Your smile brightens my darkest days." },
    { icon: "💭", text: "The way you think amazes me every single day." },
    { icon: "🤗", text: "Your hugs feel like home." },
    { icon: "😄", text: "You make me laugh at the silliest things." },
    { icon: "🎵", text: "Your voice is my favorite sound." },
    { icon: "👀", text: "The way you look at me with those eyes..." },
    { icon: "💪", text: "You inspire me to be better." },
    { icon: "🌟", text: "You make me feel like I'm special." },
    { icon: "🎨", text: "You're a masterpiece I could admire forever." },
    { icon: "🏃‍♀️", text: "Adventures with you are pure magic." },
    { icon: "🧠", text: "The way you explain things when you're excited is my favorite kind of chaos." },
    { icon: "☕", text: "Even doing nothing with you feels like the best part of my day." },
    { icon: "🌙", text: "Late night talks with you feel safer than silence." },
    { icon: "📖", text: "Every story you tell makes me want to know you deeper." },
    { icon: "💞", text: "You love quietly, but when you do, it's wholehearted." },
    { icon: "🕊️", text: "You bring calm into my loud world." },
    { icon: "🔥", text: "You're stronger than you think, and I admire that about you." },
    { icon: "🤍", text: "You choose kindness, even when it's hard." },
    { icon: "🏡", text: "With you, I don't just feel loved — I feel home." },
    { icon: "🌅", text: "You make ordinary days feel like something worth remembering." }
  ];

  const bento = [
    { icon: "🎵", tag: "Lo-fi & Pop", title: "Your Music", text: "You love keshi, and your favorite band is The Overtune. We've always said, 'One day we'll watch keshi together.' Someday, I want to stand next to you, singing your favorite songs under the same lights.", wide: false },
    { icon: "🥬", tag: "Simple & Honest", title: "Your Favorite", text: "You love jukut goreng. No expensive desserts, no complicated meals — just something warm, humble, and comforting. It fits you perfectly.", wide: false },
    { icon: "💧", tag: "Just Water", title: "Your Comfort", text: "Every time we go out, you order water. Always water. It says so much about you — you don't need anything extra to feel content.", wide: false },
    { icon: "🍨", tag: "Our Gelato Place", title: "Your Peace", text: "Whenever we don't know where to go, we end up getting gelato. That little place has seen our random talks, quiet moments, and everything in between.", wide: false },
    { icon: "💖", tag: "The Way You Fix Your Hijab", title: "Your Beauty", text: "The way you adjust your hijab when you're thinking, the small movement when you're nervous, the smile you try to hide but can't fully. I notice those little things, and every one makes you even more beautiful to me.", wide: true },
    { icon: "🐾", tag: "Sepi & MeyMey", title: "Your Soft Spot", text: "You have the softest heart when it comes to cats. Sepi was once a big part of your life, and now there's MeyMey by your side. Your heart is warm in ways you don't even notice. Though let's be honest — your ultimate favorite is still Satria Rhamdani.", wide: true }
  ];

  /* ---------- Gallery Lightbox Modal ---------- */
  const galleryModal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalDesc = document.getElementById('modalDesc');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openGalleryModal(item) {
    if (!galleryModal) return;
    if (modalImg) {
      modalImg.src = item.src;
      modalImg.alt = item.title;
    }
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDate) modalDate.textContent = item.date;
    if (modalDesc) modalDesc.textContent = item.description || "Setiap momen bersamamu adalah kenangan manis yang selalu kuingat dan kusimpan dalam hati.";

    galleryModal.classList.add('active');
    galleryModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeGalleryModal() {
    if (!galleryModal) return;
    galleryModal.classList.remove('active');
    galleryModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeGalleryModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeGalleryModal);

  /* ---------- Star Pop-Out Modal ---------- */
  const starModal = document.getElementById('starModal');
  const starModalCloseBtn = document.getElementById('starModalCloseBtn');
  const starModalBackdrop = document.getElementById('starModalBackdrop');
  const wishBtn = document.getElementById('wishBtn');

  function openStarModal() {
    if (!starModal) return;
    starModal.classList.add('active');
    starModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeStarModal() {
    if (!starModal) return;
    starModal.classList.remove('active');
    starModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  if (starModalCloseBtn) starModalCloseBtn.addEventListener('click', closeStarModal);
  if (starModalBackdrop) starModalBackdrop.addEventListener('click', closeStarModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeGalleryModal();
      closeStarModal();
    }
  });

  /* ---------- Render Gallery ---------- */
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'g-card reveal';
      card.innerHTML = `
        <div class="g-photo">
          <img src="${item.src}" alt="${item.title}" loading="lazy"
               onerror="this.style.display='none'; this.parentElement.innerHTML+='<svg class=&quot;ph-icon&quot; width=&quot;44&quot; height=&quot;44&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot;><rect x=&quot;3&quot; y=&quot;5&quot; width=&quot;18&quot; height=&quot;14&quot; rx=&quot;2&quot;/><circle cx=&quot;8.5&quot; cy=&quot;10&quot; r=&quot;1.5&quot;/><path d=&quot;M21 15l-5-5L5 19&quot;/></svg><span style=&quot;font-size:0.75rem;opacity:0.75;font-weight:500;&quot;>Foto Kenangan</span>'">
        </div>
        <div class="g-caption-title">${item.title}</div>
        <div class="g-caption-date">${item.date}</div>`;

      card.addEventListener('click', () => openGalleryModal(item));
      galleryGrid.appendChild(card);
    });
  }

  /* ---------- Render Reasons (Flip Cards) ---------- */
  const reasonsGrid = document.getElementById('reasonsGrid');
  if (reasonsGrid) {
    reasons.forEach(r => {
      const outer = document.createElement('div');
      outer.className = 'flip-outer reveal';
      outer.tabIndex = 0;
      outer.setAttribute('role', 'button');
      outer.innerHTML = `
        <div class="flip-inner">
          <div class="flip-face flip-front">${r.icon}</div>
          <div class="flip-face flip-back">${r.text}</div>
        </div>`;
      const toggle = () => outer.classList.toggle('flipped');
      outer.addEventListener('click', toggle);
      outer.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
      reasonsGrid.appendChild(outer);
    });
  }

  /* ---------- Render Bento Grid ---------- */
  const bentoGrid = document.getElementById('bentoGrid');
  if (bentoGrid) {
    bento.forEach(b => {
      const card = document.createElement('div');
      card.className = 'bento-card reveal' + (b.wide ? ' wide' : '');
      card.innerHTML = `
        <div>
          <div class="bento-icon">${b.icon}</div>
          <div class="bento-tag">${b.tag}</div>
          <div class="bento-title">${b.title}</div>
        </div>
        <div class="bento-text">${b.text}</div>`;
      bentoGrid.appendChild(card);
    });
  }

  /* ---------- Birthday Countdown ---------- */
  const cdGrid = document.getElementById('cdGrid');

  function nextBirthday(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const now = new Date();
    const target = new Date(year, month - 1, day, 0, 0, 0);
    if (target.getTime() <= now.getTime()) {
      target.setFullYear(now.getFullYear() + 1);
    }
    return target;
  }

  function renderCountdown() {
    if (!cdGrid) return;
    const target = nextBirthday(BIRTHDAY_DATE);
    const diff = Math.max(0, target - new Date());
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const units = [[d, 'Hari'], [h, 'Jam'], [m, 'Menit'], [s, 'Detik']];
    cdGrid.innerHTML = units.map(u => `
      <div class="cd-unit">
        <div class="cd-num">${String(u[0]).padStart(2, '0')}</div>
        <div class="cd-unit-label">${u[1]}</div>
      </div>`).join('');
  }

  renderCountdown();
  setInterval(renderCountdown, 1000);

  /* ---------- Timeline Line Fill ---------- */
  const timeline = document.getElementById('timeline');
  const timelineLineFill = document.getElementById('timelineLineFill');

  function updateTimelineProgress() {
    if (!timeline || !timelineLineFill) return;
    const rect = timeline.getBoundingClientRect();
    const viewport = window.innerHeight;
    const start = viewport * 0.72;
    const end = -rect.height * 0.55;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    timelineLineFill.style.transform = `translateX(-50%) scaleY(${progress})`;
  }

  /* ---------- Scroll Reveal ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ambient particles */
  const littleParticles = document.querySelector('.little-particles');
  if (littleParticles && !reduceMotion) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('span');
      p.className = 'little-particle';
      p.style.left = (Math.random() * 100) + '%';
      p.style.top = (40 + Math.random() * 60) + '%';
      p.style.animationDuration = (5 + Math.random() * 7) + 's';
      p.style.animationDelay = (-Math.random() * 8) + 's';
      p.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
      littleParticles.appendChild(p);
    }
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ================= DYNAMIC MULTI-COLOR STARS & STARDUST BURST ================= */
  const starsLayer = document.getElementById('starsLayer');
  const finaleSection = document.getElementById('finale');

  if (starsLayer) {
    // Rich mix of Yellow, White, and Pink stars!
    const starColors = [
      '#FFD166', '#FFB74D', '#F59E0B', // Kuning / Amber Gold
      '#FFFFFF', '#FFF8E7', '#FDFBF7', // Putih Dim / Diamond White
      '#FF9A9E', '#F43F5E', '#FFB6C1', '#FF6B8B'  // Pink / Soft Rose
    ];
    const starCount = 220; // Extra rich dense starlight sky!

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3.5 + 1.2;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';

      const chosenColor = starColors[Math.floor(Math.random() * starColors.length)];
      star.style.background = chosenColor;
      star.style.boxShadow = `0 0 ${Math.random() * 6 + 2}px ${chosenColor}`;

      const duration = (2 + Math.random() * 4) + 's';
      const delay = (Math.random() * 4) + 's';
      star.style.animation = `starFloat ${duration} ease-in-out ${delay} infinite`;

      // Click star to spawn stardust burst ONLY (does NOT open popout modal)
      star.addEventListener('click', (e) => {
        e.stopPropagation();
        spawnStardustBurst(e.clientX, e.clientY);
      });

      starsLayer.appendChild(star);
    }
  }

  /* ---------- Stardust Burst Generator on Click ---------- */
  function spawnStardustBurst(x, y) {
    const particles = ['✨', '⭐', '💫', '🌟', '💖', '🌸'];
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('div');
      p.className = 'stardust-particle';
      p.textContent = particles[Math.floor(Math.random() * particles.length)];
      p.style.left = x + 'px';
      p.style.top = y + 'px';

      const dx = (Math.random() * 180 - 90) + 'px';
      p.style.setProperty('--dx', dx);
      p.style.animationDelay = (Math.random() * 0.25) + 's';

      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1800);
    }
  }

  if (finaleSection) {
    finaleSection.addEventListener('click', (e) => {
      // Don't trigger if clicking buttons or heart
      if (e.target.closest('button') || e.target.closest('.finale-heart')) return;
      spawnStardustBurst(e.clientX, e.clientY);
    });
  }

  /* ---------- Wish Button inside Star Modal ---------- */
  if (wishBtn) {
    wishBtn.addEventListener('click', (e) => {
      const rect = wishBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      spawnStardustBurst(x, y);
      setTimeout(() => spawnStardustBurst(x - 100, y - 50), 300);
      setTimeout(() => spawnStardustBurst(x + 100, y - 50), 600);

      wishBtn.textContent = 'Harapan Terkirim ke Langit ✨💖';
      setTimeout(() => {
        wishBtn.textContent = 'Kirim Harapan ke Langit ✨';
      }, 3000);
    });
  }

  /* ---------- Intro & Music Toggle ---------- */
  const introOverlay = document.getElementById('introOverlay');
  const enterBtn = document.getElementById('enterBtn');
  const bgAudio = document.getElementById('bgAudio');
  const musicToggle = document.getElementById('musicToggle');
  const musicIcon = document.getElementById('musicIcon');

  if (enterBtn && introOverlay) {
    enterBtn.addEventListener('click', () => {
      introOverlay.classList.add('hide');
      document.body.classList.remove('locked');
      if (bgAudio) {
        bgAudio.play().then(() => {
          if (musicToggle) musicToggle.classList.add('playing');
          if (musicIcon) musicIcon.textContent = '🎶';
        }).catch(() => {
          // Autoplay blocked
        });
      }
    });
  }

  if (musicToggle && bgAudio) {
    musicToggle.addEventListener('click', () => {
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          musicToggle.classList.add('playing');
          if (musicIcon) musicIcon.textContent = '🎶';
        }).catch(() => {
          if (musicIcon) musicIcon.textContent = '🔇';
          setTimeout(() => { if (musicIcon) musicIcon.textContent = '🎵'; }, 1200);
        });
      } else {
        bgAudio.pause();
        musicToggle.classList.remove('playing');
        if (musicIcon) musicIcon.textContent = '🎵';
      }
    });
  }

  /* ---------- Scroll Progress Bar ---------- */
  const progressBar = document.getElementById('progressBar');
  function updateProgress() {
    if (!progressBar) return;
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    progressBar.style.width = (height > 0 ? (scrolled / height) * 100 : 0) + '%';
  }

  document.addEventListener('scroll', updateProgress, { passive: true });
  document.addEventListener('scroll', updateTimelineProgress, { passive: true });
  window.addEventListener('resize', updateTimelineProgress);
  updateProgress();
  updateTimelineProgress();

  /* ---------- Buttons ---------- */
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const target = document.getElementById('timeline');
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  }

  const surpriseBtn = document.getElementById('surpriseBtn');
  const finaleHeart = document.getElementById('finaleHeart');

  // Pop-out Modal opens ONLY when clicking the explicit button or big heart
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = surpriseBtn.getBoundingClientRect();
      spawnStardustBurst(rect.left + rect.width / 2, rect.top);
      openStarModal();
    });
  }

  if (finaleHeart) {
    finaleHeart.addEventListener('click', (e) => {
      e.stopPropagation();
      spawnStardustBurst(e.clientX, e.clientY);
      openStarModal();
    });
  }

})();
