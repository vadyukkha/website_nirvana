// кнопка для содержания
const tocToggle = document.getElementById('toc-toggle');
const tocPanel = document.getElementById('toc-panel');

tocToggle.addEventListener('click', () => {
  tocPanel.classList.toggle('open');
});

// кнопка смены темы
const themeToggle = document.getElementById('theme-toggle');
const rootEl = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
  rootEl.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  if (rootEl.classList.contains('light')) {
    rootEl.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  } else {
    rootEl.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
});
