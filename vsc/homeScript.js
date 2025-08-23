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
