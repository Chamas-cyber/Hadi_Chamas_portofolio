// Scroll progress bar
const bar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = pct + '%';
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

// Typing animation
const phrases = ['AI & ML Engineer', 'RAG Systems Builder', 'CS Student @ IU Berlin', 'Data Science Enthusiast', 'LLM Developer'];
let pi = 0, ci = 0, del = false;
const el = document.getElementById('typed');
function type() {
  const w = phrases[pi];
  el.textContent = del ? w.slice(0, ci - 1) : w.slice(0, ci + 1);
  del ? ci-- : ci++;
  if (!del && ci === w.length) { del = true; setTimeout(type, 1800); return; }
  if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
  setTimeout(type, del ? 45 : 75);
}
type();

// Reveal on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Add reveal class to non-marked elements
document.querySelectorAll('.stat-card, .skill-card, .cert-card, .edu-card, .contact-row, .contact-cta-box').forEach(el => {
  if (!el.classList.contains('reveal')) {
    el.classList.add('reveal');
    obs.observe(el);
  }
});
