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
  variantIcon,
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
        <SvgIcon svgName="icon-bell" size={16} variantIcon="cardItem" />
      )}
      {deadlineExpired && (
        <SvgIcon svgName="icon-bell" size={16} variantIcon="deadlineExpired" />
      )}
      <EditButton type="button" onClick={onClick} aria-label={ariaLabel}>
        <SvgIcon
          svgName="icon-pencil"
          size={16}
          variantIcon={variantIcon}
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
  variantIcon: PropTypes.string,
  isActive: PropTypes.bool,
  onDeleteAction: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  onToggle: PropTypes.func,
};
