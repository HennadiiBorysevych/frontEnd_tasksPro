import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name cannot be longer than 32 characters')
    .matches(
      /^[a-zA-Z0-9\s\-_!@#$%^&*()+=?<>{}[\]\\/]+$/,
      'Invalid characters in name'
    )
    .required('Name is required'),
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

export default registerSchema;
