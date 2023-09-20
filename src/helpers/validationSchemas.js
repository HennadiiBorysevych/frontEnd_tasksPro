import * as Yup from 'yup';

export const addCardSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export const authSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name cannot be longer than 32 characters')
    .matches(
      /^[a-zA-Z0-9\s\-_!@#$%^&*()+=?<>{}[\]\\/]+$/,
      'Invalid characters in name'
    ),
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

export const changePasswordSchema = Yup.object().shape({
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
  verifyPassword: Yup.string()
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

export const popUpSchema = Yup.object({
  title: Yup.string().required('Title is required'),
});

export const sendEmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\s+/g, '') : value
    )
    .required('Email is required'),
});

export const supportSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email may contain only letters, apostrophe, dash and spaces and numbers. For example 9.WaFFe!s@mail.com'
    )
    .trim(),
  comment: Yup.string().required('Comment is required'),
});

export const updateUserSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(32, 'Too Long!').trim(),
  email: Yup.string()
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email may contain only letters, apostrophe, dash and spaces and numbers. For example 9.WaFFe!s@mail.com'
    )
    .trim(),
  newPassword: Yup.string().min(8, 'Too Short!').max(64, 'Too Long!').trim(),
  password: Yup.string().when(['email', 'newPassword'], {
    is: (email, newPassword) => !!email || !!newPassword,
    then: () =>
      Yup.string()
        .required('Please enter your current password to confirm changes')
        .min(8, 'Too Short!')
        .max(64, 'Too Long!')
        .trim(),
    otherwise: () => Yup.string().notRequired(),
  }),
});
