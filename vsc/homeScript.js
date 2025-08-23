// homeScript.js
(() => {
  'use strict';

  // ===== Utilities =====
  const wrap = (i, len) => (i % len + len) % len;

  // Extract "trackId" from URLs like:
  // https://open.spotify.com/track/5m962iKdAVDEl8pPh4cXTu?si=...
  function getSpotifyTrackId(href) {
    try {
      const url = new URL(href);
      const parts = url.pathname.split('/');
      const idx = parts.indexOf('track');
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
    } catch (_) {
      // fallback: string split if it's not a full URL
      const s = String(href);
      if (s.includes('/track/')) return s.split('/track/')[1].split(/[?/#]/)[0];
    }
    return null;
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log('[homeScript] DOM loaded');

    // ===== Your data (replace with real) =====
    const covers = [
      { img: 'https://i.scdn.co/image/ab67616d00001e02eabf4752aa62897d02e221b0', href: 'https://open.spotify.com/track/5m962iKdAVDEl8pPh4cXTu?si=4d47d2b6737e42be' },
      { img: 'https://i.scdn.co/image/ab67616d00001e02605420b22edd39a5b85b4543', href: 'https://open.spotify.com/track/2fxoRz7eUFbo5RoHSvXqQh?si=fb91b89ab180425e' },
      { img: 'https://i.scdn.co/image/ab67616d00001e02fa4abe14f6462e41e9667935', href: 'https://open.spotify.com/track/4s0m05iPPuTeFlJxAQivGy?si=fdb0700ff92741e6' },
      { img: 'https://i.scdn.co/image/ab67616d00001e0259608a39364e7b427199b978', href: 'https://open.spotify.com/track/2wP7xRtIT04sr7YrTDqhMc?si=b33a6013f0964eb9' },
      { img: 'https://i.scdn.co/image/ab67616d00001e02dcd6e0c0c028611ab017a16d', href: 'https://open.spotify.com/track/0rXY87QUdNCbvW5ocac1Bo?si=9fbf657f8c684021' },
      { img: 'https://i.scdn.co/image/ab67616d00001e028e3d111c24d12e861bfbd877', href: 'https://open.spotify.com/track/6u0Jd6rKIClB00FCrA78mW?si=ef4b9077588c4573' }
    ];
    // ===== DOM =====
    const carousel = document.getElementById('coverCarousel');
    if (!carousel) {
      console.warn('[homeScript] #coverCarousel not found on page.');
      return;
    }
    const track = carousel.querySelector('.track');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    if (!track) {
      console.warn('[homeScript] .track not found inside #coverCarousel.');
      return;
    }

    let index = 0;

    // ===== Render exactly 3 cards: prev, center, next =====
    function render() {
      if (!covers.length) return;
      const windowIdxs = [-1, 0, 1].map(off => wrap(index + off, covers.length));

      track.innerHTML = '';
      windowIdxs.forEach((i, pos) => {
        const { img, href } = covers[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.href = href; // keep original link for click handler

        // pos: 0=prev, 1=center, 2=next
        if (pos === 1) {
          card.classList.add('is-center');
          // clickable button; we swap it to an iframe on click
          card.innerHTML = `
            <button class="play-cover" style="all:unset;display:block;width:100%;height:100%;cursor:pointer">
              <img src="${img}" alt="Cover ${i + 1}" style="width:100%;height:100%;object-fit:cover;">
            </button>
          `;
        } else if (pos === 0) {
          card.classList.add('is-prev');
          card.innerHTML = `
            <a href="${href}" target="_blank" rel="noopener">
              <img src="${img}" alt="Cover ${i + 1}" style="width:100%;height:100%;object-fit:cover;">
            </a>
          `;
        } else {
          card.classList.add('is-next');
          card.innerHTML = `
            <a href="${href}" target="_blank" rel="noopener">
              <img src="${img}" alt="Cover ${i + 1}" style="width:100%;height:100%;object-fit:cover;">
            </a>
          `;
        }

        track.appendChild(card);
      });

      console.log('[homeScript] render index=', index);
    }

    function next() { index = wrap(index + 1, covers.length); render(); }
    function prev() { index = wrap(index - 1, covers.length); render(); }

    nextBtn?.addEventListener('click', next);
    prevBtn?.addEventListener('click', prev);

    // Keyboard (focus the carousel to use ←/→)
    carousel.tabIndex = 0;
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });

    // ===== Delegated click: turn center cover into embed on click =====
    carousel.addEventListener('click', (e) => {
      const btn = e.target.closest('.play-cover');
      if (!btn) return; // not clicking the center cover

      const card = btn.closest('.card');
      const href = card?.dataset?.href;
      if (!href) {
        console.warn('[homeScript] No href on center card');
        return;
      }
      const trackId = getSpotifyTrackId(href);
      if (!trackId) {
        console.warn('[homeScript] Could not extract Spotify track ID from:', href);
        return;
      }

      console.log('[homeScript] swapping to embed for track:', trackId);

      card.innerHTML = `
        <iframe
          class="spotify-embed"
          style="border-radius:12px;width:100%;height:100%;display:block"
          src="https://open.spotify.com/embed/track/${trackId}"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      `;
    });

    // Prevent image drag ghost
    track.addEventListener('dragstart', e => e.preventDefault());

    // Initial render + optional preload
    render();
    covers.forEach(c => { const im = new Image(); im.src = c.img; });
  });
})();
