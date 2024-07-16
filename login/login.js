const form = document.querySelector('form');
const inputContainer = form.querySelectorAll('.form__input');

const DEMO_USER = {
  email: 'demo@email.com',
  password: 'demo',
};

const removeError = (emailEl, emailErr, passwordEl, passwordErr) => {
  emailEl.classList.remove('error');
  emailErr.textContent = '';
  passwordEl.classList.remove('error');
  passwordErr.textContent = '';
};

const checkIfValidUser = () => {
  const email = form.querySelector("input[name='email']");
  const emailError = form.querySelector('#emailError');
  const password = form.querySelector("input[name='password']");
  const passwordError = form.querySelector('#passwordError');

  if (email.value.trim() === '' || password.value.trim() === '') {
    email.classList.add('error');
    emailError.textContent = 'This field is required';
    password.classList.add('error');
    passwordError.textContent = 'This field is required';
  } else {
    removeError(email, emailError, password, passwordError);
  }

  if (email.value.trim() !== '' && password.value.trim() === '') {
    emailError.textContent = '';
    passwordError.textContent = 'Please enter your password';
  }
  if (password.value.trim() !== '' && email.value.trim() === '') {
    passwordError.textContent = '';
    emailError.textContent = 'Please enter your email';
  }

  if (email.value.trim() !== '' && password.value.trim() !== '') {
    if (
      email.value.trim() === DEMO_USER.email &&
      password.value.trim() === DEMO_USER.password
    ) {
      removeError(email, emailError, password, passwordError);
      email.value = '';
      password.value = '';
      setTimeout(() => {
        alert('Logged in successfully!');
      }, 250);
    } else {
      email.classList.add('error');
      emailError.textContent = 'Sorry. User does not exist';
      password.classList.add('error');
    }
  }
};

// const validateInput = (email, inputEl, errorMessage) => {
//   const regex =
//     /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

//   const isValid = regex.test(email);

//   if (inputEl.value != '') {
//     if (isValid) {
//       setSuccessState(inputEl);
//       errorMessage.textContent = '';

//       if (email != DEMO_USER.email) {
//         setErrorState(inputEl);
//         errorMessage.textContent = 'Sorry! User does not exist';
//       } else {
//         setSuccessState(inputEl);
//         errorMessage.textContent = '';
//       }
//     } else {
//       setErrorState(inputEl);
//       errorMessage.textContent = 'Please enter correct email format';
//     }
//   } else {
//     errorMessage.textContent = 'This field is required';
//   }

//   return isValid;
// };

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkIfValidUser();
});
