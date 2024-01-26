import PropTypes from 'prop-types';

const CardColumnPropTypes = {
  column: PropTypes.shape({
    columnOwner: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.array,
    orderColumn: PropTypes.number,
    title: PropTypes.string.isRequired,
  }),
};

export default CardColumnPropTypes;
