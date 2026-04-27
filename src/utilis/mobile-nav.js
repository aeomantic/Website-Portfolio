const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNavEl = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    const mobileResumeBtn = document.querySelector('.mobile-nav__btn');

    let isMobileNavOpen = false;

    function closeMobileNav() {
        isMobileNavOpen = false;
        mobileNavEl.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNavEl.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            closeMobileNav();
        }
    });

    mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

    if (mobileResumeBtn) {
        mobileResumeBtn.addEventListener('click', closeMobileNav);
    }
};

export default mobileNav;