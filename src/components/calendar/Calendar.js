import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { ThemeProvider } from '@emotion/react';

import { SvgIcon } from 'components';

import {
  BlockCalendar,
  CalendarLayout,
  CalendarWrapper,
  CommonStyles,
  DownWithPadding,
  NextLabelWithPadding,
  PrevLabelWithPadding,
  TextWithGap,
} from './Calendar.styled';

const Calend = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + 5);

  const initialSelectedDate = selectedDate || today;

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(prevValue => !prevValue);
  };

  const formatShortWeekday = (locale, date) => {
    const options = { weekday: 'short' };
    const formattedWeekday = new Intl.DateTimeFormat(locale, options).format(
      date
    );
    return formattedWeekday.slice(0, 2);
  };

  const formatSelectedDate = date => {
    const options = {
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );
    return formattedDate;
  };

  const handleDayClick = value => {
    setSelectedDate(value);
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
    <ThemeProvider theme={{}}>
      <div>
        <CalendarWrapper onClick={toggleCalendarVisibility}>
          <TextWithGap>
            {selectedDate.toDateString() === today.toDateString()
              ? 'Today, '
              : ''}{' '}
            {formatSelectedDate(selectedDate)}
          </TextWithGap>
          <DownWithPadding>
            <SvgIcon svgName="icon-arrow-down" variant="cardItem" size="18" />
          </DownWithPadding>
        </CalendarWrapper>

        {isCalendarVisible && (
          <CommonStyles>
            <BlockCalendar>
              <Calendar
                value={initialSelectedDate}
                minDate={today}
                maxDate={futureDate}
                formatShortWeekday={formatShortWeekday}
                prev2Label={null}
                next2Label={null}
                prevLabel={
                  <PrevLabelWithPadding>
                    <SvgIcon
                      svgName="icon-arrow-left"
                      size="14"
                      variant="cardItem"
                    />
                  </PrevLabelWithPadding>
                }
                nextLabel={
                  <NextLabelWithPadding>
                    <SvgIcon
                      svgName="icon-arrow-right"
                      size="14"
                      variant="cardItem"
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
          <CalendarLayout onClick={toggleCalendarVisibility}></CalendarLayout>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Calend;
