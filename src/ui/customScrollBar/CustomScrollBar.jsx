import React, { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
import PropTypes from 'prop-types';
import { useAuthRedux } from 'redux/services';

import * as styles from './CustomScrollBar.styled';

const CustomScrollbar = ({ width, maxHeight, children, variantScroll }) => {
  const containerRef = useRef(null);
  const { theme } = useAuthRedux();

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
    });

    // Clean up the OverlayScrollbars instance when the component unmounts
    return () => {
      if (containerElement && containerElement.overlayScrollbars) {
        containerElement.overlayScrollbars().destroy();
      }
    };
  }, [theme]);

  return (
    <styles.CommonStyles
      ref={containerRef}
      style={{
        width,
        height: '100%',
        maxHeight,
        minHeight: '126px', //Округлённое значение: высота одной доски (61px) плюс два значения марджинов по макету (4*2=8)
      }}
      variantScroll={variantScroll}
    >
      <div>{children}</div>
    </styles.CommonStyles>
  );
};

export default CustomScrollbar;

CustomScrollbar.propTypes = {
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
};
