// Alterna entre dark e light mode e atualiza o ícone do botão

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    if (icon) icon.innerHTML = '☀️'; // Sol para o dia
  } else {
    localStorage.setItem('theme', 'dark');
    if (icon) icon.innerHTML = '🌙'; // Lua para a noite
  }
}

// Aplica o tema salvo ao carregar e ajusta o ícone

window.onload = function() {
  const theme = localStorage.getItem('theme');
  const icon = document.getElementById('theme-icon');
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    if (icon) icon.innerHTML = '☀️'; // Sol para o dia
  } else {
    if (icon) icon.innerHTML = '🌙'; // Lua para a noite
  }
}
