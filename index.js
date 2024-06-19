const drawer = document.getElementById('navDrawer');
const toggleButton = document.getElementById('toggleBtn');

toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

  if (!isExpanded) {
    toggleButton.ariaExpanded = 'true';
    drawer.style.right = '0';
  } else {
    toggleButton.ariaExpanded = 'false';
    drawer.removeAttribute('style');
  }
});
