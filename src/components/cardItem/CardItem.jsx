import React from 'react';
import {
  CardContainer,
  Title,
  Description,
  Details,
  DetailLabel,
  DetailValue,
  Circle,
  PriorityBlock,
  IconsContainer,
  DetailsContainer,
} from './CardItem.styled';
import SvgIcon from 'components/svgIcon/SvgIcon';

const CardItem = ({ item }) => {
  const { title, description, priority, deadline } = item;
  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  const isDeadlineToday =
    deadlineDate.toDateString() === currentDate.toDateString();
  const formattedDeadline = `${
    deadlineDate.getMonth() + 1
  }/${deadlineDate.getDate()}/${deadlineDate.getFullYear()}`;
  return (
    <CardContainer priority={priority}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Details>
        <DetailsContainer>
          <div>
            <DetailLabel>Priority:</DetailLabel>
            <PriorityBlock>
              <Circle priority={priority} />
              <DetailValue>{priority}</DetailValue>
            </PriorityBlock>
          </div>
          <div>
            <DetailLabel>Deadline:</DetailLabel>
            <DetailValue>{formattedDeadline}</DetailValue>
          </div>
        </DetailsContainer>

        <IconsContainer>
          {isDeadlineToday && (
            <SvgIcon svgName="icon-bell" size={16} stroke="#BEDBB0" />
          )}
          <SvgIcon svgName="icon-pencil" size={16} stroke="#FFFFFF80" />
          <SvgIcon svgName="icon-trash" size={16} stroke="#FFFFFF80" />
        </IconsContainer>
      </Details>
    </CardContainer>
  );
};

export default CardItem;
