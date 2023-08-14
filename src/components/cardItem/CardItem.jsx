import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks';
import { selectTheme } from 'redux/auth/authSelectors';
import cardOperations from 'redux/tasks/cardOperations';

import { CardPopUp, Modal } from 'components';
import { IconButton } from 'components';
import SvgIcon from 'components/svgIcon/SvgIcon';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../reactConfirmAlert/ReactConfirmAlert.styled.css';
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
  const selectedTheme = useSelector(selectTheme);

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
            <SvgIcon svgName="icon-bell" size={16} variant="cardItem" />
          )}
          <IconButton onClick={toggleModal} svgName="icon-pencil" />

          <IconButton
            svgName="icon-trash"
            onClick={() => {
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div
                      className={`react-confirm ${
                        selectedTheme === 'Dark'
                          ? 'react-confirm-alert-dark'
                          : 'react-confirm-alert-light'
                      }`}
                    >
                      <h1>Confirm Deletion</h1>
                      <p>Are you sure you want to delete this task?</p>
                      <div className="confirm-buttons">
                        <button onClick={onClose} className="green">
                          Cancel
                        </button>

                        <button
                          className="red"
                          onClick={() => {
                            onClose();
                            dispatch(cardOperations.deleteTask(id));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                },
              });
            }}
          />
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
