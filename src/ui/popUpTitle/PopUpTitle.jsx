import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './popUpTitle.styled';

const PopUpTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PopUpTitle;

PopUpTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
