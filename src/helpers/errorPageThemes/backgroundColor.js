export function checkBgColor(bgColor) {
  let color = '#161616';

  switch (bgColor) {
    case 'Dark':
      color = '#1F1F1F';
      break;
    case 'Light':
      color = '#FDFDFD';
      break;
    case 'Violet':
      color = '#D6D8FF';
      break;
    case 'Void':
      color = 'none';
      break;
    default:
      break;
  }
  return color;
}
