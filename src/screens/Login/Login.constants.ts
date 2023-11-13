type AutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

export const LOGIN_INPUTS = [
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
    secureTextEntry: true,
  },
];

export const INITIAL_VALUES = {
  email: '',
  password: '',
};
