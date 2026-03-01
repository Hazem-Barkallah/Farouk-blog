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

const blogPostTranslations = {
    fr: [
        {
            title: 'Bientôt, je vais enfin vider mon cœur.',
            date: '10 DÉCEMBRE 2021',
            content: 'Il est temps d’expier mes péchés, demain nous aurons la conversation finale.'
        },
        {
            title: 'Action',
            date: '10 DÉCEMBRE 2021',
            content: '"Veux-tu savoir qui tu es ? Ne demande pas. Agis ! L’action te dessinera et te définira."<br>— Thomas Jefferson'
        },
        {
            title: 'PR',
            date: '09 DÉCEMBRE 2021',
            content: 'J’ai enfin atteint 60 kg au développé couché, je me souviens quand je ne pouvais même pas soulever la barre vide. Je pense qu’il est temps d’arrêter de boire.'
        },
        {
            title: 'Pardon Samar',
            date: '08 DÉCEMBRE 2021',
            content: 'Je sais que Samar est une bonne personne, et je ne peux pas lui briser le cœur encore une fois… Mais maintenant je suis fiancé à quelqu’un d’autre. J’ai des responsabilités. Je ne peux pas fuir celle-ci non plus.'
        },
        {
            title: 'Demain est le jour',
            date: '07 DÉCEMBRE 2021',
            content: 'Il dit que je fais la bonne chose. Si je reste silencieux, si je garde ce secret, je pourrai continuer à faire le bien. Peut-être que sauver plus de personnes compensera ce que j’ai fait ? <br>Peut-être...'
        },
        {
            title: 'J’adore cette chanson de Linkin Park',
            date: '07 DÉCEMBRE 2021',
            content: 'Quand mon heure viendra <br>Oublie le mal que j’ai fait<br>Aide-moi à laisser derrière moi<br>Des raisons d’être regretté<br>Et ne m’en veux pas<br>Et quand tu te sentiras vide<br>Garde-moi dans ta mémoire<br>#Leave out all the rest'
        },
        {
            title: 'Hannibal',
            date: '04 DÉCEMBRE 2021',
            content: 'Les mots sont des choses vivantes. Ils ont une personnalité, un point de vue... un agenda.'
        },
        {
            title: 'Je suis désolé mon ami',
            date: '03 DÉCEMBRE 2021',
            content: 'Tayeb, mon cher ami...<br>J’espère qu’un jour tu me pardonneras.'
        },
        {
            title: 'J’ai échoué',
            date: '01 DÉCEMBRE 2021',
            content: 'Je bois encore, ma volonté est trop faible.'
        },
        {
            title: 'Allons-yyyy',
            date: '01 DÉCEMBRE 2021',
            content: 'Cela fait 4 jours depuis mon dernier verre, on peut le faire.'
        },
        {
            title: 'Nelson Mandela',
            date: '01 DÉCEMBRE 2021',
            content: 'Cela semble toujours impossible jusqu’à ce que ce soit fait.'
        },
        {
            title: 'J’aimerais pouvoir revenir en arrière',
            date: '22 NOVEMBRE 2021',
            content: '"Connaître la tristesse n’est pas terrifiant. Ce qui est terrifiant, c’est de savoir que tu ne peux pas revenir au bonheur que tu aurais pu avoir."<br>— Matsumoto Rangiku'
        },
        {
            title: 'Hors de contrôle',
            date: '20 NOVEMBRE 2021',
            content: 'Les choses deviennent incontrôlables. <br>Je lui ai parlé. Je lui ai dit que je voulais dire la vérité à la famille, mais il s’est énervé. Il a dit que mes actions détruiraient l’hôpital. Il m’a dit de penser à tout le bien que nous pouvions encore faire ici ;'
        },
        {
            title: 'Je ne suis pas différent',
            date: '12 NOVEMBRE 2021',
            content: 'J’ai même quitté une bonne personne juste pour sécuriser mon succès...<br>En quoi suis-je différent ?<br>Je suis désolé, Samar.<br>Parfois je me demande si les choses auraient été différentes si je t’avais choisie.'
        },
        {
            title: 'Qui suis-je',
            date: '10 NOVEMBRE 2021',
            content: 'Je n’aurais jamais pensé poster encore, mais garder ces pensées dans ma tête me tue lentement.<br>J’ai échoué en tant que médecin. J’ai échoué avec mon patient. J’étais censé le sauver — je sais que j’aurais pu.<br>J’étais le seul qui pouvait réussir son opération.<br>Mais tout était de sa faute... ce vieux chef de l’hôpital, égoïste.<br>Je le considérais comme mon mentor, quelqu’un que je pouvais admirer. Mais il a brisé cette image.<br>Comment peut-on choisir l’argent et le prestige plutôt que sa morale ?<br>Malgré tout, c’est aussi ma faute. J’aurais pu dire non.<br>J’aurais dû refuser d’opérer le maire au lieu de mon patient.<br>Qui se soucie qu’il soit un grand donateur ?<br>Le code ne dit-il pas que toutes les vies se valent ?'
        },
        {
            title: 'Qu’est-ce que je fais',
            date: '07 NOVEMBRE 2021',
            content: 'Boire ? Moi ? Je ne pensais pas tomber sur ce chemin. <br>Je pensais être... fort.'
        },
        {
            title: 'Désolé mon ami',
            date: '06 NOVEMBRE 2021',
            content: 'Je suis désolé, mon ami.<br>Je me suis trahi, et pire encore, j’ai trahi ta confiance en moi.'
        },
        {
            title: 'La fin de moi',
            date: '05 NOVEMBRE 2021',
            content: 'Hier était le jour où j’ai abandonné tout ce en quoi je croyais.<br>Pourquoi suis-je devenu médecin ?<br>N’était-ce pas pour aider les plus démunis ? Pour tendre la main à ceux qui luttent ?<br>Tous mes rêves n’étaient-ils que les espoirs d’un jeune homme naïf ?'
        }
    ],
    ar: [
        {
            title: 'قريبًا سأخرج هذا من صدري.',
            date: '10 ديسمبر 2021',
            content: 'لقد حان وقت التكفير عن ذنوبي، وغدًا ستكون المحادثة الأخيرة.'
        },
        {
            title: 'الفعل',
            date: '10 ديسمبر 2021',
            content: '"هل تريد أن تعرف من أنت؟ لا تسأل. افعل! الفعل هو ما يرسمك ويعرّفك."<br>— توماس جيفرسون'
        },
        {
            title: 'الرقم الشخصي',
            date: '09 ديسمبر 2021',
            content: 'أخيرًا وصلت إلى 60 كغ في تمرين البنش برس، أتذكر عندما لم أستطع حتى رفع البار الفارغ. أعتقد أن الوقت قد حان لأتوقف عن الشرب.'
        },
        {
            title: 'آسف يا سمر',
            date: '08 ديسمبر 2021',
            content: 'أعرف أن سمر إنسانة طيبة، ولا أستطيع أن أكسر قلبها مرة أخرى… لكنني الآن مخطوب لشخص آخر. لدي مسؤوليات. ولا أستطيع الهروب من هذه أيضًا.'
        },
        {
            title: 'غدًا هو اليوم',
            date: '07 ديسمبر 2021',
            content: 'يقول إنني أفعل الشيء الصحيح. إذا بقيت صامتًا، وإذا احتفظت بهذا السر، يمكنني أن أستمر في فعل الخير. ربما إنقاذ المزيد من الناس سيعوّض ما فعلته؟ <br>ربما...'
        },
        {
            title: 'أحب هذه الأغنية لـ Linkin Park',
            date: '07 ديسمبر 2021',
            content: 'عندما يحين وقتي <br>انسَ الأخطاء التي ارتكبتها<br>ساعدني أن أترك خلفي<br>أسبابًا تجعلني أُفتقد<br>ولا تستاء مني<br>وعندما تشعر بالفراغ<br>احتفظ بي في ذاكرتك<br>#اترك كل الباقي'
        },
        {
            title: 'هانيبال',
            date: '04 ديسمبر 2021',
            content: 'الكلمات أشياء حيّة. لها شخصية، ووجهة نظر... وأجندة.'
        },
        {
            title: 'أنا آسف يا صديقي',
            date: '03 ديسمبر 2021',
            content: 'طيّب، يا صديقي العزيز...<br>أتمنى أن تسامحني يومًا ما.'
        },
        {
            title: 'لقد فشلت',
            date: '01 ديسمبر 2021',
            content: 'ها أنا أشرب مرة أخرى، إرادتي ضعيفة جدًا.'
        },
        {
            title: 'هياااا',
            date: '01 ديسمبر 2021',
            content: 'مرّت 4 أيام منذ آخر مرة شربت فيها، نستطيع فعلها.'
        },
        {
            title: 'نيلسون مانديلا',
            date: '01 ديسمبر 2021',
            content: 'يبدو الأمر دائمًا مستحيلاً حتى يتم.'
        },
        {
            title: 'أتمنى لو أستطيع العودة',
            date: '22 نوفمبر 2021',
            content: '"معرفة الحزن ليست مخيفة. المخيف هو أن تعرف أنك لا تستطيع العودة إلى السعادة التي كان يمكن أن تكون لك."<br>— ماتسوموتو رانجيكو'
        },
        {
            title: 'خارج السيطرة',
            date: '20 نوفمبر 2021',
            content: 'الأمور تخرج عن السيطرة. <br>تحدثت معه. أخبرته أنني أريد قول الحقيقة للعائلة، لكنه غضب. قال إن أفعالي ستدمر المستشفى. وقال لي أن أفكر بكل الخير الذي ما زلنا نستطيع فعله هنا؛'
        },
        {
            title: 'لست مختلفًا',
            date: '12 نوفمبر 2021',
            content: 'تركت شخصًا طيبًا فقط لأضمن نجاحي...<br>كيف أكون مختلفًا إذًا؟<br>أنا آسف يا سمر.<br>أحيانًا أتساءل إن كانت الأمور ستختلف لو اخترتك أنت.'
        },
        {
            title: 'من أنا',
            date: '10 نوفمبر 2021',
            content: 'لم أتوقع يومًا أن أنشر مرة أخرى، لكن إبقاء هذه الأفكار في رأسي يقتلني ببطء.<br>لقد فشلت كطبيب. لقد فشلت مع مريضي. كان من المفترض أن أنقذه — وأنا أعلم أنني كنت أستطيع.<br>كنت الوحيد القادر على إجراء العملية بنجاح.<br>لكن كل هذا كان بسببه... ذلك رئيس المستشفى العجوز الأناني.<br>كنت أعتبره قدوتي، شخصًا أحتذي به. لكنه حطم تلك الصورة.<br>كيف يمكن أن تختار المال والهيبة على حساب أخلاقك؟<br>ومع ذلك، الخطأ خطئي أيضًا. كان يجب أن أقول لا.<br>كان يجب أن أرفض إجراء عملية العمدة بدلًا من مريضي.<br>ومن يهتم إن كان متبرعًا كبيرًا؟<br>أليست كل الأرواح متساوية؟'
        },
        {
            title: 'ماذا أفعل',
            date: '07 نوفمبر 2021',
            content: 'الشرب؟ أنا؟ لم أتخيل أنني سأسلك هذا الطريق. <br>كنت أظن أنني... قوي.'
        },
        {
            title: 'آسف يا صديقي',
            date: '06 نوفمبر 2021',
            content: 'أنا آسف يا صديقي.<br>خذلت نفسي، والأسوأ أنني خذلت ثقتك بي.'
        },
        {
            title: 'نهايتي',
            date: '05 نوفمبر 2021',
            content: 'كان الأمس هو اليوم الذي تخلّيت فيه عن كل ما كنت أؤمن به.<br>لماذا أصبحت طبيبًا؟<br>ألم يكن لأساعد الضعفاء؟ ولأمد يدي لمن يعانون؟<br>هل كانت كل أحلامي مجرد آمال لشاب ساذج؟'
        }
    ]
};

function captureDefaultBlogPosts() {
    if (window.__defaultBlogPosts) return;

    const cards = document.querySelectorAll('.blog-container .blog-card');
    if (!cards.length) return;

    window.__defaultBlogPosts = Array.from(cards).map(function(card) {
        const titleElement = card.querySelector('h2');
        const dateElement = card.querySelector('.date');
        const contentElement = card.querySelector('.content');

        return {
            title: titleElement ? titleElement.textContent : '',
            date: dateElement ? dateElement.textContent : '',
            content: contentElement ? contentElement.innerHTML : ''
        };
    });
}

function updateBlogPostsLanguage() {
    const cards = document.querySelectorAll('.blog-container .blog-card');
    if (!cards.length) return;

    captureDefaultBlogPosts();

    const lang = getCurrentLanguage();
    const translatedPosts = blogPostTranslations[lang] || [];
    const defaultPosts = window.__defaultBlogPosts || [];

    Array.from(cards).forEach(function(card, index) {
        const titleElement = card.querySelector('h2');
        const dateElement = card.querySelector('.date');
        const contentElement = card.querySelector('.content');

        const translated = translatedPosts[index] || {};
        const defaults = defaultPosts[index] || {};

        if (titleElement) titleElement.textContent = translated.title || defaults.title || titleElement.textContent;
        if (dateElement) dateElement.textContent = translated.date || defaults.date || dateElement.textContent;
        if (contentElement) contentElement.innerHTML = translated.content || defaults.content || contentElement.innerHTML;
    });
}

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

    updateBlogPostsLanguage();
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
