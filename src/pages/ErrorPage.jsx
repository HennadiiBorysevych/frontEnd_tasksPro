import { NavLink } from 'react-router-dom';
import {
  Background,
  Container,
  RegisterLink,
  ErrorPageHeader,
  ErrorPageCode,
  ErrorPageDescription,
  ErrorPageText,
  ErrorPageNum,
  ErrorPageInviteText,
} from './pages.styled';
import { useAuth } from 'hooks';

const ErrorPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Background>
      <Container>
        <ErrorPageHeader>
          <ErrorPageCode>
            <ErrorPageNum>404</ErrorPageNum>
            error
          </ErrorPageCode>
          <ErrorPageDescription>
            It looks like you are trying to reach some other address of some
            other dashboards.
          </ErrorPageDescription>
        </ErrorPageHeader>
        <ErrorPageText>
          If you are looking for us you just missed a bit. Here, follow the link
          and let us know if you needed something.
        </ErrorPageText>
        <NavLink to="/welcome">
          <RegisterLink>Start achieving your goals now!</RegisterLink>
        </NavLink>
        <ErrorPageInviteText>
          (...In the case you happened here randomly...well, welcome anyway.)
        </ErrorPageInviteText>
      </Container>
    </Background>
  );
};

export default ErrorPage;
