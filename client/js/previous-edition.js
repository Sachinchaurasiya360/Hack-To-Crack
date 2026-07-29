import { initializeNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
    initializeGlimpses();
});

function initializeGlimpses() {
    const scrollContainer = document.querySelector('.glimpses-grid');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');
    
    if (scrollContainer && prevBtn && nextBtn) {
        const scrollAmount = 270; // 250px card width + 20px gap
        let autoScrollInterval;
        let isUserInteracting = false;

        // Function to scroll to next item
        function scrollNext() {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                // If we're at the end, scroll back to start smoothly
                scrollContainer.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }

        // Start auto-scroll with shorter interval
        function startAutoScroll() {
            stopAutoScroll(); // Clear any existing interval
            autoScrollInterval = setInterval(() => {
                if (!isUserInteracting) {
                    scrollNext();
                }
            }, 2000); // Scroll every 2 seconds
        }

        // Stop auto-scroll
        function stopAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
            }
        }

        // Button click handlers
        prevBtn.addEventListener('click', () => {
            isUserInteracting = true;
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(() => {
                isUserInteracting = false;
            }, 500);
        });
        
        nextBtn.addEventListener('click', () => {
            isUserInteracting = true;
            scrollNext();
            setTimeout(() => {
                isUserInteracting = false;
            }, 500);
        });

        // Mouse/Touch event handlers
        scrollContainer.addEventListener('mouseenter', () => {
            isUserInteracting = true;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            setTimeout(() => {
                isUserInteracting = false;
            }, 500);
        });

        let isDragging = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            isUserInteracting = true;
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDragging = false;
            setTimeout(() => {
                isUserInteracting = false;
            }, 500);
        });

        // Touch events for mobile
        scrollContainer.addEventListener('touchstart', () => {
            isUserInteracting = true;
        });

        scrollContainer.addEventListener('touchend', () => {
            setTimeout(() => {
                isUserInteracting = false;
            }, 500);
        });

        // Start auto-scrolling immediately
        startAutoScroll();

        // Handle visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        });

        // Restart auto-scroll when window is focused
        window.addEventListener('focus', startAutoScroll);
        window.addEventListener('blur', stopAutoScroll);
    }
}
