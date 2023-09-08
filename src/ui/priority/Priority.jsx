import React from 'react';
import PropTypes from 'prop-types';

import {
  Label,
  LabelSubtitle,
  PriorityItem,
  PriorityList,
  Radio,
} from './Priority.styled';

const Priority = ({ priority, setPriority, options, variant }) => {
  function changeValue(event) {
    setPriority(event.target.value);
  }
  return (
    <PriorityList variant={variant}>
      {options.map(option => (
        <PriorityItem key={option.value} variant={variant}>
          {variant === 'Filters' ? (
            <Label htmlFor={option.value} value={option.value}>
              <Radio
                type="radio"
                id={option.value}
                name="priority"
                value={option.value}
                checked={priority === option?.value}
                onChange={changeValue}
              />
              <LabelSubtitle>{option.label}</LabelSubtitle>
            </Label>
          ) : (
            <Radio
              type="radio"
              name="priority"
              value={option.value}
              checked={priority === option.value}
              onChange={changeValue}
            />
          )}
        </PriorityItem>
      ))}
    </PriorityList>
  );
};

export default Priority;

Priority.propTypes = {
  priority: PropTypes.string.isRequired,
  setPriority: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
  variant: PropTypes.string,
};
