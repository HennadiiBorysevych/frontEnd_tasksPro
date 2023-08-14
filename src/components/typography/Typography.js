import React from 'react';
import PropTypes from 'prop-types';

import { TypographyVariants } from './TypographyVariants';

import { typographyVariants } from './Typography.styled';

const Typography = ({ variant, children, ...rest }) => {
  const VariantComponent =
    typographyVariants[variant] || typographyVariants[TypographyVariants.p1];

  return <VariantComponent {...rest}>{children}</VariantComponent>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.values(TypographyVariants)),
  children: PropTypes.node.isRequired,
};

export default Typography;
