import { css } from '@emotion/react';

import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

export const SideBarWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  min-height: 100vh;
  background-color: ${props => `${props.theme.palette.background.sidemenu}`};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: ${props => `${props.theme.palette.text.sidemenu}`};

  @media screen and (max-width: 767px) {
    left: ${({ isOpen }) => (isOpen ? '0' : '-225px')};
  }

  @media screen and (max-width: 1439px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-260px')};
    transition: left 0.3s ease-in-out;
    z-index: 1000;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 0;
    width: 260px;
  }

  ${({ isOpen, windowHeight }) =>
    isOpen &&
    css`
      @media screen and (max-height: ${windowHeight}px) {
        height: ${windowHeight}px;
        overflow-y: hidden;
      }
    `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.5);
  z-index: 999;
`;

export const TitleBoardList = styled(Typography)`
  margin-top: 70px;
  margin-bottom: 8px;
  color: ${props => `${props.theme.palette.text.sidemenu}80`};
  padding: 0 14px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    padding: 0 24px;
  }
`;

export const CreateBoard = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${props => `${props.theme.palette.text.sidemenu}1A`};
  border-bottom: 1px solid ${props => `${props.theme.palette.text.sidemenu}1A`};
  padding: 14px;
  margin-bottom: 40px;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 24px;
  }
`;

export const TitleButton = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 1.25;
`;
