import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as auth from '../auth';

const useAuthCollector = () => {
  const isLoggedIn = useSelector(auth.selectIsLoggedIn);
  const user = useSelector(auth.selectUser);
  const isFetchingCurrent = useSelector(auth.selectIsFetchingCurrent);
  const theme = useSelector(auth.selectTheme);

  const dispatch = useDispatch();

  const fetchUser = useCallback(
    () => dispatch(auth.fetchCurrentUser()),
    [dispatch]
  );

  const signUp = useCallback(
    (name, email, password) => dispatch(auth.register(name, email, password)),
    [dispatch]
  );

  const signIn = useCallback(
    (email, password) => dispatch(auth.logIn(email, password)),
    [dispatch]
  );

  const signOut = useCallback(() => dispatch(auth.logOut()), [dispatch]);

  const googleAuth = useCallback(
    token => dispatch(auth.googleAuth(token)),
    [dispatch]
  );

  const updateProfileData = useCallback(
    updatedProfile => dispatch(auth.updateUserInfo(updatedProfile)),
    [dispatch]
  );

  const changeTheme = useCallback(
    newTheme => dispatch(auth.updateUserTheme(newTheme)),
    [dispatch]
  );

  const sendToSupport = useCallback(
    helpRequest => dispatch(auth.updateUserHelp(helpRequest)),
    [dispatch]
  );

  const passwordRecovery = useCallback(
    email => dispatch(auth.recoverPassword(email)),
    [dispatch]
  );

  const setNewPassword = useCallback(
    passwordNew => dispatch(auth.recInPassword(passwordNew)),
    [dispatch]
  );

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
