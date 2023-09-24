import React from 'react';
import PropTypes from 'prop-types';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { supportSchema } from 'helpers';
import { useAuthCollector, useSupport } from 'hooks';

import { CommonPopUp } from 'ui';

const SupportPopUp = ({ onClose }) => {
  const { user } = useAuthCollector();
  const { handleInput, handleSupportSubmit } = useSupport(onClose);

  const { supportValues } = POP_UP_INITIAL_VALUES;

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
      variantMarginTop="formPopUp"
      hasIcon={false}
      id="send-email-to-support"
    />
  );
};

export default SupportPopUp;

SupportPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};
