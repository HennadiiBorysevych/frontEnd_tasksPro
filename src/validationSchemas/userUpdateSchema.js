import * as Yup from 'yup';

const userUpdateSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(32, 'Too Long!').trim(),
  email: Yup.string()
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email may contain only letters, apostrophe, dash and spaces and numbers. For example 9.WaFFe!s@mail.com'
    )
    .trim(),
  newPassword: Yup.string().min(8, 'Too Short!').max(64, 'Too Long!').trim(),
  // password: Yup.string().when('email', {
  //   is: email => email !== '',
  //   then: Yup.string()
  //     .required('Please enter your current password to confirm changes')
  //     .trim(),
  //   otherwise: Yup.string().when('newPassword', {
  //     is: newPassword => newPassword !== '',
  //     then: Yup.string()
  //       .required('Please enter your current password to confirm changes')
  //       .trim(),
  //     otherwise: Yup.string().trim(),
  //   }),
  // }),
});

export default userUpdateSchema;
