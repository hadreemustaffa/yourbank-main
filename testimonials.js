const testimonials = document.querySelector('.container--testimonials');
const testimonialCards = testimonials.querySelectorAll('.container__card');
const btnNext = testimonials.querySelector('#btnNext');
const btnPrevious = testimonials.querySelector('#btnPrevious');

let cardIndex = 1;
let lastIndex = testimonialCards.length - 1;
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

btnPrevious.addEventListener('click', () => {
  if (cardIndex === 0) {
    cardIndex = lastIndex;
    testimonialCards[lastIndex].classList.remove('hidden');
    testimonialCards[0].classList.add('hidden');
  } else {
    testimonialCards[cardIndex].classList.add('hidden');
    cardIndex--;
    testimonialCards[cardIndex].classList.remove('hidden');
  }
});
