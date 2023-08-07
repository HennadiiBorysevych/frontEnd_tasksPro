import React from 'react';
import { useModal } from 'hooks';
import { Modal, SupportPopUp, SvgIcon } from 'components';
import image from 'assets/images/welcomeAndPlate/plate.png';
import {
  AppName,
  SupportBox,
  SupportOffer,
  SupportPlate,
  SupportQuestion,
  TextHelp,
} from './Support.styled';

const Support = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const email = '';

  return (
    <>
      <SupportBox onClick={toggleModal}>
        <SupportPlate src={image} alt="plate" />
        <SupportOffer>
          If you need help with <AppName>TaskPro</AppName>, check out our
          support resources or reach out to our customer support team.
        </SupportOffer>
        <SupportQuestion>
          <SvgIcon svgName="icon-help-circle" size={20} stroke="#ffffff" />
          <TextHelp>Need help?</TextHelp>
        </SupportQuestion>
      </SupportBox>

      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <SupportPopUp email={email} onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Support;
