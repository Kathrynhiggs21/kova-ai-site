// Small enhancement: anchor highlight on scroll
document.addEventListener('scroll', () => {
  const sections = ['about','modules','integrations','roadmap','contact'];
  let active = null;
  const fromTop = window.scrollY + 80;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= fromTop) active = id;
  });
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + active);
  });
});
