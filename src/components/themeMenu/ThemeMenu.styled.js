const { default: styled } = require('@emotion/styled');

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;

  padding: 18px 44px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const DropdownItem = styled.li`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  letter-spacing: -0.28px;

  &.selected {
    color: #bedbb0;
  }

  &:hover {
    cursor: pointer;
  }
`;
