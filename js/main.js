// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2024-03-15T09:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Schedule Tabs
function initScheduleTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const schedules = document.querySelectorAll('.day-schedule');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.getAttribute('data-day');
            
            // Update active states
            tabBtns.forEach(b => b.classList.remove('active'));
            schedules.forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`day${day}`).classList.add('active');
        });
    });
}

// Active Navigation Highlight
function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

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

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the form data to your server
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    document.querySelectorAll('.track-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
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

// Particle Animation
function initParticles() {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    const particleCount = 50;
    const colors = ['#2196f3', '#00ff9d', '#ff3366'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.transform = `scale(${Math.random()})`;
        particle.style.opacity = Math.random();
        particle.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
        particleContainer.appendChild(particle);
    }
}

// Scroll Animation
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.track-card, .prize-card, .timeline-item, .stat-item, .faq-item').forEach(el => {
        el.classList.add('animate-hidden');
        observer.observe(el);
    });
}

// 3D Tilt Effect
function init3DTilt() {
    const cards = document.querySelectorAll('.track-card, .prize-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 768) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// 3D Stats Movement Effect
function init3DStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            item.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(20px)
            `;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateZ(0px)
            `;
        });
    });
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initScheduleTabs();
    updateActiveSection();
    init3DCards();
    initHero3D();
    initParticles();
    initScrollAnimation();
    init3DTilt();
});

window.addEventListener('load', () => {
    init3DStats();
});
