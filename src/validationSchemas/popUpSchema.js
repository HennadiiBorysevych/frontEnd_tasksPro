import * as Yup from 'yup';

const popUpSchema = Yup.object({
  title: Yup.string().required('Title is required'),
});

export default popUpSchema;
