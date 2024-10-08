import * as Yup from 'yup';

import yupValidations from './yupValidations';

export const registrationSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required').trim().max(100),
  lastname: Yup.string().required('Last name is required').trim().max(100),
  email: yupValidations.email,
  password: yupValidations.password,
  confirmPassword: yupValidations.confirmPassword,
});
