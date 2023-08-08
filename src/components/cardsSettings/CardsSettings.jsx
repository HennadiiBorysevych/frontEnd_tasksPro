import React, { useState } from 'react';
import Calend from '../calendar/Calendar';
import { SettingsBlock, Label, Priority, Radio } from './CardsSettings.styled';

const CardsSettings = () => {
  const [value, setValue] = useState('without');

  function changeValue(event) {
    setValue(event.target.value);
  }

  return (
    <SettingsBlock>
      <Label>
        Label color
        <Priority>
          <Radio
            checked={value === 'low' ? true : false}
            type="radio"
            name="priority"
            value="low"
            onChange={changeValue}
          />

          <Radio
            type="radio"
            name="priority"
            value="medium"
            checked={value === 'medium' ? true : false}
            onChange={changeValue}
          />

          <Radio
            type="radio"
            name="priority"
            value="high"
            checked={value === 'high' ? true : false}
            onChange={changeValue}
          />
          <Radio
            type="radio"
            name="priority"
            value="without"
            checked={value === 'without' ? true : false}
            onChange={changeValue}
          />
        </Priority>
      </Label>
      <Label>
        Deadline
        <Calend />
      </Label>
    </SettingsBlock>
  );
};

export default CardsSettings;
