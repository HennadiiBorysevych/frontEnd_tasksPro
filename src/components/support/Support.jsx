import React from 'react';

import { images } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { useModal } from 'hooks';

import { SupportPopUp } from 'components';
import { Modal, SvgIcon } from 'ui';

// import image from 'assets/images/welcomeAndPlate/plate.png';
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

  const toggleWindows = () => {
    toggleModal();
    toggleModalAndSideBar();
  };

  return (
    <>
      <SupportBox onClick={toggleWindows}>
        {images.plants.map((plant, index) => (
          <>
            <SupportPlate key={index}>
              <picture>
                <source
                  srcSet={plant.src}
                  type={plant.type}
                  media={`(min-device-pixel-ratio: ${plant.dpi}) (min-resolution: ${plant.minResolution}dpi) (min-resolution: ${plant.dpi}dppx)`}
                />
                <img src={plant.src} alt="Plant" />
              </picture>
            </SupportPlate>
          </>
        ))}
        {/* <SupportPlate src={image} alt="plate" width={54} height={78} /> */}
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
