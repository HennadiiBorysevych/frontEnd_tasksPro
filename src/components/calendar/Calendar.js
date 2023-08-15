import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
// import 'react-calendar/dist/Calendar.css';
import { ThemeProvider } from '@emotion/react';
import { selectTheme } from 'redux/auth/authSelectors';

import { SvgIcon } from 'components';

import styled from '@emotion/styled';

const senseColorValues = {
  Dark: '#bedbb0',
  Light: '#bedbb0',
  Violet: '#5255BC',
  default: '#bedbb0',
};
const colorValues = {
  Dark: '#FFF',
  Light: '#161616',
  Violet: '#161616',
  default: '#FFF',
};
const backColorValues = {
  Dark: '#1f1f1f',
  Light: '#FFF',
  Violet: '#FFF',
  default: '#1f1f1f',
};
const weekColorValues = {
  Dark: 'rgba(255, 255, 255, 0.5)',
  Light: 'rgba(22, 22, 22, 0.50)',
  Violet: 'rgba(22, 22, 22, 0.50)',
  default: 'rgba(255, 255, 255, 0.5)',
};
const disColorValues = {
  Dark: 'rgba(255, 255, 255, 0.5)',
  Light: 'rgba(22, 22, 22, 0.50)',
  Violet: 'rgba(22, 22, 22, 0.50)',
  default: 'rgba(255, 255, 255, 0.5)',
};
const hovColorValues = {
  Dark: 'rgba(255, 255, 255, 0.2)',
  Light: 'rgba(22, 22, 22, 0.2)',
  Violet: 'rgba(22, 22, 22, 0.2)',
  default: 'rgba(255, 255, 255, 0.2)',
};

const Calend = ({ selectedDate, setSelectedDate }) => {
  const selectedTheme = useSelector(selectTheme);

  const senseColor =
    senseColorValues[selectedTheme] || senseColorValues.default;
  const color = colorValues[selectedTheme] || colorValues.default;
  const backColor = backColorValues[selectedTheme] || backColorValues.default;
  const weekColor = weekColorValues[selectedTheme] || weekColorValues.default;
  const disColor = disColorValues[selectedTheme] || disColorValues.default;
  const hovColor = hovColorValues[selectedTheme] || hovColorValues.default;

  const CustomCalendar = styled(Calendar)`
    background-color: ${backColor};
    padding: 18px;
    width: 233px;
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    border-radius: 8px;

    .react-calendar__navigation__label {
      color: ${color};
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
      width: 100%;
      height: 1px;
      background-color: white;
      opacity: 0.2;
      position: absolute;
      bottom: 14px;
    }

    &
      .react-calendar__month-view__weekdays__weekday
      react-calendar__month-view__weekdays__weekday--weekend {
      align-items: center;
    }

    & .react-calendar__month-view__weekdays {
      color: ${weekColor};
      font-family: 'Poppins', Arial, sans-serif;
      /* margin-left: -5px;
      padding-right: 10px; */
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.28px;
      padding-bottom: 11px;
      display: flex;
      gap: 2px;
      text-decoration: underline;
      text-decoration-color: black;
      overflow: hidden;
      text-underline-offset: 7px;
    }

    & .react-calendar__year-view .react-calendar__tile,
    & .react-calendar__decade-view .react-calendar__tile,
    & .react-calendar__century-view .react-calendar__tile {
      padding: 1em 0.5em;
    }

    & .react-calendar__month-view__days {
      margin-left: -7px;
      margin-right: -7px;
    }

    & .react-calendar__tile {
      color: ${color};
      font-family: 'Poppins', Arial, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.28px;
      padding: 5px 7px;
      border: 0px;
    }

    .react-calendar__tile:disabled {
      color: ${disColor};
    }

    & .react-calendar__tile--active {
      background-color: blue;
      border-radius: 50%;
    }

    .react-calendar__tile:hover {
      background-color: ${hovColor};
      border-radius: 50%;
    }

    .react-calendar__tile--active {
      background-color: ${senseColor};
      border-radius: 50%;
    }

    .react-calendar__navigation {
      display: flex;
      justify-content: space-between;
      height: 46px;
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
    color: ${senseColor};
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  `;

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
          <div
            style={{
              position: 'fixed',
              top: '65%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
            }}
          >
            <CustomCalendar
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
          </div>
        )}

        {isCalendarVisible && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
            onClick={toggleCalendarVisibility}
          ></div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Calend;
