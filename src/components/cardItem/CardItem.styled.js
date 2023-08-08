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
  background-color: #121212;
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
    background-color: #121212;
    z-index: 1;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #ffffff80;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 14px;
  border-top: 1px solid #ffffff1a;
`;

export const DetailLabel = styled.h5`
  font-size: 8px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #ffffff80;
  margin: 0;
  margin-bottom: 4px;
`;

export const DetailValue = styled.p`
  font-size: 10px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #fff;
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
