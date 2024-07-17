import { EMAIL_REGEX, ERROR_MESSAGE, DEMO_USER } from '../constants';

const form = document.querySelector('form');
const formInputs = form.querySelectorAll('input');
const firstName = form.querySelector("input[name='first-name']");
const lastName = form.querySelector("input[name='last-name']");
const email = form.querySelector("input[name='email']");
const password = form.querySelector("input[name='password']");
const formError = form.querySelector('.form__message');

const validationOptions = [
  {
    attribute: 'data-first-name',
    isValid: (input) => input.value && input.value.trim() <= parseInt(30, 10),
    errorMessage: () => ERROR_MESSAGE.firstNameTooLong,
  },
  {
    attribute: 'data-last-name',
    isValid: (input) => input.value && input.value.trim() <= parseInt(60, 10),
    errorMessage: () => ERROR_MESSAGE.LastNameTooLong,
  },
  {
    attribute: 'data-email',
    isValid: (input) => {
      return EMAIL_REGEX.test(input.value.trim());
    },
    errorMessage: () => ERROR_MESSAGE.incorrectEmailFormat,
  },
  {
    attribute: 'data-password',
    isValid: (input) => input.value.trim() >= input.maxlength,
    errorMessage: () => ERROR_MESSAGE.incorrectEmailFormat,
  },
  {
    attribute: 'required',
    isValid: (input) => input.value.trim() !== '',
    errorMessage: () => ERROR_MESSAGE.emptyInput,
  },
];

let formInputError = false;
const validateSingleInputField = (input) => {
  for (const option of validationOptions) {
    if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
      input.classList.add('error');
      formError.classList.add('error');
      formError.textContent = option.errorMessage();
      formInputError = true;
    }

    if (!formInputError) {
      input.classList.remove('error');
      formError.classList.remove('error');
      formError.textContent = '';
      formInputError = false;
    }
  }

  const removeAllError = () => {
    email.classList.remove('error');
    password.classList.remove('error');
    formError.classList.remove('error');
    formError.textContent = '';
  };
};

formInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    validateSingleInputField(input);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // checkIfValidUser();
});
