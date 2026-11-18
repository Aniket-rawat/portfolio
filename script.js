(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = themeToggle?.querySelector('i');

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Storage may be unavailable. */ }
    const light = theme === 'light';
    themeToggle?.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    if (themeIcon) themeIcon.className = light ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f6f7f3' : '#111311');
  };

  setTheme(root.dataset.theme || 'dark');
  themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('#siteNav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('#siteNav');
      if (menu?.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  const viewer = document.querySelector('#imageViewer');
  const viewerImage = viewer?.querySelector('img');
  const closeButton = viewer?.querySelector('.viewer-close');
  let previousFocus;
  const closeViewer = () => {
    if (!viewer || viewer.hidden) return;
    viewer.hidden = true;
    document.body.style.overflow = '';
    previousFocus?.focus();
  };

  document.querySelectorAll('.certificate-image').forEach((button) => {
    button.addEventListener('click', () => {
      if (!viewer || !viewerImage) return;
      previousFocus = button;
      viewerImage.src = button.dataset.image;
      viewerImage.alt = button.getAttribute('aria-label') || 'Certificate preview';
      viewer.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton?.focus();
    });
  });
  closeButton?.addEventListener('click', closeViewer);
  viewer?.addEventListener('click', (event) => { if (event.target === viewer) closeViewer(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeViewer(); });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
