import {
  SettingsBlock,
  Label,
  Priority,
  Radio,
} from './CardsSettings.styled';

import Calendar from '../calendar/Calendar';
import React, { useState } from 'react';

const CardsSettings = () => {

  const [value, setValue] = useState('1');
  
  
  function chengeValue(event) {
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
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="priority"
                value="medium"
                checked={value === 'medium' ? true : false}
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="priority"
                value="high"
                checked={value === 'high' ? true : false}
                onChange={chengeValue}
              />
              <Radio
                type="radio"
                name="priority"
                value="without"
                checked={value === 'without' ? true : false}
                onChange={chengeValue}
              />
            </Priority>
          </Label>
          <Label>
            Deadline
            <Calendar/>
          </Label>
        </SettingsBlock>
    
  );
};

export default CardsSettings;

  