import styled from '@emotion/styled/macro';

import { getPriorityColor } from 'helpers';

export const PriorityList = styled.ul(({ variant }) => ({
  marginTop: '4px',
  display: 'flex',
  flexDirection: variant === 'Filters' && 'column',
  gap: '8px',
}));

export const PriorityItem = styled.li(({ variant }) => ({
  width: variant === 'Filters' ? '100%' : '14px',
  height: variant === 'Filters' ? '100%' : '14px',
}));

export const Radio = styled.input(props => ({
  position: props.value === 'showAll' ? 'absolute' : 'relative',
  visibility: 'hidden',
  cursor: 'pointer',
  display: 'block',
  width: props.value === 'showAll' ? '1px' : '14px',
  height: props.value === 'showAll' ? '1px' : '14px',
  margin: props.value === 'showAll' ? '-1px' : 0,
  border: 0,
  padding: 0,
  whiteSpace: 'nowrap',
  clipPath: props.value === 'showAll' && 'inset(100%)',
  clip: props.value === 'showAll' && 'rect(0 0 0 0)',
  overflow: props.value === 'showAll' && 'hidden',

  ...(props.value !== 'showAll' && {
    '&::after': {
      visibility: 'visible',
      top: 0,
      left: 0,
      zIndex: 10,
      position: 'absolute',
      content: "''",
      borderRadius: '50%',
      display: 'block',
      width: '14px',
      height: '14px',
      backgroundColor:
        props.value === 'Without'
          ? props.theme.palette.background.withoutPriorityBackground
          : getPriorityColor(props.value),
    },
    '&:checked': {
      '&::after': {
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        content: "''",
        borderRadius: '50%',
        display: 'block',
        width: '9px',
        height: '9px',
        padding: 0,
      },

      '&:checked': {
        '&::before': {
          visibility: 'visible',
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          content: "''",
          borderRadius: '50%',
          width: '14px',
          height: '14px',
          outline: '1px solid',
          backgroundColor: 'transparent',
          outlineColor:
            props.value === 'Without'
              ? props.theme.palette.background.withoutPriorityBackground
              : getPriorityColor(props.value),
        },
      },
    },
  }),
}));

export const LabelSubtitle = styled.span(props => ({
  color: props.theme.palette.text.primaryMedium,
  fontSize: '12px',
  letterSpacing: '-0.24px',
}));

export const Label = styled.label(props => ({
  position: props.value === 'showAll' ? 'absolute' : 'static',
  top: props.value === 'showAll' && '10px',
  right: props.value === 'showAll' && 0,
  textDecoration: props.value === 'showAll' && 'underline',
  textDecorationColor:
    props.value === 'showAll' && props.theme.palette.text.primaryMedium,

  ...(props.value !== 'showAll' && {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }),
  cursor: 'pointer',

  '&:hover': {
    textDecorationColor:
      props.value === 'showAll' && props.theme.palette.accent.main,
    [LabelSubtitle]: {
      color: props.theme.palette.accent.main,
    },
  },
}));
