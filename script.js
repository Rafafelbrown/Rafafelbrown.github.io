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
  setTimeout(type, deleting ? 60 : 100);
}
document.addEventListener("DOMContentLoaded", () => { setTimeout(type, 600); });

/* ===== SCROLL ANIMATIONS ===== */
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* ===== BACK TO TOP ===== */
const btt = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  btt.classList.toggle("visible", window.scrollY > 400);
});
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

/* ===== NAV SCROLL SHADOW ===== */
window.addEventListener("scroll", () => {
  document.querySelector("nav").style.boxShadow = window.scrollY > 20
    ? "0 4px 30px rgba(0,0,0,0.5)" : "none";
}, { passive: true });
