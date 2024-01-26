import PropTypes from 'prop-types';

const BoardSettingsPropTypes = {
  chosenIcon: PropTypes.string.isRequired,
  setChosenIcon: PropTypes.func.isRequired,
  chosenBackground: PropTypes.string.isRequired,
  setChosenBackground: PropTypes.func.isRequired,
};

export default BoardSettingsPropTypes;
