import { getPriorityColor } from 'helpers';

import { Typography } from 'ui';

import styled from '@emotion/styled';

export const CardContainer = styled.div(props => ({
  backgroundColor: props.theme.palette.background.card,
  borderRadius: '8px',
  padding: '14px 24px',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',

  '::after': {
    content: "' '",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    borderLeft: '4px solid',
    borderLeftColor:
      props.priority === 'Without'
        ? props.theme.palette.background.withoutPriorityBackground
        : getPriorityColor(props.priority),

    backgroundColor: props.theme.palette.background.card,
    zIndex: 1,
  },
}));

export const DeadlineMessage = styled.p(({ theme, today }) => ({
  position: 'absolute',
  top: '14px',
  right: '24px',
  fontSize: '10px',
  color: today ? theme.palette.accent.main : theme.palette.text.attention,
}));

export const Title = styled(Typography)`
  margin: 0 0 8px;
`;

export const Description = styled(Typography)`
  margin-bottom: 14px;
  min-height: 32px;
`;

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

export const IconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
