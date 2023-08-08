import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Backdrop, ModalBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onBackdropClick }) => {
  return createPortal(
    <Backdrop
      id="backdrop"
      onClick={e => {
        onBackdropClick(e.target.id);
      }}
    >
      <ModalBox>{children}</ModalBox>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
};

export default Modal;
