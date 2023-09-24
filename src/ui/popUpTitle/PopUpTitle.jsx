import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './popUpTitle.styled';

const PopUpTitle = ({ title, variantMarginBottom }) => {
  return <Title variantMarginBottom={variantMarginBottom}>{title}</Title>;
};

export default PopUpTitle;

PopUpTitle.propTypes = {
  title: PropTypes.string.isRequired,
  variantMarginBottom: PropTypes.string,
};
