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

const BoardPopUp = ({ onClose }) => {
  const {
    icon,
    background,
    setIcon,
    setBackground,
    handleTitle,
    titleChecker,
    handleBoradSubmit,
  } = useBoard();

  return (
    <Container>
      <PopUpLayout title="New board" handleClose={onClose}>
        <Input
          style={{
            marginBottom: '14px',
            border: titleChecker && '1px solid red',
          }}
          onChange={handleTitle}
          placeholder="Title"
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
          Create
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

BoardPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BoardPopUp;
