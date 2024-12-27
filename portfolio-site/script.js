window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
      loadingScreen.style.display = 'none'; // 로딩 화면 숨기기
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const scrollToTopButton = document.getElementById('scrollToTop');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index]?.classList.add('active');
        }
    });

    if (window.scrollY > 300) {
        scrollToTopButton?.classList.add('visible');
        scrollToTopButton?.classList.remove('hidden');
    } else {
        scrollToTopButton?.classList.add('hidden');
        scrollToTopButton?.classList.remove('visible');
    }
});

document.getElementById('scrollToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
