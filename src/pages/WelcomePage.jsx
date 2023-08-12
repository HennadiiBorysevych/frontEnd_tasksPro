import { NavLink } from 'react-router-dom';
import userAvatar from 'assets/images/welcomeAndPlate/welcome.png';

import { Logo } from 'components';

import { Background, Container } from './styles/commonStyles';

import {
  RegisterLink,
  UserImage,
  WelcomeText,
} from './styles/welcomePage.styled';

const WelcomePage = () => {
  return (
    <Background>
      <Container>
        <UserImage src={userAvatar} alt="user-avatar" />
        <Logo variant="welcome" />
        <WelcomeText>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </WelcomeText>
        <ul>
          <RegisterLink>
            <NavLink to="/auth/register">Registration </NavLink>
          </RegisterLink>
          <li>
            <NavLink to="/auth/login">Log In</NavLink>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default WelcomePage;
