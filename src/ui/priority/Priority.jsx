import React from 'react';

import PriorityPropTypes from './propTypes';

import * as styles from './Priority.styled';

const Priority = ({ priority, setPriority, options, variant }) => {
  function changeValue(event) {
    setPriority(event.target.value);
  }
  return (
    <styles.PriorityList variant={variant}>
      {options.map(option => (
        <styles.PriorityItem key={option.value} variant={variant}>
          {variant === 'Filters' ? (
            <styles.Label htmlFor={option.value} value={option.value}>
              <styles.Radio
                type="radio"
                id={option.value}
                name="priority"
                value={option.value}
                checked={priority === option?.value}
                onChange={changeValue}
              />
              <styles.LabelSubtitle>{option.label}</styles.LabelSubtitle>
            </styles.Label>
          ) : (
            <styles.Radio
              type="radio"
              name="priority"
              value={option.value}
              checked={priority === option.value}
              onChange={changeValue}
            />
          )}
        </styles.PriorityItem>
      ))}
    </styles.PriorityList>
  );
};

export default Priority;

Priority.propTypes = PriorityPropTypes;
