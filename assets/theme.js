// Set the theme before the stylesheet loads to avoid a light flash on dark pages.
(() => {
  const key = 'karabilgin-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) { /* Theme switching still works when storage is unavailable. */ }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1c232a' : '#f8f9fa';
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const action = theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${action} mode`);
      button.querySelector('.theme-toggle-label').textContent = action === 'dark' ? 'Dark mode' : 'Light mode';
    }
  }

  function preferredTheme() {
    return preference || (system.matches ? 'dark' : 'light');
  }

  applyTheme(preferredTheme());
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    applyTheme(preferredTheme());
    button.hidden = false;
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch (_) { /* Keep the choice for this page. */ }
      applyTheme(preference);
    });
  });

  system.addEventListener('change', () => {
    if (!preference) applyTheme(preferredTheme());
  });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    applyTheme(preferredTheme());
  });
})();
