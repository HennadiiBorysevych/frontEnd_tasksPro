import PropTypes from 'prop-types';

const ControlIconsPropTypes = {
  deadlineToday: PropTypes.bool,
  deadlineExpired: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  variantIcon: PropTypes.string,
  isActive: PropTypes.bool,
  onDeleteAction: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  onToggle: PropTypes.func,
};

export default ControlIconsPropTypes;
