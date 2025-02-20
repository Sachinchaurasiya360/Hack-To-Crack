// Import modules
import { initializeNavbar } from './navbar.js';
import { initializeCountdown } from './countdown.js';
import { init3DCards, initHero3D, init3DTilt, init3DStats } from './3d-effects.js';
import { initScrollAnimation, initParticles } from './animations.js';
import { initializeTimeline } from './timeline.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
    initializeCountdown();
    init3DCards();
    initHero3D();
    init3DTilt();
    init3DStats();
    initScrollAnimation();
    initParticles();
    initializeTimeline();

    // Mobile menu functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        // Toggle menu
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInside = navMenu.contains(e.target) || navToggle.contains(e.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});