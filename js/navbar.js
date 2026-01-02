// Initialize navbar functionality
export function initializeNavbar() {
    // Get DOM elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const toggleIcon = navToggle.querySelector('i');

    // Function to toggle menu
    function toggleMenu(event) {
        event.stopPropagation(); // Prevent event bubbling
        const isOpen = navMenu.classList.contains('active');

        // Toggle classes
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        // Update toggle icon
        toggleIcon.classList.toggle('fa-bars');
        toggleIcon.classList.toggle('fa-times');

        // Update aria-expanded
        navToggle.setAttribute('aria-expanded', !isOpen);
    }

    // Function to close menu
    function closeMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        toggleIcon.classList.add('fa-bars');
        toggleIcon.classList.remove('fa-times');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    // Initialize
    if (navToggle && navMenu) {
        // Set initial ARIA states
        navToggle.setAttribute('aria-label', 'Toggle menu');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-controls', 'nav-menu');
        navMenu.setAttribute('id', 'nav-menu');

        // Add event listeners
        navToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isMenuOpen = navMenu.classList.contains('active');
            const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);

            if (isMenuOpen && !isClickInside) {
                closeMenu();
            }
        });

        // Prevent menu close when clicking inside menu
        navMenu.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        // Handle escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
}

// Initialize smooth scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty anchors

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize both navbar and smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
    initializeSmoothScroll();
});
