import React from 'react';
import { useBoard } from 'hooks';
import PropTypes from 'prop-types';

import {
  BoardSettings,
  ButtonPlus,
  Input,
  PopUpLayout,
  PrimaryButton,
} from 'components';

import { Container } from './BoardPopUp.styled';

const BoardPopUp = ({ board, onClose }) => {
  const {
    icon,
    background,
    setIcon,
    setBackground,
    handleTitle,
    titleChecker,
    handleBoardSubmit,
  } = useBoard(board, onClose);

  return (
    <Container>
      <PopUpLayout
        title={board ? 'Edit board' : 'New board'}
        handleClose={onClose}
      >
        <Input
          style={{
            marginBottom: '14px',
          }}
          onChange={handleTitle}
          placeholder={board ? board?.title : 'Title'}
        />

        {titleChecker ? (
          <span style={{ color: 'white' }}>Title is required</span>
        ) : null}
        <BoardSettings
          chosenIcon={icon}
          setChosenIcon={setIcon}
          chosenBackground={background}
          setChosenBackground={setBackground}
        />
        <PrimaryButton
          onClick={handleBoardSubmit}
          hasIcon={false}
          variant="primary"
        >
          <ButtonPlus variant="primary" />
          {board ? 'Edit' : 'Create'}
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

BoardPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  board: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
};

export default BoardPopUp;
