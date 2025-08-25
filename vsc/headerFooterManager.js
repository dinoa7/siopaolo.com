class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav class="navbar">
                    <div class="nav-button-row">
                        <a href="index.html" class="nav-button logo-button">
                            <img src="assets/images/tabs/siopaolo.png" alt = "SIOPAOLO">
                        </a>
                        <div class="nav-links-group">

                            <a href="shows.html" class="nav-button">
                                <img src="assets/images/tabs/shows.png" alt = "SHOWS">
                            </a>
                            <a href="https://www.youtube.com/@siopaolomusic" class="nav-button">
                                <img src="assets/images/tabs/videos.png" alt = "VIDEOS">
                            </a>
                            <a href="https://shop.siopaolo.com" class="nav-button">
                                <img src="assets/images/tabs/shop.png" alt = "SHOP">
                            </a>
                            <a href="about.html" class="nav-button">
                                <img src="assets/images/tabs/about.png" alt = "ABOUT">
                            </a>
                            <a href="contact.html" class="nav-button">
                                <img src="assets/images/tabs/contact.png" alt = "CONTACT">
                            </a>
                        </div>
                        <div class="icon-button-row">
                            <a href="https://open.spotify.com/artist/4dXBBVDuriULFiOyu5E8Kf?si=ITJkQzkiTMaEX0YlyvkIow"><img class="icon-button" src="assets/images/spotify.png" alt="Spotify"></a>
                            <a href="https://music.apple.com/us/artist/siopaolo/1469622913"><img class="icon-button" src="assets/images/music.png" alt="Apple Music"></a>
                            <a href="https://youtube.com/channel/UCQkoD12MXM3phpLfE_a0yUQ"><img class="icon-button" src="assets/images/youtube.png" alt="YouTube"></a>
                            <a href="https://www.instagram.com/siopaolomusic"><img class="icon-button" src="assets/images/instagram.png" alt="Instagram"></a>
                            <a href="https://www.tiktok.com/@siopaolomusic"><img class="icon-button" src="assets/images/tiktok.png" alt="TikTok"></a>     
                            <a href="https://discord.gg/xBKXhVSkaK"><img class="icon-button" src="assets/images/discord.png" alt="Discord"></a>
                        </div>
                    </div>
                </nav>
            </header>
        `
        const navbar = this.querySelector('.navbar');
        const row = navbar?.querySelector('.nav-button-row');

        if (navbar && row) {
        const toggle = document.createElement('button');
        toggle.className = 'menu-toggle';
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'mobile-menu');
        toggle.innerHTML = `<img src="assets/images/tabs/waffle.png" alt="Menu">`;
        row.appendChild(toggle);

        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'mobile-menu';
        navbar.appendChild(mobileMenu);

        const desktopTabs = Array.from(
            this.querySelectorAll('.nav-links-group .nav-button')
        ).filter(a => a.getAttribute('href'));

        const tabsGroup = document.createElement('div');
        tabsGroup.className = 'mobile-links';
        desktopTabs.forEach(a => {
            const href = a.getAttribute('href');
            const label =
            (a.querySelector('img')?.getAttribute('alt') || a.textContent || '')
                .trim()
                .replace(/\s+/g, ' ') || 'Link';
            const m = document.createElement('a');
            m.className = 'mobile-link';
            m.href = href;
            m.textContent = label;
            tabsGroup.appendChild(m);
        });
        mobileMenu.appendChild(tabsGroup);

        const socialsRow = this.querySelector('.icon-button-row');
        if (socialsRow) {
        const socialsCloneWrap = document.createElement('div');
        socialsCloneWrap.className = 'mobile-socials';

        socialsCloneWrap.appendChild(socialsRow.cloneNode(true));


        mobileMenu.appendChild(socialsCloneWrap);
        }

        toggle.addEventListener('click', () => {
        const willOpen = !mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });


        mobileMenu.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) {
            mobileMenu.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
        });
        }
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div class="rights-text">&copy; 2025 siopaolo. All rights reserved.</div>
            </footer>
        `
    }
}

customElements.define("special-header", SpecialHeader)
customElements.define("special-footer", SpecialFooter)