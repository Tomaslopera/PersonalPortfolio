/* nav.js — injects nav + footer. Call initReveal() after rendering page content. */
(function () {
  const pages = [
    { href: 'index.html',      label: 'Home'       },
    { href: 'projects.html',   label: 'Projects'   },
    { href: 'experience.html', label: 'Experience' },
    { href: 'education.html',  label: 'Education'  },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const cvButton = DATA.cvPath
    ? `<a href="${DATA.cvPath}" download class="nav-cv-btn">Download CV</a>`
    : '';

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="main-nav">
      <a href="index.html" class="nav-logo">${DATA.nameShort}</a>
      <ul class="nav-links">
        ${pages.map(p => `<li><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
      </ul>
      <div class="nav-right">
        ${cvButton}
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-drawer" id="nav-drawer" aria-hidden="true">
      <ul class="nav-drawer-links">
        ${pages.map(p => `<li><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
      </ul>
      <div class="nav-drawer-footer">
        <div class="nav-drawer-social">
          <a href="${DATA.github}" target="_blank" class="nav-drawer-social-link">GitHub ↗</a>
          <a href="${DATA.linkedin}" target="_blank" class="nav-drawer-social-link">LinkedIn ↗</a>
        </div>
        ${DATA.cvPath ? `<a href="${DATA.cvPath}" download class="nav-drawer-cv">Download CV</a>` : ''}
        <span class="nav-drawer-location">${DATA.location}</span>
      </div>
    </div>
    <div class="nav-overlay" id="nav-overlay"></div>`);

  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="footer-name">${DATA.name}</div>
      <div class="footer-copy">Data &amp; AI · ${DATA.university} · ${DATA.location}</div>
      <div class="footer-links">
        <a href="${DATA.github}" target="_blank">GitHub</a>
        <a href="${DATA.linkedin}" target="_blank">LinkedIn</a>
        <a href="projects.html">Projects</a>
        <a href="experience.html">Experience</a>
        <a href="education.html">Education</a>
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
  drawer.querySelectorAll('a:not([download])').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();

/* ── Called by each page after injecting dynamic content ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}