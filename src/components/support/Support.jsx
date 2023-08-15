import React from 'react';
import image from 'assets/images/welcomeAndPlate/plate.png';
import { useModal } from 'hooks';
import { useToggleModalAndSideBar } from 'sharedLayout/SharedLayout';

import { Modal, SupportPopUp, SvgIcon } from 'components';
import Typography from 'components/typography/Typography';

import {
  AppName,
  SupportBox,
  SupportOffer,
  SupportPlate,
  SupportQuestion,
} from './Support.styled';

const Support = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const onToggleModalAndSideBar = useToggleModalAndSideBar();

  const toggleWindows = () => {
    toggleModal();
    onToggleModalAndSideBar();
  };

  return (
    <>
      <SupportBox onClick={toggleWindows}>
        <SupportPlate src={image} alt="plate" />
        <SupportOffer variant="taskDescription">
          If you need help with <AppName>TaskPro</AppName>, check out our
          support resources or reach out to our customer support team.
        </SupportOffer>
        <SupportQuestion>
          <SvgIcon svgName="icon-help-circle" size={20} variant="support" />
          <Typography>Need help?</Typography>
        </SupportQuestion>
      </SupportBox>

      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <SupportPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Support;
