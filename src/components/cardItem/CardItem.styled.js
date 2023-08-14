import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

const getPriorityColor = priority => {
  switch (priority) {
    case 'High':
      return '#BEDBB0';
    case 'Low':
      return '#8FA1D0';
    case 'Medium':
      return '#E09CB5';
    default:
      return '#bababa';
  }
};

export const CardContainer = styled.div`
  background-color: ${props => props.theme.palette.background.cardItem};
  border-radius: 8px;
  padding: 14px 24px;
  min-height: 100px;
  position: relative;
  overflow: hidden;
  ::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0px;
    width: 4px;
    height: 100%;
    border-left: 4px solid ${props => getPriorityColor(props.priority)};
    background-color: ${props => props.theme.palette.background.cardItem};
    z-index: 1;
  }
`;

export const Title = styled(Typography)`
  margin: 0 0 8px;
`;

export const Description = styled(Typography)`
  margin-bottom: 14px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 14px;
  border-top: 1px solid ${props => props.theme.palette.text.primary + '1A'};
`;

export const DetailLabel = styled(Typography)`
  margin: 0;
  margin-bottom: 4px;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => getPriorityColor(props.priority)};
`;

export const PriorityBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
