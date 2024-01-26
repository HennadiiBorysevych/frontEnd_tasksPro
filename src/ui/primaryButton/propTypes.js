import PropTypes from 'prop-types';

const PrimaryButtonPropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasIcon: PropTypes.bool,
  svgName: PropTypes.string,
  variantIcon: PropTypes.string,
  variantMarginTop: PropTypes.string,
};

export default PrimaryButtonPropTypes;
