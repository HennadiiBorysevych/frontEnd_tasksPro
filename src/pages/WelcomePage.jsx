import { NavLink } from 'react-router-dom';
import userAvatar from 'assets/images/welcomeAndPlate/welcome.png';
import GoogleAuth from '../components/googleAuth/GoogleAuth';
import { Logo } from 'components';

import { Background, Container } from './styles/commonStyles';

import {
  RegisterLink,
  UserImage,
  WelcomeContainer,
  WelcomeText,
} from './styles/welcomePage.styled';

const WelcomePage = () => {
  return (
    <Background>
      <Container>
        <WelcomeContainer>
          <UserImage
            src={userAvatar}
            alt="user-avatar"
            width={124}
            height={124}
          />
          <Logo variant="welcome" />
          <WelcomeText>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </WelcomeText>
          <ul>
            <li>
              <RegisterLink to="/auth/register">Registration </RegisterLink>
            </li>
            <li>
              <NavLink to="/auth/login">Log In</NavLink>
            </li>
            <li>
              <GoogleAuth />
            </li>
          </ul>
        </WelcomeContainer>
      </Container>
    </Background>
  );
};

export default WelcomePage;
