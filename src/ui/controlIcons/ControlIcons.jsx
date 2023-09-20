import React from 'react';
import PropTypes from 'prop-types';

import { useAuthCollector } from 'hooks';

import ReactConfirmAlert from '../reactConfirmAlert/ReactConfirmAlert';
import SvgIcon from '../svgIcon/SvgIcon';

import { EditButton, IconsContainer } from './ControlIcons.styled';

const ControlIcons = ({
  deadlineToday,
  deadlineExpired,
  onClick,
  ariaLabel,
  variant,
  isActive,
  onDeleteAction,
  item,
  owner,
  ownerId,
  onToggle,
}) => {
  const { theme } = useAuthCollector();

  return (
    <IconsContainer owner={owner}>
      {deadlineToday && (
        <SvgIcon svgName="icon-bell" size={16} variant="cardItem" />
      )}
      {deadlineExpired && (
        <SvgIcon svgName="icon-bell" size={16} variant="deadlineExpired" />
      )}
      <EditButton type="button" onClick={onClick} aria-label={ariaLabel}>
        <SvgIcon
          svgName="icon-pencil"
          size={16}
          variant={variant}
          isActive={isActive}
        />
      </EditButton>
      <ReactConfirmAlert
        selectedTheme={theme}
        onDeleteAction={onDeleteAction}
        item={item}
        owner={owner}
        ownerId={ownerId}
        onToggle={onToggle}
      />
    </IconsContainer>
  );
};

export default ControlIcons;

ControlIcons.propTypes = {
  deadlineToday: PropTypes.bool,
  deadlineExpired: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  variant: PropTypes.string,
  isActive: PropTypes.bool,
  onDeleteAction: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  onToggle: PropTypes.func,
};
