import PropTypes from 'prop-types';

const CommonFormPropTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object,
  avatar: PropTypes.bool,
  children: PropTypes.node,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      multiline: PropTypes.bool,
    })
  ).isRequired,
  onChange: PropTypes.func,
  variantMessage: PropTypes.string,
  settings: PropTypes.bool,
  id: PropTypes.string,
  variantIcon: PropTypes.string,
  hasIcon: PropTypes.bool,
  variantMarginTop: PropTypes.string,
  buttonText: PropTypes.string,
  google: PropTypes.bool,
};

export default CommonFormPropTypes;
