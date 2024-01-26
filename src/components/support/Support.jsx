import React from 'react';

import { IMAGES } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { generateContentImages } from 'helpers';
import { useModal } from 'hooks';

import { Modal, SvgIcon, Typography } from 'ui';

import SupportPopUp from '../supportPopUp/SupportPopUp';

import * as styles from './Support.styled';

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
      <styles.SupportButton
        aria-label="Button for open support popup"
        onClick={toggleWindows}
      >
        <styles.SupportPlate
          src={matchedPlantImage.src}
          alt="plant"
          width={54}
          height={78}
          onError={e => console.error('Помилка завантаження зображення:', e)}
        />
        <styles.SupportOffer variant="supportText">
          If you need help with <styles.AppName>TaskPro</styles.AppName>, check
          out our support resources or reach out to our customer support team.
        </styles.SupportOffer>
        <styles.SupportQuestion>
          <SvgIcon
            svgName="icon-help-circle"
            size={20}
            variantIcon="support"
            isActive
          />
          <Typography variant="helpText">Need help?</Typography>
        </styles.SupportQuestion>
      </styles.SupportButton>

      {isModal && (
        <Modal onBackdropClick={onBackdropClick} variant="support">
          <SupportPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Support;
