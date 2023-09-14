import React from 'react';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { popUpSchema } from 'helpers/validationSchemas';
import { useBoard } from 'hooks';

import { CommonPopUp } from 'ui';

import BoardSettings from '../boardSettings/BoardSettings';

const BoardPopUp = ({ board, onClose }) => {
  const {
    icon,
    background,
    setIcon,
    setBackground,
    handleTitle,
    handleBoardSubmit,
  } = useBoard(board, onClose);

  const { boardValues } = popUpInitialValues;

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: board ? board?.title : 'Title',
    },
  ];

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
      version="settingsPopUp"
      hasIcon={true}
      variant="primary"
      id="create-or-edit-board-button"
    >
      <BoardSettings
        chosenIcon={icon}
        setChosenIcon={setIcon}
        chosenBackground={background}
        setChosenBackground={setBackground}
      />
    </CommonPopUp>
    // <PopUpLayout
    //   title={board ? 'Edit board' : 'New board'}
    //   handleClose={onClose}
    // >
    //   <Form onSubmit={handleBoardSubmit}>
    //     <Input
    //       onChange={handleTitle}
    //       placeholder={board ? board?.title : 'Title'}
    //     />

    //     {titleChecker ? <ErrorMessage>Title is required</ErrorMessage> : null}
    //     <BoardSettings
    //       chosenIcon={icon}
    //       setChosenIcon={setIcon}
    //       chosenBackground={background}
    //       setChosenBackground={setBackground}
    //     />
    //     <PrimaryButton
    //       version="settingsPopUp"
    //       type="submit"
    //       variant="primary"
    //       hasIcon={true}
    //       id="create-or-edit-button"
    //     >
    //       {board ? 'Edit' : 'Create'}
    //     </PrimaryButton>
    //   </Form>
    // </PopUpLayout>
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
