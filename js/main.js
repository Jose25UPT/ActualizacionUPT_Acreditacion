/**
 * EPIS UPT - Funcionalidades JavaScript
 * Separado del HTML para mejor organización
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MENÚ MÓVIL TOGGLE
    // ========================================
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = this.querySelector('.material-symbols-outlined');
            if (mobileMenu.classList.contains('hidden')) {
                icon.textContent = 'menu';
            } else {
                icon.textContent = 'close';
            }
        });
    }
    
    // ========================================
    // DROPDOWNS MÓVILES
    // ========================================
    const mobileDropdowns = document.querySelectorAll('.mobile-nav-dropdown');
    
    mobileDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.material-symbols-outlined');
            
            if (content && content.classList.contains('mobile-dropdown-content')) {
                content.classList.toggle('hidden');
                icon.textContent = content.classList.contains('hidden') ? 'expand_more' : 'expand_less';
            }
        });
    });
    
    // ========================================
    // TABS - NOTICIAS/EVENTOS
    // ========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remover active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.add('hidden'));
            
            // Activar seleccionado
            this.classList.add('active');
            document.getElementById(targetTab).classList.remove('hidden');
        });
    });
    
    // ========================================
    // BANNER SLIDER SIMPLE
    // ========================================
    const bannerSlides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        bannerSlides.forEach((slide, i) => {
            slide.classList.toggle('hidden', i !== index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % bannerSlides.length;
        showSlide(currentSlide);
    }
    
    // Auto-rotate cada 6 segundos si hay múltiples banners
    if (bannerSlides.length > 1) {
        setInterval(nextSlide, 6000);
    }
    
    // ========================================
    // AÑO DINÁMICO EN FOOTER
    // ========================================
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // ========================================
    // SMOOTH SCROLL PARA ANCLAS INTERNAS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
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
    
    // ========================================
    // DETECTAR LINK EXTERNO Y AÑADIR ATRIBUTO
    // ========================================
    document.querySelectorAll('a.external, a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname) && !link.href.startsWith('#')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('shadow-sm');
            header.classList.add('bg-white/95');
        } else {
            header.classList.remove('shadow-sm');
            header.classList.remove('bg-white/95');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
});