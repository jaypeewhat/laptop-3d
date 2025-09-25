// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeAnimations();
    
    // Handle navigation
    setupNavigation();
    
    // Setup download functionality
    setupDownloadButtons();
    
    // Add scroll effects
    setupScrollEffects();
});

function initializeAnimations() {
    // Add entrance animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe download cards
    document.querySelectorAll('.download-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

function setupNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

function setupDownloadButtons() {
    // Android APK download URL
    const apkUrl = 'https://www.mediafire.com/file/qjxw7nqyvdsm268/app-release.apk/file';
    
    window.downloadApp = function() {
        trackDownload('auto', 'android');
        window.open(apkUrl, '_blank');
    };
    
    window.downloadAndroid = function() {
        trackDownload('manual', 'android');
        window.open(apkUrl, '_blank');
    };
    
    window.scrollToFeatures = function() {
        document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    };
}

function trackDownload(type, os) {
    // Analytics tracking for downloads
    console.log(`Download tracked: ${type} - ${os}`);
    
    // Add your analytics code here
    // Example: gtag('event', 'download', { method: type, os: os });
    
    // Show download feedback
    showDownloadFeedback(os);
}

function showDownloadFeedback(os) {
    // Create and show download notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #3ddc84;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    const osName = os === 'android' ? 'Android' : os.charAt(0).toUpperCase() + os.slice(1);
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fab fa-android"></i>
            <span>APK Download started!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function setupScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual && scrolled < window.innerHeight) {
            heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add floating animation to laptop parts
    const parts = document.querySelectorAll('.part');
    parts.forEach((part, index) => {
        setInterval(() => {
            const randomY = Math.sin(Date.now() * 0.001 + index) * 10;
            const randomX = Math.cos(Date.now() * 0.0015 + index) * 5;
            part.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
        }, 50);
    });
}

// Add interactive hover effects to feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Add typing effect to hero title (optional enhancement)
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero-text h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.innerHTML;
    const words = originalText.split(' ');
    let currentWord = 0;
    
    heroTitle.innerHTML = '';
    
    function typeNextWord() {
        if (currentWord < words.length) {
            heroTitle.innerHTML += words[currentWord] + ' ';
            currentWord++;
            setTimeout(typeNextWord, 200);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeNextWord, 500);
}

// Initialize advanced effects
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect (commented out by default)
    // addTypingEffect();
    
    // Add particle effect to hero section
    createParticleEffect();
});

function createParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(96, 165, 250, 0.3);
            border-radius: 50%;
            pointer-events: none;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-particle ${5 + Math.random() * 10}s linear infinite;
        `;
        
        hero.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}