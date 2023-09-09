import React, { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
import PropTypes from 'prop-types';

import { useAuth } from 'hooks';

import 'overlayscrollbars/overlayscrollbars.css';
import { CommonStyles } from './CustomScrollBar.styled';

const CustomScrollbar = ({ width, maxHeight, children }) => {
  const containerRef = useRef(null);
  const { theme } = useAuth();

  useEffect(() => {
    const containerElement = containerRef.current;
    OverlayScrollbars(containerElement, {
      scrollbars: {
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 500,
        dragScrolling: true,
        clickScrolling: false,
        touchSupport: true,
      },
      callbacks: {
        onInitialized: () => {
          const scrollbar = containerElement.querySelector(
            '.os-scrollbar-horizontal'
          );
          if (scrollbar) {
            scrollbar.style.width = '18px';
            scrollbar.style.height = '18px';
          }
        },
      },
    });

    // Clean up the OverlayScrollbars instance when the component unmounts
    return () => {
      if (containerElement && containerElement.overlayScrollbars) {
        containerElement.overlayScrollbars().destroy();
      }
    };
  }, [theme]);

  return (
    <CommonStyles
      ref={containerRef}
      style={{
        width,
        height: '100%',
        minHeight: '126px', //Округлённое значение: высота одной доски (61px) плюс два значения марджинов по макету (4*2=8)
        maxHeight,
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </CommonStyles>
  );
};

export default CustomScrollbar;

CustomScrollbar.propTypes = {
  width: PropTypes.string,
  maxHeight: PropTypes.string,
};
