document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('langToggle');
    if (!langToggleBtn) return;

    let currentLang = localStorage.getItem('siteLang') || 'tr';
    
    // Initial button text
    updateBtnText(currentLang);
    
    function setLanguage(lang, isInitial = false) {
        document.documentElement.lang = lang;
        if(translations[lang] && translations[lang]['page_title']) {
            document.title = translations[lang]['page_title'];
        }
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.classList.contains('typing-effect') && typeof window.startTypingEffect === 'function') {
                    // Start typing with a reasonable speed (e.g. 50ms) regardless of isInitial
                    window.startTypingEffect(translations[lang][key], 50);
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    function updateBtnText(lang) {
        // If current is 'tr', show 'EN' to switch to it
        langToggleBtn.innerHTML = lang === 'tr' ? '<i class="fas fa-globe"></i> EN' : '<i class="fas fa-globe"></i> TR';
    }
    
    // Always apply language on load so typing effect runs correctly
    setLanguage(currentLang, true);
    
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('siteLang', currentLang);
        updateBtnText(currentLang);
        setLanguage(currentLang, false);
        
        const icon = langToggleBtn.querySelector('i');
        if (icon) {
            icon.style.transition = 'transform 0.4s ease';
            icon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                icon.style.transition = 'none';
                icon.style.transform = 'rotate(0deg)';
            }, 400);
        }
    });
});
