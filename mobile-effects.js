
// ===========================
// Mobil Jiroskop (Gyroscope) Parallax Efekti
// ===========================
if (window.innerWidth <= 768 && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) {
        const x = event.gamma; // Sağa-sola eğim (-90 to 90)
        const y = event.beta;  // Öne-arkaya eğim (-180 to 180)

        // Arka plan orblarını hareket ettir
        const orbs = document.querySelectorAll('.gradient-orb');
        if (orbs) {
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                const xOffset = x * speed;
                const yOffset = (y - 45) * speed; // Telefon genelde 45 derece tutulur
                if (isFinite(xOffset) && isFinite(yOffset)) {
                    orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                }
            });
        }

        // Profil resmine hafif hareket ver
        const profileImg = document.querySelector('.profile-image');
        if (profileImg) {
            const xOffset = x * 0.3;
            const yOffset = (y - 45) * 0.3;
            if (isFinite(xOffset) && isFinite(yOffset)) {
                profileImg.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            }
        }
    });
}

// ===========================
// Mobil Dokunma Efektleri (Touch Sparkle)
// ===========================
if (window.innerWidth <= 768) {
    document.addEventListener('touchstart', function (e) {
        if (e.touches && e.touches[0]) {
            const touch = e.touches[0];

            // Eğer createSparkle fonksiyonu tanımlıysa çağır (script.js'den)
            if (typeof createSparkle === 'function') {
                createSparkle(touch.clientX, touch.clientY);
            }

            // Dokunulan yerde küçük bir dalga efekti
            const ripple = document.createElement('div');
            ripple.className = 'touch-ripple';
            ripple.style.left = touch.clientX + 'px';
            ripple.style.top = touch.clientY + 'px';
            document.body.appendChild(ripple);

            // Animasyon bitince temizle
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 1000);
        }
    }, { passive: true });
}

// ===========================
// Scroll Bazlı Arka Plan Renk Değişimi (Mobil & Masaüstü)
// ===========================
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = window.scrollY / (scrollHeight > 0 ? scrollHeight : 1);

    // Gradient orb renklerini dinamik güncelle - hue-rotate ile
    const hueRotation = scrollPercent * 360; // 0 ile 360 derece arası dönüş

    // Tüm orblara uygula
    const orbs = document.querySelectorAll('.gradient-orb');
    if (orbs) {
        orbs.forEach(orb => {
            // blur(100px) zaten CSS'de var, sadece hue-rotate ekleyelim
            // Mevcut filter'ı ezmemek için kontrol edebiliriz ama basitçe ekleyelim
            orb.style.filter = `blur(100px) hue-rotate(${hueRotation}deg)`;
        });
    }

    // Ayrıca dark mode toggle butonuna da renk verelim
    const toggle = document.querySelector('.dark-mode-toggle');
    if (toggle) {
        toggle.style.filter = `hue-rotate(${hueRotation}deg)`;
    }
});
