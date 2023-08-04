import React from 'react';
import { useLocation } from 'react-router-dom';
import sprite from 'assets/images/sprite.svg';

  const Logo = () => {
    const location = useLocation();
    const isRegistrationRoute = location.pathname === ' api/auth/register ';
    const logoSize = isRegistrationRoute ? { width: 18, height: 24 } : { width: 12, height: 16 };

  return (
    <div>
      <svg width={logoSize.width} height={logoSize.height}>
        <use href={sprite + '#icon-icon'} fill="none" stroke="#000"></use>
      </svg>
    </div>
  );
};

export default Logo;
