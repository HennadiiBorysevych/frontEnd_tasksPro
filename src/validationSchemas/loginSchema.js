import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\s+/g, '') : value
    )
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, "Password can't be longer than 64 characters")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()\-_=+?<>{}[\]\\/]+$/,
      'Invalid characters in password'
    )
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\s+/g, '') : value
    )
    .required('Password is required'),
});

export default loginSchema;
