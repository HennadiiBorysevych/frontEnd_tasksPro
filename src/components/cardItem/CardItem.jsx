import React from 'react';
import { useCardsRedux } from 'redux/services';

import {
  formatShortDeadlineForMarkup,
  getCurrentDate,
  getDeadlineDate,
  getShortCurrentDate,
  getShortDeadlineDate,
} from 'helpers';
import { useModal } from 'hooks';

import { ControlIcons, Modal, Typography } from 'ui';

import CardPopUp from '../cardPopUp/CardPopUp';
import SkeletonLoader from '../skeleton/SkeletonLoader';

import CardItemPropTypes from './propTypes';

import * as styles from './CardItem.styled';

const CardItem = ({ item }) => {
  const { cardLoading, removeCard } = useCardsRedux();
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
        <styles.CardContainer priority={priority}>
          {deadlineExpired && (
            <styles.DeadlineMessage variant="subText">
              Deadline expired
            </styles.DeadlineMessage>
          )}
          {deadlineToday && (
            <styles.DeadlineMessage today={true} variant="subText">
              Deadline is today
            </styles.DeadlineMessage>
          )}
          <styles.Title variant="cardTitle">{title}</styles.Title>
          <styles.Description variant="taskDescription">
            {description}
          </styles.Description>
          <styles.Details>
            <styles.DetailsContainer>
              <div>
                <styles.DetailLabel variant="subTitle">
                  Priority:
                </styles.DetailLabel>
                <styles.PriorityBlock>
                  <styles.Circle priority={priority} />
                  <Typography variant="subText">{priority}</Typography>
                </styles.PriorityBlock>
              </div>
              <div>
                <styles.DetailLabel variant="subTitle">
                  Deadline:
                </styles.DetailLabel>
                <Typography variant="subText">{formattedDeadline}</Typography>
              </div>
            </styles.DetailsContainer>
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
          </styles.Details>
          {isModal && (
            <Modal onBackdropClick={onBackdropClick}>
              <CardPopUp card={item} handleModalClose={toggleModal} />
            </Modal>
          )}
        </styles.CardContainer>
      )}
    </>
  );
};
export default CardItem;

CardItem.propTypes = CardItemPropTypes;
