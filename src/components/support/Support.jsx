import { SvgIcon } from 'components';
import React from 'react';
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
  return (
    <SupportBox type="submit">
      <SupportPlate src={image} alt="plate" />
      <SupportOffer>
        If you need help with <AppName>TaskPro</AppName>, check out our support
        resources or reach out to our customer support team.
      </SupportOffer>
      <SupportQuestion>
        <SvgIcon svgName="icon-help-circle" size={20} stroke="#ffffff" />
        <TextHelp>Need help?</TextHelp>
      </SupportQuestion>
    </SupportBox>
  );
};

export default Support;
