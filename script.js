// Simple Header sticky effect
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Simple reveal animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .trust-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease-out';
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const navWrapper = document.querySelector('.nav-wrapper');
const navOverlay = document.querySelector('.nav-overlay');

function toggleMenu() {
    navWrapper.classList.toggle('active');
    navOverlay.classList.toggle('active');
    // Prevent scrolling on body when menu is open
    if (navWrapper.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

if (mobileMenuBtn && mobileCloseBtn && navOverlay) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileCloseBtn.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);
}
