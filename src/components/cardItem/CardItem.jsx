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
} from './CardItem.styled';
import SvgIcon from 'components/svgIcon/SvgIcon';

const CardItem = ({ item }) => {
  const { title, description, priority, deadline } = item;

  return (
    <CardContainer priority={priority}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Details>
        <div>
          <DetailLabel>Priority:</DetailLabel>
          <PriorityBlock>
            <Circle priority={priority} />
            <DetailValue>{priority}</DetailValue>
          </PriorityBlock>
        </div>
        <div>
          <DetailLabel>Deadline:</DetailLabel>
          <DetailValue>{deadline}</DetailValue>
        </div>
        <IconsContainer>
          <SvgIcon
            svgName="icon-arrow-circle-broken-right"
            size={16}
            stroke="#FFFFFF80"
          />
          <SvgIcon svgName="icon-pencil" size={16} stroke="#FFFFFF80" />
          <SvgIcon svgName="icon-trash" size={16} stroke="#FFFFFF80" />
        </IconsContainer>
      </Details>
    </CardContainer>
  );
};

export default CardItem;
