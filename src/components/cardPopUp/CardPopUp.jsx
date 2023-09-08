import React from 'react';
import PropTypes from 'prop-types';

import { useCard } from 'hooks';

import { Input, PopUpLayout, PrimaryButton } from 'ui';

import CardSettings from '../cardSettings/CardSettings';

import { ErrorMessage } from '../../assets/styles/commonFormStyles.styled';

const CardPopUp = ({
  columnId,
  cardIndex,
  card,
  handleModalClose,
  ...rest
}) => {
  // console.log(typeof columnId); //дописати prop-types

  const {
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    titleChecker,
    descriptionChecker,
    handleCardSubmit,
  } = useCard(columnId, cardIndex, card, handleModalClose);

  return (
    <div {...rest}>
      <PopUpLayout
        title={card ? 'Edit card' : 'Add card'}
        handleClose={handleModalClose}
      >
        {/* <Form > */}
        <Input
          name="title"
          onChange={handleInput}
          placeholder={card ? card?.title : 'Title'}
          style={{
            marginBottom: '14px', //---?---------------
          }}
        />
        {titleChecker ? <ErrorMessage>Title is required</ErrorMessage> : null}
        <Input
          name="description"
          onChange={handleInput}
          multiline={true}
          placeholder={card ? card?.description : 'Description'}
          style={{
            marginBottom: '14px', //---?---------------
          }}
        />
        {descriptionChecker ? (
          <ErrorMessage>Description is required</ErrorMessage>
        ) : null}
        <CardSettings
          priority={priority}
          deadline={new Date(deadline)}
          handlePriority={handlePriority}
          setDeadline={setDeadline}
        />
        <PrimaryButton
          id="create-or-edit-card-button"
          hasIcon={true}
          variant="primary"
          onClick={handleCardSubmit}
        >
          {card ? 'Edit' : 'Create'}
        </PrimaryButton>
        {/* </Form> */}
      </PopUpLayout>
    </div>
  );
};

export default CardPopUp;

CardPopUp.propTypes = {
  columnId: PropTypes.string.isRequired,
  cardIndex: PropTypes.number.isRequired,
  // card:
  handleModalClose: PropTypes.func.isRequired,
};
