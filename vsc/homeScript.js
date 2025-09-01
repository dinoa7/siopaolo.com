document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const track   = carousel.querySelector('.track');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  const slides  = Array.from(track.children);
  if (!track || !prevBtn || !nextBtn || slides.length === 0) return;

  const step = `calc(var(--card) + var(--gap))`;
  let isMoving = false;

  function onEndForward(e) {
    // only when the TRACK finishes its transform
    if (e.target !== track || e.propertyName !== 'transform') return;
    track.removeEventListener('transitionend', onEndForward);

    // Move first slide to the end
    const first = slides.shift();
    track.appendChild(first);
    slides.push(first);

    // Reset without flicker
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    track.getBoundingClientRect();  // force reflow
    track.style.transition = '';     // restore transition
    isMoving = false;
  }

  function onEndBack(e) {
    if (e.target !== track || e.propertyName !== 'transform') return;
    track.removeEventListener('transitionend', onEndBack);
    isMoving = false;
  }

  function next() {
    if (isMoving) return;
    isMoving = true;

    // Slide left by one card width + gap
    track.addEventListener('transitionend', onEndForward);
    track.style.transform = `translateX(calc(-1 * ${step}))`;
  }

  function prev() {
    if (isMoving) return;
    isMoving = true;

    // Instantly move last to front
    const last = slides.pop();
    track.insertBefore(last, track.firstChild);
    slides.unshift(last);

    // Start offset left, then animate back to 0 (looks like slide right)
    track.style.transition = 'none';
    track.style.transform = `translateX(calc(-1 * ${step}))`;
    track.getBoundingClientRect(); // reflow
    track.style.transition = '';
    track.style.transform = 'translateX(0)';

    track.addEventListener('transitionend', onEndBack);
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
});

// homeScript.js or a small inline script
document.querySelectorAll('.swap-img').forEach(img => {
  const original = img.src;
  const hover = img.dataset.hover;

  img.addEventListener('mouseenter', () => img.src = hover);
  img.addEventListener('mouseleave', () => img.src = original);
});

// --- Countdown: Sep 15, 00:00 America/Los_Angeles ---
(function attachCountdown() {
  const root = document.getElementById('launch-countdown');
  if (!root) return;

  const out = {
    days:    root.querySelector('[data-unit="days"]'),
    hours:   root.querySelector('[data-unit="hours"]'),
    minutes: root.querySelector('[data-unit="minutes"]'),
    seconds: root.querySelector('[data-unit="seconds"]'),
  };
  const done = document.getElementById('countdown-done');

  // Los Angeles midnight on 2025-09-15 (PDT in September = UTC-7)
  const target = new Date('2025-09-15T00:00:00-07:00');

  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const now = new Date();
    let ms = target - now;

    if (ms <= 0) {
      out.days.textContent = out.hours.textContent =
      out.minutes.textContent = out.seconds.textContent = '00';
      if (done) done.hidden = false;
      clearInterval(timer);
      return;
    }

    const totalSec = Math.floor(ms / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;

    out.days.textContent = pad(days);
    out.hours.textContent = pad(hours);
    out.minutes.textContent = pad(minutes);
    out.seconds.textContent = pad(seconds);
  }

  tick();
  const timer = setInterval(tick, 1000);
})();
