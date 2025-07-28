class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav class="navbar">
                    <h1 class="logo">siopaolo</h1>

                    <div class="nav-button-row">
                        <a href="index.html" class="nav-button">Home</a>
                        <a href="videos.html" class="nav-button">Videos</a>
                        <a href="merch.html" class="nav-button">Merch</a>
                        <a href="fans.html" class="nav-button">Fans</a>
                        <a href="contact.html" class="nav-button">Contact</a>
                    </div>

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
                </nav>
            </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <p>&copy; 2025 siopaolo. All rights reserved.</p>
            </footer>
        `
    }
}

customElements.define("special-header", SpecialHeader)
customElements.define("special-footer", SpecialFooter)