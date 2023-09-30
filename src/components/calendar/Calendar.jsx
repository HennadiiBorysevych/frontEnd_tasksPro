import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { formatSelectedDate, formatShortWeekday } from 'helpers';

import { SvgIcon } from 'ui';

import {
  BlockCalendar,
  CalendarButton,
  CalendarLayout,
  CommonStyles,
  DeadlineDay,
  NextLabelWithPadding,
  PrevLabelWithPadding,
} from './Calendar.styled';

const Calend = ({ selectedDate, setSelectedDate }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + 5);

  const initialSelectedDate = selectedDate || today;
  const isDeadlineToday = selectedDate.toDateString() === today.toDateString();

  const toggleCalendarVisibility = e => {
    setIsCalendarVisible(prevValue => !prevValue);
  };

  const handleDayClick = value => {
    const selectedDateWithoutTime = new Date(
      value.getFullYear(),
      value.getMonth(),
      value.getDate()
    );

    const todayWithoutTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    if (selectedDateWithoutTime < todayWithoutTime) {
      toast.error('You cannot select a deadline date in the past');
      return;
    } else {
      setSelectedDate(value);
    }
    toggleCalendarVisibility();
  };

  const tileClassName = ({ date }) => {
    if (date.toDateString() === selectedDate.toDateString()) {
      return 'react-calendar__tile--active';
    }

    if (date.toDateString() === initialSelectedDate.toDateString()) {
      return 'react-calendar__tile--today';
    }
    return null;
  };

  return (
    <>
      <CalendarButton
        type="button"
        onClick={toggleCalendarVisibility}
        aria-label="open calendar for choosing deadline date"
      >
        <DeadlineDay variant="buttonPopUpAndDropdownText">
          {isDeadlineToday ? 'Today, ' : ''} {formatSelectedDate(selectedDate)}
        </DeadlineDay>
        <SvgIcon svgName="icon-arrow-down" variantIcon="cardItem" size="18" />
      </CalendarButton>

      {isCalendarVisible && (
        <CommonStyles>
          <BlockCalendar>
            <Calendar
              value={initialSelectedDate}
              maxDate={futureDate}
              formatShortWeekday={formatShortWeekday}
              prev2Label={null}
              next2Label={null}
              prevLabel={
                <PrevLabelWithPadding>
                  <SvgIcon
                    svgName="icon-arrow-left"
                    size="14"
                    variantIcon="header"
                  />
                </PrevLabelWithPadding>
              }
              nextLabel={
                <NextLabelWithPadding>
                  <SvgIcon
                    svgName="icon-arrow-right"
                    size="14"
                    variantIcon="header"
                  />
                </NextLabelWithPadding>
              }
              showYearDropdown={false}
              locale="en-US"
              calendarType="gregory"
              defaultView="month"
              onClickDay={handleDayClick}
              tileClassName={tileClassName}
            />
          </BlockCalendar>
        </CommonStyles>
      )}

      {isCalendarVisible && (
        <CalendarLayout onClick={toggleCalendarVisibility} />
      )}
    </>
  );
};

export default Calend;

Calend.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
