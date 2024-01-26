import React from 'react';

import { Priority } from 'ui';

import Calend from '../calendar/Calendar';

import CardSettingsPropTypes from './propTypes';

import * as styles from './CardSettings.styled';

const CardsSettings = ({ priority, deadline, handlePriority, setDeadline }) => {
  function changeValue(value) {
    handlePriority(value);
  }

  return (
    <styles.SettingsList>
      <styles.SettingsItem>
        <styles.SettingTitle variant="supplementaryPopUpText">
          Label color
        </styles.SettingTitle>
        <Priority
          priority={priority}
          setPriority={changeValue}
          options={[
            { value: 'Low' },
            { value: 'Medium' },
            { value: 'High' },
            { value: 'Without' },
          ]}
          variant="CardSettings"
        />
      </styles.SettingsItem>
      <styles.SettingsItem>
        <styles.SettingTitle variant="supplementaryPopUpText">
          Deadline
        </styles.SettingTitle>
        <Calend selectedDate={deadline} setSelectedDate={setDeadline} />
      </styles.SettingsItem>
    </styles.SettingsList>
  );
};

export default CardsSettings;

CardsSettings.propTypes = CardSettingsPropTypes;
