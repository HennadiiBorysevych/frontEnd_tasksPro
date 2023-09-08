import React from 'react';
import PropTypes from 'prop-types';

import { Priority } from 'ui';

import Calend from '../calendar/Calendar';

import {
  SettingsItem,
  SettingsList,
  SettingTitle,
} from './CardSettings.styled';

const CardsSettings = ({ priority, deadline, handlePriority, setDeadline }) => {
  // console.log(typeof setDeadline); // дописати prop-types
  function changeValue(value) {
    handlePriority(value);
  }

  return (
    <SettingsList>
      <SettingsItem>
        <SettingTitle>Label color</SettingTitle>
        <Priority
          priority={priority}
          setPriority={changeValue}
          options={[
            { value: 'low' },
            { value: 'medium' },
            { value: 'high' },
            { value: 'without' },
          ]}
          variant="CardSettings"
        />
      </SettingsItem>
      <SettingsItem>
        <SettingTitle>Deadline</SettingTitle>
        <Calend selectedDate={deadline} setSelectedDate={setDeadline} />
      </SettingsItem>
    </SettingsList>
  );
};

export default CardsSettings;

CardsSettings.propTypes = {
  priority: PropTypes.string.isRequired,
  // deadline: PropTypes.shape({}),
  handlePriority: PropTypes.func.isRequired,
  setDeadline: PropTypes.func.isRequired,
};
