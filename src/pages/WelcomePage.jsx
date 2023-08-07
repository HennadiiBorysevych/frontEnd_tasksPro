import { Logo } from 'components';
import userAvatar from 'assets/images/welcomeAndPlate/welcome.png';
import { NavLink, useLocation } from 'react-router-dom';


import {
  Background,
  Container,
  AppLogo,
  UserImage,
  WelcomeText,
  NavLinks,
  RegisterLink,
} from './pages.styled';

const WelcomePage = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Background>
      <Container>
        <AppLogo>
          <UserImage src={userAvatar} alt="user-avatar" />
          <Logo variant="welcome" />
        </AppLogo>
        <WelcomeText>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </WelcomeText>
        <NavLinks>
          <NavLink to="/auth/register">
            <RegisterLink>Registration</RegisterLink>
          </NavLink>
          <NavLink to="/auth/login">Log In</NavLink>
        </NavLinks>
      </Container>
    </Background>
  );
};

export default WelcomePage;
