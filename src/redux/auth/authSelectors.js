const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsFetchingCurrent,
};
export default authSelectors;
