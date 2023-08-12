import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = event => setMatches(event.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}

export function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery('(max-width: 374px)'),
    isSm: useMediaQuery('(min-width: 375px) and (max-width: 767px)'),
    isMd: useMediaQuery('(min-width: 768px) and (max-width: 1439px)'),
    isLg: useMediaQuery('(min-width: 1440px)'),
    active: 'xs',
  };
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  return breakpoints;
}
