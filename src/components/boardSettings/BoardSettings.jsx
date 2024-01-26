import React from 'react';
import { Formik } from 'formik';

import { BACKGROUNDS, BOARD_ICONS } from 'constants';

import { SvgIcon } from 'ui';

import BoardSettingsPropTypes from './propTypes';

import * as styles from './BoardSettings.styled';

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
        <styles.BoardDecor>
          <styles.Row>
            <styles.BoardText variant="columnTitle">Icons</styles.BoardText>
            {BOARD_ICONS.map(id => (
              <styles.IconLabel key={id} title={id}>
                <styles.RadioField
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
              </styles.IconLabel>
            ))}
          </styles.Row>
          <styles.Row>
            <styles.BoardText variant="columnTitle">
              Background
            </styles.BoardText>
            {BACKGROUNDS.map(bgIndex => (
              <label key={bgIndex.title} title={bgIndex.title}>
                <styles.RadioField
                  name="background"
                  type="radio"
                  value={bgIndex.title}
                  checked={chosenBackground === bgIndex.title}
                  onChange={() => setChosenBackground(bgIndex.title)}
                />
                {bgIndex.isDefault ? (
                  <styles.DefaultBackgroundIconWrapper>
                    <SvgIcon
                      svgName="icon-background-image"
                      size={16}
                      variantIcon="background"
                      className={
                        chosenBackground === bgIndex.title ? 'active' : ''
                      }
                    />
                  </styles.DefaultBackgroundIconWrapper>
                ) : (
                  <styles.BackgroundImage
                    bgIndex={bgIndex}
                    isActive={chosenBackground === bgIndex.title}
                    className={
                      chosenBackground === bgIndex.title ? 'active' : ''
                    }
                  />
                )}
              </label>
            ))}
          </styles.Row>
        </styles.BoardDecor>
      )}
    </Formik>
  );
};

export default BoardSettings;

BoardSettings.propTypes = BoardSettingsPropTypes;
