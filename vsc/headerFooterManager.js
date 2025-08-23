class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav class="navbar">
                    <div class="nav-button-row">
                        <div class="nav-links-group">
                            <a href="index.html" class="nav-button logo-button">
                                <img src="assets/images/tabs/siopaolo.png" alt = "SIOPAOLO">
                            </a>
                            <a href="shows.html" class="nav-button">
                                <img src="assets/images/tabs/shows.png" alt = "SHOWS">
                            </a>
                            <a href="https://www.youtube.com/@siopaolomusic" class="nav-button">
                                <img src="assets/images/tabs/videos.png" alt = "VIDEOS">
                            </a>
                            <a href="shop.html" class="nav-button">
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