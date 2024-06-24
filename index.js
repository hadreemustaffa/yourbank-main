const drawer = document.getElementById('navDrawer');
const toggleButton = document.getElementById('toggleBtn');

const faqContentWrapper = document.querySelector(
  '.container--faqs .container__content-wrapper'
);
const faqButton = document.getElementById('faqButton');

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

faqButton.addEventListener('click', () => {
  if (faqButton.getAttribute('aria-expanded') == 'false') {
    faqButton.setAttribute('aria-expanded', 'true');
    faqContentWrapper.classList.remove('collapse');
    faqContentWrapper.classList.add('show');
  } else {
    faqButton.setAttribute('aria-expanded', 'false');
    faqContentWrapper.removeAttribute('style');
    faqContentWrapper.classList.remove('show');
    faqContentWrapper.classList.add('collapse');
  }
});
