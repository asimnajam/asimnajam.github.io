const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const art = document.querySelector('.code-window');
if (art && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY * 0.025, 10);
    art.style.transform = `translateY(${y}px) rotate(2deg)`;
  }, { passive: true });
}

const header = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const setMenu = (open) => {
  header.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
};
menuToggle.addEventListener('click', () => setMenu(!header.classList.contains('open')));
header.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
