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
      '<nav class="layout-navbar layout-navbar-epis sticky top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/10 bg-primary shadow-lg">' +
      '  <div class="flex justify-between items-center px-6 md:px-10 py-4 max-w-screen-2xl mx-auto">' +
      '    <div class="flex items-center gap-4">' +
      '      <a href="' + root + 'index.html" class="flex items-center gap-3 group transition-transform hover:scale-[1.02]">' +
      '        <img src="' + root + 'img/logoepis.png" alt="Logo EPIS" class="h-10 md:h-12 w-auto object-contain drop-shadow-md brightness-0 invert" />' +
      '        <div class="flex flex-col">' +
      '          <span class="text-lg md:text-xl font-headline font-bold tracking-tight text-white leading-tight">EPIS</span>' +
      '          <span class="text-[10px] md:text-[11px] text-white/80 font-bold uppercase tracking-[0.2em]">Ingeniería de Sistemas</span>' +
      '        </div>' +
      '      </a>' +
      '    </div>' +
      '    <div class="hidden lg:flex items-center gap-2 desktop-menu">' +
      '      <a class="text-white/90 hover:text-white hover:bg-white/10 transition-all py-2.5 px-4 font-bold text-sm rounded-full" href="' + pages + 'malla-curricular.html">Malla Curricular</a>' +
      '      <div class="dropdown">' +
      '        <a class="dropdown-trigger flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/10 transition-all py-2.5 px-4 font-bold text-sm rounded-full" href="#">Acreditación <span class="material-symbols-outlined text-lg">expand_more</span></a>' +
      '        <div class="dropdown-menu min-w-[280px] p-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl mt-2">' +
      '          <a href="' + pages + 'mision-vision.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">visibility</span></div>' +
      '            <span class="font-bold text-sm">Misión y Visión</span>' +
      '          </a>' +
      '          <a href="' + pages + 'comites-programa.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">groups</span></div>' +
      '            <span class="font-bold text-sm">Comités del Programa</span>' +
      '          </a>' +
      '          <a href="' + pages + 'objetivos-educacionales.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">target</span></div>' +
      '            <span class="font-bold text-sm">Objetivos Educacionales</span>' +
      '          </a>' +
      '          <a href="' + pages + 'atributos-del-graduado.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">school</span></div>' +
      '            <span class="font-bold text-sm">Atributos del Graduado</span>' +
      '          </a>' +
      '          <a href="' + pages + 'plan-de-estudios.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">menu_book</span></div>' +
      '            <span class="font-bold text-sm">Plan de Estudios</span>' +
      '          </a>' +
      '        </div>' +
      '      </div>' +
      '      <div class="dropdown">' +
      '        <a class="dropdown-trigger flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/10 transition-all py-2.5 px-4 font-bold text-sm rounded-full" href="#">Recursos <span class="material-symbols-outlined text-lg">expand_more</span></a>' +
      '        <div class="dropdown-menu min-w-[320px] p-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl mt-2">' +
      '          <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary/50">Comunidad</div>' +
      '          <a href="' + pages + 'documentos-estudiantes.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">person</span></div>' +
      '            <div class="flex flex-col"><span class="font-bold text-sm">Estudiantes</span><span class="text-[10px] text-on-surface-variant">Documentos y guías</span></div>' +
      '          </a>' +
      '          <a href="' + pages + 'documentos-docentes.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">psychology</span></div>' +
      '            <div class="flex flex-col"><span class="font-bold text-sm">Docentes</span><span class="text-[10px] text-on-surface-variant">Portafolio y formatos</span></div>' +
      '          </a>' +
      '          <div class="h-px bg-primary/10 my-2 mx-2"></div>' +
      '          <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary/50">Calidad</div>' +
      '          <a href="' + pages + 'documentos-icacit.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-tertiary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">verified</span></div>' +
      '            <div class="flex flex-col"><span class="font-bold text-sm">ICACIT</span><span class="text-[10px] text-on-surface-variant">Documentos de acreditación</span></div>' +
      '          </a>' +
      '          <a href="' + pages + 'estadisticas-academicas.html" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 group transition-colors">' +
      '            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">analytics</span></div>' +
      '            <div class="flex flex-col"><span class="font-bold text-sm">Estadísticas</span><span class="text-[10px] text-on-surface-variant">Indicadores académicos</span></div>' +
      '          </a>' +
      '        </div>' +
      '      </div>' +
      '      <a class="text-white/90 hover:text-white hover:bg-white/10 transition-all py-2.5 px-4 font-bold text-sm rounded-full" href="' + pages + 'concurso-proyectos.html">Concurso</a>' +
      '    </div>' +
      '    <div class="flex items-center gap-2">' +
      '      <button id="global-search-btn" class="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-all" aria-label="Buscar en el sitio">' +
      '        <span class="material-symbols-outlined text-2xl">search</span>' +
      '      </button>' +
      '      <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-all">' +
      '        <span class="material-symbols-outlined text-2xl">menu</span>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '  <!-- Mobile Menu -->' +
      '  <div id="mobile-menu" class="mobile-menu lg:hidden fixed inset-x-0 top-[73px] bg-primary/95 backdrop-blur-xl border-b border-outline-variant/10 shadow-2xl overflow-hidden max-h-0 transition-all duration-500">' +
      '    <div class="p-6 space-y-4">' +
      '      <a href="' + pages + 'malla-curricular.html" class="flex items-center gap-4 p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors font-bold">Malla Curricular</a>' +
      '      <div class="space-y-2">' +
      '        <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/50">Acreditación</div>' +
      '        <div class="grid grid-cols-2 gap-2">' +
      '          <a href="' + pages + 'mision-vision.html" class="p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Misión</a>' +
      '          <a href="' + pages + 'comites-programa.html" class="p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Comités</a>' +
      '          <a href="' + pages + 'objetivos-educacionales.html" class="p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Objetivos</a>' +
      '          <a href="' + pages + 'atributos-del-graduado.html" class="p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Atributos</a>' +
      '        </div>' +
      '      </div>' +
      '      <div class="space-y-2">' +
      '        <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/50">Recursos</div>' +
      '        <div class="space-y-2">' +
      '          <a href="' + pages + 'documentos-estudiantes.html" class="flex items-center gap-4 p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Documentos Estudiantes</a>' +
      '          <a href="' + pages + 'documentos-docentes.html" class="flex items-center gap-4 p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Documentos Docentes</a>' +
      '          <a href="' + pages + 'documentos-icacit.html" class="flex items-center gap-4 p-4 rounded-2xl bg-white/10 text-white text-sm font-bold">Documentos ICACIT</a>' +
      '        </div>' +
      '      </div>' +
      '      <a href="' + pages + 'concurso-proyectos.html" class="flex items-center gap-4 p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors font-bold">Concurso de Proyectos</a>' +
      '      <a href="http://epis.upt.edu.pe/acreditacion/index.php/inicio/contactos" class="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white text-primary font-bold">Contáctanos <span class="material-symbols-outlined">mail</span></a>' +
      '    </div>' +
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
    var root = getBaseToRoot();
    var pages = getBaseToPages();
    
    return '' +
      '<footer class="bg-primary text-white pt-20 pb-10 border-t border-white/10">' +
      '  <div class="max-w-screen-2xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">' +
      '    <!-- Brand Column -->' +
      '    <div class="space-y-6">' +
      '      <div class="flex items-center gap-3">' +
      '        <img src="' + root + 'img/logoepis.png" alt="Logo EPIS" class="h-12 w-auto object-contain brightness-0 invert" />' +
      '        <div class="flex flex-col">' +
      '          <span class="text-xl font-headline font-bold text-white">EPIS</span>' +
      '          <span class="text-[10px] text-white/70 font-bold uppercase tracking-widest">Ingeniería de Sistemas</span>' +
      '        </div>' +
      '      </div>' +
      '      <p class="text-white/70 text-sm leading-relaxed">' +
      '        Formando profesionales líderes en ingeniería de sistemas con excelencia académica y compromiso social desde la Universidad Privada de Tacna.' +
      '      </p>' +
      '      <div class="flex gap-4">' +
      '        <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"><span class="material-symbols-outlined text-xl">facebook</span></a>' +
      '        <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"><span class="material-symbols-outlined text-xl">language</span></a>' +
      '      </div>' +
      '    </div>' +
      '    ' +
      '    <!-- Quick Links -->' +
      '    <div>' +
      '      <h4 class="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Navegación</h4>' +
      '      <ul class="space-y-4">' +
      '        <li><a href="' + root + 'index.html" class="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Inicio</a></li>' +
      '        <li><a href="' + pages + 'malla-curricular.html" class="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Malla Curricular</a></li>' +
      '        <li><a href="' + pages + 'concurso-proyectos.html" class="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Concurso de Proyectos</a></li>' +
      '        <li><a href="' + pages + 'estadisticas-academicas.html" class="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/30"></span> Estadísticas</a></li>' +
      '      </ul>' +
      '    </div>' +
      '    ' +
      '    <!-- Acreditación -->' +
      '    <div>' +
      '      <h4 class="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Acreditación</h4>' +
      '      <ul class="space-y-4">' +
      '        <li><a href="' + pages + 'mision-vision.html" class="text-white/70 hover:text-white text-sm transition-colors">Misión y Visión</a></li>' +
      '        <li><a href="' + pages + 'objetivos-educacionales.html" class="text-white/70 hover:text-white text-sm transition-colors">Objetivos Educacionales</a></li>' +
      '        <li><a href="' + pages + 'atributos-del-graduado.html" class="text-white/70 hover:text-white text-sm transition-colors">Atributos del Graduado</a></li>' +
      '        <li><a href="' + pages + 'documentos-icacit.html" class="text-white/70 hover:text-white text-sm transition-colors">Documentación ICACIT</a></li>' +
      '      </ul>' +
      '    </div>' +
      '    ' +
      '    <!-- Contact -->' +
      '    <div class="space-y-6">' +
      '      <h4 class="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Contacto</h4>' +
      '      <div class="space-y-4">' +
      '        <div class="flex items-start gap-3">' +
      '          <span class="material-symbols-outlined text-white/70 text-xl">location_on</span>' +
      '          <p class="text-white/70 text-sm leading-snug">Av. Jorge Basadre Grohmann s/n, Pocollay - Tacna, Perú</p>' +
      '        </div>' +
      '        <div class="flex items-center gap-3">' +
      '          <span class="material-symbols-outlined text-white/70 text-xl">call</span>' +
      '          <p class="text-white/70 text-sm font-bold">(052) 427212 - Anexo 435</p>' +
      '        </div>' +
      '        <div class="flex items-center gap-3">' +
      '          <span class="material-symbols-outlined text-white/70 text-xl">mail</span>' +
      '          <a href="mailto:epis@upt.edu.pe" class="text-white/70 hover:text-white text-sm font-bold transition-colors">epis@upt.edu.pe</a>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  ' +
      '  <!-- Bottom Bar -->' +
      '  <div class="max-w-screen-2xl mx-auto px-6 md:px-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">' +
      '    <p class="text-white/50 text-[11px] font-bold uppercase tracking-widest">' +
      '      © 2024 Escuela Profesional de Ingeniería de Sistemas - UPT' +
      '    </p>' +
      '    <div class="flex items-center gap-8">' +
      '      <a href="#top" class="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-transform">' +
      '        Volver arriba <span class="material-symbols-outlined">arrow_upward</span>' +
      '      </a>' +
      '    </div>' +
      '  </div>' +
      '</footer>';
  }

  function initSharedBehaviors() {
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function () {
        var isOpen = mobileMenu.classList.contains('max-h-[100vh]');
        if (isOpen) {
          mobileMenu.classList.remove('max-h-[100vh]', 'opacity-100', 'py-6');
          mobileMenu.classList.add('max-h-0', 'opacity-0', 'py-0');
          mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-2xl">menu</span>';
        } else {
          mobileMenu.classList.remove('max-h-0', 'opacity-0', 'py-0');
          mobileMenu.classList.add('max-h-[100vh]', 'opacity-100', 'py-6');
          mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-2xl">close</span>';
        }
      });
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('max-h-[100vh]', 'opacity-100', 'py-6');
          mobileMenu.classList.add('max-h-0', 'opacity-0', 'py-0');
          mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-2xl">menu</span>';
        });
      });
      document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
          mobileMenu.classList.remove('max-h-[100vh]', 'opacity-100', 'py-6');
          mobileMenu.classList.add('max-h-0', 'opacity-0', 'py-0');
          mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-2xl">menu</span>';
        }
      });
    }

    var desktopDropdowns = document.querySelectorAll('.layout-navbar .dropdown');
    desktopDropdowns.forEach(function (dropdown) {
      var trigger = dropdown.querySelector('.dropdown-trigger');
      var menu = dropdown.querySelector('.dropdown-menu');
      if (!trigger || !menu) return;

      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        var isOpen = dropdown.classList.contains('open');
        
        desktopDropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.classList.remove('open');
            var otherMenu = other.querySelector('.dropdown-menu');
            if (otherMenu) {
              otherMenu.classList.add('opacity-0', 'invisible', 'translate-y-2');
              otherMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
          }
        });

        if (isOpen) {
          dropdown.classList.remove('open');
          menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
          menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
        } else {
          dropdown.classList.add('open');
          menu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
          menu.classList.add('opacity-100', 'visible', 'translate-y-0');
        }
      });
    });

    document.addEventListener('click', function (event) {
      desktopDropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('open');
          var menu = dropdown.querySelector('.dropdown-menu');
          if (menu) {
            menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
            menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
          }
        }
      });
    });

    // Ensure dropdowns start hidden but with correct transition classes
    desktopDropdowns.forEach(function(dropdown) {
      var menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.add('transition-all', 'duration-300', 'opacity-0', 'invisible', 'translate-y-2');
      }
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