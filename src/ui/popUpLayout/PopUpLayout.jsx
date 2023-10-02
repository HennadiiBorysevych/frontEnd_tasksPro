import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../svgIcon/SvgIcon';

import { CloseBtn, Container, PopUpTitle } from './PopUpLayout.styled';

const PopUpLayout = ({
  variantMarginBottom,
  title,
  handleClose,
  children,
  variantForm,
}) => {
  return (
    <Container variantForm={variantForm}>
      <CloseBtn onClick={handleClose} variantForm={variantForm}>
        <SvgIcon svgName="icon-x-close" variantIcon="header" size="18" />
      </CloseBtn>
      <PopUpTitle
        variant="modalTitle"
        variantMarginBottom={variantMarginBottom}
      >
        {title}
      </PopUpTitle>
      {children}
    </Container>
  );
};

PopUpLayout.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  variantForm: PropTypes.string,
  variantMarginBottom: PropTypes.string,
};

export default PopUpLayout;
