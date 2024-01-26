import React from 'react';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { addCardSchema } from 'helpers';
import { useCard } from 'hooks';

import { CommonPopUp } from 'ui';

import CardSettings from '../cardSettings/CardSettings';

import CardPopUpPropTypes from './propTypes';

const CardPopUp = ({ columnId, cardIndex, card, handleModalClose }) => {
  const {
    inputs,
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    handleCardSubmit,
  } = useCard(columnId, cardIndex, card, handleModalClose);

  const { cardValues } = POP_UP_INITIAL_VALUES;

  return (
    <CommonPopUp
      title={card ? 'Edit card' : 'Add card'}
      onClose={handleModalClose}
      onSubmit={handleCardSubmit}
      onChange={handleInput}
      inputs={inputs}
      initialValues={cardValues}
      validationSchema={card ? null : addCardSchema}
      buttonText={card ? 'Edit' : 'Create'}
      variantMarginTop="settingsPopUp"
      hasIcon={true}
      settings={true}
      variantIcon="primary"
      id="create-or-edit-card-button"
    >
      <CardSettings
        priority={priority}
        deadline={new Date(deadline)}
        handlePriority={handlePriority}
        setDeadline={setDeadline}
      />
    </CommonPopUp>
  );
};

export default CardPopUp;

CardPopUp.propTypes = CardPopUpPropTypes;
