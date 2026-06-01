/* ===== MATRIX RAIN ===== */
(function () {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  let cols, drops;

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 18);
    drops = Array(cols).fill(1);
  }

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Mix colors
    const colors = ['#00f5ff', '#39ff14', '#ff006e'];

    for (let i = 0; i < drops.length; i++) {
      const c = chars[Math.floor(Math.random() * chars.length)];
      ctx.font = '14px Share Tech Mono, monospace';
      ctx.fillStyle = colors[i % colors.length];
      ctx.fillText(c, i * 18, drops[i] * 18);
      if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  init();
  setInterval(draw, 60);
  window.addEventListener('resize', init);
})();

/* ===== TYPEWRITER ===== */
const phrases = [
  "Estudante de Ciência de Dados",
  "CEUB — Brasília/DF",
  "Analista de Dados em formação",
  "Engenheiro de Dados em construção",
  "Entusiasta de Machine Learning",
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById("typewriter");

function type() {
  const word = phrases[pi];
  if (!deleting) {
    el.textContent = word.slice(0, ci + 1);
    ci++;
    if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
  } else {
    el.textContent = word.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 50 : 80);
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 800));

/* ===== SCROLL ANIMATIONS ===== */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* ===== BACK TO TOP ===== */
const btt = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  btt.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });
btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ===== MOBILE NAV ===== */
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll("section[id]");
const navAs = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(s => {
    if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
      navAs.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + s.id);
      });
    }
  });
}, { passive: true });

/* ===== NAV BORDER ON SCROLL ===== */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(0, 245, 255, 0.5)';
    nav.style.boxShadow = '0 4px 30px rgba(0, 245, 255, 0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(0, 245, 255, 0.2)';
    nav.style.boxShadow = 'none';
  }
}, { passive: true });

/* ===== GLITCH OCCASIONAL ===== */
setInterval(() => {
  const names = document.querySelectorAll('.glitch-name');
  names.forEach(n => {
    n.style.textShadow = `${(Math.random()-0.5)*6}px 0 #ff006e, ${(Math.random()-0.5)*6}px 0 #00f5ff`;
    setTimeout(() => n.style.textShadow = '', 100);
  });
}, 3000 + Math.random() * 2000);
