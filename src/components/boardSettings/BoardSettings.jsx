import React from 'react';
import { Formik } from 'formik';

import { SvgIcon } from 'components';

import { backgroundImages } from '../../constants/backgrounds';

import {
  BackgroundImage,
  BoardText,
  IconContainer,
  RadioField,
  Row,
} from './BoardSettings.styled';

const BOARD_ICONS = [
  'icon-Project',
  'icon-star',
  'icon-loading',
  'icon-puzzle-piece',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
];

const BoardSettings = ({
  chosenIcon,
  setChosenIcon,
  chosenBackground,
  setChosenBackground,
}) => {
  return (
    <Formik
      initialValues={{
        icon: BOARD_ICONS[0],
      }}
      onSubmit={values => {
        console.log('Form submitted with values:', values);
      }}
    >
      {({ handleSubmit }) => (
        <div>
          <BoardText>Icons</BoardText>
          <Row>
            {BOARD_ICONS.map(id => (
              <label key={id} title={id}>
                <RadioField
                  name="icon"
                  type="radio"
                  value={id}
                  checked={chosenIcon === id}
                  onChange={() => setChosenIcon(id)}
                />
                <IconContainer>
                  <SvgIcon
                    svgName={id}
                    isActive={id === chosenIcon}
                    variant="popUp"
                  />
                </IconContainer>
              </label>
            ))}
          </Row>
          <BoardText>Background</BoardText>
          <Row>
            {backgroundImages.map(bgIndex => (
              <label key={bgIndex.title} title={bgIndex.title}>
                <RadioField
                  name="background"
                  type="radio"
                  value={bgIndex.title}
                  checked={chosenBackground === bgIndex.title}
                  onChange={() => setChosenBackground(bgIndex.title)}
                />
                <BackgroundImage
                  bgIndex={bgIndex}
                  isActive={chosenBackground === bgIndex.title}
                />
              </label>
            ))}
          </Row>
        </div>
      )}
    </Formik>
  );
};

export default BoardSettings;
