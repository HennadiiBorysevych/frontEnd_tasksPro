import memoizeOne from 'memoize-one';
import * as Yup from 'yup';

const createTitleSchema = memoizeOne(() =>
  Yup.string().required('Title is required')
);

const createNameSchema = memoizeOne(() =>
  Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name cannot be longer than 32 characters')
    .matches(
      /^[a-zA-Z0-9\s\-_!@#$%^&*()+=?<>{}[\]\\/]+$/,
      'Invalid characters in name'
    )
);

const createEmailSchema = memoizeOne(() =>
  Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\s+/g, '') : value
    )
    .trim()
    .required('Email is required')
);

const createPasswordSchema = memoizeOne(() =>
  Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, "Password can't be longer than 64 characters")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()\-_=+?<>{}[\]\\/]+$/,
      'Invalid characters in password'
    )
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\s+/g, '') : value
    )
    .required('Password is required')
);

export const addCardSchema = Yup.object({
  title: createTitleSchema(),
  description: Yup.string().required('Description is required'),
});

export const authSchema = Yup.object().shape({
  name: createNameSchema(),
  email: createEmailSchema(),
  password: createPasswordSchema(),
});

export const changePasswordSchema = Yup.object().shape({
  password: createPasswordSchema(),
  verifyPassword: Yup.string()
    .required('Confirm password is required')
    .test('passwords-match', 'Passwords do not match', function (value) {
      return value === this.parent.newPassword;
    })
    .trim(),
});

export const popUpSchema = Yup.object({
  title: createTitleSchema(),
});

export const sendEmailSchema = Yup.object().shape({
  email: createEmailSchema(),
});

export const supportSchema = Yup.object().shape({
  email: createEmailSchema(),
  comment: Yup.string().required('Comment is required'),
});

export const updateUserSchema = Yup.object().shape({
  name: createNameSchema(),
  email: createEmailSchema(),
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
