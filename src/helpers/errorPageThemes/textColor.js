export function checkTxtColor(txtColor) {
  let color = '';

  switch (txtColor) {
    case 'Dark':
      color = '#FFFFFF';
      break;
    case 'Light':
      color = '#000000';
      break;
    case 'Violet':
      color = '#FFFFFF';
      break;
    default:
      break;
  }
  return color;
}
