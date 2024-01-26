import PropTypes from 'prop-types';

const BoardHeadPropTypes = {
  onClose: PropTypes.func.isRequired,
  board: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
};

export default BoardHeadPropTypes;
