(() => {
  'use strict';

  // "Ingresar a SGT" links: URL injected into config.js at deploy time.
  const sgtUrl = (window.APP_CONFIG && window.APP_CONFIG.sgtUrl) || '';
  if (sgtUrl && sgtUrl !== '__SGT_URL__') {
    document.querySelectorAll('[data-sgt-link]').forEach((a) => { a.href = sgtUrl; });
  }

  // Scale fixed-geometry illustrations down to fit their container.
  const fits = Array.from(document.querySelectorAll('.fit[data-fit-width]'));
  const applyFit = () => {
    for (const el of fits) {
      const natural = Number(el.dataset.fitWidth);
      const cs = getComputedStyle(el.parentElement);
      const available = el.parentElement.clientWidth
        - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const scale = Math.min(1, available / natural);
      el.style.zoom = scale < 1 ? String(scale) : '';
    }
  };
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(applyFit);
    fits.forEach((el) => ro.observe(el.parentElement));
  } else {
    window.addEventListener('resize', applyFit);
  }
  applyFit();

  // Mobile/tablet menu.
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.nav__menu');
  if (nav && menuBtn) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.querySelectorAll('.nav__link').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); menuBtn.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) setOpen(false);
    });
  }

  // Highlight the nav link of the section in view.
  const links = Array.from(document.querySelectorAll('.nav__link[data-section]'));
  const byId = new Map(links.map((a) => [a.dataset.section, a]));
  const setActive = (id) => {
    links.forEach((a) => {
      const on = a.dataset.section === id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  const tracked = ['inicio', 'como-funciona', 'mejora', 'quienes-usan', 'seguimiento']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const onScroll = () => {
    const probe = window.innerHeight * 0.35;
    // Last section above the probe whose link is visible (menu links can be hidden on desktop).
    let id = tracked[0].id;
    for (const sec of tracked) {
      if (sec.getBoundingClientRect().top > probe) break;
      const link = byId.get(sec.id);
      if (link && getComputedStyle(link).display !== 'none') id = sec.id;
    }
    setActive(id);
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();
})();
