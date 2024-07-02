const testimonials = document.querySelector('.container--testimonials');
const testimonialCards = testimonials.querySelectorAll('.container__card');
const btnNext = testimonials.querySelector('#btnNext');
const btnPrevious = testimonials.querySelector('#btnPrevious');

let cardIndex = 1;
let lastIndex = testimonialCards.length - 1;

const goToNext = () => {
  btnNext.addEventListener('click', () => {
    if (cardIndex === lastIndex) {
      cardIndex = 0;
      testimonialCards[cardIndex].classList.remove('hidden');
      testimonialCards[lastIndex].classList.add('hidden');
    } else {
      testimonialCards[cardIndex].classList.add('hidden');
      cardIndex++;
      testimonialCards[cardIndex].classList.remove('hidden');
    }
  });
};

const goToPrevious = () => {
  btnPrevious.addEventListener('click', () => {
    if (cardIndex === 0) {
      testimonialCards[cardIndex].classList.add('hidden');
      cardIndex = lastIndex;
      testimonialCards[cardIndex].classList.remove('hidden');
    } else {
      testimonialCards[cardIndex].classList.add('hidden');
      cardIndex--;
      testimonialCards[cardIndex].classList.remove('hidden');
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 992) {
    testimonialCards[0].classList.add('hidden');
    testimonialCards[2].classList.add('hidden');
    goToNext();
    goToPrevious();
  } else {
    testimonialCards.forEach((card) => {
      card.classList.remove('hidden');
    });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    testimonialCards.forEach((card) => {
      card.classList.remove('hidden');
    });
  } else {
    testimonialCards[0].classList.add('hidden');
    testimonialCards[2].classList.add('hidden');
    goToNext();
    goToPrevious();
  }
});
