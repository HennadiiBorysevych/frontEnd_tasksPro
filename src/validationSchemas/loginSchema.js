import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email may contain only letters, apostrophe, dash and spaces and numbers. For example 9.WaFFe!s@mail.com'
    )
    .required('Required')
    .trim(),
  password: Yup.string()
    .required('Required')
    .min(8, 'Too Short!')
    .max(64, 'Too Long!')
    .trim(),
});

export default loginSchema;
