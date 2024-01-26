import PropTypes from 'prop-types';

const ProfilePopUpPropTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleModalClose: PropTypes.func.isRequired,
};

export default ProfilePopUpPropTypes;
