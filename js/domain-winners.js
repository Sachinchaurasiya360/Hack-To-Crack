// Domain Winners Lightbox Functionality with Auto-Scroll and Navigation
(function () {
    'use strict';

    function initDomainWinnersLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        const domainCards = document.querySelectorAll('.domain-card');
        const domainGallery = document.querySelector('.domain-gallery');

        let currentIndex = 0;
        let autoScrollInterval;

        if (!lightbox || !lightboxImg || !lightboxCaption) {
            return; // Exit if elements don't exist
        }

        // Auto-scroll functionality
        function startAutoScroll() {
            if (!domainGallery) return;

            autoScrollInterval = setInterval(() => {
                const scrollAmount = domainGallery.scrollLeft + 370; // Card width + gap
                const maxScroll = domainGallery.scrollWidth - domainGallery.clientWidth;

                if (scrollAmount >= maxScroll) {
                    domainGallery.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    domainGallery.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 1000); // Scroll every 3 seconds
        }

        function stopAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
            }
        }

        // Start auto-scroll on page load
        startAutoScroll();

        // Pause auto-scroll on hover
        if (domainGallery) {
            domainGallery.addEventListener('mouseenter', stopAutoScroll);
            domainGallery.addEventListener('mouseleave', startAutoScroll);
        }

        // Open lightbox when clicking on domain card
        domainCards.forEach((card, index) => {
            card.addEventListener('click', function () {
                currentIndex = index;
                showImage(currentIndex);
            });
        });

        function showImage(index) {
            const card = domainCards[index];
            const img = card.querySelector('img');
            const domain = card.getAttribute('data-domain');

            lightbox.classList.add('active');
            lightboxImg.src = img.src;
            lightboxCaption.textContent = domain + ' Domain Winner';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        // Navigate to previous image
        if (prevBtn) {
            prevBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + domainCards.length) % domainCards.length;
                showImage(currentIndex);
            });
        }

        // Navigate to next image
        if (nextBtn) {
            nextBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % domainCards.length;
                showImage(currentIndex);
            });
        }

        // Close lightbox when clicking the X button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + domainCards.length) % domainCards.length;
                showImage(currentIndex);
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % domainCards.length;
                showImage(currentIndex);
            }
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDomainWinnersLightbox);
    } else {
        initDomainWinnersLightbox();
    }
})();
