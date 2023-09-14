import React from 'react';
import PropTypes from 'prop-types';

import {
  formatShortDeadlineForMarkup,
  getCurrentDeadlineDate,
  getShortDeadlineDate,
} from 'helpers';
import { useAuthCollector, useCardsCollector, useModal } from 'hooks';

import { Modal, ReactConfirmAlert, SvgIcon, Typography } from 'ui';

import CardPopUp from '../cardPopUp/CardPopUp';

import {
  CardContainer,
  Circle,
  DeadlineMessage,
  Description,
  DetailLabel,
  Details,
  DetailsContainer,
  IconsContainer,
  PriorityBlock,
  Title,
} from './CardItem.styled';

const CardItem = ({ item }) => {
  const { theme } = useAuthCollector();
  const { removeCard } = useCardsCollector();
  const { isModal, onBackdropClick, toggleModal } = useModal();

  const { title, description, priority, deadline, id } = item;

  const today = new Date();
  const currentDate = getCurrentDeadlineDate(today);
  const currentDeadlineDate = getCurrentDeadlineDate(deadline);
  const shortCurrentDate = getShortDeadlineDate(currentDate);
  const shortCurrentDeadlineDate = getShortDeadlineDate(currentDeadlineDate);

  const formattedDeadline = formatShortDeadlineForMarkup(deadline);
  const deadlineToday = shortCurrentDate === shortCurrentDeadlineDate;
  const deadlineExpired = shortCurrentDeadlineDate < shortCurrentDate;

  return (
    <CardContainer priority={priority}>
      {deadlineExpired && <DeadlineMessage>Deadline expired</DeadlineMessage>}
      {deadlineToday && (
        <DeadlineMessage today={true}>Deadline is today</DeadlineMessage>
      )}
      <Title variant="tastTitle">{title}</Title>
      <Description variant="taskDescription">{description}</Description>
      <Details>
        <DetailsContainer>
          <div>
            <DetailLabel variant="subTitle">Priority:</DetailLabel>
            <PriorityBlock>
              <Circle priority={priority} />
              <Typography variant="subText">{priority}</Typography>
            </PriorityBlock>
          </div>
          <div>
            <DetailLabel variant="subTitle">Deadline:</DetailLabel>
            <Typography variant="subText">{formattedDeadline}</Typography>
          </div>
        </DetailsContainer>
        <IconsContainer>
          <div>
            {deadlineToday && (
              <SvgIcon svgName="icon-bell" size={16} variant="cardItem" />
            )}
            {deadlineExpired && (
              <SvgIcon
                svgName="icon-bell"
                size={16}
                variant="deadlineExpired"
              />
            )}
          </div>
          <button onClick={toggleModal} aria-label="Edit card button">
            <SvgIcon svgName="icon-pencil" size={16} variant="popUp" />
          </button>
          <ReactConfirmAlert
            selectedTheme={theme}
            onDeleteAction={() => removeCard(id)}
            item="task"
            owner="tasks"
          />
        </IconsContainer>
      </Details>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <CardPopUp card={item} handleModalClose={toggleModal} />
        </Modal>
      )}
    </CardContainer>
  );
};
export default CardItem;

CardItem.propTypes = {
  item: PropTypes.shape({
    cardOwner: PropTypes.string,
    deadline: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    order: PropTypes.number,
    priority: PropTypes.string,
    title: PropTypes.string,
  }),
};
