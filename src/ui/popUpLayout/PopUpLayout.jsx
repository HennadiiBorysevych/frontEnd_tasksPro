import React from 'react';
import PropTypes from 'prop-types';

import { PopUpTitle, SvgIcon } from 'ui';

import { CloseBtn, Container } from './PopUpLayout.styled';

const PopUpLayout = ({ title, handleClose, children }) => {
  return (
    <Container>
      <CloseBtn onClick={handleClose}>
        <SvgIcon svgName="icon-x-close" variant="header" size="18" />
      </CloseBtn>
      <PopUpTitle title={title} />
      {children}
    </Container>
  );
};

PopUpLayout.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PopUpLayout;
