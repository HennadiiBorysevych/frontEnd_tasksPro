import React from 'react';
import { useAuthRedux } from 'redux/services';

import ReactConfirmAlert from '../reactConfirmAlert/ReactConfirmAlert';
import SvgIcon from '../svgIcon/SvgIcon';

import ControlIconsPropTypes from './propTypes';

import * as styles from './ControlIcons.styled';

const ControlIcons = ({
  deadlineToday,
  deadlineExpired,
  onClick,
  ariaLabel,
  variantIcon,
  isActive,
  onDeleteAction,
  item,
  owner,
  ownerId,
  onToggle,
}) => {
  const { theme } = useAuthRedux();

  const renderIcon = iconVariant => {
    return <SvgIcon svgName="icon-bell" size={16} variantIcon={iconVariant} />;
  };

  return (
    <styles.IconsContainer owner={owner}>
      {deadlineToday && renderIcon('cardItem')}
      {deadlineExpired && renderIcon('deadlineExpired')}
      <styles.EditButton type="button" onClick={onClick} aria-label={ariaLabel}>
        <SvgIcon
          svgName="icon-pencil"
          size={16}
          variantIcon={variantIcon}
          isActive={isActive}
        />
      </styles.EditButton>
      <ReactConfirmAlert
        selectedTheme={theme}
        onDeleteAction={onDeleteAction}
        item={item}
        owner={owner}
        ownerId={ownerId}
        onToggle={onToggle}
      />
    </styles.IconsContainer>
  );
};

export default ControlIcons;

ControlIcons.propTypes = ControlIconsPropTypes;
