import React from 'react';
import PropTypes from 'prop-types';

import {
  PopUpLayout,
  BoardSettings,
  ButtonPlus,
  PrimaryButton,
  Input,
} from 'components';

import { Container } from './BoardPopUp.styled';

const BoardPopUp = ({ onClose }) => {
  return (
    <Container>
      <PopUpLayout title="New board" handleClose={onClose}>
        <Input style={{ marginBottom: '14px' }} placeholder="Title" />
        <BoardSettings />
        <PrimaryButton style={{ marginTop: '16px' }}>
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
