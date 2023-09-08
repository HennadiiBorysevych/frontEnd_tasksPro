import { GoogleAuth, Logo } from 'components';

import userAvatar from 'assets/images/welcomeAndPlate/welcome.png';

import { Background, Container } from './styles/commonStyles.styled';
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
          <WelcomeText variant="welcomePageText">
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </WelcomeText>
          <ul>
            <li>
              <RegisterLink to="/auth/register" register="true">
                Registration
              </RegisterLink>
            </li>
            <li>
              <RegisterLink to="/auth/login">Log In</RegisterLink>
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
