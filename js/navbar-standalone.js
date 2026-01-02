// Standalone navbar functionality (non-module version)
(function () {
    'use strict';

    // Wait for DOM to be ready
    function initNavbar() {
        // Get DOM elements
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const dropdown = document.querySelector('.dropdown');

        if (!navToggle || !navMenu) {
            console.error('Navbar elements not found');
            return;
        }

        const toggleIcon = navToggle.querySelector('i');

        // Function to toggle menu
        function toggleMenu(event) {
            event.stopPropagation();
            const isOpen = navMenu.classList.contains('active');

            // Toggle classes
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');

            // Update toggle icon
            if (toggleIcon) {
                toggleIcon.classList.toggle('fa-bars');
                toggleIcon.classList.toggle('fa-times');
            }

            // Update aria-expanded
            navToggle.setAttribute('aria-expanded', !isOpen);
        }

        // Function to close menu
        function closeMenu() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (toggleIcon) {
                toggleIcon.classList.add('fa-bars');
                toggleIcon.classList.remove('fa-times');
            }
            navToggle.setAttribute('aria-expanded', 'false');
        }

        // Set initial ARIA states
        navToggle.setAttribute('aria-label', 'Toggle menu');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-controls', 'nav-menu');
        navMenu.setAttribute('id', 'nav-menu');

        // Add event listeners
        navToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                // Don't close if it's the dropdown trigger
                if (!this.parentElement.classList.contains('dropdown')) {
                    closeMenu();
                }
            });
        });

        // Handle dropdown in mobile
        if (dropdown) {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            if (dropdownLink && dropdownContent) {
                dropdownLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    dropdownContent.classList.toggle('active');
                });
            }
        }

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

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
})();
