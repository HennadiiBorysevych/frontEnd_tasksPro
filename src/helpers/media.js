import { css } from '@emotion/react';
import { breakpoints } from 'constants';

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  acc[`${label}`] = (first, ...interpolations) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(first, ...interpolations)};
    }
  `;

  return acc;
}, {});

export default media;
