import PropTypes from 'prop-types';

const SvgIconPropTypes = {
  svgName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  fill: PropTypes.string,
  isActive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  variantIcon: PropTypes.string,
};

export default SvgIconPropTypes;
