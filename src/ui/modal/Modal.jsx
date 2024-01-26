import React from 'react';
import { createPortal } from 'react-dom';

import ModalPropTypes from './propTypes';

import * as styles from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onBackdropClick, variant }) => {
  return createPortal(
    <styles.Backdrop
      id="backdrop"
      onClick={e => {
        onBackdropClick(e.target.id);
      }}
    >
      <styles.ModalBox variant={variant}>{children}</styles.ModalBox>
    </styles.Backdrop>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = ModalPropTypes;
