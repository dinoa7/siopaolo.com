class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav class="navbar">
                    <div class="nav-button-row">
                        <div class="logo-button-space">
                            <a href="index.html" class="logo-button">siopaolo</a>
                        </div>
                        <div class="nav-links-group">
                            <a href="shows.html" class="nav-button">SHOWS</a>
                            <a href="videos.html" class="nav-button">VIDEOS</a>
                            <a href="shop.html" class="nav-button">SHOP</a>
                            <a href="fans.html" class="nav-button">FANS</a>
                            <a href="contact.html" class="nav-button">CONTACT</a>
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
                <p class="rights-text">&copy; 2025 siopaolo. All rights reserved.</p>
                <div class="icon-button-row">
                        <a href="https://www.instagram.com/siopaolomusic"><img class="icon-button" src="assets/images/instagram.png" alt="Instagram"></a>
                        <a href="https://discord.gg/xBKXhVSkaK"><img class="icon-button" src="assets/images/discord.png" alt="Discord"></a>
                        <a href="https://open.spotify.com/artist/4dXBBVDuriULFiOyu5E8Kf?si=ITJkQzkiTMaEX0YlyvkIow"><img class="icon-button" src="assets/images/spotify.png" alt="Spotify"></a>
                        <a href="https://www.tiktok.com/@siopaolomusic"><img class="icon-button" src="assets/images/tiktok.png" alt="TikTok"></a>
                        <a href="https://youtube.com/channel/UCQkoD12MXM3phpLfE_a0yUQ"><img class="icon-button" src="assets/images/youtube.png" alt="YouTube"></a>
                        <a href="https://music.apple.com/us/artist/siopaolo/1469622913"><img class="icon-button" src="assets/images/music.png" alt="Apple Music"></a>
                        <a href="https://mobile.twitter.com/siopaolomusic"><img class="icon-button" src="assets/images/twitter.png" alt="X"></a>
                        <a href="https://www.twitch.tv/siopaolotv"><img class="icon-button" src="assets/images/twitch.png" alt="Twitch"></a>
                        <a href="https://laylo.com/siopaolo"><img class="icon-button" src="assets/images/text.png" alt="Text"></a>
                </div>
            </footer>
        `
    }
}

customElements.define("special-header", SpecialHeader)
customElements.define("special-footer", SpecialFooter)