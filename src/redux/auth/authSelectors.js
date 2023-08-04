const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsFetchingCurrent,
};
export default authSelectors;
