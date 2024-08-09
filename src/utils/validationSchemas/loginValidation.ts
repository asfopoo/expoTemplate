import * as Yup from 'yup';

import yupValidations from './yupValidations';

export const loginSchema = Yup.object().shape({
  email: yupValidations.email,
  password: Yup.string().required('Please enter a password'),
});
