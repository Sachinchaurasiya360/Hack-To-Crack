// Animation functionality
export function initAnimations() {
    // Intersection Observer for Fade-in Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Committee Slider Animation
    const committeeSlides = document.querySelectorAll('.committee-slide');
    committeeSlides.forEach((slide, index) => {
        slide.style.animationDelay = `${index * 0.2}s`;
        slide.classList.add('fade-in');
    });

    // Prize Cards Animation
    const prizeCards = document.querySelectorAll('.prize-card, .special-prize-card');
    prizeCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });

    // Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('slide-in');
    });
}
