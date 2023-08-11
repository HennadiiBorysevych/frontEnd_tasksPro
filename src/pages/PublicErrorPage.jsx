import { NavLink } from 'react-router-dom';

import { Background } from './styles/commonStyles';

import {
  Container,
  Header,
  Code,
  Num,
  Description,
  Text,
  Link,
  InviteText,
} from './styles/publicErrorPage.styled';

const ErrorPage = () => {
  return (
    <Background>
      <Container>
        <Header>
          <Code>
            <Num>404</Num>
            error
          </Code>
          <Description>
            It looks like you are trying to reach some other address of some
            other dashboards.
          </Description>
        </Header>
        <Text>
          If you are looking for us you just missed a bit. Here, follow the link
          and let us know if you needed something.
        </Text>
        <NavLink to="/welcome">
          <Link>Start achieving your goals now!</Link>
        </NavLink>
        <InviteText>
          (...In the case you happened here randomly...well, welcome anyway.)
        </InviteText>
      </Container>
    </Background>
  );
};

export default ErrorPage;
