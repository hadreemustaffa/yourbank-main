export const DEMO_USER = {
  email: 'demo@email.com',
  password: 'demoaccount',
};

export const ERROR_MESSAGE = {
  emptyInput: 'This field is required',
  incorrectEmailFormat: 'Please enter the correct email format',
  userDoesNotExist: `The email or password you entered doesn't match our records. Please try again.`,
  passwordTooShort: 'Your password should be at least 8 characters long',
  firstNameTooLong: 'First name must not exceed 30 characters',
  LastNameTooLong: 'Last name must not exceed 60 characters',
};

export const EMAIL_REGEX =
  /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;
