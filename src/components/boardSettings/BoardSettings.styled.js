import styled from '@emotion/styled';
import { Field } from 'formik';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(8 * 32px);
  margin-bottom: 24px;
`;

export const RadioField = styled(Field)`
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:hover ~ .background-label,
  &:checked ~ .background-label {
    outline: 1px solid  #bedbb0;;
  }

  &:hover ~ .icon-label,
  &:checked ~ .icon-label {
    color: rgba(255, 255, 255, 0.1);;
  }
`;

export const IconContainer = styled.div`
  color: rgba(255, 255, 255, 0.1);;
  margin-right: 8px;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;

export const BoardText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #ffffff;;
`;