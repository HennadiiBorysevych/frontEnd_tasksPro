import React from 'react';
import { useCard } from 'hooks';

import {
  CardsSettings,
  Input,
  PopUpLayout,
  PrimaryButton,
  ButtonPlus,
} from 'components';

import { Container } from './CardPopUp.styled';

const CardPopUp = ({
  columnId,
  cardIndex,
  card,
  handleModalClose,
  ...rest
}) => {
  const {
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    titleChecker,
    handleCardSubmit,
  } = useCard(columnId, cardIndex, card, handleModalClose);

  return (
    <Container {...rest}>
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
          }}
        />
        {titleChecker ? (
          <span style={{ color: 'white' }}>Title is required</span>
        ) : null}
        <Input
          name="description"
          onChange={handleInput}
          multiline={true}
          placeholder={card ? card?.description : 'Description'}
          style={{
            marginBottom: '14px',
          }}
        />

        <CardsSettings
          priority={priority}
          deadline={new Date(deadline)}
          setPriority={handlePriority}
          setDeadline={setDeadline}
        />
        <PrimaryButton hasIcon={false} onClick={handleCardSubmit}>
          <ButtonPlus />
          {card ? 'Edit' : 'Create'}
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

export default CardPopUp;
