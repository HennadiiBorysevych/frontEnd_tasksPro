import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const useAuthCollector = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUser);
  const isFetchingCurrent = useSelector(authSelectors.selectIsFetchingCurrent);
  const theme = useSelector(authSelectors.selectTheme);

  const dispatch = useDispatch();

  const fetchUser = useCallback(
    () => dispatch(authOperations.fetchCurrentUser()),
    [dispatch]
  );

  const signUp = (name, email, password) =>
    dispatch(authOperations.register(name, email, password));

  const signIn = (email, password) =>
    dispatch(authOperations.logIn(email, password));

  const signOut = () => dispatch(authOperations.logOut());

  const googleAuth = useCallback(
    token => dispatch(authOperations.googleAuth(token)),
    [dispatch]
  );

  const updateProfileData = updatedProfile =>
    dispatch(authOperations.updateUserInfo(updatedProfile));

  const changeTheme = newTheme =>
    dispatch(authOperations.updateUserTheme(newTheme));

  const sendToSupport = helpRequest =>
    dispatch(authOperations.updateUserHelp(helpRequest));

  const passwordRecovery = email =>
    dispatch(authOperations.recoverPassword(email));

  const setNewPassword = passwordNew =>
    dispatch(authOperations.recInPassword(passwordNew));

  return {
    isLoggedIn,
    user,
    isFetchingCurrent,
    theme,
    fetchUser,
    signUp,
    signIn,
    signOut,
    googleAuth,
    updateProfileData,
    changeTheme,
    sendToSupport,
    passwordRecovery,
    setNewPassword,
  };
};

export default useAuthCollector;
