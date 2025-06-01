document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  
  // Verificar preferencia guardada o del sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Establecer tema inicial
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Actualizar icono
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  
  // Evento para cambiar tema
  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
  
  // Mejorar la experiencia de código
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});