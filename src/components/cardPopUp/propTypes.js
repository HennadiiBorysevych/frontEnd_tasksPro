import PropTypes from 'prop-types';

const CardPopUpPropTypes = {
  columnId: PropTypes.string,
  cardIndex: PropTypes.number,
  card: PropTypes.shape({
    cardOwner: PropTypes.string,
    deadline: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    order: PropTypes.number,
    priority: PropTypes.string,
    title: PropTypes.string,
  }),
  handleModalClose: PropTypes.func.isRequired,
};

export default CardPopUpPropTypes;
