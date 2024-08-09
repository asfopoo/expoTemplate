type AutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

export const REGISTRATION_INPUTS = [
  {
    identifier: 'firstname',
    label: 'First Name',
    placeholder: 'First Name',
  },
  {
    identifier: 'lastname',
    label: 'Last Name',
    placeholder: 'Last Name',
  },
  {
    identifier: 'email',
    label: 'Email',
    placeholder: 'Email',
    autoCapitalize: 'none' as AutoCapitalize,
  },
  {
    identifier: 'password',
    label: 'Password',
    placeholder: 'Password',
  },
  {
    identifier: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
  },
];

export const INITIAL_VALUES = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};
