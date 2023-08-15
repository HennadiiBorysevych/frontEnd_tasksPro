import React, { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

import 'overlayscrollbars/overlayscrollbars.css';
import './CustomScrollBar.css';

const CustomScrollbar = ({ width, maxHeight, children }) => {
  const containerRef = useRef(null);

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
            scrollbar.style.background = 'green';
          }
          // props.theme.palette.text.sidemenu
          // if (scrollbarVertical) {
          //   scrollbarVertical.style.background =
          //     props.theme.palette.text.sidemenu;
          // }
        },
      },
    });
    // Clean up the OverlayScrollbars instance when the component unmounts
    return () => {
      if (containerElement && containerElement.overlayScrollbars) {
        containerElement.overlayScrollbars().destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height: '100%',
        minHeight: '70px', //Округлённое значение: высота одной доски (61px) плюс два значения марджинов по макету (4*2=8)
        maxHeight,

        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default CustomScrollbar;
