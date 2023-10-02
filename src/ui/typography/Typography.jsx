import React from 'react';
import PropTypes from 'prop-types';

import { typographyVariants } from 'constants';

import { textVariants } from './Typography.styled';

const Typography = ({ variant, children, ...rest }) => {
  const VariantComponent =
    textVariants[variant] || textVariants[typographyVariants.p1];

  return <VariantComponent {...rest}>{children}</VariantComponent>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.values(typographyVariants)),
  children: PropTypes.node.isRequired,
};

export default Typography;
