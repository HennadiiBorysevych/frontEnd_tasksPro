import { hexToRgb } from 'helpers';

import styled from '@emotion/styled';

export const FiltersLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;
`;

export const FilterTitle = styled.p`
  text-shadow: #ffffff 1px 0 1px;
  color: ${props => props.theme.palette.text.primary}CC;

  &:hover {
    color: ${props => props.theme.palette.hover.primaryButton};
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 374px) {
    max-width: 300px;
  }

  @media (min-width: 375px) {
    width: 300px;
  }
`;

export const Line = styled.div`
  position: relative;
  margin-bottom: 14px;
  &::before {
    content: '';
    display: block;
    margin-bottom: 14px;
    width: 252px;
    border: 1px solid ${props => props.theme.palette.text.primary}1A;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelsTitle = styled.p`
  color: ${props => props.theme.palette.text.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.28px;
`;

export const ShowAllLabel = styled.label`
  color: ${props => props.theme.palette.text.primary}80;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const ShowAllRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Priority = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.text.primary}80;
  font-size: 12px;
  letter-spacing: -0.24px;
  gap: 10px;
  cursor: pointer;
`;

export const Radio = styled.input`
  position: relative;
  visibility: hidden;
  cursor: pointer;
  margin: 0;

  &::after {
    visibility: visible;
    top: 0;
    left: 0;
    z-index: 10;
    position: absolute;
    content: '';
    border-radius: 50%;
    padding: 5px;
    display: block;
    width: 14px;
    height: 14px;
    ${props => {
      switch (props.value) {
        case 'low':
          return `background-color: #8fa1d0}`;
        case 'medium':
          return `background-color: #e09cb5`;
        case 'high':
          return `background-color: #bedbb0`;
        case 'without':
          return `background-color: rgba(${hexToRgb(
            props.theme.palette.text.primary
          )}, 0.30)`;
        default:
          return;
      }
    }}
  }
  &:checked {
    &::after {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      display: block;
      width: 7px;
      height: 7px;
      padding: 0;
    }

    &:checked {
      &::before {
        visibility: visible;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        content: '';
        border-radius: 50%;
        width: 14px;
        height: 14px;
        border: 1px solid;
        background-color: transparent;
        ${props => {
          switch (props.value) {
            case 'low':
              return `border-color: #8fa1d0`;
            case 'medium':
              return `border-color: #e09cb5`;
            case 'high':
              return `border-color: #bedbb0`;
            case 'without':
              return `border-color: rgba(${hexToRgb(
                props.theme.palette.text.primary
              )}, 0.30)`;
            default:
              return;
          }
        }}
      }
    }
  }
`;

export const PopUpLayout = styled.title``;
