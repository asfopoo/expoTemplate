import * as Yup from 'yup';

const yupValidations = {
  email: Yup.string()
    .email('Please Enter a Valid Email Address')
    .required('Please Enter an Email Address'),
  password: Yup.string()
    .min(10, 'Password Must Contain at Least 10 Characters')
    .matches(/([0-9])/, 'Must Contain One Number')
    .matches(/([A-Z])/, 'Must Contain One Uppercase Letter')
    .matches(/([a-z])/, 'Must Contain One Lowercase Letter')
    .matches(/[^a-zA-Z0-9]/, 'Must contain One Special Character')
    .required('Please Enter a Password'),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
  newPassword: (pass: string) =>
    Yup.string()
      .min(10, 'Password Must Contain at Least 10 Characters')
      .matches(/([0-9])/, 'Must Contain One Number')
      .matches(/([A-Z])/, 'Must Contain One Uppercase Letter')
      .matches(/([a-z])/, 'Must Contain One Lowercase Letter')
      .matches(/[^a-zA-Z0-9]/, 'Must contain One Special Character')
      .notOneOf([pass], 'New Password Must Be Different From Old Password')
      .required('Please enter a password'),
  username: Yup.string()
    .matches(/^(?!\s+$).*/, 'Must Contain at Least 1 Character')
    .matches(
      /^[A-Za-z0-9_-]*$/,
      'Usernames Can Only Contain Alphanumerics, Underscores, or Dashes',
    )
    .required('Required'),
  phone: Yup.string()
    .matches(
      /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/,
      'Please Enter a Valid Phone Number',
    )
    .nullable(),
};

export default yupValidations;
