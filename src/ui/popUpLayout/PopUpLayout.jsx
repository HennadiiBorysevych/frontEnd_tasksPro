import React from 'react';

import SvgIcon from '../svgIcon/SvgIcon';

import PopUpLayoutPropTypes from './propTypes';

import * as styles from './PopUpLayout.styled';

const PopUpLayout = ({
  variantMarginBottom,
  title,
  handleClose,
  children,
  variantForm,
}) => {
  return (
    <styles.Container variantForm={variantForm}>
      <styles.CloseBtn onClick={handleClose} variantForm={variantForm}>
        <SvgIcon svgName="icon-x-close" variantIcon="header" size="18" />
      </styles.CloseBtn>
      <styles.PopUpTitle
        variant="modalTitle"
        variantMarginBottom={variantMarginBottom}
      >
        {title}
      </styles.PopUpTitle>
      {children}
    </styles.Container>
  );
};

export default PopUpLayout;

PopUpLayout.propTypes = PopUpLayoutPropTypes;
