export function init3DCards() {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

export function initHero3D() {
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.hero-content');
    
    hero.addEventListener('mousemove', e => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        content.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}

export function init3DTilt() {
    const elements = document.querySelectorAll('.tilt-effect');
    
    elements.forEach(element => {
        element.addEventListener('mousemove', e => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;
            
            element.style.transform = `perspective(1000px) rotateX(${percentY * 10}deg) rotateY(${percentX * 10}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

export function init3DStats() {
    const statsContainer = document.querySelector('.about-stats');
    const statItems = document.querySelectorAll('.stat-item');
    
    if (!statsContainer) return;
    
    statsContainer.addEventListener('mousemove', e => {
        const rect = statsContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        statItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const itemCenterX = itemRect.left + itemRect.width / 2 - rect.left;
            const itemCenterY = itemRect.top + itemRect.height / 2 - rect.top;
            
            const deltaX = mouseX - itemCenterX;
            const deltaY = mouseY - itemCenterY;
            
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
            
            const rotateX = (deltaY / maxDistance) * 20;
            const rotateY = -(deltaX / maxDistance) * 20;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
    
    statsContainer.addEventListener('mouseleave', () => {
        statItems.forEach(item => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}
