import React from 'react';
import PropTypes from 'prop-types';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { supportSchema } from 'helpers';
import { useSupport } from 'hooks';

import { CommonPopUp } from 'ui';

const SupportPopUp = ({ onClose }) => {
  const { inputs, handleInput, handleSupportSubmit } = useSupport(onClose);

  const { supportValues } = POP_UP_INITIAL_VALUES;

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
