import PropTypes from 'prop-types';

import { typographyVariants } from 'constants';

const TypographyPropTypes = {
  variant: PropTypes.oneOf(Object.values(typographyVariants)),
  children: PropTypes.node.isRequired,
};

export default TypographyPropTypes;
