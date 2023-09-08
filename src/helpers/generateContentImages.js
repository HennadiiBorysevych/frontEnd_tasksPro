import { images } from 'constants';

export default function generateContentImages() {
  const { plates } = images;
  const contentImage = document.createElement('picture');

  plates.forEach(plate => {
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('srcSet', plate.src);
    sourceElement.setAttribute('type', plate.type);

    if (plate.dpi === 1) {
      sourceElement.setAttribute(
        'media',
        '(min-device-pixel-ratio: 1), (min-resolution: 96dpi), (min-resolution: 1dppx)'
      );
    } else if (plate.dpi === 2) {
      sourceElement.setAttribute(
        'media',
        '(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)'
      );
    } else if (plate.dpi === 3) {
      sourceElement.setAttribute(
        'media',
        '(min-device-pixel-ratio: 3), (min-resolution: 288dpi), (min-resolution: 3dppx)'
      );
    }

    contentImage.appendChild(sourceElement);
  });

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', plates[0].src);
  imgElement.setAttribute('alt', 'Plate');
  contentImage.appendChild(imgElement);

  return contentImage;
}

generateContentImages();
