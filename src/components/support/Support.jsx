import React from 'react';

import { IMAGES } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { generateContentImages } from 'helpers';
import { useModal } from 'hooks';

import { Modal, SvgIcon, Typography } from 'ui';

import SupportPopUp from '../supportPopUp/SupportPopUp';

import {
  AppName,
  SupportButton,
  SupportOffer,
  SupportPlate,
  SupportQuestion,
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
      <SupportButton
        aria-label="Button for open support popup"
        onClick={toggleWindows}
      >
        <SupportPlate
          src={matchedPlantImage.src}
          alt="plant"
          width={54}
          height={78}
          onError={e => console.error('Помилка завантаження зображення:', e)}
        />
        <SupportOffer variant="supportText">
          If you need help with <AppName>TaskPro</AppName>, check out our
          support resources or reach out to our customer support team.
        </SupportOffer>
        <SupportQuestion>
          <SvgIcon
            svgName="icon-help-circle"
            size={20}
            variantIcon="support"
            isActive
          />
          <Typography variant="helpText">Need help?</Typography>
        </SupportQuestion>
      </SupportButton>

      {isModal && (
        <Modal onBackdropClick={onBackdropClick} variant="support">
          <SupportPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Support;
