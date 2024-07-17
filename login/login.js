const form = document.querySelector('form');
const email = form.querySelector("input[name='email']");
const formError = form.querySelector('.form__message');
const password = form.querySelector("input[name='password']");

const DEMO_USER = {
  email: 'demo@email.com',
  password: 'demoaccount',
};

const ERROR_MESSAGE = {
  emptyInput: 'Please check your email or password',
  incorrectEmailFormat: 'Please enter the correct email format',
  userDoesNotExist: `The email or password you entered doesn't match our records. Please try again.`,
  passwordTooShort: 'Your password should be at least 8 characters long',
};

const emailRegex =
  /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

const checkIfValidUser = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const isValidEmail = emailRegex.test(emailValue);
  const isPasswordTooShort =
    passwordValue.length < password.getAttribute('minlength');

  const removeAllError = () => {
    email.classList.remove('error');
    password.classList.remove('error');
    formError.classList.remove('error');
    formError.textContent = '';
  };

  // check if input is empty
  if (emailValue === '' || passwordValue === '') {
    email.classList.add('error');
    password.classList.add('error');
    formError.classList.add('error');
    formError.textContent = ERROR_MESSAGE.emptyInput;
  } else {
    removeAllError();
  }

  if (emailValue !== '') {
    if (!isValidEmail) {
      email.classList.add('error');
      formError.classList.add('error');
      formError.textContent = ERROR_MESSAGE.incorrectEmailFormat;
      password.classList.add('error');
    }

    if (isValidEmail && passwordValue === '') {
      email.classList.add('error');
      password.classList.add('error');
      formError.classList.add('error');
      formError.textContent = ERROR_MESSAGE.emptyInput;
    }

    // if both inputs are not empty, check whether whether user exist and log in
    if (isValidEmail && passwordValue !== '') {
      // simulate successful log in on correct credentials
      if (
        emailValue === DEMO_USER.email &&
        passwordValue === DEMO_USER.password
      ) {
        removeAllError();
        email.value = '';
        password.value = '';
        setTimeout(() => {
          alert('Logged in successfully!');
        }, 250);
      } else if (isPasswordTooShort) {
        password.classList.add('error');
        formError.classList.add('error');
        formError.textContent = ERROR_MESSAGE.passwordTooShort;
      } else {
        email.classList.add('error');
        password.classList.add('error');
        formError.classList.add('error');
        formError.textContent = ERROR_MESSAGE.userDoesNotExist;
      }
    }
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkIfValidUser();
});
