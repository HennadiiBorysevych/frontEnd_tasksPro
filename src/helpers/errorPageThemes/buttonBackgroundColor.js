export function checkBtnBgColor(btnBgColor) {
  let color = 'Void';

  switch (btnBgColor) {
    case 'Dark':
      color = '#BEDBB0';
      break;
    case 'Light':
      color = '#BEDBB0';
      break;
    case 'Violet':
      color = '#9747FF';
      break;
    case 'Void':
      color = '#161616';
      break;
    default:
  }
  return color;
}
