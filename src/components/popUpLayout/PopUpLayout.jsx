import React from 'react';
import PropTypes from 'prop-types';

import { SvgIcon, TitlePopUp } from 'components';

import { CloseBtn, Container } from './PopUpLayout.styled';

const PopUpLayout = ({ title, handleClose, children }) => {
  return (
    <Container>
      <CloseBtn onClick={handleClose}>
        <SvgIcon svgName="icon-x-close" variant='header'/>
      </CloseBtn>
      <TitlePopUp title={title} />
      {children}
    </Container>
  );
};

PopUpLayout.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  // children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PopUpLayout;
