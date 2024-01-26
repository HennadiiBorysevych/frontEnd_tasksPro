import { useEffect, useState } from 'react';
import { useAuthRedux } from 'redux/services';

import * as styles from './styles/errorPage.styled';

const ErrorPage = () => {
  const { isLoggedIn, user } = useAuthRedux();
  const [userTheme, setUserTheme] = useState('');

  useEffect(() => {
    if (!user.name) {
      setUserTheme('Void');
      return;
    }

    setUserTheme(user.theme);
  }, [user.name, user.theme]);

  const errDis = {
    start: isLoggedIn ? 'Well...yeah. Not gonna happened, sorry.' : null,
    desc: isLoggedIn
      ? `Seems such
    "page" doesn't exist.`
      : 'Oh. Hello there! Looks like you are lost a bit.',
    text: isLoggedIn
      ? "Don't worry, we'll highlight the trail to a safer place."
      : 'If you are looking for us you were very close. Here, follow the link and let us know if you needed something.',
    nav: isLoggedIn ? '/home' : '/welcome',
    link: isLoggedIn
      ? "This link to Home, yeah. You've get it."
      : 'Start achieving your goals now!',
    underLinkText: isLoggedIn
      ? '(...You should check the exact address there you want to go. Or, try to tap a bit slower next time.)'
      : '(...In the case you happened here randomly...well, welcome anyway.)',
  };

  return (
    <styles.ErrorBackground
      isLoggedIn={isLoggedIn}
      txtColor={userTheme}
      bgColor={userTheme}
      bgImg={userTheme}
    >
      <styles.Container>
        <styles.Header>
          <styles.Code>
            <styles.Num>404</styles.Num>
            error
          </styles.Code>
          <styles.Description>
            <styles.Start>{errDis.start}</styles.Start>
            {errDis.desc}
          </styles.Description>
        </styles.Header>
        <styles.Text>{errDis.text}</styles.Text>
        <styles.Link to={errDis.nav}>{errDis.link}</styles.Link>
        <styles.Text>{errDis.underLinkText}</styles.Text>
      </styles.Container>
    </styles.ErrorBackground>
  );
};

export default ErrorPage;
