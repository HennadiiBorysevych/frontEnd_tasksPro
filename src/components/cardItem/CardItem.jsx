import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useAuth, useCards, useModal } from 'hooks';

import { CardPopUp } from 'components';
import { Modal, ReactConfirmAlert, SvgIcon, Typography } from 'ui';

import {
  CardContainer,
  Circle,
  Description,
  DetailLabel,
  Details,
  DetailsContainer,
  IconsContainer,
  PriorityBlock,
  Title,
} from './CardItem.styled';

const CardItem = ({ item }) => {
  const { theme } = useAuth();
  const { removeCard } = useCards();
  const { isModal, onBackdropClick, toggleModal } = useModal();

  const { title, description, priority, deadline, id } = item;

  const [formattedDeadline, isDeadlineToday] = useMemo(() => {
    const deadlineDate = new Date(deadline);
    const formatted = `${
      deadlineDate.getMonth() + 1
    }/${deadlineDate.getDate()}/${deadlineDate.getFullYear()}`;
    const currentDate = new Date();
    const isDeadline =
      deadlineDate.toDateString() === currentDate.toDateString();

    return [formatted, isDeadline];
  }, [deadline]);

  const isDeadlineExpired = useMemo(() => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    return deadlineDate < currentDate;
  }, [deadline]);

  return (
    <CardContainer priority={priority}>
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
            {isDeadlineToday && !isDeadlineExpired ? (
              <SvgIcon svgName="icon-bell" size={16} variant="cardItem" />
            ) : (
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
