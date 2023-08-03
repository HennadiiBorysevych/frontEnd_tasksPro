import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(8).trim(),
  email: Yup.string().email('Invalid email').required('Required').trim(),
  password: Yup.string()
    .required('Required')
    .min(8, 'Too Short!')
    .max(64, 'Too Long!')
    .trim(),
});

export default registerSchema;
