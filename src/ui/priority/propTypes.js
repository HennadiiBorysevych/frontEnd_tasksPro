import PropTypes from 'prop-types';

const PriorityPropTypes = {
  priority: PropTypes.string.isRequired,
  setPriority: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
  variant: PropTypes.string,
};

export default PriorityPropTypes;
