import { NavLink } from 'react-router-dom';

import { Background, Container } from './styles/commonStyles';

// import { useAuth } from 'hooks';
import {
  ErrorPageCode,
  ErrorPageDescription,
  ErrorPageHeader,
  ErrorPageInviteText,
  ErrorPageNum,
  ErrorPageText,
} from './styles/errorPage.styled';
import { RegisterLink } from './styles/welcomePage.styled';

const ErrorPage = () => {
  // const { isLoggedIn } = useAuth();

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
