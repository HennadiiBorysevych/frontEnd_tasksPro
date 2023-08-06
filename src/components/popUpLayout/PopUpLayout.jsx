import React from 'react';
import PropTypes from 'prop-types';

import { TitlePopUp, SvgIcon } from 'components';

import { Container, CloseBtn } from './PopUpLayout.styled';

const PopUpLayout = ({ title, handleClose, children }) => {
  return (
    <Container>
      <CloseBtn onClick={handleClose}>
        <SvgIcon svgName="icon-x-close" stroke="#FFF" />
      </CloseBtn>
      <TitlePopUp title={title} />
      {children}
    </Container>
  );
};

PopUpLayout.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PopUpLayout;
