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
    handleBoradSubmit,
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
            border: titleChecker && '1px solid red',
          }}
          onChange={handleTitle}
          placeholder={board ? board?.title : 'Title'}
        />
        <BoardSettings
          chosenIcon={icon}
          setChosenIcon={setIcon}
          chosenBackground={background}
          setChosenBackground={setBackground}
        />
        <PrimaryButton
          style={{ marginTop: '16px' }}
          onClick={handleBoradSubmit}
          hasIcon={false}
        >
          <ButtonPlus />
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
