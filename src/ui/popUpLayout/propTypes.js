import PropTypes from 'prop-types';

const PopUpLayoutPropTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  variantForm: PropTypes.string,
  variantMarginBottom: PropTypes.string,
};

export default PopUpLayoutPropTypes;
