import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { authSelectors } from 'redux/auth';

import {
  Code,
  Container,
  Description,
  ErrorBackground,
  Header,
  Link,
  Num,
  Start,
  Text,
} from './styles/errorPage.styled';

const ErrorPage = () => {
  const { isLoggedIn } = useAuth();
  const [userTheme, setUserTheme] = useState('');
  const user = useSelector(authSelectors.selectUser);

  // const { activeBoardId, activeBoard } = useBoardContext();

  // const loc = useLocation();

  useEffect(() => {
    if (!user.name) {
      setUserTheme('Void');
      return;
    }

    setUserTheme(user.theme);
  }, []);

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
    <ErrorBackground txtColor={userTheme} bgColor={userTheme} bgImg={userTheme}>
      <Container>
        <Header>
          <Code>
            <Num>404</Num>
            error
          </Code>
          <Description>
            <Start>{errDis.start}</Start>
            {errDis.desc}
          </Description>
        </Header>
        <Text>{errDis.text}</Text>
        <NavLink to={errDis.nav}>
          <Link btnColor={userTheme} btnBgColor={userTheme}>
            {errDis.link}
          </Link>
        </NavLink>
        <Text>{errDis.underLinkText}</Text>
      </Container>
    </ErrorBackground>
  );
};

export default ErrorPage;
