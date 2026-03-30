/* ============================================
   INTERACTIVIDAD - JAVASCRIPT HUMANIZADO
   ============================================ */

document.documentElement.classList.add('js');

// ============ MENÚ MÓVIL ============
const navToggle = document.querySelector('.nav-toggle');
const navMain = document.querySelector('.nav-main');
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

if (navToggle && navMain) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMain.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMain.classList.remove('active');
    });
  });
}

// ============ DROPDOWN MENU MÓVIL ============
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = toggle.closest('.nav-dropdown');
      const menu = parent.querySelector('.dropdown-menu');
      
      // Cerrar otros dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.classList.remove('active');
      });
      
      menu.classList.toggle('active');
    }
  });
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============ SCROLL REVEAL CON INTERSECTION OBSERVER ============
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Asignar delay escalonado
      const delay = ((index % 4) + 1) * 100;
      entry.target.style.animationDelay = delay + 'ms';
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Aplicar observer a elementos con animación
document.querySelectorAll('.card, .perfil-item, .objetivo-card, .atributo-box, .timeline-item, .competencia-box, .stats-box, .credential-badge').forEach(el => {
  observer.observe(el);
});

// ============ ACTIVE NAV TRACKING ============
const navTrackingOptions = {
  threshold: 0.5,
  rootMargin: '-60px 0px -50%'
};

const navTracker = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, navTrackingOptions);

// Rastrear todas las secciones con id
document.querySelectorAll('section[id], footer, .final-cta').forEach(section => {
  navTracker.observe(section);
});

// ============ RESPETO A PREFERENCIA DE MOVIMIENTO REDUCIDO ============
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = 'auto';
  document.querySelectorAll('*').forEach(el => {
    el.style.animationDuration = '0.01ms !important';
    el.style.transitionDuration = '0.01ms !important';
  });
}

// ============ CARGAR MENSAJE DE CONFIRMACIÓN ============
document.addEventListener('DOMContentLoaded', () => {
  console.log('✓ EPIS UPT - Diseño Acreditación 2026 cargado correctamente');
});
