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
            { value: 'Low' },
            { value: 'Medium' },
            { value: 'High' },
            { value: 'Without' },
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
  deadline: PropTypes.instanceOf(Date),
  handlePriority: PropTypes.func.isRequired,
  setDeadline: PropTypes.func.isRequired,
};
