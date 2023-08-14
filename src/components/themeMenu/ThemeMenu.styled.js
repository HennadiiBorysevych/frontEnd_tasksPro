const { default: styled } = require('@emotion/styled');

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${props => props.theme.palette.hover.primaryButton}
  }
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;

  padding: 18px 44px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.palette.primary.border};
  background: ${props => `${props.theme.palette.background.dropdown}`};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const DropdownItem = styled.li`
  color: ${props => `${props.theme.palette.text.primary}`};
  font-size: 14px;
  letter-spacing: -0.28px;

  &.selected {
    color: ${props => `${props.theme.palette.hover.inputAndIcon}`};
  }

  &:hover {
    cursor: pointer;
  }
`;
