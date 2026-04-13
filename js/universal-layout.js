(function () {
  function isPageFile() {
    return window.location.pathname.toLowerCase().includes('/pages/');
  }

  function getBaseToPages() {
    return isPageFile() ? './' : 'pages/';
  }

  function getBaseToRoot() {
    return isPageFile() ? '../' : './';
  }

  function navbarHtml() {
    var pages = getBaseToPages();
    var root = getBaseToRoot();

    return '' +
      '<nav class="layout-navbar layout-navbar-epis fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/20">' +
      '  <div class="flex justify-between items-center px-6 md:px-10 py-5 md:py-6 max-w-screen-2xl mx-auto">' +
      '    <div class="flex items-center gap-3">' +
      '      <img src="' + root + 'img/logoepis.png" alt="Logo EPIS" class="h-11 md:h-12 w-auto object-contain drop-shadow-sm" />' +
      '      <span class="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-headline">Escuela Profesional de Ingenieria de Sistemas</span>' +
      '      <span class="hidden md:inline text-sm text-primary font-label uppercase tracking-wider">EPIS-UPT</span>' +
      '    </div>' +
      '    <div class="hidden md:flex items-center gap-3 desktop-menu">' +
      '      <a class="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors py-3 px-2 font-semibold text-base lg:text-lg rounded-md" href="' + pages + 'malla-curricular.html">Malla Curricular</a>' +
      '      <div class="dropdown">' +
      '        <a class="dropdown-trigger flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors py-3 px-2 font-semibold text-base lg:text-lg rounded-md" href="#">Acreditacion<span class="material-symbols-outlined text-base">expand_more</span></a>' +
      '        <div class="dropdown-menu min-w-[340px] p-0">' +
      '          <div class="p-3">' +
      '            <a href="' + pages + 'mision-vision.html" class="font-semibold text-primary mb-2 block">Mision y Vision</a>' +
      '            <a href="' + pages + 'comites-programa.html" class="font-semibold text-primary mb-2 block">Comites del Programa</a>' +
      '            <a href="' + pages + 'objetivos-educacionales.html" class="font-semibold text-primary mb-2 block">Objetivos Educacionales (OE)</a>' +
      '            <a href="' + pages + 'atributos-del-graduado.html" class="font-semibold text-primary mb-2 block">Atributos del Graduado (AT)</a>' +
      '            <a href="' + pages + 'plan-de-estudios.html" class="font-semibold text-primary mb-2 block">Plan de Estudios</a>' +
      '            <a href="' + pages + 'malla-curricular.html" class="font-semibold text-primary mb-2 block">Malla Curricular</a>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      '      <div class="dropdown">' +
      '        <a class="dropdown-trigger flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors py-3 px-2 font-semibold text-base lg:text-lg rounded-md" href="#">Recursos<span class="material-symbols-outlined text-base">expand_more</span></a>' +
      '        <div class="dropdown-menu">' +
      '          <a href="#" class="category-label">Para Estudiantes</a>' +
      '          <a href="' + pages + 'documentos-estudiantes.html">Documentos para Estudiantes</a>' +
      '          <a href="' + pages + 'estadisticas-academicas.html">Estadisticas Academicas</a>' +
      '          <div class="divider"></div>' +
      '          <a href="#" class="category-label">Para Docentes</a>' +
      '          <a href="' + pages + 'documentos-docentes.html">Documentos para Docentes</a>' +
      '          <a href="' + pages + 'documentos-icacit.html">Documentos ICACIT</a>' +
      '        </div>' +
      '      </div>' +
      '      <a class="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors py-3 px-2 font-semibold text-base lg:text-lg rounded-md" href="' + pages + 'concurso-proyectos.html">Concurso</a>' +
      '    </div>' +
      '    <div class="flex items-center gap-3 md:gap-6">' +
      '      <button id="global-search-btn" class="material-symbols-outlined text-neutral-900 hover:text-primary transition-colors p-2" aria-label="Buscar en el sitio">search</button>' +
      '      <button id="mobile-menu-btn" class="md:hidden material-symbols-outlined text-neutral-900 hover:text-primary transition-colors p-2">menu</button>' +
      '    </div>' +
      '  </div>' +
      '  <div id="mobile-menu" class="mobile-menu md:hidden">' +
      '    <a href="' + pages + 'malla-curricular.html" class="font-semibold text-primary block text-base">Malla Curricular</a>' +
      '    <a href="#" class="font-semibold text-primary mt-2 block text-base">Acreditacion</a>' +
      '    <div class="mobile-submenu">' +
      '      <a href="' + pages + 'mision-vision.html">Mision y Vision</a>' +
      '      <a href="' + pages + 'comites-programa.html">Comites del Programa</a>' +
      '      <a href="' + pages + 'objetivos-educacionales.html">Objetivos Educacionales (OE)</a>' +
      '      <a href="' + pages + 'atributos-del-graduado.html">Atributos del Graduado (AT)</a>' +
      '      <a href="' + pages + 'plan-de-estudios.html">Plan de Estudios</a>' +
      '    </div>' +
      '    <a href="#" class="font-semibold text-primary mt-2 block text-base">Recursos</a>' +
      '    <div class="mobile-submenu">' +
      '      <a href="' + pages + 'documentos-estudiantes.html">Documentos Estudiantes</a>' +
      '      <a href="' + pages + 'documentos-docentes.html">Documentos Docentes</a>' +
      '      <a href="' + pages + 'documentos-icacit.html">Documentos ICACIT</a>' +
      '      <a href="' + pages + 'estadisticas-academicas.html">Estadisticas Academicas</a>' +
      '    </div>' +
      '    <a href="' + pages + 'concurso-proyectos.html" class="font-semibold text-primary mt-2 block text-base">Concurso de Proyectos</a>' +
      '    <a href="http://epis.upt.edu.pe/acreditacion/index.php/inicio/contactos" class="mt-2 font-semibold text-tertiary">Contactenos</a>' +
      '  </div>' +
      '</nav>';
  }

  function searchModalHtml() {
    return '' +
      '<div id="site-search" class="site-search" aria-hidden="true">' +
      '  <div class="site-search-backdrop" data-close-search="true"></div>' +
      '  <div class="site-search-panel" role="dialog" aria-modal="true" aria-label="Buscar en EPIS">' +
      '    <div class="site-search-head">' +
      '      <span class="material-symbols-outlined">search</span>' +
      '      <input id="site-search-input" type="text" placeholder="Buscar pagina, seccion o documento..." autocomplete="off" />' +
      '      <button id="site-search-close" class="material-symbols-outlined" aria-label="Cerrar buscador">close</button>' +
      '    </div>' +
      '    <div class="site-search-hint">Presiona Enter para abrir el primer resultado.</div>' +
      '    <ul id="site-search-results" class="site-search-results"></ul>' +
      '  </div>' +
      '</div>';
  }

  function footerHtml() {
    return '' +
        '<footer class="layout-footer layout-footer-epis">' +
        '  <div class="footer-brand">' +
        '    <img src="' + getBaseToRoot() + 'img/logoepis.png" alt="Logo EPIS" class="h-10 md:h-11 w-auto object-contain" />' +
        '    <p>EPIS UPT · Ingenieria de Sistemas</p>' +
        '  </div>' +
        '  <a class="back-top" href="#top">Volver arriba</a>' +
      '</footer>';
  }

  function initSharedBehaviors() {
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.textContent = mobileMenuBtn.textContent === 'menu' ? 'close' : 'menu';
      });
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('active');
          mobileMenuBtn.textContent = 'menu';
        });
      });
      document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
          mobileMenu.classList.remove('active');
          mobileMenuBtn.textContent = 'menu';
        }
      });
    }

    var desktopDropdowns = document.querySelectorAll('.layout-navbar .dropdown');
    desktopDropdowns.forEach(function (dropdown) {
      var trigger = dropdown.querySelector('.dropdown-trigger');
      if (!trigger) {
        return;
      }
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        desktopDropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.classList.remove('open');
          }
        });
        dropdown.classList.toggle('open');
      });
    });

    document.addEventListener('click', function (event) {
      desktopDropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('open');
        }
      });
    });

    var reveals = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (element) { observer.observe(element); });

    initSearch();
  }

  function getSearchIndex() {
    var pages = getBaseToPages();
    return [
      { title: 'Inicio EPIS', description: 'Presentacion y portada principal', href: pages.replace('pages/', './') === './' ? './index.html' : '../index.html' },
      { title: 'Mision y Vision', description: 'Identidad institucional y objetivos', href: pages + 'mision-vision.html' },
      { title: 'Comites del Programa', description: 'Comite CMC, diseno curricular y tecnico', href: pages + 'comites-programa.html' },
      { title: 'Objetivos Educacionales', description: 'Resultados OE del programa', href: pages + 'objetivos-educacionales.html' },
      { title: 'Atributos del Graduado', description: 'Atributos AT del programa', href: pages + 'atributos-del-graduado.html' },
      { title: 'Plan de Estudios', description: 'Cursos, ciclos y creditos', href: pages + 'plan-de-estudios.html' },
      { title: 'Malla Curricular', description: 'Vista de malla y estructura', href: pages + 'malla-curricular.html' },
      { title: 'Concurso de Proyectos', description: 'Ediciones y bases', href: pages + 'concurso-proyectos.html' },
      { title: 'Documentos Estudiantes', description: 'Guias y formatos academicos', href: pages + 'documentos-estudiantes.html' },
      { title: 'Documentos Docentes', description: 'Portafolio, silabo y CV', href: pages + 'documentos-docentes.html' },
      { title: 'Documentos ICACIT', description: 'Documentos digitales y generales ICACIT', href: pages + 'documentos-icacit.html' },
      { title: 'Estadisticas Academicas', description: 'Matriculados y graduados', href: pages + 'estadisticas-academicas.html' }
    ];
  }

  function initSearch() {
    var searchBtn = document.getElementById('global-search-btn');
    var modal = document.getElementById('site-search');
    var input = document.getElementById('site-search-input');
    var closeBtn = document.getElementById('site-search-close');
    var results = document.getElementById('site-search-results');
    if (!searchBtn || !modal || !input || !closeBtn || !results) {
      return;
    }

    var index = getSearchIndex();

    function render(items) {
      if (!items.length) {
        results.innerHTML = '<li class="search-empty">Sin resultados. Prueba con otra palabra.</li>';
        return;
      }
      results.innerHTML = items.map(function (item) {
        return '<li><a href="' + item.href + '"><strong>' + item.title + '</strong><span>' + item.description + '</span></a></li>';
      }).join('');
    }

    function filter(query) {
      var q = query.trim().toLowerCase();
      if (!q) {
        render(index);
        return index;
      }
      var filtered = index.filter(function (item) {
        return (item.title + ' ' + item.description).toLowerCase().indexOf(q) !== -1;
      });
      render(filtered);
      return filtered;
    }

    function openSearch() {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      filter('');
      setTimeout(function () { input.focus(); }, 30);
    }

    function closeSearch() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      input.value = '';
    }

    searchBtn.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);

    modal.addEventListener('click', function (event) {
      if (event.target && event.target.getAttribute('data-close-search') === 'true') {
        closeSearch();
      }
    });

    input.addEventListener('input', function () {
      filter(input.value);
    });

    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        var items = filter(input.value);
        if (items.length) {
          window.location.href = items[0].href;
        }
      }
      if (event.key === 'Escape') {
        closeSearch();
      }
    });

    document.addEventListener('keydown', function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
      }
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeSearch();
      }
    });
  }

  function mountLayout() {
    var headerHost = document.getElementById('app-navbar');
    if (headerHost) {
      headerHost.innerHTML = navbarHtml();
    }

    var footerHost = document.getElementById('app-footer');
    if (footerHost) {
      footerHost.innerHTML = footerHtml();
    }

    if (!document.getElementById('site-search')) {
      document.body.insertAdjacentHTML('beforeend', searchModalHtml());
    }

    initSharedBehaviors();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountLayout);
  } else {
    mountLayout();
  }
})();