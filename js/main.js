        document.addEventListener('DOMContentLoaded', function() {
            // Script para animaciones al hacer scroll
            const animatedElements = document.querySelectorAll('.hidden-on-load');

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Percentage of the element visible to trigger
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('hidden-on-load');
                        entry.target.classList.add('animated-scroll', 'animate-fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            animatedElements.forEach(element => {
                observer.observe(element);
            });

            // Script para el menú móvil (navbar)
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const closeMobileMenuButton = document.getElementById('close-mobile-menu');
            const mainNavMenu = document.getElementById('main-nav-menu');
            const navLinks = mainNavMenu.querySelectorAll('a');

            // Function to open the mobile menu
            function openMobileMenu() {
                mainNavMenu.classList.remove('mobile-menu-hidden');
                mainNavMenu.classList.add('mobile-menu-visible');
            }

            // Function to close the mobile menu
            function closeMobileMenu() {
                mainNavMenu.classList.remove('mobile-menu-visible');
                mainNavMenu.classList.add('mobile-menu-hidden');
            }

            // Event listeners for opening and closing the menu
            mobileMenuButton.addEventListener('click', openMobileMenu);
            closeMobileMenuButton.addEventListener('click', closeMobileMenu);

            // Close mobile menu when a navigation link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Only close on mobile sizes, and if the menu is currently visible
                    if (window.innerWidth < 768 && mainNavMenu.classList.contains('mobile-menu-visible')) {
                        closeMobileMenu();
                    }
                });
            });

            // Handle window resize events for responsive menu behavior
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    // If resizing to desktop, ensure mobile-specific classes are removed
                    mainNavMenu.classList.remove('mobile-menu-hidden', 'mobile-menu-visible');
                    // Tailwind's md:flex and md:space-x-6 will take over
                } else {
                    // If resizing back to mobile, ensure it's hidden if it was not explicitly open
                    if (!mainNavMenu.classList.contains('mobile-menu-visible')) {
                        mainNavMenu.classList.add('mobile-menu-hidden');
                    }
                }
            });

            // Initial check on page load to set correct menu state based on screen size
            if (window.innerWidth >= 768) {
                // On desktop, ensure mobile classes are not applied
                mainNavMenu.classList.remove('mobile-menu-hidden', 'mobile-menu-visible');
            } else {
                // On mobile, ensure it starts hidden
                mainNavMenu.classList.add('mobile-menu-hidden');
            }
        });

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    let prevScrollPos = window.pageYOffset;
    let isHovering = false;

  // Detectar scroll
    window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (isHovering || prevScrollPos > currentScrollPos) {
      // Mostrar si se hace hover o se scrollea hacia arriba
        navbar.style.top = "0";
    } else {
      // Ocultar si se scrollea hacia abajo
        navbar.style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
    });

  // Detectar hover sobre el navbar
    navbar.addEventListener("mouseenter", () => {
    isHovering = true;
    navbar.style.top = "0";
    });

    navbar.addEventListener("mouseleave", () => {
    isHovering = false;
    // Si el usuario sigue haciendo scroll hacia abajo, ocultar
    if (window.pageYOffset > prevScrollPos) {
        navbar.style.top = "-100px";
    }
    });
    });
    document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    });
    });

    document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});