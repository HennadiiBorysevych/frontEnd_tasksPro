export function checkBgImg(bgImg) {
  let img = '';

  switch (bgImg) {
    case 'Void':
      img = '--welcomeBgColor';
      break;
    default:
      img = 'none';
      break;
  }

  console.log(bgImg);
  return img;
}
