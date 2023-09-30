import { alpha } from '@mui/material';

import { BASE_COLORS } from 'constants';

import Typography from '../typography/Typography';

import styled from '@emotion/styled';

const { generalColors } = BASE_COLORS;

export const Container = styled.div(
  {
    position: 'relative',
    padding: '24px',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: `0px 4px 16px 0px ${alpha(generalColors.blackBase, 0.05)}`,
  },
  ({ variantForm, theme }) => ({
    backgroundColor: theme.palette.background.modal,
    border: `1px solid ${theme.palette.background.modalBorder}`,
    width: variantForm === 'passwordForm' && 335,

    [theme.breakpoints.up('medium')]: {
      padding: variantForm === 'passwordForm' && 40,
      width: variantForm === 'passwordForm' && 424,
    },
  })
);

export const CloseBtn = styled.button(({ variantForm }) => ({
  display: variantForm === 'passwordForm' && 'none',
  position: 'absolute',
  top: '14px',
  right: '14px',
  cursor: 'pointer',
}));

export const PopUpTitle = styled(Typography)(props => ({
  marginBottom: props.variantMarginBottom === 'passwordForm' ? '40px' : '24px',
}));
