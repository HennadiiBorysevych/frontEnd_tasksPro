import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, AvatarBg } from './UserAvatar.styled';

const UserAvatar = ({ avatar, width = '68px', height = '68px', margin }) => {
  return (
    <Avatar margin={margin} width={width} height={height}>
      {avatar ? (
        <img src={avatar} alt="User Avatar" width={width} height={height} />
      ) : (
        <AvatarBg size={width} />
      )}
    </Avatar>
  );
};

UserAvatar.propTypes = {
  avatar: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default UserAvatar;
