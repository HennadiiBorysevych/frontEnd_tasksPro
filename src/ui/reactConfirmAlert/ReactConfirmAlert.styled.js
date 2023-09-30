import { alpha } from '@mui/material';

import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

const { generalColors } = BASE_COLORS;

export const AlertContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  padding: '20px',
  borderRadius: '8px',
  backgroundColor:
    theme === 'Dark'
      ? generalColors.backdropBase
      : generalColors.foregroundLightBase,
  boxShadow: `0px 4px 16px 0px ${alpha(generalColors.blackBase, 0.5)}`,
  border:
    theme === 'Dark' &&
    `1px solid ${alpha(generalColors.accentGreenBase, 0.5)}`,
}));

export const AlertTitle = styled.h2(({ theme }) => ({
  color: theme === 'Dark' ? generalColors.whiteBase : generalColors.blackBase,
  marginBottom: '10px',
}));

export const AlertQuestion = styled.p(({ theme }) => ({
  color: theme === 'Dark' ? generalColors.whiteBase : generalColors.blackBase,
  marginBottom: '20px',
}));

export const ConfirmDialog = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 16px;
`;

export const CancelButton = styled.button(({ theme }) => ({
  backgroundColor:
    theme === 'Violet'
      ? generalColors.accentVioletBase
      : generalColors.accentGreenBase,
  color: theme === 'Violet' ? generalColors.whiteBase : generalColors.blackBase,
  padding: '10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor:
      theme === 'Violet'
        ? generalColors.accentVioletHoverBase
        : generalColors.accentGreenHoverBase,
  },
}));

export const ConfirmDeleteButton = styled.button`
  background-color: ${generalColors.attentionBase};
  color: ${generalColors.whiteBase};
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${generalColors.attentionHoverBase};
  }
`;

export const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
`;
