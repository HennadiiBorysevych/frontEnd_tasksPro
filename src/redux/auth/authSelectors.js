const getIsRegistered = state => state.auth.isRegistered;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsRegistered,
  getIsLoggedIn,
  getUser,
  getIsFetchingCurrent,
};
export default authSelectors;
