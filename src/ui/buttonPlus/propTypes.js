import PropTypes from 'prop-types';

const ButtonPlusPropTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  variantIcon: PropTypes.string,
};

export default ButtonPlusPropTypes;
