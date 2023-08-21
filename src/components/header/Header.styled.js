import { media } from 'helpers';

import styled from '@emotion/styled';

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.palette.text.primary};
  background-color: ${props => props.theme.palette.background.header};

  ${media.PREMEDIUM`
  padding: 14px 20px;`}

  ${media.MEDIUM`
  padding: 18px 32px;`}

  ${media.LARGE`
  padding: 18px 24px;
    justify-content: flex-end;
    `}
`;

const SideBarButton = styled.button`
  ${media.LARGE`
  display: none;
    `}
`;

const UserSettings = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const styles = {
  HeaderBox,
  SideBarButton,
  UserSettings,
};

export default styles;
