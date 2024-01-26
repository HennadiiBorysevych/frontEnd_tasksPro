import React from 'react';

import { typographyVariants } from 'constants';

import TypographyPropTypes from './propTypes';

import * as styles from './Typography.styled';

const Typography = ({ variant, children, ...rest }) => {
  const VariantComponent =
    styles.textVariants[variant] || styles.textVariants[typographyVariants.p1];

  return <VariantComponent {...rest}>{children}</VariantComponent>;
};

export default Typography;

Typography.propTypes = TypographyPropTypes;
