import { useEffect } from 'react';

import { IMAGES } from 'constants';

import { generateContentImages } from 'helpers';
import { useBoardsCollector } from 'hooks';

import { GoogleAuth, Logo } from 'components';

import { Background, Container } from './styles/commonStyles.styled';
import {
  LinkText,
  RegisterLink,
  UserImage,
  WelcomeContainer,
  WelcomeText,
} from './styles/welcomePage.styled';

const WelcomePage = () => {
  const { resetBoardsState } = useBoardsCollector();

  const devicePixelRatio = window.devicePixelRatio || 1;

  useEffect(() => {
    resetBoardsState();
  }, [resetBoardsState]);

  const matchedWelcomeImage = generateContentImages(
    IMAGES.welcomeImages,
    devicePixelRatio,
    'image/webp'
  );
  return (
    <Background>
      <Container>
        <WelcomeContainer>
          <UserImage
            src={matchedWelcomeImage.src}
            alt="user-avatar"
            width={124}
            height={124}
          />
          <Logo variantLogo="welcome" />
          <WelcomeText variant="welcomePageText">
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </WelcomeText>
          <ul>
            <li>
              <RegisterLink to="/auth/register" register="true">
                <LinkText variant="buttonText" register="true">
                  Registration
                </LinkText>
              </RegisterLink>
            </li>
            <li>
              <RegisterLink to="/auth/login">
                <LinkText variant="buttonText">Log In</LinkText>
              </RegisterLink>
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
