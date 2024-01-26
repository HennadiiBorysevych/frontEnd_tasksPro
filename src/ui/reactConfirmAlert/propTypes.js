import PropTypes from 'prop-types';

const ReactConfirmAlertPropTypes = {
  selectedTheme: PropTypes.string.isRequired,
  onDeleteAction: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  onToggle: PropTypes.func,
};

export default ReactConfirmAlertPropTypes;
