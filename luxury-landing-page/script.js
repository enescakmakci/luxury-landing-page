const htmlEl = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

const fadeSections = document.querySelectorAll('.fade-in-section');
if (fadeSections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.2 });
  fadeSections.forEach(section => observer.observe(section));
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    if (toggleBtn) toggleBtn.checked = savedTheme === "dark";
  }
  const heroEl = document.querySelector('.hero');
  if (heroEl) heroEl.classList.add('animate-in');
});

if (toggleBtn) {
  toggleBtn.addEventListener('change', () => {
    const newTheme = toggleBtn.checked ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

const hero = document.querySelector('.hero');
if (hero) {
  const heroContent = hero.querySelector('.container');
  hero.addEventListener('mousemove', (e) => {
    const { width, height } = hero.getBoundingClientRect();
    const offsetX = (e.clientX / width - 0.5) * 10;
    const offsetY = (e.clientY / height - 0.5) * 10;
    heroContent.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    hero.querySelector('.container').style.transform = `translate(0, 0)`;
  });
}

const newsletterBtn = document.querySelector('button[type="submit"]');
if (newsletterBtn) {
  newsletterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Bültene abone olduğunuz için teşekkür ederiz!');
  });
}
