import React from 'react';
import PropTypes from 'prop-types';

import { useBoard } from 'hooks';

import { Input, PopUpLayout, PrimaryButton } from 'ui';

import BoardSettings from '../boardSettings/BoardSettings';

import {
  ErrorMessage,
  Form,
} from '../../assets/styles/commonFormStyles.styled';

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
    <PopUpLayout
      title={board ? 'Edit board' : 'New board'}
      handleClose={onClose}
    >
      <Form onSubmit={handleBoardSubmit}>
        <Input
          onChange={handleTitle}
          placeholder={board ? board?.title : 'Title'}
        />

        {titleChecker ? <ErrorMessage>Title is required</ErrorMessage> : null}
        <BoardSettings
          chosenIcon={icon}
          setChosenIcon={setIcon}
          chosenBackground={background}
          setChosenBackground={setBackground}
        />
        <PrimaryButton
          type="submit"
          variant="primary"
          hasIcon={true}
          id="create-or-edit-button"
        >
          {board ? 'Edit' : 'Create'}
        </PrimaryButton>
      </Form>
    </PopUpLayout>
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
