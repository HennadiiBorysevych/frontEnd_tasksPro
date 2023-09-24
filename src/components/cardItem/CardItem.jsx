import React from 'react';
import PropTypes from 'prop-types';

import {
  formatShortDeadlineForMarkup,
  getCurrentDate,
  getDeadlineDate,
  getShortCurrentDate,
  getShortDeadlineDate,
} from 'helpers';
import { useCardsCollector, useModal } from 'hooks';

import { ControlIcons, Modal, Typography } from 'ui';

import CardPopUp from '../cardPopUp/CardPopUp';
import SkeletonLoader from '../skeleton/SkeletonLoader';

import {
  CardContainer,
  Circle,
  DeadlineMessage,
  Description,
  DetailLabel,
  Details,
  DetailsContainer,
  PriorityBlock,
  Title,
} from './CardItem.styled';

const CardItem = ({ item }) => {
  const { cardLoading, removeCard } = useCardsCollector();
  const { isModal, onBackdropClick, toggleModal } = useModal();

  const { title, description, priority, deadline, id } = item;

  const today = new Date();
  const currentDate = getCurrentDate(today);
  const currentDeadlineDate = getDeadlineDate(deadline);
  const shortCurrentDate = getShortCurrentDate(currentDate);
  const shortCurrentDeadlineDate = getShortDeadlineDate(currentDeadlineDate);

  const formattedDeadline = formatShortDeadlineForMarkup(deadline);
  const deadlineToday = shortCurrentDate === shortCurrentDeadlineDate;
  const deadlineExpired = shortCurrentDeadlineDate < shortCurrentDate;

  return (
    <>
      {cardLoading ? (
        <SkeletonLoader page="/card" />
      ) : (
        <CardContainer priority={priority}>
          {deadlineExpired && (
            <DeadlineMessage>Deadline expired</DeadlineMessage>
          )}
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
            <ControlIcons
              deadlineToday={deadlineToday}
              deadlineExpired={deadlineExpired}
              onClick={toggleModal}
              ariaLabel="Edit card button"
              variantIcon="popUp"
              onDeleteAction={() => removeCard(id)}
              item="task"
              owner="tasks"
            />
          </Details>
          {isModal && (
            <Modal onBackdropClick={onBackdropClick}>
              <CardPopUp card={item} handleModalClose={toggleModal} />
            </Modal>
          )}
        </CardContainer>
      )}
    </>
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
