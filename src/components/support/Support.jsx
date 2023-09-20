import React from 'react';

import { IMAGES } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { generateContentImages } from 'helpers';
import { useModal } from 'hooks';

import { Modal, SvgIcon } from 'ui';

import SupportPopUp from '../supportPopUp/SupportPopUp';

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
  const { toggleModalAndSideBar } = useToggleModalAndSideBar();

  const devicePixelRatio = window.devicePixelRatio || 1;

  const matchedPlantImage = generateContentImages(
    IMAGES.plantsImages,
    devicePixelRatio,
    'image/webp'
  );

  const toggleWindows = () => {
    toggleModal();
    toggleModalAndSideBar();
  };

  return (
    <>
      <SupportBox onClick={toggleWindows}>
        <SupportPlate
          src={matchedPlantImage.src}
          alt="plant"
          width={54}
          height={78}
          onError={e => console.error('Помилка завантаження зображення:', e)}
        />
        <SupportOffer>
          If you need help with <AppName>TaskPro</AppName>, check out our
          support resources or reach out to our customer support team.
        </SupportOffer>
        <SupportQuestion>
          <SvgIcon
            svgName="icon-help-circle"
            size={20}
            variant="support"
            isActive
          />
          <TextHelp>Need help?</TextHelp>
        </SupportQuestion>
      </SupportBox>

      {isModal && (
        <Modal onBackdropClick={onBackdropClick} variant="support">
          <SupportPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Support;
