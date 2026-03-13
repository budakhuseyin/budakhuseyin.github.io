// ===========================
// Particles.js Configuration - ENHANCED
// ===========================
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#667eea', '#764ba2', '#4facfe', '#f093fb']
            },
            shape: {
                type: ['circle', 'triangle', 'edge'],
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.8,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.5,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#667eea',
                opacity: 0.3,
                width: 1.8
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 800,
                    rotateY: 1400
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: ['grab', 'bubble']
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 220,
                    line_linked: {
                        opacity: 0.7
                    }
                },
                bubble: {
                    distance: 200,
                    size: 8,
                    duration: 2,
                    opacity: 0.8
                },
                push: {
                    particles_nb: 8
                }
            }
        },
        retina_detect: true
    });
}

// ===========================
// Dark Mode Toggle - ENHANCED
// ===========================
// ===========================
// Dark Mode Toggle - ENHANCED
// ===========================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    body.classList.add('dark-mode');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// Toggle functionality with enhanced animation
if (darkModeToggle) {
    const icon = darkModeToggle.querySelector('i');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Add rotation and scale animation
        darkModeToggle.style.transform = 'rotate(360deg) scale(1.3)';
        setTimeout(() => {
            darkModeToggle.style.transform = '';
        }, 400);

        if (body.classList.contains('dark-mode')) {
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
            localStorage.setItem('darkMode', 'true');

            // Trigger confetti effect
            createConfetti();
        } else {
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
            localStorage.setItem('darkMode', 'false');

            // Trigger stars effect
            createStars();
        }
    });
}

// ===========================
// Confetti Effect (Light Mode)
// ===========================
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#4facfe', '#f093fb'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.opacity = '1';
            confetti.style.transition = 'all 2s ease-out';
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = window.innerHeight + 'px';
                confetti.style.opacity = '0';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            }, 10);

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }, i * 30);
    }
}

// ===========================
// Stars Effect (Dark Mode)
// ===========================
function createStars() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.innerHTML = '⭐';
            star.style.position = 'fixed';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.fontSize = (Math.random() * 20 + 10) + 'px';
            star.style.pointerEvents = 'none';
            star.style.zIndex = '9999';
            star.style.opacity = '0';
            star.style.transition = 'all 1s ease-out';
            document.body.appendChild(star);

            setTimeout(() => {
                star.style.opacity = '1';
                star.style.transform = 'scale(1.5) rotate(180deg)';
            }, 10);

            setTimeout(() => {
                star.style.opacity = '0';
                star.style.transform = 'scale(0) rotate(360deg)';
            }, 800);

            setTimeout(() => {
                star.remove();
            }, 1800);
        }, i * 50);
    }
}

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-card, .link-item, .section-header, .skill-item, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(el);
});

// ===========================
// Enhanced Link Card Interactions
// ===========================
const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(15px) scale(1.03)';

        const icon = this.querySelector('.link-icon-wrapper');
        icon.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(0) scale(1)';

        const icon = this.querySelector('.link-icon-wrapper');
        icon.style.boxShadow = '';
    });

    link.addEventListener('click', function (e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===========================
// Typing Effect
// ===========================
const typingElement = document.querySelector('.typing-effect');
<<<<<<< HEAD
if (typingElement) {
    const text = typingElement.textContent;
=======
let typingTimeout;

window.startTypingEffect = function(text, speed = 80) {
    if (!typingElement) return;
    
    // Clear any existing timeout to avoid overlapping
    clearTimeout(typingTimeout);
    
>>>>>>> master
    typingElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
<<<<<<< HEAD
            setTimeout(typeWriter, 80);
        }
    }

    setTimeout(typeWriter, 800);
=======
            typingTimeout = setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
};

if (typingElement) {
    // Initial call using the hardcoded text or data-i18n value
    window.startTypingEffect(typingElement.getAttribute('data-i18n') ? '' : typingElement.textContent, 800);
>>>>>>> master
}

// ===========================
// Parallax Effect on Scroll - ENHANCED
// ===========================
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const scrollDelta = scrolled - lastScrollY;
            lastScrollY = scrolled;

            // Parallax for gradient orbs
            const parallaxElements = document.querySelectorAll('.gradient-orb');
            parallaxElements.forEach((el, index) => {
                const speed = 0.3 + (index * 0.15);
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });

            // Parallax for profile image
            const profileImage = document.querySelector('.profile-image-container');
            if (profileImage) {
                const offset = scrolled * 0.2;
                profileImage.style.transform = `translateY(${offset}px)`;
            }

            // Parallax for skills
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                const speed = 0.05 + (index * 0.02);
                const offset = scrolled * speed;
                item.style.transform = `translateY(${offset}px)`;
            });

            ticking = false;
        });

        ticking = true;
    }
});

// ===========================
// Add Ripple Effect
// ===========================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

darkModeToggle.addEventListener('click', createRipple);

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .dark-mode-toggle {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===========================
// Mouse Follow Effect for Cards - ENHANCED
// ===========================
document.querySelectorAll('.about-card, .link-item, .skill-item').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

// ===========================
// Cursor Trail Effect - ENHANCED
// ===========================
const coords = { x: 0, y: 0 };

if (window.innerWidth > 768) {
    // Create cursor trail circles
    for (let i = 0; i < 25; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        document.body.appendChild(circle);
    }

    const allCircles = document.querySelectorAll('.circle');

    allCircles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        const hue = (index * 15) % 360;
        circle.style.backgroundColor = `hsla(${hue}, 70%, 60%, ${0.6 - index * 0.02})`;
    });

    window.addEventListener('mousemove', function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        allCircles.forEach(function (circle, index) {
            circle.style.left = x - 6 + 'px';
            circle.style.top = y - 6 + 'px';

            circle.style.transform = `scale(${(allCircles.length - index) / allCircles.length})`;

            circle.x = x;
            circle.y = y;

            const nextCircle = allCircles[index + 1] || allCircles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Add cursor trail styles
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .circle {
            position: fixed;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
        }
    `;
    document.head.appendChild(cursorStyle);
}

// ===========================
// Performance: Lazy Load Images
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Add Floating Animation to Tags
// ===========================
const tags = document.querySelectorAll('.tag');
tags.forEach((tag, index) => {
    const delay = index * 0.5;
    tag.style.animation = `float-gentle 3s ease-in-out ${delay}s infinite`;
});

// ===========================
// Skill Items Hover Effect
// ===========================
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function () {
        // Add glow effect to nearby items
        skillItems.forEach((otherItem, otherIndex) => {
            if (Math.abs(index - otherIndex) === 1) {
                otherItem.style.opacity = '0.7';
            }
        });
    });

    item.addEventListener('mouseleave', function () {
        skillItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
        });
    });
});

// ===========================
// Timeline Animation on Scroll
// ===========================
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const dot = entry.target.querySelector('.timeline-dot');
            if (dot) {
                dot.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    dot.style.transform = 'scale(1)';
                }, 300);
            }
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// ===========================
// Console Easter Egg - ENHANCED
// ===========================
const styles = [
    'font-size: 28px',
    'font-weight: bold',
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'color: white',
    'padding: 20px 40px',
    'border-radius: 16px',
    'text-shadow: 2px 2px 4px rgba(0,0,0,0.3)'
].join(';');

console.log('%c🚀 Merhaba Developer!', styles);
console.log('%c✨ Bu siteyi beğendiysen benimle iletişime geçebilirsin!', 'font-size: 18px; color: #667eea; font-weight: bold;');
console.log('%c📧 huseyinbudak904@gmail.com', 'font-size: 16px; color: #764ba2;');
console.log('%c💼 https://linkedin.com/in/huseyin-budak-286094252/', 'font-size: 16px; color: #764ba2;');
console.log('%c🌟 Made with ❤️ and lots of ☕', 'font-size: 14px; color: #4facfe; font-style: italic;');
console.log('%c💡 Tip: Dark mode butonuna tıkla ve sürprizi gör!', 'font-size: 14px; color: #f093fb; font-weight: bold;');

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add entrance animation to hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease-out';
            hero.style.opacity = '1';
        }, 100);
    }

    // Trigger welcome message
    setTimeout(() => {
        console.log('%c👋 Hoş geldin! Sayfayı keşfetmeye başla...', 'font-size: 16px; color: #43e97b; font-weight: bold;');
    }, 1000);
});

// ===========================
// Add Glow Effect on Scroll
// ===========================
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Change particle color based on scroll
    if (scrollPercentage > 75) {
        document.documentElement.style.setProperty('--particle-color', '#f093fb');
    } else if (scrollPercentage > 50) {
        document.documentElement.style.setProperty('--particle-color', '#4facfe');
    } else {
        document.documentElement.style.setProperty('--particle-color', '#667eea');
    }
});

// ===========================
// Add Tilt Effect to Profile Image
// ===========================
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    profileImage.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
}

// ===========================
// Subsection Title Animation
// ===========================
const subsectionTitles = document.querySelectorAll('.subsection-title');
const subsectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5 });

subsectionTitles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateX(-30px)';
    title.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    subsectionObserver.observe(title);
});

// ===========================
// Add Sparkle Effect on Hover
// ===========================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.fontSize = '20px';
    sparkle.style.opacity = '0';
    sparkle.style.transition = 'all 0.8s ease-out';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.opacity = '1';
        sparkle.style.transform = 'translateY(-30px) scale(1.5) rotate(180deg)';
    }, 10);

    setTimeout(() => {
        sparkle.style.opacity = '0';
    }, 600);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Add sparkle to skill icons
skillItems.forEach(item => {
    const icon = item.querySelector('.skill-icon');
    if (icon) {
        icon.addEventListener('mouseenter', function (e) {
            const rect = this.getBoundingClientRect();
            createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
    }
});

// ===========================
// Hide Scroll Indicator on Scroll
// ===========================
const scrollIndicator = document.querySelector('.scroll-indicator');
// ===========================
// Custom Cursor & Hacker Text Effect
// ===========================

// 1. Custom Cursor (Only for desktop)
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    document.body.classList.add('custom-cursor-active');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));

    // Expand cursor on hover
    const interactables = document.querySelectorAll('a, button, .about-card, .skill-item, .link-item, .home-button');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// 2. Hacker Text Scramble Effect
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);

        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Apply to Hero Title
const titleSpans = document.querySelectorAll('.title-line');
titleSpans.forEach(span => {
    const fx = new TextScramble(span);
    const originalText = span.innerText; // Store original text

    span.addEventListener('mouseenter', () => {
        fx.setText(originalText); // Scramble and ALWAYS return to original
    });
});

/* 3. Scroll Progress Logic */
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    }


});

/* ===========================
   Email Click & Copy Functionality
   =========================== */
const emailLink = document.querySelector('.email-link');
if (emailLink) {
    emailLink.addEventListener('click', function (e) {
        // Prevent default mailto behavior initially
        e.preventDefault();

        const email = "huseyinbudak904@gmail.com";
        const emailText = this.querySelector('p');
        const originalText = emailText.textContent;

        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show custom notification
            showNotification("E-posta kopyalandı! 📋");

            // Visual feedback on the text
            emailText.textContent = "Kopyalandı!";
            setTimeout(() => {
                emailText.textContent = originalText;
            }, 2000);

            // Optional: Continue to open mailto after a delay
            setTimeout(() => {
                window.location.href = "mailto:" + email;
            }, 500);
        }).catch(err => {
            console.error('Kopyalama başarısız:', err);
            // Fallback to default behavior immediately if copy fails
            window.location.href = "mailto:" + email;
        });
    });
}

// Notification System
function showNotification(message) {
    // Check if notification already exists
    let notification = document.querySelector('.notification-toast');

    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification-toast';
        document.body.appendChild(notification);
    }

    // Set content and show
    notification.textContent = message;
    notification.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/* ===========================
   Back to Top Button Logic
   =========================== */
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
