// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { useFormik } from 'formik';
// import PropTypes from 'prop-types';

// import { POP_UP_INITIAL_VALUES } from 'constants';

// import { authSchema } from 'helpers';
// import { useAuthCollector } from 'hooks';

// import { Input, PrimaryButton } from 'ui';

// import GoogleAuth from '../googleAuth/GoogleAuth';

// import {
//   ErrorMessage,
//   Form,
//   InputItem,
//   InputList,
// } from '../commonForm/commonForm.styled';

// const { authValues } = POP_UP_INITIAL_VALUES;

// const AuthForm = ({ value, chgForm }) => {
//   const { signIn, signUp } = useAuthCollector();

//   useEffect(() => {
//     const { name, email, password } = authValues;

//     async function breakFormikInputs() {
//       await setValues({
//         name,
//         email,
//         password,
//       });
//     }
//     async function breakFormikTouched() {
//       await setTouched({
//         name: false,
//         email: false,
//         password: false,
//       });
//     }

//     breakFormikInputs();
//     breakFormikTouched();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [chgForm]);

//   const onHandleSubmit = async ({ name, email, password }, { resetForm }) => {
//     try {
//       if (value === 0) {
//         const data = await signUp({ name, email, password });

//         if (data.payload === 'Request failed with status code 409') {
//           toast.error('User with this email already exists');
//           return;
//         }

//         await signIn({ email, password });
//         toast.success('Welcome to TaskPro!');
//       } else {
//         const data = await signIn({ email, password });
//         if (data.payload === 'Request failed with status code 401') {
//           toast.error('Email or password are wrong');
//         }
//       }

//       resetForm();
//     } catch (error) {
//       if (error.response && error.response.status === 409) {
//         console.error('User already exists:', error.message);
//         toast.error('User with this email already exists');
//       } else {
//         console.error('An error occurred:', error.message);
//         // Handle other errors here
//       }
//     }
//   };

//   const formDistributor = {
//     passText: value === 0 ? 'Create a password' : 'Confirm your password',
//     buttText: value === 0 ? 'Register Now' : 'Log in Now',
//   };

//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     touched,
//     setValues,
//     setTouched,
//   } = useFormik({
//     initialValues: authValues,
//     onSubmit: onHandleSubmit,
//     validationSchema: authSchema,
//   });

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <InputList>
//           <InputItem>
//             {value === 0 && (
//               <Input
//                 name="name"
//                 type="name"
//                 placeholder="Enter your name"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.name}
//               />
//             )}
//             {value === 0 && errors.name && touched.name ? (
//               <ErrorMessage variantMessage="authForm">
//                 {errors.name}
//               </ErrorMessage>
//             ) : null}
//           </InputItem>
//           <InputItem>
//             <Input
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             {errors.email && touched.email ? (
//               <ErrorMessage variantMessage="authForm">
//                 {errors.email}
//               </ErrorMessage>
//             ) : null}
//           </InputItem>
//           <InputItem>
//             <Input
//               name="password"
//               type="password"
//               placeholder={formDistributor.passText}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//             />
//             {errors.password && touched.password ? (
//               <ErrorMessage variantMessage="authForm">
//                 {errors.password}
//               </ErrorMessage>
//             ) : null}
//           </InputItem>
//         </InputList>

//         <PrimaryButton
//           variantMarginTop="formPopUp"
//           type="submit"
//           aria-label="authorisation-button"
//         >
//           {formDistributor.buttText}
//         </PrimaryButton>
//       </Form>
//       <GoogleAuth />
//     </>
//   );
// };

// export default AuthForm;

// AuthForm.propTypes = {
//   value: PropTypes.number.isRequired,
//   chgForm: PropTypes.bool.isRequired,
// };
