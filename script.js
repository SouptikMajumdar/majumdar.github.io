const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Progressive enhancement: every link works with JavaScript disabled.
const navigationLinks = Array.from(document.querySelectorAll('.navigation a'));
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    }
  }, { rootMargin: '-5% 0px -60% 0px', threshold: 0 });
  sections.filter(Boolean).forEach(section => observer.observe(section));
}
