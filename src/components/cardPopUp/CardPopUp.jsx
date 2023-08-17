import React from 'react';
import { useCard } from 'hooks';

import { CardSettings, Input, PopUpLayout, PrimaryButton } from 'components';

import { Container, Wrapper } from './CardPopUp.styled';

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
    descriptionChecker,
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
        {titleChecker ? <Wrapper>Title is required</Wrapper> : null}
        <Input
          name="description"
          onChange={handleInput}
          multiline={true}
          placeholder={card ? card?.description : 'Description'}
          style={{
            marginBottom: '14px',
          }}
        />
        {descriptionChecker ? <Wrapper>Description is required</Wrapper> : null}
        <CardSettings
          priority={priority}
          deadline={new Date(deadline)}
          setPriority={handlePriority}
          setDeadline={setDeadline}
        />
        <PrimaryButton
          hasIcon={true}
          onClick={handleCardSubmit}
          variant="primary"
        >
          {card ? 'Edit' : 'Create'}
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

export default CardPopUp;
