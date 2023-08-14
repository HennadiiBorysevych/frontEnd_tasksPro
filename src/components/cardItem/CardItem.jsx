import React from 'react';
// import { ConfirmToast } from 'react-confirm-toast';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useModal } from 'hooks';
// import { selectTheme } from 'redux/auth/authSelectors';
import cardOperations from 'redux/tasks/cardOperations';

import { CardPopUp, Modal } from 'components';
import { IconButton } from 'components';
import SvgIcon from 'components/svgIcon/SvgIcon';

import {
  CardContainer,
  Circle,
  Description,
  DetailLabel,
  Details,
  DetailsContainer,
  DetailValue,
  IconsContainer,
  PriorityBlock,
  Title,
} from './CardItem.styled';

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const { title, description, priority, deadline, id } = item;
  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  const isDeadlineToday =
    deadlineDate.toDateString() === currentDate.toDateString();
  const formattedDeadline = `${
    deadlineDate.getMonth() + 1
  }/${deadlineDate.getDate()}/${deadlineDate.getFullYear()}`;
  // const selectedTheme = useSelector(selectTheme);
  // const toastClassName = selectedTheme === 'Dark' ? 'dark' : 'light';
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
          <IconButton onClick={toggleModal} svgName="icon-pencil" />
          {/* 
          <ConfirmToast
            customFunction={() => dispatch(cardOperations.deleteTask(id))}
            asModal={false}
            position={'top-left'}
            theme={toastClassName}
          > */}
          <IconButton
            svgName="icon-trash"
            onClick={() => dispatch(cardOperations.deleteTask(id))}
          />
          {/* </ConfirmToast> */}
        </IconsContainer>
      </Details>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <CardPopUp
            card={item}
            // columnId={columnId}
            // cardIndex={cardIndex}
            handleModalClose={toggleModal}
          />
        </Modal>
      )}
    </CardContainer>
  );
};
export default CardItem;
