import PropTypes from 'prop-types';

const CardItemPropTypes = {
  item: PropTypes.shape({
    cardOwner: PropTypes.string,
    deadline: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    order: PropTypes.number,
    priority: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default CardItemPropTypes;
