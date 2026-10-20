// Tells CSS that JavaScript is running (so reveal effects only apply when they can work)
document.documentElement.classList.add("js");

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const header = document.querySelector(".site-header");
const progress = document.getElementById("progress");
const toTop = document.getElementById("toTop");

// ----- Mobile menu -----
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
document.addEventListener("click", e => {
  if (!header.contains(e.target)) setMenu(false);   // tap outside closes menu
});
window.addEventListener("resize", () => { if (window.innerWidth > 760) setMenu(false); });

// ----- Active nav link while scrolling -----
const links = [...nav.querySelectorAll("a")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

// ----- Scroll effects: header shadow, progress bar, back-to-top -----
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  header.classList.toggle("scrolled", y > 10);
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  toTop.classList.toggle("show", y > 500);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ----- Reveal on scroll -----
const reveal = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();
