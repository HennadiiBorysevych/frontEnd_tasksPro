import PropTypes from 'prop-types';

const InputPropTypes = {
  multiline: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  height: PropTypes.string,
};

export default InputPropTypes;
