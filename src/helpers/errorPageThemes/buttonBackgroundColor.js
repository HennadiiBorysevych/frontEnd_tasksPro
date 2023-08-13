export function checkBtnBgColor(btnBgColor) {
  let color = 'Void';

  switch (btnBgColor) {
    case 'Dark':
      color = '#BEDBB0';
      break;
    case 'light':
      color = '#BEDBB0';
      break;
    case 'violet':
      color = '#9747FF';
      break;
    case 'Void':
      color = '#161616';
    default:
      break;
  }
  return color;
}
