export function checkBgColor(bgColor) {
  let color = '#161616';

  switch (bgColor) {
    case '#1F1F1F':
      color = bgColor;
      break;
    case '#F6F6F7':
      color = bgColor;
      break;
    case '#ECEDFD':
      color = bgColor;
      break;

    default:
      color = 'none';

      break;
  }
  return color;
}
