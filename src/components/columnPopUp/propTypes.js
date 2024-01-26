import PropTypes from 'prop-types';

const ColumnPopUpPropTypes = {
  boardId: PropTypes.string,
  columnIndex: PropTypes.number,
  column: PropTypes.shape({
    id: PropTypes.string,
    columnOwner: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        cardOwner: PropTypes.string,
        order: PropTypes.number,
        deadline: PropTypes.string,
        id: PropTypes.string,
        priority: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
  handleModalClose: PropTypes.func.isRequired,
};

export default ColumnPopUpPropTypes;
