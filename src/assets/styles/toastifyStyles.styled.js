import { ToastContainer } from 'react-toastify';

import { baseColors } from 'constants';

import styled from '@emotion/styled';

const { generalColors } = baseColors;

export const StyledContainer = styled(ToastContainer)(({ theme }) => ({
  '&&&.Toastify__toast-container': {
    borderRadius: '10px',
  },
  '.Toastify__toast': {
    backgroundColor:
      theme === 'Violet'
        ? generalColors.accentVioletBase
        : theme === 'Light'
        ? generalColors.accentGreenBase
        : generalColors.whiteBase,
    color:
      theme === 'Violet' ? generalColors.whiteBase : generalColors.blackBase,
  },
  '.Toastify__toast-icon > svg': {
    fill:
      theme === 'Violet' ? generalColors.whiteBase : generalColors.blackBase,
  },
  '.Toastify__close-button': {
    backgroundColor: 'transparent',
  },

  '.Toastify__close-button > svg': {
    fill:
      theme === 'Violet'
        ? `${generalColors.whiteBase} !important`
        : `${generalColors.blackBase} !important`,
  },
  '.Toastify__progress-bar--success': {
    backgroundColor:
      theme === 'Violet'
        ? `${generalColors.whiteBase}`
        : `${generalColors.accentGreenBase}`, // '#07bc0c'
  },
  '.Toastify__progress-bar--error': {
    backgroundColor: '#e74c3c',
  },
}));
