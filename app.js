/* ============================================
   INTERACTIVIDAD - REDISENO UPT
   ============================================ */

document.documentElement.classList.add('js');

const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navMain = document.querySelector('.nav-main');
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const mediaMobile = window.matchMedia('(max-width: 860px)');

const toggleHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
};

const closeMobileNav = () => {
  if (!navToggle || !navMain) return;
  navToggle.classList.remove('active');
  navMain.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle && navMain) {
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    const isActive = navMain.classList.toggle('active');
    navToggle.classList.toggle('active', isActive);
    navToggle.setAttribute('aria-expanded', String(isActive));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });
}

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    if (!mediaMobile.matches) return;

    event.preventDefault();
    const parent = toggle.closest('.nav-dropdown');
    const menu = parent ? parent.querySelector('.dropdown-menu') : null;
    if (!menu) return;

    document.querySelectorAll('.dropdown-menu').forEach((item) => {
      if (item !== menu) item.classList.remove('active');
    });

    menu.classList.toggle('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function onAnchorClick(event) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;

      entry.target.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16, rootMargin: '0px 0px -42px 0px' }
);

document
  .querySelectorAll('.card, .perfil-item, .objetivo-card, .atributo-box, .timeline-item, .competencia-box, .credential-badge, .plan-column')
  .forEach((element) => revealObserver.observe(element));

const navTracker = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');
      if (!id) return;

      document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { threshold: 0.5, rootMargin: '-76px 0px -45%' }
);

document.querySelectorAll('section[id]').forEach((section) => navTracker.observe(section));

document.addEventListener('click', (event) => {
  if (!mediaMobile.matches) return;
  if (!navMain || !navMain.classList.contains('active')) return;
  if (event.target.closest('.header-container')) return;
  closeMobileNav();
});

window.addEventListener('resize', () => {
  if (!mediaMobile.matches) {
    closeMobileNav();
    document.querySelectorAll('.dropdown-menu').forEach((menu) => menu.classList.remove('active'));
  }
});

window.addEventListener('scroll', toggleHeaderState, { passive: true });
toggleHeaderState();

document.addEventListener('DOMContentLoaded', () => {
  console.log('EPIS UPT 2026: rediseño visual cargado');
});
