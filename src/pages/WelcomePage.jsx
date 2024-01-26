import { useAuthRedux } from 'redux/services';

import { IMAGES } from 'constants';

import { generateContentImages } from 'helpers';

import { GoogleAuth, Logo, SkeletonLoader } from 'components';

import * as commonStyles from './styles/commonStyles.styled';
import * as styles from './styles/welcomePage.styled';

const WelcomePage = () => {
  const { isFetchingCurrent } = useAuthRedux();
  const devicePixelRatio = window.devicePixelRatio || 1;

  const matchedWelcomeImage = generateContentImages(
    IMAGES.welcomeImages,
    devicePixelRatio,
    'image/webp'
  );
  return isFetchingCurrent ? (
    <SkeletonLoader page="/welcome" />
  ) : (
    <commonStyles.Background>
      <commonStyles.Container>
        <styles.WelcomeContainer>
          <styles.UserImage
            src={matchedWelcomeImage.src}
            alt="user-avatar"
            width={124}
            height={124}
          />
          <Logo variantLogo="welcome" />
          <styles.WelcomeText variant="welcomePageText">
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </styles.WelcomeText>
          <ul>
            <li>
              <styles.RegisterLink to="/auth/register" register="true">
                <styles.LinkText variant="buttonText" register="true">
                  Registration
                </styles.LinkText>
              </styles.RegisterLink>
            </li>
            <li>
              <styles.RegisterLink to="/auth/login">
                <styles.LinkText variant="buttonText">Log In</styles.LinkText>
              </styles.RegisterLink>
            </li>
            <li>
              <GoogleAuth />
            </li>
          </ul>
        </styles.WelcomeContainer>
      </commonStyles.Container>
    </commonStyles.Background>
  );
};

export default WelcomePage;
