import styled from '@emotion/styled/macro';

import { BASE_COLORS } from 'constants';

import { SvgIcon } from 'ui';

const { generalColors } = BASE_COLORS;

export const Container = styled.div`
  position: relative;
`;

export const FiltersIcon = styled(SvgIcon)(props => ({
  filter: `drop-shadow(1px 0 1px ${props.theme.palette.text.shadowColor})`,
}));

export const FiltersTitle = styled.p(props => ({
  textShadow: `0.5px 0 3px ${props.theme.palette.text.shadowColor}`,
  color: props.theme.palette.text.primaryLight,
  fontWeight: 500,
  letterSpacing: '-0.28px',
  fontSize: '14px',
}));

export const FiltersButton = styled.button(props => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  [FiltersIcon]: {
    fill: props.isOpen ? generalColors.whiteBase : null,
  },

  '&:hover': {
    [FiltersTitle]: {
      color: props.theme.palette.accent.light,
    },
    [FiltersIcon]: {
      stroke: props.theme.palette.accent.light,
    },
  },
}));

export const FilterContainer = styled.div(
  {
    position: 'absolute',
    top: '100%',
    right: 0,
    zIndex: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  props => ({
    [props.theme.breakpoints.down('small')]: {
      maxWidth: '300px',
    },
    [props.theme.breakpoints.up('small')]: {
      width: '300px',
    },
  })
);

export const FilterWrapper = styled.div`
  position: relative;
`;

export const Line = styled.div(props => ({
  position: 'relative',
  marginBottom: '14px',

  '&::before': {
    content: "''",
    display: 'block',
    marginBottom: '14px',
    width: '252px',
    border: `1px solid ${props.theme.palette.background.lineBefore}`,
  },
}));

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelsTitle = styled.p(props => ({
  color: props.theme.palette.text.primary,
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.25,
  letterSpacing: '-0.28px',
}));
