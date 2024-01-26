import PropTypes from 'prop-types';

const CommonPopUpPropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      multiline: PropTypes.bool,
    })
  ).isRequired,
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  validationSchema: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
  variantMarginTop: PropTypes.string,
  variantIcon: PropTypes.string,
  avatar: PropTypes.bool,
  settings: PropTypes.bool,
  google: PropTypes.bool,
  variantMessage: PropTypes.string,
  variantMarginBottom: PropTypes.string,
};

export default CommonPopUpPropTypes;
