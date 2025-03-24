// 프로젝트 세부 정보 데이터
const projectDetails = {
    lotteon: {
        title: '롯데온 쇼핑물 프로젝트',
        titleEn: 'LotteON Shopping Mall Project',
        description: 'Spring Boot와 JSP를 활용해 쇼핑몰 백엔드 서버를 구축하고 Oracle DB를 연동한 프로젝트. 사용자 인증 및 상품 관리 기능 구현.',
        descriptionEn: 'A project that built a shopping mall backend server using Spring Boot and JSP, integrated with Oracle DB. Implemented user authentication and product management features.',
        details: '이 프로젝트는 실제 쇼핑몰 환경을 모방하여 사용자 인증, 상품 등록, 장바구니 기능 등을 구현했습니다. Spring Security를 활용해 보안성을 강화했으며, Oracle DB와의 연동을 통해 대용량 데이터 처리를 경험했습니다.',
        detailsEn: 'This project simulated a real shopping mall environment, implementing user authentication, product registration, and cart features. I enhanced security using Spring Security and gained experience in handling large-scale data through Oracle DB integration.'
    },
    innovate: {
        title: '이노베이트 연계 웹 어플리케이션 프로젝트',
        titleEn: 'Innovate Linked Web Application Project',
        description: '다양한 회사의 웹사이트 및 시스템 유지보수와 백엔드 시스템을 구축한 프로젝트. 프론트와 백엔드를 분리해 협업 효율성을 높임.',
        descriptionEn: 'A project that maintained websites and systems for various companies, building backend systems. Separated frontend and backend to improve collaboration efficiency.',
        details: '이 프로젝트에서는 프론트엔드와 백엔드를 분리하여 REST API를 통해 통신하도록 설계했습니다. React를 사용한 프론트엔드와 Java, MySQL, MongoDB를 활용한 백엔드를 연동하여 효율적인 협업 환경을 구축했습니다.',
        detailsEn: 'In this project, I separated the frontend and backend, designing them to communicate via REST API. I built an efficient collaboration environment by integrating a React frontend with a Java, MySQL, and MongoDB backend.'
    }
};

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 로딩 화면 숨기기 (부드러운 전환)
    window.addEventListener('load', () => {
        try {
            const loadingScreen = document.getElementById('loading');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        } catch (error) {
            console.error('Error hiding loading screen:', error);
        }
    });

    // 부드러운 스크롤
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                // 모바일에서 메뉴 닫기
                const navbar = document.getElementById('navbar');
                if (window.innerWidth <= 768 && navbar) {
                    navbar.classList.add('hidden');
                }
            } catch (error) {
                console.error('Error during smooth scroll:', error);
            }
        });
    });

    // 섹션 가시성 체크 (IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // 스크롤 이벤트 (네비게이션 활성화, 스크롤 버튼)
    window.addEventListener('scroll', () => {
        try {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('nav a');
            const scrollToTopButton = document.getElementById('scrollToTop');

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (navLinks[index]) navLinks[index].classList.add('active');
                }
            });

            if (window.scrollY > 300) {
                if (scrollToTopButton) {
                    scrollToTopButton.classList.add('visible');
                    scrollToTopButton.classList.remove('hidden');
                }
            } else {
                if (scrollToTopButton) {
                    scrollToTopButton.classList.add('hidden');
                    scrollToTopButton.classList.remove('visible');
                }
            }
        } catch (error) {
            console.error('Error during scroll event:', error);
        }
    });

    // 상단으로 스크롤
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 다크 모드 토글 (아이콘 전환)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            try {
                document.body.classList.toggle('dark-mode');
                const icon = themeToggle.querySelector('i');
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            } catch (error) {
                console.error('Error toggling dark mode:', error);
            }
        });
    }

    // 햄버거 메뉴 토글 및 포커스 관리
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const closeNav = document.getElementById('close-nav');

    // 디버깅용 콘솔 로그 추가
    console.log('Hamburger:', hamburger);
    console.log('Navbar:', navbar);
    console.log('CloseNav:', closeNav);

    if (hamburger && navbar) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // 이벤트 전파 방지
            try {
                console.log('Hamburger clicked!'); // 디버깅 로그
                navbar.classList.toggle('hidden');
                if (!navbar.classList.contains('hidden')) {
                    console.log('Navbar is now visible'); // 디버깅 로그
                    const firstLink = navbar.querySelector('a');
                    if (firstLink) {
                        console.log('Focusing on first link:', firstLink); // 디버깅 로그
                        firstLink.focus();
                    }
                } else {
                    console.log('Navbar is now hidden'); // 디버깅 로그
                }
            } catch (error) {
                console.error('Error toggling hamburger menu:', error);
            }
        });
    } else {
        console.error('Hamburger or Navbar element not found!');
    }

    if (closeNav && navbar) {
        closeNav.addEventListener('click', (e) => {
            e.stopPropagation(); // 이벤트 전파 방지
            try {
                console.log('CloseNav clicked!'); // 디버깅 로그
                navbar.classList.add('hidden');
                console.log('Navbar is now hidden (via CloseNav)'); // 디버깅 로그
                hamburger.focus();
            } catch (error) {
                console.error('Error closing navigation:', error);
            }
        });
    } else {
        console.error('CloseNav or Navbar element not found!');
    }

    // 네비게이션 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
        try {
            if (!navbar.classList.contains('hidden') && !navbar.contains(e.target) && e.target !== hamburger) {
                console.log('Clicked outside navbar!'); // 디버깅 로그
                navbar.classList.add('hidden');
                console.log('Navbar is now hidden (via outside click)'); // 디버깅 로그
            }
        } catch (error) {
            console.error('Error closing navigation on outside click:', error);
        }
    });

    // 프로젝트 이미지 확대 기능
    document.querySelectorAll('.project-img').forEach(img => {
        img.addEventListener('click', () => {
            try {
                let overlay = document.querySelector('.overlay');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.classList.add('overlay');
                    document.body.appendChild(overlay);
                }

                if (!img.classList.contains('enlarged')) {
                    img.classList.add('enlarged');
                    overlay.style.display = 'block';
                    img.focus(); // 포커스 이동
                } else {
                    img.classList.remove('enlarged');
                    overlay.style.display = 'none';
                }
            } catch (error) {
                console.error('Error enlarging project image:', error);
            }
        });
    });

    // 오버레이 클릭 시 이미지 축소
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            try {
                const enlargedImg = document.querySelector('.project-img.enlarged');
                if (enlargedImg) {
                    enlargedImg.classList.remove('enlarged');
                    e.target.style.display = 'none';
                }
            } catch (error) {
                console.error('Error closing enlarged image:', error);
            }
        }
    });

    // 키보드 접근성: ESC 키로 이미지 축소 및 포커스 트랩
    document.addEventListener('keydown', (e) => {
        try {
            const enlargedImg = document.querySelector('.project-img.enlarged');
            const overlay = document.querySelector('.overlay');
            if (e.key === 'Escape' && enlargedImg && overlay) {
                enlargedImg.classList.remove('enlarged');
                overlay.style.display = 'none';
            }

            // 포커스 트랩: 확대된 이미지에서 Tab 키로 포커스 유지
            if (enlargedImg && document.activeElement !== enlargedImg) {
                enlargedImg.focus();
            }
        } catch (error) {
            console.error('Error handling keyboard events for enlarged image:', error);
        }
    });

    // 프로젝트 모달 열기
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            try {
                const projectId = btn.getAttribute('data-project');
                const project = projectDetails[projectId];
                if (!project) return;

                const modal = document.getElementById('project-modal');
                const modalTitle = document.getElementById('modal-title');
                const modalBody = document.getElementById('modal-body');

                const isEnglish = document.documentElement.lang === 'en';
                modalTitle.textContent = isEnglish ? project.titleEn : project.title;
                modalBody.innerHTML = `
                    <p>${isEnglish ? project.descriptionEn : project.description}</p>
                    <p><strong>${isEnglish ? 'Details:' : '세부사항:'}</strong> ${isEnglish ? project.detailsEn : project.details}</p>
                `;

                modal.style.display = 'flex';
                modal.setAttribute('aria-hidden', 'false');
                const closeModal = document.getElementById('close-modal');
                if (closeModal) closeModal.focus(); // 포커스 이동
            } catch (error) {
                console.error('Error opening project modal:', error);
            }
        });
    });

    // 모달 닫기
    const closeModal = document.getElementById('close-modal');
    const projectModal = document.getElementById('project-modal');
    if (closeModal && projectModal) {
        closeModal.addEventListener('click', () => {
            try {
                projectModal.style.display = 'none';
                projectModal.setAttribute('aria-hidden', 'true');
            } catch (error) {
                console.error('Error closing project modal:', error);
            }
        });
    }

    // 모달 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            try {
                projectModal.style.display = 'none';
                projectModal.setAttribute('aria-hidden', 'true');
            } catch (error) {
                console.error('Error closing project modal on outside click:', error);
            }
        }
    });

    // 모달 키보드 접근성: ESC 키로 닫기 및 포커스 트랩
    document.addEventListener('keydown', (e) => {
        try {
            if (e.key === 'Escape' && projectModal.style.display === 'flex') {
                projectModal.style.display = 'none';
                projectModal.setAttribute('aria-hidden', 'true');
            }

            // 포커스 트랩: 모달 내에서만 포커스 유지
            if (projectModal.style.display === 'flex') {
                const focusableElements = projectModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        } catch (error) {
            console.error('Error handling keyboard events for modal:', error);
        }
    });

    // 언어 전환
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            try {
                const currentLang = document.documentElement.lang;
                const newLang = currentLang === 'ko' ? 'en' : 'ko';
                document.documentElement.lang = newLang;
                langToggle.querySelector('span').textContent = newLang === 'ko' ? 'EN' : 'KO';

                // 텍스트 업데이트
                document.querySelectorAll('[data-ko][data-en]').forEach(element => {
                    const text = newLang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-ko');
                    element.textContent = text;
                });

                // 프로젝트 모달이 열려있을 경우 업데이트
                if (projectModal.style.display === 'flex') {
                    const projectId = document.querySelector('.details-btn:focus')?.getAttribute('data-project');
                    if (projectId && projectDetails[projectId]) {
                        const project = projectDetails[projectId];
                        const modalTitle = document.getElementById('modal-title');
                        const modalBody = document.getElementById('modal-body');
                        modalTitle.textContent = newLang === 'en' ? project.titleEn : project.title;
                        modalBody.innerHTML = `
                            <p>${newLang === 'en' ? project.descriptionEn : project.description}</p>
                            <p><strong>${newLang === 'en' ? 'Details:' : '세부사항:'}</strong> ${newLang === 'en' ? project.detailsEn : project.details}</p>
                        `;
                    }
                }
            } catch (error) {
                console.error('Error toggling language:', error);
            }
        });
    }

    // 연락처 폼 제출 (간단한 예시)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            try {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                console.log('Form submitted:', { name, email, message });
                alert(document.documentElement.lang === 'en' ? 'Message sent successfully!' : '메시지가 성공적으로 전송되었습니다!');
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting contact form:', error);
                alert(document.documentElement.lang === 'en' ? 'Error sending message.' : '메시지 전송 중 오류가 발생했습니다.');
            }
        });
    }
});