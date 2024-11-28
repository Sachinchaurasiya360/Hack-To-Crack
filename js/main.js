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
});