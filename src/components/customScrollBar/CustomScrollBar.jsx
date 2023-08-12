import React, { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

import 'overlayscrollbars/overlayscrollbars.css';
import './CustomScrollBar.css';

const CustomScrollbar = ({ width, height, children }) => {
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
          }
        },
      },
    });
    // const scrollbarHorizontal = containerElement.querySelector(
    //   '.os-scrollbar-horizontal'
    // );
    // const scrollbarVertical = containerElement.querySelector(
    //   '.os-scrollbar-vertical'
    // );

    // if (scrollbarHorizontal) {
    //   scrollbarHorizontal.style.background = '#b9b91d';
    // }

    // if (scrollbarVertical) {
    //   scrollbarVertical.style.background = '#724aad';
    // }
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
        // height: "300px",
        // paddingRight: '16px',
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default CustomScrollbar;
