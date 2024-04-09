import { getPriorityColor } from 'helpers';

import { Typography } from 'ui';

import styled from '@emotion/styled';

export const Details = styled.div(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingTop: '14px',
  borderTop: `1px solid ${props.theme.palette.background.lineBefore}`,
}));

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const DetailLabel = styled(Typography)`
  margin: 0;
  margin-bottom: 4px;
`;

export const PriorityBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Circle = styled.div(props => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor:
    props.priority === 'Without'
      ? props.theme.palette.background.withoutPriorityBackground
      : getPriorityColor(props.priority),
}));
