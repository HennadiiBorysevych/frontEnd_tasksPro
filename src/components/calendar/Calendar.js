import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { SvgIcon } from 'components';

const CustomCalendar = styled(Calendar)`
  color: #ffffff;
  background-color: #1f1f1f;
  padding-top: 5px;
  width: 233px;
  height: 254px;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;

  & .react-calendar__navigation::after {
    all: unset;
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background-color: white;
    opacity: 0.2;
    position: absolute;
    bottom: 14px;
    left: 18;
  }

  & .react-calendar__month-view__weekdays {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 11px;

    text-decoration: underline;
    text-decoration-color: black;
    overflow: hidden;
    line-height: 0.83;
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
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    padding-bottom: 5px;
    padding-top: 5px;
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

  .react-calendar__tile--now,
  .react-calendar__tile--active {
    background-color: #bedbb0;
    border-radius: 50%;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    padding-left: 18px;
    padding-right: 18px;
    position: relative;
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    cursor: pointer;
    width: 4px;
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
    padding-top: 5px;
  `;
  const NextLabelWithPadding = styled.div`
    padding-top: 5px;
  `;
  const DownWithPadding = styled.div`
    padding-top: 15px;
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
                : 'Selected Date: '}

              {selectedDate.toLocaleDateString()}
            </TextWithGap>
            <DownWithPadding>
              <SvgIcon svgName="arrow-down" stroke="#FFF" size="28" />
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
                  <SvgIcon svgName="arrow-left" size="28" />
                </PrevLabelWithPadding>
              }
              nextLabel={
                <NextLabelWithPadding>
                  <SvgIcon svgName="arrow-right" stroke="#FFF" size="28" />
                </NextLabelWithPadding>
              }
              showYearDropdown={false}
              locale="en-US"
              calendarType="US"
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
