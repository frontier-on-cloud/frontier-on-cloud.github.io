// Follows the reader's system setting until they pick a theme with the button; the choice stays in this browser.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;
  function apply(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }
  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  button.hidden = false;
  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
