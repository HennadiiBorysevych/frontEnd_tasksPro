import PropTypes from 'prop-types';

const CardSettingsPropTypes = {
  priority: PropTypes.string.isRequired,
  deadline: PropTypes.instanceOf(Date),
  handlePriority: PropTypes.func.isRequired,
  setDeadline: PropTypes.func.isRequired,
};

export default CardSettingsPropTypes;
