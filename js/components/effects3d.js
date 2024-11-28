// 3D Effects functionality
export function init3DEffects() {
    // 3D Card Effects
    function init3DCards() {
        const cards = document.querySelectorAll('.track-card, .prize-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    // 3D Hero Effect
    function initHero3D() {
        const hero = document.querySelector('.hero-content');
        if (hero) {
            document.addEventListener('mousemove', (e) => {
                if (window.innerWidth > 768) {
                    const x = e.clientX / window.innerWidth - 0.5;
                    const y = e.clientY / window.innerHeight - 0.5;
                    
                    hero.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
                }
            });
            
            document.addEventListener('mouseleave', () => {
                hero.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        }
    }

    init3DCards();
    initHero3D();
}
