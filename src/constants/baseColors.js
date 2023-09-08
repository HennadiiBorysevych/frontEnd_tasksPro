import { alpha } from '@mui/material';

const generalColors = {
  whiteBase: '#ffffff',
  blackBase: '#161616',
  backdropBase: '#151515',
  accentGreenBase: '#bedbB0',
  accentVioletBase: '#5255bc',
  accentGreenHoverBase: '#9dc888',
  accentVioletHoverBase: '#7b7ede',
};

const authColors = {
  background: `linear-gradient(180deg, rgba(196, 196, 196, 0.00) 25%, ${generalColors.accentGreenBase} 92.19%)`,
  buttonBackground: generalColors.blackBase,
  buttonBackgroundSecondary: generalColors.whiteBase,
  form: generalColors.backdropBase,
  textPrimary: generalColors.blackBase,
  textSecondary: generalColors.whiteBase,
  textSecondaryDark: alpha(generalColors.whiteBase, 0.3),
};

const priorityColors = {
  default: alpha(generalColors.whiteBase, 0.3),
  low: '#8fa1d0',
  medium: '#e09cb5',
  high: generalColors.accentGreenBase,
};

const baseColors = {
  generalColors,
  authColors,
  priorityColors,
};

export default baseColors;
