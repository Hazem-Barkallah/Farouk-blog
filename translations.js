const translations = {
    en: {
        welcome: 'WELCOME',
        password: 'Password',
        login: 'LOGIN',
        blogTitle: 'BLOG SUR MA VIE',
        subtitle: 'KEEPING YOUR PAIN INSIDE ONLY MAKES IT HEAVIER',
        logout: 'Logout',
        addPost: 'Add Post'
    },
    fr: {
        welcome: 'BIENVENUE',
        password: 'Mot de passe',
        login: 'CONNEXION',
        blogTitle: 'BLOG SUR MA VIE',
        subtitle: 'GARDER VOTRE DOULEUR À L\'INTÉRIEUR LA REND PLUS LOURDE',
        logout: 'Déconnexion',
        addPost: 'Ajouter un article'
    },
    ar: {
        welcome: 'مرحبا',
        password: 'كلمة المرور',
        login: 'تسجيل الدخول',
        blogTitle: 'مدونة عن حياتي',
        subtitle: 'إبقاء ألمك بداخلك يجعله أثقل',
        logout: 'تسجيل الخروج',
        addPost: 'إضافة منشور'
    }
};

const languageConfig = {
    en: { name: 'English', flag: 'gb' },
    fr: { name: 'Français', flag: 'fr' },
    ar: { name: 'العربية', flag: 'sa' }
};

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

function t(key) {
    const lang = getCurrentLanguage();
    return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
}

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });

    if (document.querySelector('[data-i18n="welcome"]')) {
        document.title = t('welcome') + ' - Login';
    } else if (document.querySelector('[data-i18n="blogTitle"]')) {
        document.title = t('blogTitle');
    }
}

function initializeLanguageSwitcher() {
    const langDropdownBtn = document.getElementById('langDropdownBtn');
    const langDropdownMenu = document.getElementById('langDropdownMenu');

    if (!langDropdownBtn || !langDropdownMenu) return;

    let isOpen = false;

    setLanguage(getCurrentLanguage());

    langDropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        isOpen = !isOpen;
        langDropdownMenu.classList.toggle('show', isOpen);
        langDropdownBtn.classList.toggle('open', isOpen);
    });

    document.addEventListener('click', function() {
        if (isOpen) {
            isOpen = false;
            langDropdownMenu.classList.remove('show');
            langDropdownBtn.classList.remove('open');
        }
    });

    document.querySelectorAll('.language-option').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const newLang = this.dataset.lang;
            const newFlag = this.dataset.flag;

            setLanguage(newLang);
            updateCurrentLanguageDisplay(newLang, newFlag);
            updatePageLanguage();

            isOpen = false;
            langDropdownMenu.classList.remove('show');
            langDropdownBtn.classList.remove('open');
        });
    });

    const currentLang = getCurrentLanguage();
    const config = languageConfig[currentLang];
    updateCurrentLanguageDisplay(currentLang, config.flag);
}

function updateCurrentLanguageDisplay(lang, flag) {
    const currentFlag = document.getElementById('currentFlag');
    const currentLangName = document.getElementById('currentLangName');

    if (currentFlag) currentFlag.className = 'fi fi-' + flag + ' flag-icon';
    if (currentLangName) currentLangName.textContent = languageConfig[lang].name;

    document.querySelectorAll('.language-option').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}
