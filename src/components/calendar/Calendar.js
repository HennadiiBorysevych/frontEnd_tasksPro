import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { ThemeProvider } from '@emotion/react';

import { SvgIcon } from 'components';

import styled from '@emotion/styled';

const CustomCalendar = styled(Calendar)`
  color: #ffffff;
  background-color: #1f1f1f;
  padding-top: 18px;
  padding-bottom: 18px;
  width: 233px;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  border-radius: 8px;

  .react-calendar__navigation__label {
    color: white;
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  & .react-calendar__navigation::after {
    all: unset;
    content: '';
    display: block;
    width: 195px;
    height: 1px;
    background-color: white;
    opacity: 0.2;
    position: absolute;
    bottom: 14px;
    padding-left: 10px;
  }

  & .react-calendar__month-view__weekdays {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    padding-left: 18px;
    padding-right: 4px;
    padding-bottom: 11px;
    display: flex;
    text-decoration: underline;
    text-decoration-color: black;
    overflow: hidden;

    text-underline-offset: 5px;
  }

  & .react-calendar__year-view .react-calendar__tile,
  & .react-calendar__decade-view .react-calendar__tile,
  & .react-calendar__century-view .react-calendar__tile {
    padding: 1em 0.5em;
  }

  & .react-calendar__month-view__days {
    padding-left: 10px;
    padding-right: 10px;
  }

  & .react-calendar__tile {
    color: #fff;
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    padding-bottom: 5px;
    padding-top: 5px;
    border: 0px;
  }

  .react-calendar__tile:disabled {
    color: rgba(255, 255, 255, 0.2);
  }

  & .react-calendar__tile--active {
    background-color: blue;
    border-radius: 50%;
  }

  .react-calendar__tile:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .react-calendar__tile--active {
    background-color: #bedbb0;
    border-radius: 50%;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    height: 44px;
    padding-left: 14px;
    padding-right: 14px;
    position: relative;
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    cursor: pointer;
    width: 14px;
    height: 8px;
    flex-shrink: 0;
  }

  .react-calendar__navigation button:disabled {
    stroke-opacity: 0.2;
  }
`;

const Calend = () => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + 5);

  const [selectedDate, setSelectedDate] = useState(today);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const handleDateChange = date => {
    setSelectedDate(date);
  };

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

    if (date.toDateString() === today.toDateString()) {
      return 'react-calendar__tile--today';
    }
    return null;
  };
  const PrevLabelWithPadding = styled.div`
    margin-left: -5px;
  `;
  const NextLabelWithPadding = styled.div`
    margin-right: -5px;
  `;
  const DownWithPadding = styled.div`
    padding-top: 5px;
  `;
  const CalendarWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `;

  const TextWithGap = styled.span`
    margin-right: 4px;
    color: #bedbb0;
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  `;

  return (
    <ThemeProvider theme={{}}>
      <>
        <div>
          <CalendarWrapper onClick={toggleCalendarVisibility}>
            <TextWithGap>
              {selectedDate.toDateString() === today.toDateString()
                ? 'Today, '
                : ''}{' '}
              {formatSelectedDate(selectedDate)}
            </TextWithGap>
            <DownWithPadding>
              <SvgIcon svgName="icon-arrow-down" stroke="#bedbb0" size="18" />
            </DownWithPadding>
          </CalendarWrapper>

          {isCalendarVisible && (
            <CustomCalendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={today}
              maxDate={futureDate}
              formatShortWeekday={formatShortWeekday}
              prev2Label={null}
              next2Label={null}
              prevLabel={
                <PrevLabelWithPadding>
                  <SvgIcon svgName="icon-arrow-left" size="10" />
                </PrevLabelWithPadding>
              }
              nextLabel={
                <NextLabelWithPadding>
                  <SvgIcon svgName="icon-arrow-right" stroke="#FFF" size="10" />
                </NextLabelWithPadding>
              }
              showYearDropdown={false}
              locale="en-US"
              calendarType="gregory"
              defaultView="month"
              onClickDay={handleDayClick}
              tileClassName={tileClassName}
            />
          )}
        </div>
      </>
    </ThemeProvider>
  );
};

export default Calend;
