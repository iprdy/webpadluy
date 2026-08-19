/* ==========================================================================
    | Our Story - Application JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- CONFIG ---------- */
  const BIRTHDAY_DATE = "2026-08-20"; // Format YYYY-MM-DD
  let bgAudioWasPlaying = false;

  const galleryItems = [
    {
      title: "First Romantic Photo",
      date: "September 2023",
      src: "images/1.jpeg",
      description: "Saat itu, kamu sempat dipaksa oleh temanmu untuk foto berdua denganku. Aku masih ingat betapa kagetnya aku ketika kamu langsung bersedia dan bahkan menyentuh bahuku saat berfoto. Mungkin bagi kamu itu hanya sebuah foto sederhana, tapi entah kenapa, momen kecil itu terus melekat di ingatanku."
    },
    {
      title: "Thrills & Smiles at Dufan",
      date: "May 2024",
      src: "images/8.jpeg",
      description: "Hari saat kita main dan jalan-jalan ke Dufan menjadi salah satu petualangan bersamamu yang paling berkesan. Di tengah serunya berbagai wahana, antrean panjang, dan rasa lelah, tawa dan senyuman bahagiamu adalah hadiah terbaik. Bersamamu, momen sesederhana apa pun berubah menjadi kenangan yang paling indah dan tak terlupakan."
    },
    {
      title: "Lost in the City",
      date: "March 2025",
      src: "images/7.jpeg",
      description: "Hari itu di Bogor, kenangan yang paling berbekas adalah betapa perhatiannya kamu. Saat aku sedang tidak enak badan dan sakit pada kala itu, kamu dengan penuh kasih sayang menyiapkan makanan hangat dan obat untukku. Perhatian dan kebaikan kecilmu hari itu membuatku tersadar betapa beruntungnya aku memiliki seseorang sepertimu yang selalu tulus peduli dan merawatku."
    },
    {
      title: "Making Time for Us",
      date: "May 2025",
      src: "images/2.jpeg",
      description: "Ketika kita mulai sibuk dengan urusan dan pekerjaan masing-masing, waktu bersama menjadi semakin sulit untuk ditemukan. Namun, di tengah padatnya hari dan banyaknya hal yang harus diselesaikan, kita tetap berusaha meluangkan waktu untuk satu sama lain. Mungkin waktunya tidak selalu lama, tetapi setiap kesempatan untuk bersama selalu terasa berharga."
    },
    {
      title: "So Proud of You",
      date: "January 2026",
      src: "images/3.jpeg",
      description: "Hari itu kamu baru saja menyelesaikan sidang penulisan ilmiah. Aku tahu ada banyak usaha, waktu, dan rasa lelah yang kamu lalui sampai akhirnya bisa berdiri di sana dan menyelesaikannya. Melihat kamu berhasil melewati semuanya membuatku benar-benar bangga. Mungkin itu adalah pencapaianmu, tapi entah kenapa, melihatmu berhasil selalu terasa seperti sesuatu yang juga ingin aku rayakan bersamamu."
    },
    {
      title: "A Day Just For Us",
      date: "January 2026",
      src: "images/4.jpeg",
      description: "Tidak ada cerita besar di balik foto ini, hanya dua orang yang sedang menikmati waktu bersama. Dari senyum, ekspresi imut, sampai momen-momen kecil yang mungkin terlihat sederhana, semuanya tetap menjadi bagian dari cerita kita. Kadang, kebahagiaan memang sesederhana bisa tersenyum bersama orang yang kita sayang."
    },
    {
      title: "A Birthday to Remember",
      date: "April 2026",
      src: "images/5.jpeg",
      description: "Hari ulang tahunku terasa semakin spesial karena bisa merayakannya bersamamu. Di antara tawa, perayaan kecil, dan foto-foto yang kita ambil bersama, ada satu momen yang paling aku suka, saat kita berdiri berdampingan sambil memegang kamera. Mungkin terlihat seperti foto sederhana, tapi bagiku, foto itu menyimpan salah satu kenangan yang paling ingin aku ingat."
    },
    {
      title: "My First Flowers for You",
      date: "August 2026",
      src: "images/6.jpeg",
      description: "Hari itu aku memberikan bunga pertamaku kepadamu. Mungkin terlihat sederhana, tapi sebenarnya ada banyak perasaan yang ingin kusampaikan lewat bunga itu. Aku hanya ingin melihat senyummu dan membuatmu merasa sedikit lebih spesial. Dan sampai sekarang, momen ketika pertama kali memberimu bunga tetap menjadi salah satu kenangan yang paling manis untukku."
    }
  ];

  const birthdayItems = [
    {
      title: "Your Sweet Birthday Celebration (2024)",
      date: "August 2024",
      src: "images/hbd1.jpeg",
      description: "Di tahun ini, aku melihat sisi dirimu yang semakin ceria dan penuh semangat. Kamu tumbuh menjadi seseorang yang mampu memimpin, berani mengambil keputusan, dan selalu bisa diandalkan dalam berbagai hal. Melihatmu berkembang menjadi versi dirimu yang seperti itu membuatku semakin kagum, dan tanpa kusadari, membuatku semakin jatuh cinta kepadamu."
    },
    {
      title: "Another Beautiful Year With You (2025)",
      date: "August 2025",
      src: "images/hbd2.jpeg",
      description: "Di tahun kedua kita merayakan ulang tahunmu bersama, aku melihat sosok wanita yang semakin dewasa dan bijaksana. Kamu bukan hanya seseorang yang selalu ada di sisiku, tetapi juga seseorang yang mampu membimbingku agar hidupku menjadi lebih terarah. Dari caramu berpikir, menghadapi berbagai hal, dan selalu berusaha memberikan yang terbaik, aku semakin melihat sosok wanita yang sangat aku kagumi."
    },
    {
      title: "Soon August 2026 💖",
      date: "August 2026",
      src: "images/cloud_question.svg",
      description: "Aku sangat menantikan momen bahagia ini datang lagi di tahun 2026. Di mana kita bisa merayakan hari spesialmu bersama dengan penuh tawa, kebahagiaan, dan tentu saja, lebih banyak kenangan manis yang akan kita ukir berdua. Sampai hari itu tiba, aku akan selalu tidak sabar untuk menyambutnya bersamamu! 💖"
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
    { icon: "🏡", text: "With you, I don't just feel loved, I feel home." },
    { icon: "🌅", text: "You make ordinary days feel like something worth remembering." }
  ];

  const bento = [
    { icon: "🎵", tag: "Nadin - Kekal", title: "Your Favorite Song", text: "Your absolute favorite song is 'Kekal' by Nadin Amizah, alongside your love for keshi and The Overtune. Every time this beautiful song plays, it brings so much warmth and immediately reminds me of all the sweet moments shared with you.", wide: false },
    { icon: "🥟", tag: "Dimsum Lover", title: "Your Favorite Food", text: "You absolutely love eating dimsum. No matter how long or tiring your day has been, this simple, warm comfort food never fails to immediately brighten up your mood, bring you absolute joy, and put the sweetest smile back on your face.", wide: false },
    { icon: "💧", tag: "Just Water", title: "Your Comfort", text: "Every single time we go out on our dates, you almost always order a simple glass of water. It is a small but beautiful detail that says so much about your humble soul, you truly do not need anything extra or fancy in this life to feel completely content.", wide: false },
    { icon: "🍗", tag: "Ayam Madura", title: "Your Peace", text: "For you, true peace and relaxation is as simple as sitting down and enjoying a plate of your favorite Ayam Madura. Savoring every single delicious bite of this comfort dish is always more than enough to completely clear your mind and bring you comfort after a long, tiring day.", wide: false },
    { icon: "💖", tag: "The Way You Fix Your Hijab", title: "Your Beauty", text: "The way you adjust your hijab when you're thinking, the small movement when you're nervous, the smile you try to hide but can't fully. I notice those little things, and every one makes you even more beautiful to me.", wide: true },
    { icon: "🧕", tag: "Helping Others", title: "Your Soft Spot", text: "Your incredibly soft and gentle side always shines the absolute brightest whenever you genuinely reach out to help those in need around you. The pure kindness and empathy you show to others is a rare, true beauty that I will forever admire and cherish about you.", wide: true }
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

  /* ---------- Video Surprise Modal & Easter Egg ---------- */
  const videoModal = document.getElementById('videoModal');
  const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');
  const surpriseVideo = document.getElementById('surpriseVideo');
  const easterEggBtn = document.getElementById('easterEggBtn');

  function lockEasterEgg() {
    if (!easterEggBtn) return;
    easterEggBtn.classList.add('locked');
    easterEggBtn.innerHTML = `
      <div class="easter-egg-pulse" style="display:none;"></div>
      <span class="easter-egg-icon">🔒✨</span>
      <div class="easter-egg-text">
        <strong>Tonton Video Sampai Selesai 🔒</strong>
        <span>Selesaikan videonya untuk membuka Last Surprise 💖</span>
      </div>`;
  }

  function unlockEasterEgg() {
    if (!easterEggBtn) return;
    easterEggBtn.classList.remove('locked');
    easterEggBtn.innerHTML = `
      <div class="easter-egg-pulse"></div>
      <span class="easter-egg-icon">🐣✨</span>
      <div class="easter-egg-text">
        <strong>Pstt... Easter Egg Terbuka! 🎁</strong>
        <span>Sentuh di sini untuk membuka Last Surprise 💖</span>
      </div>`;
  }

  function openVideoModal() {
    if (!videoModal) return;
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Lock easter egg when modal opens
    lockEasterEgg();

    const bgAudio = document.getElementById('bgAudio');
    if (bgAudio && !bgAudio.paused) {
      bgAudioWasPlaying = true;
      bgAudio.pause();
    }

    if (surpriseVideo) {
      surpriseVideo.currentTime = 0;
      surpriseVideo.play().catch(err => console.log("Video autoplay info:", err));
    }
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (surpriseVideo) {
      surpriseVideo.pause();
    }

    const bgAudio = document.getElementById('bgAudio');
    if (bgAudio && bgAudioWasPlaying) {
      bgAudio.play().catch(err => console.log("BG audio resume info:", err));
    }
  }

  if (surpriseVideo) {
    surpriseVideo.addEventListener('ended', () => {
      unlockEasterEgg();
      spawnStardustBurst(window.innerWidth / 2, window.innerHeight / 2);
    });
  }

  if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

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

    const vnAudio = document.getElementById('vnAudio');
    if (vnAudio) {
      vnAudio.currentTime = 0;
    }
  }

  function closeStarModal() {
    if (!starModal) return;
    starModal.classList.remove('active');
    starModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    const vnAudio = document.getElementById('vnAudio');
    const bgAudio = document.getElementById('bgAudio');
    if (vnAudio) {
      vnAudio.pause();
    }
    if (bgAudio) {
      bgAudio.volume = 1.0;
    }
  }

  if (starModalCloseBtn) starModalCloseBtn.addEventListener('click', closeStarModal);
  if (starModalBackdrop) starModalBackdrop.addEventListener('click', closeStarModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeGalleryModal();
      closeVideoModal();
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

  /* ---------- Render Birthday Gallery ---------- */
  const birthdayGrid = document.getElementById('birthdayGrid');
  if (birthdayGrid) {
    birthdayItems.forEach(item => {
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
      birthdayGrid.appendChild(card);
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

  /* ---------- Voice Note Player Controller ---------- */
  const vnAudio = document.getElementById('vnAudio');
  const vnPlayBtn = document.getElementById('vnPlayBtn');
  const vnProgressBar = document.getElementById('vnProgressBar');
  const vnProgressFill = document.getElementById('vnProgressFill');
  const vnTime = document.getElementById('vnTime');
  const vinylWrapper = document.querySelector('.vinyl-wrapper');

  if (vnAudio) {
    // Force load the voice note to preload it automatically when entering the site
    vnAudio.load();

    const formatTime = (secs) => {
      if (isNaN(secs)) return "00:00";
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    vnAudio.addEventListener('loadedmetadata', () => {
      if (vnTime) vnTime.textContent = formatTime(vnAudio.duration);
    });

    if (vnAudio.duration && vnTime) {
      vnTime.textContent = formatTime(vnAudio.duration);
    }

    vnAudio.addEventListener('timeupdate', () => {
      const progress = (vnAudio.currentTime / vnAudio.duration) * 100;
      if (vnProgressFill) vnProgressFill.style.width = `${progress}%`;
      if (vnTime) vnTime.textContent = formatTime(vnAudio.currentTime);
    });

    vnAudio.addEventListener('play', () => {
      if (vnPlayBtn) vnPlayBtn.innerHTML = '⏸';
      if (vinylWrapper) vinylWrapper.classList.add('playing');
      const bgAudio = document.getElementById('bgAudio');
      if (bgAudio && !bgAudio.paused) {
        bgAudioWasPlaying = true;
        bgAudio.volume = 0.10;
      } else {
        bgAudioWasPlaying = false;
      }
    });

    vnAudio.addEventListener('pause', () => {
      if (vnPlayBtn) vnPlayBtn.innerHTML = '▶';
      if (vinylWrapper) vinylWrapper.classList.remove('playing');
      const bgAudio = document.getElementById('bgAudio');
      if (bgAudio && bgAudioWasPlaying) {
        bgAudio.volume = 1.0;
      }
    });

    vnAudio.addEventListener('ended', () => {
      if (vnPlayBtn) vnPlayBtn.innerHTML = '▶';
      if (vinylWrapper) vinylWrapper.classList.remove('playing');
      if (vnProgressFill) vnProgressFill.style.width = '0%';
      if (vnTime && vnAudio.duration) vnTime.textContent = formatTime(vnAudio.duration);
      const bgAudio = document.getElementById('bgAudio');
      if (bgAudio && bgAudioWasPlaying) {
        bgAudio.volume = 1.0;
      }
    });

    if (vnPlayBtn) {
      vnPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (vnAudio.paused) {
          vnAudio.play().catch(err => {
            console.log("VN play failed:", err);
          });
        } else {
          vnAudio.pause();
        }
      });
    }

    if (vnProgressBar) {
      vnProgressBar.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = vnProgressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const seekTime = (clickX / width) * vnAudio.duration;
        if (!isNaN(seekTime)) {
          vnAudio.currentTime = seekTime;
        }
      });
    }
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

      // Turn off voice note when sending wish/closing modal
      if (vnAudio && !vnAudio.paused) {
        vnAudio.pause();
      }

      // Automatically close modal after 1 second so they see fireworks burst
      setTimeout(() => {
        closeStarModal();
        wishBtn.textContent = 'Kirim Harapan ke Langit ✨';
      }, 1000);
    });
  }

  /* ---------- Intro & Music Toggle ---------- */
  const introOverlay = document.getElementById('introOverlay');
  const enterBtn = document.getElementById('enterBtn');
  const bgAudio = document.getElementById('bgAudio');
  const musicToggle = document.getElementById('musicToggle');
  const musicIcon = document.getElementById('musicIcon');

  if (bgAudio) {
    // Force load the background music to preload it automatically when entering the site
    bgAudio.load();
  }

  if (enterBtn && introOverlay) {
    const handleEnter = (e) => {
      if (e) e.stopPropagation();
      introOverlay.classList.add('hide');
      document.body.classList.remove('locked');
      if (bgAudio) {
        bgAudio.play().then(() => {
          if (musicToggle) musicToggle.classList.add('playing');
          if (musicIcon) musicIcon.textContent = '🎶';
        }).catch((err) => {
          console.log("Audio play info:", err);
        });
      }
    };
    enterBtn.addEventListener('click', handleEnter);
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

  /* ---------- Buttons & Surprise Triggers ---------- */
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

  // Clicking "One Last Surprise" opens the Video Modal FIRST!
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = surpriseBtn.getBoundingClientRect();
      spawnStardustBurst(rect.left + rect.width / 2, rect.top);
      openVideoModal();
    });
  }

  if (finaleHeart) {
    finaleHeart.addEventListener('click', (e) => {
      e.stopPropagation();
      spawnStardustBurst(e.clientX, e.clientY);
      openVideoModal();
    });
  }

  // Clicking Easter Egg inside Video Modal transitions to the Voice Note Modal ONLY when unlocked!
  if (easterEggBtn) {
    easterEggBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = easterEggBtn.getBoundingClientRect();

      if (easterEggBtn.classList.contains('locked')) {
        // Locked state feedback
        spawnStardustBurst(rect.left + rect.width / 2, rect.top);
        return;
      }

      spawnStardustBurst(rect.left + rect.width / 2, rect.top);
      closeVideoModal();
      setTimeout(() => {
        openStarModal();
      }, 350);
    });
  }

})();
