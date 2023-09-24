import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { BACKGROUNDS, BOARD_ICONS } from 'constants';

import { SvgIcon } from 'ui';

import {
  BackgroundImage,
  BoardDecor,
  BoardText,
  DefaultBackgroundIconWrapper,
  IconLabel,
  RadioField,
  Row,
} from './BoardSettings.styled';

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
      {() => (
        <BoardDecor>
          <Row>
            <BoardText variant="columnTitle">Icons</BoardText>
            {BOARD_ICONS.map(id => (
              <IconLabel key={id} title={id}>
                <RadioField
                  name="icon"
                  type="radio"
                  value={id}
                  checked={chosenIcon === id}
                  onChange={() => setChosenIcon(id)}
                />
                <SvgIcon
                  svgName={id}
                  size={18}
                  isActive={id === chosenIcon}
                  variantIcon="popUp"
                />
              </IconLabel>
            ))}
          </Row>
          <Row>
            <BoardText variant="columnTitle">Background</BoardText>
            {BACKGROUNDS.map(bgIndex => (
              <label key={bgIndex.title} title={bgIndex.title}>
                <RadioField
                  name="background"
                  type="radio"
                  value={bgIndex.title}
                  checked={chosenBackground === bgIndex.title}
                  onChange={() => setChosenBackground(bgIndex.title)}
                />
                {bgIndex.isDefault ? (
                  <DefaultBackgroundIconWrapper>
                    <SvgIcon
                      svgName="icon-background-image"
                      size={16}
                      variantIcon="background"
                      className={
                        chosenBackground === bgIndex.title ? 'active' : ''
                      }
                    />
                  </DefaultBackgroundIconWrapper>
                ) : (
                  <BackgroundImage
                    bgIndex={bgIndex}
                    isActive={chosenBackground === bgIndex.title}
                    className={
                      chosenBackground === bgIndex.title ? 'active' : ''
                    }
                  />
                )}
              </label>
            ))}
          </Row>
        </BoardDecor>
      )}
    </Formik>
  );
};

export default BoardSettings;

BoardSettings.propTypes = {
  chosenIcon: PropTypes.string.isRequired,
  setChosenIcon: PropTypes.func.isRequired,
  chosenBackground: PropTypes.string.isRequired,
  setChosenBackground: PropTypes.func.isRequired,
};
