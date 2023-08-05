import React, { useState } from 'react';
import { SupportPopUp, SvgIcon } from 'components';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SupportBox onClick={openModal}>
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

      {isModalOpen && <SupportPopUp onClose={closeModal} />}
    </>
  );
};

export default Support;
