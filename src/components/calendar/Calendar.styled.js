import { css } from '@emotion/react';

import styled from '@emotion/styled';

export const CalendarButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const DeadlineDay = styled.span(props => ({
  marginRight: '4px',
  color: props.theme.palette.accent.main,
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',
  display: 'block',
}));

export const BlockCalendar = styled.div(props => ({
  backgroundColor: props.theme.palette.background.calendar,
  padding: '18px',
  width: '233px',
  fontFamily: 'inherit',
  fontSize: '16px',
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

export const CalendarLayout = styled.span(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: props.theme.palette.background.backdrop,
  zIndex: 999,
}));

export const CommonStyles = styled.div(
  props => css`
    position: fixed;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    .react-calendar__navigation {
      height: 52px !important;

      &::after {
        all: unset;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${props.theme.palette.text.primaryDark};
        position: absolute;
        bottom: 14px;
      }
    }
    .react-calendar__navigation__label {
      color: ${props.theme.palette.text.primary};
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.32px;
    }
    &
      .react-calendar__month-view__weekdays__weekday
      .react-calendar__month-view__weekdays__weekday--weekend {
      align-items: center;
    }
    & .react-calendar__month-view__weekdays {
      color: ${props.theme.palette.text.primaryMedium};
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.28px;
      padding-bottom: 11px;
      display: flex;
      gap: 2px;

      overflow: hidden;
      text-underline-offset: 7px;
    }
    & .react-calendar__year-view .react-calendar__tile,
    & .react-calendar__decade-view .react-calendar__tile,
    & .react-calendar__century-view .react-calendar__tile {
      padding: 1em 0.5em;
    }
    & .react-calendar__month-view__days {
      color: ${props.theme.palette.text.primary};
      margin-left: -7px;
      margin-right: -7px;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${props.theme.palette.text.primaryDark};
    }
    & .react-calendar__tile {
      font-size: 14px;
      line-height: 1.29;
      font-weight: 400;
      letter-spacing: -0.28px;
      padding: 5px 7px;
      border: 0px;
    }
    .react-calendar__tile--active {
      background-color: ${props.theme.palette.accent.main};
      color: ${props.theme.palette.text.activeDay};
      border-radius: 50%;
    }
    .react-calendar__tile:hover {
      background-color: ${props.theme.palette.text.primaryDark};
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
