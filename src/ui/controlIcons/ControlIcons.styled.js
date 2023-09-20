import styled from '@emotion/styled';

export const IconsContainer = styled.div(props => ({
  display: 'flex',
  // alignItems: props.owner === 'tasks' ? 'flex-end' : 'center',
  alignItems: 'center',
  gap: '8px',
}));
export const EditButton = styled.button`
  width: 16px;
  height: 16px;
`;
