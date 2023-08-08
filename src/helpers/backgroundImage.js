// import React from 'react';
// import { Cloudinary } from '@cloudinary/url-gen';
// import { AdvancedImage, responsive } from '@cloudinary/react';

// export const backgroundImage = bg => {
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'dpjbgqovu',
//     },
//   });

//   const myImage = cld.image(`backgrounds/${bg}`);

//   const supportsWebp = (() => {
//     const elem = document.createElement('canvas');
//     return elem.toDataURL('image/webp').startsWith('data:image/webp');
//   })();

//   const imageFormat = supportsWebp ? 'webp' : 'jpg';
//   myImage.format(imageFormat);

//   const actualDPR = Math.min(window.devicePixelRatio, 3.0);

//   return (
//     <AdvancedImage
//       cldImg={myImage}
//       plugins={[
//         responsive({
//           steps: [376, 768, 1440],
//           breakpoints: {
//             '(min-width: 320px)': {
//               transformation: { dpr: actualDPR },
//             },
//           },
//         }),
//       ]}
//     />
//   );
// };

import { Cloudinary } from '@cloudinary/url-gen';
import { dpr } from '@cloudinary/url-gen/actions/delivery';
import { fill } from '@cloudinary/url-gen/actions/resize';

export const backgroundImage = bg => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dpjbgqovu',
    },
  });

  const supportsWebp = (() => {
    const elem = document.createElement('canvas');
    return elem.toDataURL('image/webp').startsWith('data:image/webp');
  })();

  const imageFormat = supportsWebp ? 'webp' : 'jpg';

  const myImage = cld.image(`backgrounds/${bg}`);

  myImage
    .resize(fill(window.innerWidth, window.innerHeight))
    .delivery(dpr(Math.min(window.devicePixelRatio, 3.0).toFixed(1)));

  const imageUrl = myImage.format(imageFormat).toURL();

  return imageUrl;
};
