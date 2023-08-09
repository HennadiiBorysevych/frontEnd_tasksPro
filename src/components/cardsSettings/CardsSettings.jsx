import React, { useState } from 'react';

import Calend from '../calendar/Calendar';

import { Label, Priority, Radio, SettingsBlock } from './CardsSettings.styled';

const CardsSettings = ({ priority, deadline, setPriority, setDeadline }) => {
  function changeValue(event) {
    setPriority(event.target.value);
  }

  return (
    <SettingsBlock>
      <Label>
        Label color
        <Priority>
          <Radio
            // checked={priority === 'Low' ? true : false}
            type="radio"
            name="priority"
            value="Low"
            onChange={changeValue}
          />

          <Radio
            type="radio"
            name="priority"
            value="Medium"
            checked={priority === 'Medium' ? true : false}
            onChange={changeValue}
          />

          <Radio
            type="radio"
            name="priority"
            value="High"
            checked={priority === 'High' ? true : false}
            onChange={changeValue}
          />
          <Radio
            type="radio"
            name="priority"
            value="Without"
            checked={priority === 'Without' ? true : false}
            onChange={changeValue}
          />
        </Priority>
      </Label>
      <Label>
        Deadline
        <Calend selectedDate={deadline} setSelectedDate={setDeadline} />
      </Label>
    </SettingsBlock>
  );
};

export default CardsSettings;
