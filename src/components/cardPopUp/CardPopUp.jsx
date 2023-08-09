import React from 'react';
import { useCard } from 'hooks';

import { CardsSettings, Input, PopUpLayout, PrimaryButton } from 'components';

import { Container } from './CardPopUp.styled';

const CardPopUp = ({ columnId, card, handleModalClose }) => {
  const {
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    titleChecker,
    handleCardSubmit,
  } = useCard(columnId, card, handleModalClose);

  return (
    <Container>
      <PopUpLayout
        title={card ? 'Edit card' : 'Add card'}
        handleClose={handleModalClose}
      >
        <Input
          name="title"
          onChange={handleInput}
          placeholder={card ? card?.title : 'Title'}
          style={{
            marginBottom: '14px',
            border: titleChecker && '1px solid red',
          }}
        />
        <Input
          name="description"
          onChange={handleInput}
          multiline={true}
          placeholder={card ? card?.description : 'Description'}
          style={{
            marginBottom: '14px',
            // border: titleChecker && '1px solid red',
          }}
        />

        <CardsSettings
          priority={priority}
          deadline={deadline}
          setPriority={handlePriority}
          setDeadline={setDeadline}
        />
        <PrimaryButton hasIcon={false} onClick={handleCardSubmit}>
          {card ? 'Edit' : 'Create'}
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

export default CardPopUp;
