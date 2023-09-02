import { css } from '@emotion/react';

import styled from '@emotion/styled';

export const TextWithGap = styled.span(props => ({
  marginRight: '4px',
  color: props.theme.calendar.senseColor,
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.28px',
}));

export const BlockCalendar = styled.div(props => ({
  backgroundColor: props.theme.calendar.backColor,
  padding: '18px',
  width: '233px',
  fontFamily: 'Poppins, Arial, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.32px',
  borderRadius: '8px',
}));

export const PrevLabelWithPadding = styled.span({
  marginLeft: '-5px',
});
export const NextLabelWithPadding = styled.span({
  marginRight: '-5px',
});
export const DownWithPadding = styled.span({
  paddingTop: '5px',
});
export const CalendarWrapper = styled.span({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const CalendarLayout = styled.span({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
});

export const CommonStyles = styled.div(
  props => css`
    position: fixed;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    .react-calendar__navigation__label {
      color: ${props.theme.calendar.color};
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
      color: ${props.theme.calendar.weekColor};
      font-family: 'Poppins', Arial, sans-serif;
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
      color: ${props.theme.calendar.color};
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
      color: ${props.theme.calendar.disColor};
    }
    .react-calendar__tile--active {
      background-color: ${props.theme.calendar.senseColor};
      color: ${props.theme.calendar.activeColor};
      border-radius: 50%;
    }
    .react-calendar__tile:hover {
      background-color: ${props.theme.calendar.hovColor};
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
  `
);
