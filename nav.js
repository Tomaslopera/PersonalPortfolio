/* nav.js — injects nav + footer for the single-page site. Call initReveal() after rendering page content. */
(function () {
  const sections = [
    { href: '#hero',       label: 'Home'       },
    { href: '#about',      label: 'About'      },
    { href: '#experience', label: 'Experience' },
    { href: '#projects',   label: 'Projects'   },
    { href: '#education',  label: 'Education'  },
  ];

  /* Social icons — GitHub / LinkedIn / Mail / WhatsApp */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.64h.05c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.76V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2.3V17h18V7.3l-8.4 6.3a1 1 0 0 1-1.2 0L3 7.3Zm1.5-.3 7.5 5.6L19.5 7H4.5Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5l-1.42 5.18 5.3-1.39A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.17-.43-4.54-1.24l-.33-.19-3.14.82.84-3.06-.21-.32A8.15 8.15 0 0 1 3.86 12c0-4.5 3.66-8.16 8.16-8.16 4.5 0 8.16 3.66 8.16 8.16s-3.64 8.18-8.14 8.18Z"/></svg>',
  };
  const socials = [
    { href: DATA.github,                 label: 'GitHub',   icon: ICONS.github,   external: true  },
    { href: DATA.linkedin,                label: 'LinkedIn', icon: ICONS.linkedin, external: true  },
    { href: `mailto:${DATA.email}`,       label: 'Email',    icon: ICONS.mail,     external: false },
    { href: DATA.whatsapp,                label: 'WhatsApp', icon: ICONS.whatsapp, external: true  },
  ];
  const socialLinksHTML = (className) => socials.map(s => `
    <a href="${s.href}" ${s.external ? 'target="_blank" rel="noopener"' : ''} class="${className}" aria-label="${s.label}">${s.icon}</a>
  `).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="main-nav">
      <a href="#hero" class="nav-logo">${DATA.nameShort}</a>
      <ul class="nav-links">
        ${sections.map(s => `<li><a href="${s.href}">${s.label}</a></li>`).join('')}
      </ul>
      <div class="nav-right">
        <div class="nav-social">${socialLinksHTML('nav-social-link')}</div>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-drawer" id="nav-drawer" aria-hidden="true">
      <ul class="nav-drawer-links">
        ${sections.map(s => `<li><a href="${s.href}">${s.label}</a></li>`).join('')}
      </ul>
      <div class="nav-drawer-footer">
        <div class="nav-drawer-social">${socialLinksHTML('nav-drawer-social-link')}</div>
        <span class="nav-drawer-location">${DATA.location}</span>
      </div>
    </div>
    <div class="nav-overlay" id="nav-overlay"></div>`);

  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="footer-name">${DATA.name}</div>
      <div class="footer-links">
        <a href="${DATA.github}" target="_blank">GitHub</a>
        <a href="${DATA.linkedin}" target="_blank">LinkedIn</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#showcase">More</a>
      </div>
    </footer>`);

  /* Hamburger */
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('nav-drawer');
  const overlay   = document.getElementById('nav-overlay');

  function openMenu() {
    drawer.classList.add('open'); overlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    drawer.classList.remove('open'); overlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', () => drawer.classList.contains('open') ? closeMenu() : openMenu());
  overlay.addEventListener('click', closeMenu);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* Scrollspy — highlight the nav link for the section currently in view.
     Scroll-position based (not IntersectionObserver) so short/trailing sections
     near the bottom of the page — Certifications, Academic, Skills — still get
     picked up correctly even once there's no more room below them to scroll. */
  const navAnchors = document.querySelectorAll('.nav-links a, .nav-drawer-links a');
  const spySections = sections.map(s => document.querySelector(s.href)).filter(Boolean);
  function updateActiveSection() {
    const probe = window.scrollY + window.innerHeight * 0.3;
    let current = spySections[0];
    for (const el of spySections) {
      if (el.offsetTop <= probe) current = el;
    }
    const href = `#${current.id}`;
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === href));
  }
  let spyTicking = false;
  window.addEventListener('scroll', () => {
    if (spyTicking) return;
    spyTicking = true;
    requestAnimationFrame(() => { updateActiveSection(); spyTicking = false; });
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection();
})();

/* ── Called after dynamic content is injected ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
