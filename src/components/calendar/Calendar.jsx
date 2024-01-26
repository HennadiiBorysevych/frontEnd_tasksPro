import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { toast } from 'react-toastify';

import { formatSelectedDate, formatShortWeekday } from 'helpers';

import { SvgIcon } from 'ui';

import CalendPropTypes from './propTypes';

import * as styles from './Calendar.styled';

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
      <styles.CalendarButton
        type="button"
        onClick={toggleCalendarVisibility}
        aria-label="open calendar for choosing deadline date"
      >
        <styles.DeadlineDay variant="buttonPopUpAndDropdownText">
          {isDeadlineToday ? 'Today, ' : ''} {formatSelectedDate(selectedDate)}
        </styles.DeadlineDay>
        <SvgIcon svgName="icon-arrow-down" variantIcon="cardItem" size="18" />
      </styles.CalendarButton>

      {isCalendarVisible && (
        <styles.CommonStyles>
          <styles.BlockCalendar>
            <Calendar
              value={initialSelectedDate}
              maxDate={futureDate}
              formatShortWeekday={formatShortWeekday}
              prev2Label={null}
              next2Label={null}
              prevLabel={
                <styles.PrevLabelWithPadding>
                  <SvgIcon
                    svgName="icon-arrow-left"
                    size="14"
                    variantIcon="header"
                  />
                </styles.PrevLabelWithPadding>
              }
              nextLabel={
                <styles.NextLabelWithPadding>
                  <SvgIcon
                    svgName="icon-arrow-right"
                    size="14"
                    variantIcon="header"
                  />
                </styles.NextLabelWithPadding>
              }
              showYearDropdown={false}
              locale="en-US"
              calendarType="gregory"
              defaultView="month"
              onClickDay={handleDayClick}
              tileClassName={tileClassName}
            />
          </styles.BlockCalendar>
        </styles.CommonStyles>
      )}

      {isCalendarVisible && (
        <styles.CalendarLayout onClick={toggleCalendarVisibility} />
      )}
    </>
  );
};

export default Calend;

Calend.propTypes = CalendPropTypes;
