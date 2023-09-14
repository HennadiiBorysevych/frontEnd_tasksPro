import React from 'react';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { supportSchema } from 'helpers/validationSchemas';
import { useAuthCollector, useSupport } from 'hooks';

import { CommonPopUp } from 'ui';

const SupportPopUp = ({ onClose }) => {
  const { user } = useAuthCollector();
  const { handleInput, handleSupportSubmit } = useSupport(onClose);
  // const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
  //   useFormik({
  //     // initialValues: { email: user?.email ?? '', comment: '' },
  //     initialValues: supportValues,
  //     onSubmit: handleSupportSubmit,
  //     validationSchema: supportSchema,
  //   });

  const { supportValues } = popUpInitialValues;

  const inputs = [
    {
      name: 'email',
      type: 'email',
      placeholder: user ? user?.email : 'Email address',
    },
    {
      name: 'comment',
      type: 'text',
      placeholder: 'Your comment',
      multiline: true,
    },
  ];

  return (
    <CommonPopUp
      title="Need help"
      onClose={onClose}
      onSubmit={handleSupportSubmit}
      onChange={handleInput}
      inputs={inputs}
      initialValues={supportValues}
      validationSchema={supportSchema}
      buttonText="Send"
      version="formPopUp"
      hasIcon={false}
      id="send-email-to-support"
    ></CommonPopUp>
    // <PopUpLayout title="Need help" handleClose={onClose}>
    //   <Form onSubmit={handleSubmit}>
    //     <ul>
    //       <InputItem>
    //         <Input
    //           name="email"
    //           type="email"
    //           placeholder="Email address"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.email}
    //         />
    //         {errors.email && touched.email ? (
    //           <ErrorMessage>{errors.email}</ErrorMessage>
    //         ) : null}
    //       </InputItem>
    //       <InputItem>
    //         <Input
    //           name="comment"
    //           type="comment"
    //           placeholder={'Comment'}
    //           multiline={true}
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.comment}
    //         />
    //         {errors.comment && touched.comment ? (
    //           <ErrorMessage>{errors.comment}</ErrorMessage>
    //         ) : null}
    //       </InputItem>
    //     </ul>
    //     <PrimaryButton
    //       version="formPopUp"
    //       id="send-email-to-support"
    //       type="submit"
    //     >
    //       Send
    //     </PrimaryButton>
    //   </Form>
    // </PopUpLayout>
  );
};

export default SupportPopUp;

SupportPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};
