// Progressive enhancement only. Navigation, summaries and links also work without JS.
const sectionLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = sectionLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
let ticking = false;

function updateCurrentSection() {
  const marker = window.scrollY + 150;
  let current = sections[0];
  for (const section of sections) {
    if (section.offsetTop <= marker) current = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
    current = sections[sections.length - 1];
  }
  sectionLinks.forEach(link => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) { window.requestAnimationFrame(updateCurrentSection); ticking = true; }
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
window.addEventListener('load', updateCurrentSection);
