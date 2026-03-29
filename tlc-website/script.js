// ========= MOBILE NAV =========
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 720) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ========= DYNAMIC YEAR =========
document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

// ========= FLOATING BUBBLES =========
(function createBubbles() {
  const container = document.querySelector('.bubbles-bg');
  if (!container) return;

  // Only start spawning bubbles once user scrolls past the hero
  let bubblesStarted = false;
  const count = 10;

  function spawnBubbles() {
    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = Math.random() * 100 + 30;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.animationDuration = Math.random() * 18 + 16 + 's';
      bubble.style.animationDelay = Math.random() * 8 + 's';
      container.appendChild(bubble);
    }
  }

  window.addEventListener('scroll', function() {
    if (!bubblesStarted && window.scrollY > 200) {
      bubblesStarted = true;
      spawnBubbles();
    }
  });
})();

// ========= SCROLL REVEAL =========
(function scrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => observer.observe(el));
})();
