import { NavLink } from 'react-router-dom';
import {
  Background,
  Container,
  Header,
  Code,
  Num,
  Description,
  Start,
  Text,
  Link,
} from './styles/homeErrorPage.styled';

// Временная заглушка для выбора темы пользователя
const userTheme = 'dark';

const HomeErrorPage = () => {
  return (
    <Background txtColor={userTheme} bgColor={userTheme}>
      <Container>
        <Header>
          <Code>
            <Num>404</Num>
            error
          </Code>
          <Description>
            <Start>Well...yeah. Not gonna happened, sorry.</Start> Seems such
            "page" doesn't exist.
          </Description>
        </Header>
        <Text>Don't worry, we'll highlight the trail to a safer place.</Text>
        <NavLink to="/home">
          <Link
            txtColor={userTheme}
            btnColor={userTheme}
            btnBgColor={userTheme}
          >
            This link to Home, yeah. You've get it.
          </Link>
        </NavLink>
        <Text>
          (...You should check the exact address there you want to go. Or, try
          to tap a bit slower next time.)
        </Text>
      </Container>
    </Background>
  );
};

export default HomeErrorPage;
