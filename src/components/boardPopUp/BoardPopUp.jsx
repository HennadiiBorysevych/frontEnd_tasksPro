import React from 'react';
import PropTypes from 'prop-types';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { popUpSchema } from 'helpers';
import { useBoard } from 'hooks';

import { CommonPopUp } from 'ui';

import BoardSettings from '../boardSettings/BoardSettings';

const BoardPopUp = ({ board, onClose }) => {
  const {
    inputs,
    icon,
    background,
    setIcon,
    setBackground,
    handleTitle,
    handleBoardSubmit,
  } = useBoard(board, onClose);

  const { boardValues } = POP_UP_INITIAL_VALUES;

  return (
    <CommonPopUp
      title={board ? 'Edit board' : 'New board'}
      onClose={onClose}
      onSubmit={handleBoardSubmit}
      onChange={handleTitle}
      inputs={inputs}
      initialValues={boardValues}
      validationSchema={board ? null : popUpSchema}
      buttonText={board ? 'Edit' : 'Create'}
      variantMarginTop="settingsPopUp"
      hasIcon={true}
      settings={true}
      variantIcon="primary"
      id="create-or-edit-board-button"
    >
      <BoardSettings
        chosenIcon={icon}
        setChosenIcon={setIcon}
        chosenBackground={background}
        setChosenBackground={setBackground}
      />
    </CommonPopUp>
  );
};

export default BoardPopUp;

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
