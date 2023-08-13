import { css } from '@emotion/react';

import styled from '@emotion/styled';

export const SideBarWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  height: 100vh;
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

export const TitleBoardList = styled.h2`
  margin-top: 70px;
  margin-bottom: 8px;
  color: ${props => `${props.theme.palette.text.sidemenu}80`};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;

  padding: 0 24px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const CreateBoard = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${props => `${props.theme.palette.text.sidemenu}1A`};
  border-bottom: 1px solid ${props => `${props.theme.palette.text.sidemenu}1A`};
  padding: 14px 24px;
  margin-bottom: 40px;
`;

export const TitleButton = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 1.25;
`;

export const BoardList = styled.ul`
  position: relative;
  margin-bottom: 40px;
  max-height: 256px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 380px;
  }

  @media screen and (min-width: 1440px) {
    max-height: 126px;
  }
`;
