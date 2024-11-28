export function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Add animation classes
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add('timeline-animate');
    });

    // Intersection Observer for timeline items
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('timeline-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        }
    );

    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Add hover effects
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline-dot');
            if (dot) {
                dot.style.transform = 'translateX(-50%) scale(1.5)';
                dot.style.boxShadow = '0 0 30px rgba(78,250,174,0.8)';
            }
        });

        item.addEventListener('mouseleave', () => {
            const dot = item.querySelector('.timeline-dot');
            if (dot) {
                dot.style.transform = 'translateX(-50%) scale(1)';
                dot.style.boxShadow = '0 0 20px rgba(78,250,174,0.5)';
            }
        });
    });
}
