document.addEventListener('DOMContentLoaded', () => {
  // Example: safe navbar toggle
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('open'));
});