export default function generateContentImages(
  images,
  devicePixelRatio,
  preferredType
) {
  const sortedImages = [...images].sort((a, b) => {
    if (b.dpi !== a.dpi) {
      return b.dpi - a.dpi;
    } else if (a.type === preferredType) {
      return -1;
    } else if (b.type === preferredType) {
      return 1;
    }
    return 0;
  });

  for (const image of sortedImages) {
    if (devicePixelRatio >= image.dpi) {
      return image;
    }
  }
  return sortedImages[sortedImages.length - 1];
}
