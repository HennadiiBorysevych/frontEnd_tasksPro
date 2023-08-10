import * as Yup from 'yup';

const supportSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email may contain only letters, apostrophe, dash and spaces and numbers. For example 9.WaFFe!s@mail.com'
    )
    .trim(),
  comment: Yup.string().required(),
});

export default supportSchema;
